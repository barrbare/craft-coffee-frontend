import React, { useState } from "react";
import styled from "styled-components";
import CoffeeCard from "../components/CoffeeCard/CoffeeCard";
import { FiSearch } from "react-icons/fi";
import { useCoffee } from "../context/CoffeeContext";

const MenuContainer = styled.div`
  padding: 4rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const PageSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;
  margin: 2rem auto 0;
  background: ${({ theme }) => theme.colors.cardBg};
  padding: 0.8rem 1.2rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.soft};

  svg {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-right: 0.8rem;
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 1rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const NoResults = styled.p`
  text-align: center;
  grid-column: 1 / -1;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 3rem 0;
`;

const MenuPage = () => {
  const { coffees } = useCoffee();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCoffee = coffees.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MenuContainer>
      <HeaderSection>
        <PageTitle>Our Craft Coffee Menu</PageTitle>
        <PageSubtitle>Explore handcrafted beverages made with calculated perfection.</PageSubtitle>
        <SearchContainer>
          <FiSearch />
          <SearchInput
            type="text"
            placeholder="Search coffee by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
      </HeaderSection>

      <Grid>
        {filteredCoffee.length > 0 ? (
          filteredCoffee.map((coffee) => (
            <CoffeeCard key={coffee.id} {...coffee} />
          ))
        ) : (
          <NoResults>No coffee found matching your search.</NoResults>
        )}
      </Grid>
    </MenuContainer>
  );
};

export default MenuPage;