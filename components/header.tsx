import {
    Text,
    Flex,
    Heading,
    useColorMode as mode,
    Button,
    Spacer,
    Hide,
    Box,
    Container,
    MenuButton,
    IconButton,
    Menu,
    MenuItem,
    MenuList,
    useBreakpointValue
} from '@chakra-ui/react'
import { useColorModeValue as colorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars,
    faSun,
    faMoon
} from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Header = props => {
    const { colorMode, toggleColorMode } = mode()
    const router = useRouter();

    useEffect(() => {
        if ('scrollRestoration' in history && history.scrollRestoration !== 'manual') {
            history.scrollRestoration = 'manual';
        }
    }, []);

    const variant = useBreakpointValue(
        {
            base: 'O.Engels',
            sm: 'Oliver Engels'
        }
    );

    return (
        <Box position={'fixed'} zIndex={5} width={'100%'} height={70}>
            <Box
                position={'absolute'}
                backgroundColor={colorModeValue('white', 'gray.800')}
                opacity={0.25}
                height={70}
                width={'100vw'}
            />
            <Box
                position={'absolute'}
                backgroundColor={colorModeValue('white', 'gray.800')}
                height={70}
                width={'100vw'}
                bg='none'
                backdropFilter='auto'
                backdropBlur='10px'
            />

            <Container maxW='container.xl'>
                <Flex as='nav' wrap='wrap' p={6} pl={{ base: 0, sm: 6 }} pr={{ base: 0, sm: 6 }} {...props}>
                    <Link href='/' passHref scroll={false}>
                        <Flex align='center' mr={6} cursor='pointer' position="relative">
                            <Heading
                                as='h1'
                                size='md'
                                p={1}
                                letterSpacing={'tighter'}>
                                <Text>
                                    {variant}
                                </Text>
                            </Heading>
                        </Flex>
                    </Link>

                    <Hide below='md'>
                        <Link href='/experience' passHref scroll={false}>
                            <Button mr={6} size='sm' variant='link' backgroundColor={router.pathname == "/experience" && "red.300"} p={2}>
                                <Text as='samp'
                                    textDecoration={router.pathname == "/experience" && "underline"}
                                    color={router.pathname == "/experience" && "#000"}>
                                    Experience{' '}
                                </Text>
                            </Button>
                        </Link>
                        <Link href='/tinkerings' passHref scroll={false}>
                            <Button mr={6} size='sm' variant='link' backgroundColor={router.pathname == "/tinkerings" && "red.300"} p={2}>
                                <Text as='samp'
                                    textDecoration={router.pathname == "/tinkerings" && "underline"}
                                    color={router.pathname == "/tinkerings" && "#000"}>
                                    Tinkerings{' '}
                                </Text>
                            </Button>
                        </Link>
                        <Link
                            href=''
                            passHref scroll={false}>
                            <Button mr={2} size='sm' variant='link' colorScheme='red' p={2}>
                                <Box mr={2}>
                                    <FontAwesomeIcon icon={faGithubAlt} />
                                </Box>
                                <Text as='samp'>
                                    Source
                                </Text>
                            </Button>
                        </Link>
                    </Hide>

                    <Spacer />

                    <Button
                        aria-label='color-mode'
                        onClick={toggleColorMode}
                        colorScheme={colorModeValue('blue', 'orange')}
                        alignSelf='self-end'
                        mr='2'
                        height={35}
                        width={35}>
                        <FontAwesomeIcon
                            icon={colorModeValue(faMoon, faSun)}
                            color={colorModeValue('white', 'black')}
                        />
                    </Button>

                    <Menu>
                        <MenuButton
                            height={35}
                            width={35}
                            display={{ base: 'block', md: 'none' }}
                            as={IconButton}
                            aria-label='Options'
                            icon={
                                <FontAwesomeIcon
                                    icon={faBars}
                                    inverse={colorMode == 'dark'}
                                />
                            }
                            variant='outline'
                        />

                        <MenuList>
                            <Link href='/' passHref scroll={false}>
                                <MenuItem>About</MenuItem>
                            </Link>
                            <Link href='/experience' passHref scroll={false}>
                                <MenuItem>Experience</MenuItem>
                            </Link>
                            <Link href='/tinkerings' passHref scroll={false}>
                                <MenuItem>Tinkerings</MenuItem>
                            </Link>
                            <Link
                                href='https://github.com/OliverEngels/digitaltinkerer-website'
                                passHref scroll={false}>
                                <MenuItem>Source Code</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Flex>
            </Container>
        </Box>
    )
}

export default Header
