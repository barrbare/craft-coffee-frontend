import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import { useCoffee } from "../context/CoffeeContext";

const Container = styled.div`
  padding: 4rem;
  max-width: 1000px;
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

const DetailWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  background: ${({ theme }) => theme.colors.cardBg};
  padding: 2.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.soft};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  height: 380px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const MetaList = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 1.2rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h4`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const IngredientsList = styled.ul`
  list-style: none;
  margin-bottom: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const IngredientTag = styled.li`
  background: ${({ theme }) => theme.colors.lightBg};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 0.4rem 0.8rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 0.85rem;
  font-weight: 500;
`;

const PriceTag = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const CoffeeDetailPage = () => {
  const { id } = useParams();
  const { coffees, ingredients, calculateTotalPriceGEL, formatPrice, loading } = useCoffee();

  const coffee = coffees.find((c) => c.id === id || c._id === id);

  if (loading) {
    return <Container><h2>Loading...</h2></Container>;
  }

  if (!coffee) {
    return (
      <Container>
        <h2>Coffee not found</h2>
        <BackButton to="/menu">Back to Menu</BackButton>
      </Container>
    );
  }

  const priceGEL = calculateTotalPriceGEL(coffee.ingredients);

  const selectedIngredients = (coffee.ingredients || [])
    .map((ingId) => ingredients.find((i) => i.id === ingId || i._id === ingId))
    .filter(Boolean);

  return (
    <Container>
      <BackButton to="/menu">
        <FiArrowLeft /> Back to Menu
      </BackButton>
      <DetailWrapper>
        <ImageBox>
          <img
            src={
              coffee.image ||
              "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600"
            }
            alt={coffee.title}
          />
        </ImageBox>
        <InfoBox>
          <Title>{coffee.title}</Title>
          <MetaList>
            <span>Origin: {coffee.country}</span>
            <span>Caffeine: {coffee.caffeine}</span>
          </MetaList>
          <Description>{coffee.description}</Description>

          <SectionTitle>Included Ingredients:</SectionTitle>
          <IngredientsList>
            {selectedIngredients.map((ing) => (
              <IngredientTag key={ing.id || ing._id}>
                {ing.name} (+{formatPrice(ing.price)})
              </IngredientTag>
            ))}
          </IngredientsList>

          <PriceTag>{formatPrice(priceGEL)}</PriceTag>
        </InfoBox>
      </DetailWrapper>
    </Container>
  );
};

export default CoffeeDetailPage;