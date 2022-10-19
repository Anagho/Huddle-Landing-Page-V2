import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { StyledFooter } from "./styles/Footer.styled";


export default function Footer() {
    return (
      <StyledFooter>
        <Container>
          <img src="./images/logo_white.svg" alt="" />

          <Flex>
            <ul>
              <li>
                Lorem ipsum dolor sit amet. Exercitationem autem sit sapiente
                necessitatibus aut dolores expedita ad molestias culpa. Sit
                molestiae molestias et nihil voluptatem et galisum debitis vel
                quam neque ea internos tempora sit voluptatem quia.
              </li>
              <li>+234-810-147-2332</li>
              <li>example@huddle.com</li>
            </ul>

            <ul>
              <li>About Us</li>
              <li>What we Do</li>
              <li>FAQ</li>
            </ul>

            <ul>
              <li>Career</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>

            <SocialIcons />
          </Flex>

          <p>&copy; 2021 Huddle. All rights reserved</p>
        </Container>
      </StyledFooter>
    );
}