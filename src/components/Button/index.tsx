import { ReactNode } from 'react'
import { ButtonStyled } from './styles'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <ButtonStyled {...props}>
      {children}
    </ButtonStyled>
  )
}