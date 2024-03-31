import { Container } from "@chakra-ui/react";
import { StyledTextSeparator } from "@components/article-sections/styled-text-seperator";
import Segment from "@components/segment";
import P from '@components/paragraph'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import SegmentHeader from "./segment-header";

const RecreationSection: React.FC = () => (
    <Container pt={10}>
        <Segment>
            <SegmentHeader>I <FontAwesomeIcon icon={faHeart} /></SegmentHeader>
        </Segment>
        <Segment>
            <P>
                <StyledTextSeparator value={`Playing Guitar // Indie Games // Japanese Animations // Home Automation // Tech // Network Fiddling // Forest walks with my dog // Personal game projects when possible`} />
            </P>
        </Segment>
    </Container>
)

export default RecreationSection;