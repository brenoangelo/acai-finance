import { Button } from "../Button";
import { Container, ContainerContent } from "./styles";

type HeaderProps = {
  handleOpen: () => void;
}

export function Header({ handleOpen }: HeaderProps) {
  return (
    <Container>
      <ContainerContent>
        <div>Açaí <strong>Finances</strong></div>
        <Button
          onClick={handleOpen}
          type="button"
        >
          Nova Transação
        </Button>
      </ContainerContent>
    </Container>
  )
}