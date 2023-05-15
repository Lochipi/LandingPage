import { Container } from "./styles/Container.styled"
import { StyledHeader, Logo, Nav } from "./styles/Header.styled"
import { Button } from "./styles/Button.styled"
import { Flex } from "./styles/Flex.styled"
import { Image } from "./styles/Image.styled"

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="Logo" />
          <Button>Try it free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>Huddle re-imagine the way we build communities. You have a voice, so does your audience. Create connections with your users as you engage in genuine discussion.</p>

            <Button bg="#ff0099" color="#fff">
               Get Started for Free   
            </Button>
          </div>

          <Image src="./images/illustration-mockups.svg" />
        </Flex>
      </Container>
    </StyledHeader>
  )
}

export default Header
