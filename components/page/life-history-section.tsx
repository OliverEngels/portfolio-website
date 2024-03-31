import { Container, VStack, HStack, Text } from '@chakra-ui/react';
import { StyledTextSeparator } from '@components/article-sections/styled-text-seperator';
import Segment from '@components/segment';
import SegmentHeader from './segment-header';

const lifeHistory = [
    { year: "Early 90", description: "Born in Goirle, The Netherlands" },
    { year: "2016", description: "Completed my Bachelor's Degree in Creative Media and Game Technologies from NHTV University of Applied Sciences in Breda." },
    { year: "2017", description: "Completed my Master's Degree in Game Technology from NHTV University of Applied Sciences in Breda." },
    { year: "2017", description: "Worked @ Studios as Game Producer // Full-Stack Developer", isComplex: true },
    { year: "2021 to Present", description: "Remote work as Game Producer // Full-Stack Developer", isComplex: true },
];

const LifeEvent = ({ year, description, isComplex = false }) => (
    <HStack alignItems='left' textAlign='left'>
        <Text as='samp' pr={2} fontSize='.78rem' pt={1}>
            {year}
        </Text>
        <Text alignSelf='center'>
            {isComplex ? <StyledTextSeparator value={description} /> : description}
        </Text>
    </HStack>
);

export default function LifeHistorySection() {
    return (
        <Segment>
            <Container pt={10}>
                <SegmentHeader>Chronology</SegmentHeader>
                <VStack alignItems='left'>
                    {lifeHistory.map((e, i) => (
                        <LifeEvent key={i} {...e} />
                    ))}
                </VStack>
            </Container>
        </Segment>
    );
}
