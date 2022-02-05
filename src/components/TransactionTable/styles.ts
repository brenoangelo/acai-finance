import styled from "styled-components";

export const Container = styled.table`
  max-width: 1100px;
  width: 100%;
  margin: 2rem auto 0 auto;

  border-spacing: 0 0.5rem;

  thead {
    text-align: left;
  }

  tr {
    height: 4rem;
    transition: opacity 0.3s;

    opacity: 0.7;

    &:hover{
      opacity: 1;
      
      td div.actionsButtons {
        opacity: 1;
      }
    }

    td, th {
      padding:0 2rem;

      &:last-of-type{
        width: 0.5rem;
      }
    }

    th {
      color: var(--gray-300);
      font-weight: 100;
    }

    td {
      background: var(--white);
      color: var(--gray-500);

      & + td {
        color: var(--gray-300);
      }

      &.deposit {
        color: var(--green-200);
      }

      &.spent {
        color: var(--red-200);
      } 
      
      &:first-child {
        border-radius: 0.35rem 0 0 0.35rem;
      }

      &:last-child {
        border-radius: 0 0.35rem 0.35rem 0;
        text-align: right;
        max-width: 5rem;

        div {
          transition: opacity 0.5s;
          opacity: 0;
          svg {
            cursor: pointer;

            &:first-child {
              margin-right: 0.35rem;
              color: var(--red-200);

              opacity: 0.5;

              transition: opacity 0.3s;

              &:hover {
                opacity: 1;
              }
            }
            &:last-child {
              color: var(--gray-500);

              opacity: 0.5;

              transition: opacity 0.3s;

              &:hover {
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }
`