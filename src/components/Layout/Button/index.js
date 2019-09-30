import styled from 'styled-components';

const Button = styled.button`
  display: ${({ block }) => block && 'block'};
  background: ${({ theme }) => theme.blue};
  border: none;
  color: white;
  text-transform: lowercase;
  cursor: pointer;
  font-weight: 600;
  padding: 10px 5px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export default Button;
