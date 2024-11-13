import { styled } from 'styled-components';
import { breakpoints } from './breakpoints.js';

const SidebarContainer = styled.div`
  width: 80px;
  background-color: #4a1d6e;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  z-index: 100;
  
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: space-around;
    padding: 0;
    position: fixed;
    bottom: 0;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  margin: 10px 0;
  cursor: pointer;
  padding: 10px;
  
  @media (max-width: ${breakpoints.tablet}) {
    margin: 0;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <IconButton>☰</IconButton>
      <IconButton>🏠</IconButton>
      <IconButton>📋</IconButton>
    </SidebarContainer>
  );
}

export default Sidebar;