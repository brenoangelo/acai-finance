import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 2rem auto 0 auto;

  display: flex;
  gap: 2rem;
`

export const InputGroup = styled.div`
  display: flex;

  &:not(:last-child) {
    flex-direction: column;
  }
  &:last-child {
    margin-left: auto;
    margin-top: auto;

    display: flex;
    align-items: center;
    gap: 1rem;
  }

  input, select {
    height: 2rem;
    padding: 0.5rem;

    border: 0;
    border-radius: 0.25rem;

    background: var(--white);
    box-shadow: var(--box-shadow-100);
  }
`