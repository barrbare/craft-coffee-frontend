import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import { useCoffee } from "../context/CoffeeContext";

const Container = styled.div`
  padding: 4rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 500;
  margin-bottom: 2rem;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  padding: 3rem;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background: ${({ theme }) => theme.colors.lightBg};
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;

  span.label {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 0.3rem;
  }

  span.value {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const IngredientDetailPage = () => {
  const { id } = useParams();
  const { ingredients, formatPrice, loading } = useCoffee();

  const ing = ingredients.find((i) => i.id === id || i._id === id);

  if (loading) {
    return <Container><h2>Loading...</h2></Container>;
  }

  if (!ing) {
    return (
      <Container>
        <h2>Ingredient not found</h2>
        <BackButton to="/ingredients">Back to Catalog</BackButton>
      </Container>
    );
  }

  return (
    <Container>
      <BackButton to="/ingredients">
        <FiArrowLeft /> Back to Ingredients
      </BackButton>
      <Card>
        <Title>{ing.name}</Title>
        <Description>{ing.description}</Description>
        <InfoGrid>
          <InfoItem>
            <span className="label">Unit Price</span>
            <span className="value">{formatPrice(ing.price)}</span>
          </InfoItem>
          <InfoItem>
            <span className="label">Strength</span>
            <span className="value">{ing.strength}</span>
          </InfoItem>
          <InfoItem>
            <span className="label">Flavor Profile</span>
            <span className="value">{ing.flavor}</span>
          </InfoItem>
        </InfoGrid>
      </Card>
    </Container>
  );
};

export default IngredientDetailPage;