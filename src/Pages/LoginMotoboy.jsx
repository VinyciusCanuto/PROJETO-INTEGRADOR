import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #FFC0CB 0%, #E6A5D6 100%);
  border-radius: 0 50% 50% 0;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  position: relative;

  @media (max-width: 1024px) {
    padding: 3rem;
  }

  @media (max-width: 768px) {
    border-radius: 0 0 50% 50%;
    padding: 2rem;
    min-height: 200px;
    justify-content: center;
    align-items: center;
  }
`;

const WelcomeText = styled.h1`
  font-size: 2rem;
  color: #000;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    font-size: 1.75rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const LoginForm = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 0 1rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const FormTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #000;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  font-size: 0.9rem;
  background: #F5F5F5;
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: #999;
  }

  @media (max-width: 768px) {
    padding: 0.6rem;
    font-size: 0.85rem;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: #8B4B8B;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: background-color 0.2s;

  &:hover {
    background: #734673;
  }

  @media (max-width: 768px) {
    padding: 0.6rem;
    font-size: 0.85rem;
    margin-top: 1rem;
  }
`;

const CreateAccount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  font-size: 0.8rem;

  a {
    color: #000;
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    margin-top: 0.75rem;
  }
`;

const App = () => {
  return (
    <Container>
      <LeftSection>
        <WelcomeText>Bem-vindo!</WelcomeText>
      </LeftSection>

      <RightSection>
        <LoginForm>
          <FormTitle>LOGIN</FormTitle>

          <InputGroup>
            <Label>email:</Label>
            <Input
              type="email"
              placeholder="exemplo@gmail.com"
            />
          </InputGroup>

          <InputGroup>
            <Label>senha:</Label>
            <Input
              type="password"
              placeholder="Senha123@"
            />
          </InputGroup>

          <LoginButton type="submit">entrar</LoginButton>

          <CreateAccount>
            <a href="#">Esqueceu a senha?</a>
          </CreateAccount>
          <CreateAccount>
            <a href="#">Não possui uma conta? →</a>
          </CreateAccount>
        </LoginForm>
      </RightSection>
    </Container>
  );
};

export default App;