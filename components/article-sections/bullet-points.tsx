import { VStack, HStack, Text, chakra } from '@chakra-ui/react';
import { TextHandler } from './text-handler';

interface BulletPointsProps {
    value: string;
}

export const BulletPoints: React.FC<BulletPointsProps> = ({ value }) => {
    const separator = '//';
    const txtArray = value.split(separator);

    return (
        <VStack alignItems='left' pl={4} pb={4}>
            {txtArray.map((text, index) => (
                <HStack alignItems='left' textAlign='left' key={`bullet-point-${index}`}>
                    <Text alignSelf='center'>
                        <chakra.span color='red.400' fontSize='1.15rem'>•</chakra.span>
                    </Text>
                    <TextHandler text={text} />
                </HStack>
            ))}
        </VStack>
    );
};