// TODO: change the name of this file, as currently its a misleading
import {
    Text,
    Image,
    BreadcrumbItem,
    Breadcrumb,
    Badge,
    AspectRatio,
    VStack,
    Code,
    Link as ReactLink,
    Button,
    Heading,
    chakra,
    HStack
} from '@chakra-ui/react'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useColorModeValue as colorModeValue } from '@chakra-ui/react'
import Link from 'next/link'

export const Bread = ({ children, page = 'experience' }) => (
    <Breadcrumb>
        <BreadcrumbItem>
            <Link href={`/${page}`} scroll={false}  >
                <Button color={colorModeValue('blue.400', 'red.300')} size='sm' variant='link'>
                    <Text as='samp' fontWeight={100}>
                        {page.charAt(0).toUpperCase() + page.slice(1)}
                    </Text>
                </Button>
            </Link>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <Text fontSize='2xl' letterSpacing={2}>
                {children}
            </Text>
        </BreadcrumbItem>
    </Breadcrumb>
)

export const Meta = ({ children }) => (
    <Badge colorScheme={colorModeValue('teal', 'teal')} mr={2}>
        {children}
    </Badge>
)

export const MetaGray = ({ children }) => (
    <Badge colorScheme='gray' mr={2} mb={4} fontSize='0.5em'>
        {children}
    </Badge>
)

export const Picture = ({ src, alt }) => (
    <Image src={`images/${src}.webp`} alt={alt} borderRadius={5} mb={4} />
)

export const WebLink = ({ link, title = undefined }) => (
    <ReactLink href={link} color={colorModeValue('blue.400', 'red.300')} isExternal mb={4}>
        {title ? title : link}{' '}
        <FontAwesomeIcon
            icon={faUpRightFromSquare}
            style={{ marginLeft: '5px' }}
        />
    </ReactLink>
)

export const Video = ({ title, src }) => (
    <AspectRatio maxW='660px' ratio={16 / 9} mb={4} borderRadius={6} overflow='hidden'>
        <iframe title={title} src={src} allowFullScreen />
    </AspectRatio>
)

export const Stack = ({ children }) => (
    <VStack alignItems='left' spacing={0} pb={2} mb={4}>
        {children}
    </VStack>
)

export const Title = ({ children }) => (
    <Heading as='h4' size='md' textAlign='left' mb={4}>
        {children}
    </Heading>
)

export const CodeElement = ({ code }) => {
    const code_arr = code.split("\n");
    code_arr.pop();

    return (
        <VStack alignItems='left' spacing={1} mb={4}>
            {code_arr.map((e, i) => <Code colorScheme='teal' key={`code-${i}`} pl={`${30 * (e.match(/\t/g) || []).length}px`} textAlign="left" />)}
        </VStack>
    )
}

export const ColorSeperator = ({ value }) => {
    const seperator = '//';
    const txtArray = value.split(seperator);

    const span = <chakra.span color='red.400' fontSize='.75rem'>/</chakra.span>;

    return txtArray.map((t, i) => (
        <span key={`seperator-${i}`}>
            {t}{i != txtArray.length - 1 && span}
        </span>
    ))
}

export const BulletPoints = ({ value }) => {
    const seperator = '//';
    const txtArray = value.split(seperator);

    const span = <chakra.span color='red.400' fontSize='1.15rem'>•</chakra.span>;

    return (
        <VStack alignItems='left' pl={4} pb={4}>
            {txtArray.map((t, i) => (
                <HStack alignItems='left' textAlign='left' key={`HStack-${i}`}>
                    <Text alignSelf='center'>{span}</Text>
                    <Text pl={1} fontSize='.88rem' alignSelf='center'>{t}</Text>
                </HStack>
            ))}
        </VStack>
    );
}