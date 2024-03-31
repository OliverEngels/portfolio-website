import Image from 'next/image'
import Layout from '../components/layout'
import { Box, Button, Container, Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function Error() {
    return (
        <Layout title='Error :('>
            <Container>
                <Box alignContent={'center'}>
                    <Image src={'/page-error.webp'} width={350} height={350} alt={''} style={{ marginLeft: 'auto', marginRight: 'auto', filter: 'brightness(40%) sepia(1) saturate(0) hue-rotate(25deg)' }} />
                </Box>
                <Text as='samp' fontSize='sm'>Kaboom! The page you`re seeking has erupted in a cloud of pixels. Let`s dust ourselves off and head back to the
                    <Link href='/' passHref scroll={false}>
                        <Button ml={2} size='sm' colorScheme='red' variant='link'>
                            <Text as='samp'>
                                HomePage
                            </Text>
                        </Button>
                    </Link>.
                </Text>
            </Container>
        </Layout>
    )
}
