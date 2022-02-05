import styled from 'styled-components'

export const Container = styled.header`
  background: var(--purple-300);
`

export const ContainerContent = styled.div`
  width: 100%;
  max-width: 1100px;

  margin: 0 auto;
  padding: 2rem 0.25rem 12rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  >div {
    font-size: 1.75rem;
    color: var(--white);
    strong {
      color: var(--green-200);
    }
  }
`

export const Button = styled.button`
  width: 12.5rem;
  height: 3rem;
  font-size: 1rem;

  color: var(--white);
  background: var(--purple-100);

  border: 0;
  border-radius: 0.25rem;

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`