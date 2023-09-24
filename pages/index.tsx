import {
    Image,
    Heading,
    Text,
    Container,
    Tag,
    Wrap,
    WrapItem,
    Button,
    SimpleGrid,
    VStack,
    HStack,
    Center,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import data from '../data/ids'
import { faGithubAlt, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import P from '../components/paragraph'
import ArticleBox from '../components/article-box'
import Segment from '../components/segments'
import Layout from '../components/layout'
import { ColorSeperator } from '@components/article-elm'

export default function Home() {
    return (
        <Layout title='Digital Tinkerer'>
            <Container pt={75}>
                <Segment>
                    <Center>
                        <Image
                            borderRadius='full'
                            boxSize='150px'
                            alt='Oliver Engels'
                            src='/avatar.webp'
                        />
                    </Center>
                    <Heading as='h1'>Oliver Engels</Heading>
                    <Heading
                        as='h2'
                        color='teal'
                        letterSpacing={'tighter'}
                        size='4xl'
                        mt={1}>
                        Digital Tinkerer
                    </Heading>
                    <Text mt={4} mb={4} fontSize='sm'>
                        ( Producer / Developer )
                    </Text>

                    <Wrap spacing={2} justify='center' mb={2}>
                        <WrapItem>
                            <Link
                                href=''
                                passHref scroll={false}>
                                <Tag
                                    variant='outline'
                                    colorScheme='teal'
                                    size='sm'
                                    cursor='pointer'>
                                    <Text>
                                        <FontAwesomeIcon icon={faEnvelope} />{' '}
                                        Mail
                                    </Text>
                                </Tag>
                            </Link>
                        </WrapItem>
                        <WrapItem>
                            <Link
                                href=''
                                target="_blank"
                                passHref scroll={false}>
                                <Tag
                                    variant='outline'
                                    colorScheme='whatsapp'
                                    size='sm'
                                    cursor='pointer'>
                                    <Text>
                                        <FontAwesomeIcon icon={faWhatsapp} />{' '}
                                        Whatsapp
                                    </Text>
                                </Tag>
                            </Link>
                        </WrapItem>
                        <WrapItem>
                            <Link
                                href=''
                                target="_blank"
                                passHref scroll={false}>
                                <Tag
                                    variant='outline'
                                    colorScheme='gray'
                                    size='sm'
                                    cursor='pointer'>
                                    <Text>
                                        <FontAwesomeIcon icon={faGithubAlt} />{' '}
                                        Github
                                    </Text>
                                </Tag>
                            </Link>
                        </WrapItem>
                        <WrapItem>
                            <Link
                                href=''
                                target="_blank"
                                passHref scroll={false}>
                                <Tag
                                    variant='outline'
                                    colorScheme='linkedin'
                                    size='sm'
                                    cursor='pointer'>
                                    <Text>
                                        <FontAwesomeIcon icon={faLinkedin} />{' '}
                                        Likedin
                                    </Text>
                                </Tag>
                            </Link>
                        </WrapItem>
                    </Wrap>
                </Segment>

                <Container>
                    <Segment>
                        <P>
                            Let me introduce myself with a little glimpse of who I am! While I&apos;d prefer to share this in a more personal conversation, here&apos;s a quick summary: My colleagues often describe me as an enthusiastic learner, always eager to offer a helping hand, and genuinely passionate about automating tasks to boost efficiency. Even in the midst of challenges, I maintain a positive outlook, viewing them as opportunities to find creative solutions. For me, a strong team thrives on mutual respect, supportive leadership, and taking accountability for our actions. You could say I&apos;m a go-getter, someone who likes to make the most of the present or set the stage for future success.
                        </P>
                    </Segment>
                    <Segment>
                        <Link href='/experience' passHref scroll={false}>
                            <Button color="red.400" size='sm' mt={6} mb={6} variant='link'>
                                <Text as='samp'>
                                    Experience{' '}
                                </Text>
                            </Button>
                        </Link>
                    </Segment>
                </Container>

                <Container>
                    <Segment>
                        <Heading
                            as='h3'
                            size='md'
                            textAlign='left'
                            mb={4}>
                            Recreation
                        </Heading>
                    </Segment>
                    <Segment>
                        <P>
                            <ColorSeperator value={`Playing Guitar // Exercising // Walks in the Forest with my dog // Creating and Managing Games // Learning new Development Techniques // Developing the Occasional Game here and There`} />
                        </P>
                    </Segment>
                </Container>

                <Segment>
                    <Container pt={10}>
                        <Heading as='h4' size='md' textAlign='left' mb={4}>
                            Life History
                        </Heading>
                        <VStack alignItems='left'>
                            <HStack alignItems='left' textAlign='left'>
                                <Text as='samp' pr={2} fontSize='.78rem' alignSelf='center'>
                                    Early 90
                                </Text>
                                <Text alignSelf='center'>Born in Goirle, The Netherlands.</Text>
                            </HStack>
                            <HStack alignItems='left' textAlign='left'>
                                <Text as='samp' pr={2} fontSize='.78rem' alignSelf='center'>
                                    2017
                                </Text>
                                <Text alignSelf='center'>
                                    Completed Master Degree at the NHTV in Game
                                    Technology.
                                </Text>
                            </HStack>
                            <HStack alignItems='left' textAlign='left'>
                                <Text as='samp' pr={2} fontSize='.78rem' alignSelf='center'>
                                    2017
                                </Text>
                                <Text alignSelf='center'>Worked at Studios.</Text>
                            </HStack>
                            <HStack alignItems='left' textAlign='left'>
                                <Text as='samp' flexBasis='4.5em' fontSize='.78rem' alignSelf='center'>
                                    2021 to Present
                                </Text>
                                <Text alignSelf='center'>Freelance Full-Stack Developer / Game Producer</Text>
                            </HStack>
                        </VStack>
                    </Container>
                </Segment>

                <Segment>
                    <Container pt={10}>
                        <Heading as='h4' size='md' textAlign='left' mb={4}>
                            Latest
                        </Heading>
                        <SimpleGrid columns={[1, 2]} spacingX={4} spacingY={8}>
                            {data.slice(0, 2).map((work, i) => (
                                <ArticleBox work={work} key={`article-${i}`} />
                            ))}
                        </SimpleGrid>
                    </Container>
                </Segment>
            </Container>
        </Layout>
    )
}
