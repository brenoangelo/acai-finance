import { Container, ContainerContent, Button } from "./styles";

type HeaderProps = {
  handleOpen: () => void;
}

export function Header({ handleOpen }: HeaderProps) {
  return (
    <Container>
      <ContainerContent>
        <div>Açaí <strong>Finances</strong></div>
        <Button onClick={handleOpen}>
          Nova Transação
        </Button>
      </ContainerContent>
    </Container>
  )
}