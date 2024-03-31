import { Text, Heading, useColorModeValue } from "@chakra-ui/react"

interface SegmentHeaderProps {
    children: any
}

const SegmentHeader: React.FC<SegmentHeaderProps> = ({ children }) => {
    const bgColor = useColorModeValue('gray.400', 'gray.600');

    return (
        <Heading
            as='h3'
            size='md'
            textAlign='left'
            mb={4} >
            <Text
                as="span" // Use span to keep the text inline and avoid block behavior
                position="relative"
                _after={{
                    content: '""',
                    position: 'absolute',
                    width: 'full',
                    height: '4px',
                    backgroundColor: bgColor,
                    borderRadius: '25px',
                    bottom: '-6px',
                    left: 0,
                }} >
                {children}
            </Text>
        </Heading>
    )
}

export default SegmentHeader;