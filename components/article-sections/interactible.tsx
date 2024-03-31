import { Box, useColorModeValue } from '@chakra-ui/react';
import ThreeCanvas from '@components/cube/three-canvas';

const Interactible = ({ project }) => {
    const bgColor = useColorModeValue('gray.400', 'gray.700');

    return (
        <Box borderRadius="5" mb={4} overflow="hidden" position="relative" backgroundColor={bgColor} height="320px">
            {{
                'cube': <ThreeCanvas />
            }[project]}
        </Box>
    );
}

export default Interactible;