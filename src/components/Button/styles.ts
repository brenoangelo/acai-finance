import styled from 'styled-components'

export const ButtonStyled = styled.button`
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