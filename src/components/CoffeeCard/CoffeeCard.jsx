import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  transition: ${({ theme }) => theme.transitions.default};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  overflow: hidden;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: ${({ theme }) => theme.transitions.default};
  }

  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

const Title = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.2rem;
  flex-grow: 1;
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

const DetailsButton = styled(Link)`
  padding: 0.6rem 1.2rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 0.875rem;
  font-weight: 500;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const CoffeeCard = ({ id, name, description, price, image }) => {
  return (
    <Card>
      <ImageContainer>
        <img src={image || "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600"} alt={name} />
      </ImageContainer>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <CardFooter>
        <Price>${price}</Price>
        <DetailsButton to={`/coffee/${id}`}>View Details</DetailsButton>
      </CardFooter>
    </Card>
  );
};

export default CoffeeCard;