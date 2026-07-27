import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiAward, FiCoffee, FiFeather } from "react-icons/fi";

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 4rem;
  min-height: 80vh;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.background} 0%, ${({ theme }) => theme.colors.lightBg} 100%);

  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
    padding: 3rem 2rem;
  }
`;

const HeroContent = styled.div`
  max-width: 550px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.2;
  margin-bottom: 1.5rem;

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #fff;
    transform: translateY(-3px);
  }
`;

const HeroImage = styled.div`
  width: 450px;
  height: 450px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.hover};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 968px) {
    width: 100%;
    max-width: 350px;
    height: 350px;
    margin-top: 2rem;
  }
`;

const FeaturesSection = styled.section`
  padding: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FeatureCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.soft};

  svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.9rem;
  }
`;

const HomePage = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <Title>
            Crafted Coffee <span>Experience</span>
          </Title>
          <Subtitle>
            Discover unique blends crafted with precision and passion. Elevate your daily coffee ritual with our curated selection.
          </Subtitle>
          <CTAButton to="/menu">Explore Menu</CTAButton>
        </HeroContent>
        <HeroImage>
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800"
            alt="Craft Coffee"
          />
        </HeroImage>
      </HeroSection>

      <FeaturesSection>
        <FeatureCard>
          <FiCoffee />
          <h3>Freshly Roasted</h3>
          <p>Sourced directly from sustainable farms worldwide.</p>
        </FeatureCard>
        <FeatureCard>
          <FiAward />
          <h3>Premium Quality</h3>
          <p>Handcrafted drinks made by experienced baristas.</p>
        </FeatureCard>
        <FeatureCard>
          <FiFeather />
          <h3>Rich Flavors</h3>
          <p>Balanced taste profiles designed for coffee enthusiasts.</p>
        </FeatureCard>
      </FeaturesSection>
    </>
  );
};

export default HomePage;