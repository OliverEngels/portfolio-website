import { Heading, Text, Image, Container, Box, useColorModeValue } from "@chakra-ui/react";
import { StyledTextSeparator } from "@components/article-sections/styled-text-seperator";
import P from '@components/paragraph'
import Segment from "@components/segment";
import ContactButtons from "./contact-button";
import NavLinkButton from "@components/nav-components/nav-link-button";
import SegmentHeader from "./segment-header";

const IntroductionSection: React.FC = () => {
    const bgColor = useColorModeValue('rgba(247, 250, 252, .5)', 'rgba(45, 55, 72, .5)');
    return <>
        <Segment>
            <Box
                position="relative"
                marginTop='330px'
                p="15px 15px"
                rounded="md"
                overflow="hidden"
                sx={{
                    '::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        bg: bgColor,
                        backdropFilter: 'blur(10px)',
                        zIndex: 0
                    }
                }}
            >
                <Box position='relative' zIndex="dcocked" fontSize={[12, 14]}>
                    <StyledTextSeparator value={`Greetings! I lead and innovate in the digital product space.`} />
                </Box>
            </Box>
        </Segment>
        <Segment>
            <Box display='flex' mt={10} flexDirection='column' justifyContent='space-between' alignContent='center'>
                <Box alignSelf='center'>
                    <Image
                        borderRadius='full'
                        borderColor='#bbb'
                        borderWidth='3.5px'
                        borderStyle='solid'
                        boxSize='100px'
                        minWidth='100px'
                        alt='Oliver Engels'
                        src='/avatar.webp' />
                </Box>
                <Box alignContent='center' display='flex' flexDirection='column' justifyContent='center'>
                    <Heading
                        as='h3'
                        color='teal'
                        letterSpacing={'tighter'}
                        fontSize={[45, 45]}
                        mb={1}>
                        <Text>
                            Oliver Engels
                        </Text>
                    </Heading>

                    <Text
                        fontSize={['xs', 'sm']}
                    >
                        <StyledTextSeparator value={`( Game Producer // Full-Stack Developer // Indie Developer )`} />
                    </Text>
                </Box>
            </Box>
        </Segment>

        <Segment>
            <Box mt={5}>
                <ContactButtons />
            </Box>
        </Segment>

        <Container pt={10}>
            <Segment>
                <SegmentHeader>Me</SegmentHeader>
            </Segment>
            <Segment>
                <P>
                    Oliver is a freelance Game Producer and Full-Stack Developer based in Sweden. He has an appetite for organising teams, automating just about anything and crafting digital products—from planning and prototyping to launching and beyond. When not creating, you can catch him playing guitar, diving into video games, tinkering on his servers/network or strolling through the forest with his trusted companion, Cooper.
                </P>
            </Segment>
            <Segment>
                <NavLinkButton href="/experience" color='red.400'>Experience</NavLinkButton>
            </Segment>
        </Container>
    </>
}

export default IntroductionSection;
