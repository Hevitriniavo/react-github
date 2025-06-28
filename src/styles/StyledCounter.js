import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  color: #333;
`;

export const Value = styled.p`
  font-size: 2rem;
  margin: 1rem 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background: #0056b3;
    cursor: pointer;
  }
`;
