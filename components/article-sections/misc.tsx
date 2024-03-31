// TODO: change the name of this file, as currently its a misleading
import {
    Badge,
    AspectRatio,
    VStack,
    Heading,
    useColorModeValue,
} from '@chakra-ui/react'

export const Meta = ({ children }) => (
    <Badge colorScheme={useColorModeValue('teal', 'teal')} mr={2}>
        {children}
    </Badge>
)

export const MetaGray = ({ children }) => (
    <Badge colorScheme='gray' ml={2} mr={2} mb={4} fontSize='0.5em'>
        {children}
    </Badge>
)

export const Video = ({ title, src }) => (
    <AspectRatio maxW='660px' ratio={16 / 9} mb={4} borderRadius={6} overflow='hidden'>
        <iframe title={title} src={src} allowFullScreen loading='lazy' />
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