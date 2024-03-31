import { Flex, Spacer, Hide, Box, Container, useColorModeValue } from '@chakra-ui/react'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { useEffect } from 'react'
import NavLinkButton from './nav-components/nav-link-button'
import SiteTitle from './nav-components/site-title'
import ExternalLink from './nav-components/external-link'
import ColorModeToggle from './nav-components/color-mode-togge'
import MobileMenuButton from './nav-components/mobile-menu-button'

const Header = props => {
    const bgColor = useColorModeValue('white', 'gray.800');

    const navLinks = [
        { href: '/experience', label: 'Experience' },
    ];

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    const renderNavLinks = () =>
        navLinks.map(({ href, label }) => (
            <NavLinkButton key={href} href={href}>
                {label}
            </NavLinkButton>
        ));

    const renderHeaderBg = () =>
        <>
            <Box
                position={'absolute'}
                backgroundColor={bgColor}
                opacity={0.25}
                height={70}
                width={'100vw'}
            />
            <Box
                position={'absolute'}
                backgroundColor={bgColor}
                height={70}
                width={'100vw'}
                bg='none'
                backdropFilter='auto'
                backdropBlur='10px'
            />
        </>

    return (
        <Box position={'fixed'} zIndex={5} width={'100%'} height={70}>
            {renderHeaderBg()}
            <Container maxW='container.xl'>
                <Flex as='nav' wrap='nowrap' p={6} pl={{ base: 0, md: 6 }} pr={{ base: 0, md: 6 }} {...props}>
                    <Flex alignItems="center" gap={2} wrap='wrap' overflow='hidden' height={35}>
                        <SiteTitle />
                        <Hide below='md'>
                            {renderNavLinks()}
                            <ExternalLink href="https://github.com/OliverEngels/portfolio-website" label="Source" icon={faGithubAlt} />
                        </Hide>
                    </Flex>

                    <Spacer />

                    <ColorModeToggle />
                    <MobileMenuButton navLinks={navLinks} />
                </Flex>
            </Container>
        </Box>
    )
}

export default Header
