import { Container, List, ListItem } from "@chakra-ui/react";
import WebLink from "./web-link";
import { StyledTextSeparator } from "./styled-text-seperator";
import { Meta } from "./misc";
import { isValidUrl, sanitizeValue } from "@components/helpers";
import Segment from "@components/segment";

interface LabelsListProps {
    labels: {
        meta: string,
        value: string
    }[]
}

export const LabelsList: React.FC<LabelsListProps> = ({ labels }) => (
    <Segment>
        <Container pb={4}>
            <List>
                {labels.map((label, index) => {
                    const content = label.meta === 'Download' ? (
                        <WebLink link={`files/${sanitizeValue(label.value)}`} title={label.value} />
                    ) : isValidUrl(label.value) ? (
                        <WebLink link={label.value} title={label.value} />
                    ) : (
                        <StyledTextSeparator value={label.value} />
                    );

                    return (
                        <ListItem textAlign="left" key={`${label.meta}_${index}`}>
                            <Meta>{label.meta}</Meta>
                            <span>{content}</span>
                        </ListItem>
                    );
                })}
            </List>
        </Container></Segment>
);
