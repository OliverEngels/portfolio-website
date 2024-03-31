import { Button, useColorModeValue, useColorMode as mode } from "@chakra-ui/react";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ColorModeToggle: React.FC = () => {
    const { colorMode, toggleColorMode } = mode()

    return (<Button
        aria-label="Toggle color mode"
        onClick={toggleColorMode}
        colorScheme={useColorModeValue('blue', 'orange')}
        mr="2"
        height={35}
        width={35}
    >
        <FontAwesomeIcon icon={colorMode === 'dark' ? faSun : faMoon} />
    </Button>)
};

export default ColorModeToggle;