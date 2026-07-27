import React, { createContext, useContext, useState, useEffect } from "react";

const CoffeeContext = createContext();

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api/v1/resource";
const BYPASS_TOKEN = import.meta.env.VITE_BYPASS_TOKEN || "YXBpS2V5U2VjcmV0";

const headers = {
  "Content-Type": "application/json",
  "x-bypass-token": BYPASS_TOKEN,
};

export const CoffeeProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currency, setCurrency] = useState("GEL");
  const [exchangeRate, setExchangeRate] = useState(0.37);

  const fetchData = async () => {
    try {
      setLoading(true);

      const [ingRes, cofRes] = await Promise.all([
        fetch(`${API_URL}/craft_coffee_ingredients`, { headers }),
        fetch(`${API_URL}/craft_coffee_items`, { headers })
      ]);

      if (ingRes.ok) {
        const ingData = await ingRes.json();
        setIngredients(ingData.data || []);
      }

      if (cofRes.ok) {
        const cofData = await cofRes.json();
        setCoffees(cofData.data || []);
      }
    } catch (error) {
      console.error("Error fetching data from local API:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const response = await fetch("https://bankofgeorgia.ge/api/currencies/convert/GEL/USD?amountFrom=1");
        if (response.ok) {
          const data = await response.json();
          if (data && data.amountTo) {
            setExchangeRate(data.amountTo);
          }
        }
      } catch (error) {
        console.error("Failed to fetch exchange rate:", error);
      }
    };
    fetchRate();
  }, []);

  const calculateTotalPriceGEL = (ingredientIds) => {
    if (!ingredientIds || !Array.isArray(ingredientIds)) return 2;
    const ingredientsSum = ingredientIds.reduce((sum, ingId) => {
      const found = ingredients.find((i) => i.id === ingId || i._id === ingId);
      return sum + (found ? Number(found.price) : 0);
    }, 0);
    return 2 + ingredientsSum;
  };

  const formatPrice = (priceInGEL) => {
    if (currency === "USD") {
      const usdPrice = priceInGEL * exchangeRate;
      return `$${usdPrice.toFixed(2)}`;
    }
    return `${priceInGEL.toFixed(2)} ₾`;
  };

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === "GEL" ? "USD" : "GEL"));
  };

  return (
    <CoffeeContext.Provider
      value={{
        ingredients,
        coffees,
        loading,
        currency,
        toggleCurrency,
        calculateTotalPriceGEL,
        formatPrice,
        refreshData: fetchData,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};

export const useCoffee = () => useContext(CoffeeContext);