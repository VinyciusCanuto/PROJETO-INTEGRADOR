import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints } from './breakpoints.js';

const Title = styled.h2`
  margin-bottom: 20px;
`;

const RestaurantList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 10px 0;
  
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

const RestaurantCard = styled(Link)`
  padding: 15px;
  background: white;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  text-align: center;
  transition: transform 0.2s;
  
  @media (max-width: ${breakpoints.mobile}) {
    padding: 10px;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto 10px;
  background-color: #f0f0f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function HomePage() {
  const restaurants = [
    { id: 1, name: "McDonald's", logo: "🍔" },
    { id: 2, name: "Burguer King", logo: "👑" },
    { id: 3, name: "Pizza Gutti", logo: "🍕" },
    { id: 4, name: "Dona Gera", logo: "🍲" },
    { id: 5, name: "Fika Frio", logo: "🥤" }
  ];

  return (
    <div>
      <Title>Restaurantes Famosos</Title>
      <RestaurantList>
        {restaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} to={`/restaurant/${restaurant.id}`}>
            <Logo>{restaurant.logo}</Logo>
            <div>{restaurant.name}</div>
          </RestaurantCard>
        ))}
      </RestaurantList>
    </div>
  );
}

export default HomePage;