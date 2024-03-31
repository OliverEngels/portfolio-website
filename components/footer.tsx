import { Box, Divider, Container, Text } from '@chakra-ui/react'
import Segment from '@components/segment';

const Footer = () => {
    return (
        <Segment>
            <Container>
                <Box textAlign='center' pb={25} pt={25}>
                    <Divider borderColor={'gray.500'} />
                    <Text fontSize='sm' color='gray.500' pt={25}>
                        &copy; {new Date().getFullYear()} Oliver Engels. All Rights
                        Reserved.
                    </Text>
                </Box>
            </Container>
        </Segment>
    )
}

export default Footer
