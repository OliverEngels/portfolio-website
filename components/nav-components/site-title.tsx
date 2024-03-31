import { Flex, Heading, Text, Image, useBreakpointValue, useColorMode as mode } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

const SiteTitle: React.FC = () => {
    const { colorMode } = mode()
    const [iconRot, setIconRot] = useState('-15deg');

    const handleMouseEnter = () => setIconRot('-35deg');
    const handleMouseLeave = () => setIconRot('-15deg');

    const variant = useBreakpointValue({ base: 'O.Engels', sm: 'Oliver Engels' });

    return (
        <Link href='/' passHref scroll={false}>
            <Flex align='center' mr={6} cursor='pointer' position="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Image
                    borderRadius='full'
                    boxSize='25px'
                    alt='Site Title Icon'
                    src='icon/potion-icon.webp'
                    transform={`rotate(${iconRot})`}
                    transition='250ms'
                    filter={`invert(${colorMode === 'dark' ? '0' : '.95'})`}
                />
                <Heading as='h1' size='md' p={1} letterSpacing='tighter'>
                    <Text>{variant}</Text>
                </Heading>
            </Flex>
        </Link>
    )
}

export default SiteTitle;