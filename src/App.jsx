import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { CoffeeProvider } from "./context/CoffeeContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import CoffeeDetailPage from "./pages/CoffeeDetailPage";
import IngredientsPage from "./pages/IngredientsPage";
import IngredientDetailPage from "./pages/IngredientDetailPage";

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CoffeeProvider>
        <BrowserRouter>
          <AppLayout>
            <Navbar />
            <MainContent>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/coffee/:id" element={<CoffeeDetailPage />} />
                <Route path="/ingredients" element={<IngredientsPage />} />
                <Route path="/ingredients/:id" element={<IngredientDetailPage />} />
              </Routes>
            </MainContent>
            <Footer />
          </AppLayout>
        </BrowserRouter>
      </CoffeeProvider>
    </ThemeProvider>
  );
}

export default App;