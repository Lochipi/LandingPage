import { FaGit, FaLinkedin, FaTwitter } from "react-icons/fa";
import { StyledIcons } from "./styles/SocialIcons.styled";

function SocialIcons() {
    return (
        <StyledIcons>
            {/* <ul> */}
                <li>
                    <a href="https://twitter.com">
                        <FaGit />
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com">
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a href="https://github.com">
                        <FaTwitter />
                    </a>
                </li >
            {/* </ul > */}
        </StyledIcons >
    )
}

export default SocialIcons
