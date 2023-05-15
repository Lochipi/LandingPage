import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"

function Footer() {
    return (
        <div>
            <Container>
                <img src="./images/logo_white.svg" alt="" />
                <Flex>
                    <ul>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non excepturi distinctio quas doloribus doloremque impedit, quasi sapiente molestiae inventore iusto.</li>
                        <li>+254115607857</li>
                        <li>corneliuslochipi@gmail.com</li>
                    </ul>

                    <ul>
                        <li>About Us</li>
                        <li>What we do</li>
                        <li>hello world</li>
                    </ul>
                    
                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </Flex>
                <p>&copy; @2023 All rights reserved</p>
            </Container>
        </div>
    )
}

export default Footer
