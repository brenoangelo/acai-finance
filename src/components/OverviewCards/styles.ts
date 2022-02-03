import styled from "styled-components";

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  gap: 2rem;

  margin-top: -4.5rem;
`

export const Card = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;

  height: 9rem;
  padding: 0 2rem 0 2rem;

  border-radius: 0.25rem;

  background: var(--white);
  color: var(--gray-500);

  &:nth-of-type(1) {
    svg {
      fill: var(--green-200);
    }
  }

  &:nth-of-type(2) {
    svg {
      fill: var(--red-200);
    }
  }

  &:nth-of-type(3) {
    background: var(--green-200);
    color: var(--white);
  }

  span {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.75rem;
  }

  h2 {
    font-size: 2rem;
  }
`