import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCoffee } from "../context/CoffeeContext";

const Container = styled.div`
  padding: 4rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  padding: 1.8rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;

const IngName = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const IngDesc = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
`;

const TagGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 1.2rem;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.colors.lightBg};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: 500;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const Price = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const ViewBtn = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 0.85rem;
  font-weight: 500;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const IngredientsPage = () => {
  const { ingredients, formatPrice } = useCoffee();

  return (
    <Container>
      <Header>
        <Title>Ingredients Catalog</Title>
        <Subtitle>Discover the individual components crafted into our beverages.</Subtitle>
      </Header>
      <Grid>
        {ingredients.map((ing) => (
          <Card key={ing.id}>
            <div>
              <IngName>{ing.name}</IngName>
              <IngDesc>{ing.description}</IngDesc>
              <TagGroup>
                <Tag>{ing.strength}</Tag>
                <Tag>{ing.flavor}</Tag>
              </TagGroup>
            </div>
            <CardFooter>
              <Price>{formatPrice(ing.price)}</Price>
              <ViewBtn to={`/ingredients/${ing.id}`}>Details</ViewBtn>
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default IngredientsPage;