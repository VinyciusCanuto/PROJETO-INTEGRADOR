

// import { useState } from 'react';
// import styled from 'styled-components';
// import { ChevronDown, Search } from 'lucide-react';
// import Navbar from './Components/Navbar.jsx';

// const MainContainer = styled.div`
//   display: flex;
// `;

// const ContentWrapper = styled.div`
//   flex: 1;
//   min-height: 100vh;
//   margin-left: ${props => props.$navExpanded ? '200px' : '60px'};
//   transition: margin-left 0.3s ease;
// `;

// const Header = styled.div`
//   background-color: #663399;
//   padding: 12px 16px;
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
// `;

// const HeaderTop = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const LocationContainer = styled.div`
//   color: white;
//   cursor: pointer;
// `;

// const LocationText = styled.div`
//   font-size: 13px;
//   opacity: 0.9;
//   font-weight: 400;
// `;

// const LocationAddress = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 4px;
//   font-size: 14px;
//   font-weight: 500;
// `;

// const SearchContainer = styled.div`
//   position: relative;
//   width: 300px;
//   height: 38px;
// `;

// const SearchInput = styled.input`
//   width: 100%;
//   height: 100%;
//   padding: 8px 40px 8px 16px;
//   border: none;
//   border-radius: 4px;
//   font-size: 14px;
//   background-color: #f8f8f8;
//   color: #666;
  
//   &::placeholder {
//     color: #666;
//   }
  
//   &:focus {
//     outline: none;
//     background-color: white;
//   }
// `;

// const SearchIcon = styled.div`
//   position: absolute;
//   right: 12px;
//   top: 50%;
//   transform: translateY(-50%);
//   color: #666;
//   display: flex;
//   align-items: center;
// `;

// const Content = styled.div`
//   padding: 24px 16px;
//   background-color: #f8f8f8;
// `;

// const SectionTitle = styled.h2`
//   font-size: 18px;
//   font-weight: 600;
//   color: #333;
//   margin-bottom: 16px;
// `;

// const RestaurantGrid = styled.div`
//   display: flex;
//   gap: 24px;
//   overflow-x: auto;
//   padding-bottom: 16px;
  
//   &::-webkit-scrollbar {
//     display: none;
//   }
// `;

// const RestaurantCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 8px;
//   cursor: pointer;
// `;

// const RestaurantLogo = styled.div`
//   width: 64px;
//   height: 64px;
//   border-radius: 50%;
//   background-color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
//   img {
//     width: 75%;
//     height: 75%;
//     object-fit: contain;
//   }
// `;

// const RestaurantName = styled.p`
//   font-size: 13px;
//   color: #333;
//   margin: 0;
//   text-align: center;
//   max-width: 80px;
// `;

// const HomePage = () => {
//   const [navExpanded, setNavExpanded] = useState(false);
  
//   const restaurants = [
//     {
//       id: 1,
//       name: "Mc Donald's",
//       logo: "/api/placeholder/64/64"
//     },
//     {
//       id: 2,
//       name: "Burguer King",
//       logo: "/api/placeholder/64/64"
//     },
//     {
//       id: 3,
//       name: "Pizza Hut!",
//       logo: "/api/placeholder/64/64"
//     },
//     {
//       id: 4,
//       name: "Restaurante Dona Geni",
//       logo: "/api/placeholder/64/64"
//     },
//     {
//       id: 5,
//       name: "Fila Frio",
//       logo: "/api/placeholder/64/64"
//     },
//     {
//       id: 6,
//       name: "Padaria",
//       logo: "/api/placeholder/64/64"
//     }
//   ];

//   return (
//     <MainContainer>
//       <Navbar onExpandChange={setNavExpanded} />
//       <ContentWrapper $navExpanded={navExpanded}>
//         <Header>
//           <HeaderTop>
//             <LocationContainer>
//               <LocationText>R. Exemplo da Rua, 90</LocationText>
//               <LocationAddress>
//                 São Paulo, SP <ChevronDown size={16} color="white" />
//               </LocationAddress>
//             </LocationContainer>
            
//             <SearchContainer>
//               <SearchInput 
//                 type="text" 
//                 placeholder="Pesquisar (restaurante, comida, etc...)" 
//               />
//               <SearchIcon>
//                 <Search size={18} />
//               </SearchIcon>
//             </SearchContainer>
//           </HeaderTop>
//         </Header>
        
//         <Content>
//           <SectionTitle>Restaurantes Famosos</SectionTitle>
//           <RestaurantGrid>
//             {restaurants.map(restaurant => (
//               <RestaurantCard key={restaurant.id}>
//                 <RestaurantLogo>
//                   <img 
//                     src={restaurant.logo}
//                     alt={`${restaurant.name} logo`} 
//                   />
//                 </RestaurantLogo>
//                 <RestaurantName>{restaurant.name}</RestaurantName>
//               </RestaurantCard>
//             ))}
//           </RestaurantGrid>
//         </Content>
//       </ContentWrapper>
//     </MainContainer>
//   );
// };

// export default HomePage;






import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { breakpoints } from './Styles/breakpoints.js'
import Sidebar from './Styles/Sidebar.jsx';
import Header from './Styles/Headerr';
import HomePage from './Styles/HomePage';
import RestaurantPage from './Styles/RestaurantPage';
import CheckoutPage from './Styles/CheckoutPage';
import { styled } from 'styled-components';

const AppLayout = styled.div`
  display: flex;
  min-height: 100vh;
  
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ContentArea = styled.div`
  padding: 20px;
  flex: 1;
  background-color: #f5f5f5;
  
  @media (max-width: ${breakpoints.tablet}) {
    padding: 10px;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Sidebar />
        <MainContent>
          <Header />
          <ContentArea>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/restaurant/:id" element={<RestaurantPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </ContentArea>
        </MainContent>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;

