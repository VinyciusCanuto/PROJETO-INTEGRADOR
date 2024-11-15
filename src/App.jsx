import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { breakpoints } from './Pages/breakpoints.js';
import HomePage from './Pages/HomePage.jsx';
import RestaurantPage from './Pages/RestaurantPage.jsx';
import CheckoutPage from './Pages/FinalizarPedido.jsx';
import CadastroCliente from './Pages/CadastroCliente.jsx'
import CadastroEmpresa from './Pages/CadastroEmpresa.jsx'
import CadastroMotoboy from './Pages/CadastroMotoboy.jsx'
import LoginCliente from './Pages/LoginCliente.jsx'
import LoginEmpresa from './Pages/LoginEmpresa.jsx'
import LoginMotoboy from './Pages/LoginMotoboy.jsx'
import { styled } from 'styled-components';
import Headerr from './Pages/Headerr.jsx';
import Navbar from './Components/Navbar';

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
        <Navbar />
        <MainContent>
          <Headerr />
          <ContentArea>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/restaurant/:id" element={<RestaurantPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/cadastro-cliente" element={<CadastroCliente />} />
              <Route path="/cadastro-empresa" element={<CadastroEmpresa />} />
              <Route path="/cadastro-motoboy" element={<CadastroMotoboy />} />
              <Route path="/login-cliente" element={<LoginCliente />} />
              <Route path="/login-empresa" element={<LoginEmpresa />} />
              <Route path="/login-motoboy" element={<LoginMotoboy />} />
            </Routes>
          </ContentArea>
        </MainContent>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;

