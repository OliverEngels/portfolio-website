import Image from 'next/image'
import Layout from '../components/layout'
import { Box, Container, Text } from '@chakra-ui/react'

export default function Blocked() {
    return (
        <Layout title='Error :('>
            <Container>
                <Box alignContent={'center'}>
                    <Image src={'/page-block.webp'} width={350} height={350} alt={''} style={{ marginLeft: 'auto', marginRight: 'auto', filter: 'brightness(40%) sepia(1) saturate(0) hue-rotate(25deg)' }} />
                </Box>
                <Text as='samp' fontSize='sm'>Whoa there, speedster! You&apos;ve been clicking faster than a caffeinated squirrel! Let&apos;s take a tiny breather and try that again in a few ticks, shall we?
                </Text>
            </Container>
        </Layout>
    )
}
