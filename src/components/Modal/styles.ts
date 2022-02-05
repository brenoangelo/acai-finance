import styled from "styled-components";

export const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  left:0;
  top: 0;

  background: rgba(0, 0, 0, .5);
`

type ContainerProps = {
  totalIsShown: boolean;
}

export const Container = styled.div<ContainerProps>`
  max-width: 35rem;
  min-height: 32rem;
  background: var(--gray-100);

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 4.25rem 3.25rem;

  position: absolute;
  left: 50%;
  top: 50%;

  border-radius: 0.25rem;

  transform: translate(-50%, -50%);

  form > span {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 0.5rem;

    opacity: ${props => props.totalIsShown ? 1 : 0};

    h3 {
      font-size: 1rem;
      margin-bottom: 0.5rem;
      color: var(--gray-500);
    }

    p {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      color: var(--white);

      background: var(--green-200);
      height: 2rem;
      width: 6rem;
      border-radius: 2rem;
    }
  }

  h1 {
    font-size: 1.35rem;
    margin-bottom: 0.5rem;
    color: var(--gray-500);
  }

  form input, button {
    width: 100%;
    height: 3.75rem;

    font-size: 1rem;
    
    border-radius: 0.25rem;
  }

  input {
    border: 1px solid var(--gray-200);
    background: var(--gray-150);

    padding-left: 1.5rem;
    margin-bottom: 1rem;

    color: var(--gray-500);

    &:focus {
      outline: 0;
    }
  }

  button {
    border: 0;
    background: var(--green-200);
    color: var(--white);

    opacity: 0.8;

    transition: 0.3s;

    &:hover {
      opacity: 1;
    }
  }
`

export const Options = styled.div`
  display: flex;
  gap: 0.35rem;
  margin-bottom: 1rem;

  input {
    display: none;
  }

  label {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    color: var(--gray-500);

    height: 3.75rem;
    
    border-radius: 0.25rem;
    border: 1px solid var(--gray-200);

    cursor: pointer;

    &:first-of-type{
      svg {
        color: var(--green-200);
      }

      &.isChecked {
        background: var(--green-100);
        border-color: var(--green-200);
      }
    }

    &:last-of-type{
      svg {
        color: var(--red-200);
      }

      &.isChecked {
        background: var(--red-100);
        border-color: var(--red-200);
      }
    }
  }
`

export const DualInputs = styled.div`
  display: flex;
  gap: 0.35rem;
`

export const CloseButton = styled.div`
  position: absolute;
  right: 1.25rem;
  top: 1.25rem;

  cursor: pointer;

  color: var(--gray-500);

  opacity: 0.5;

  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`