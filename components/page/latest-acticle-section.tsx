import { Container, SimpleGrid } from '@chakra-ui/react';
import ArticleBox from '@components/article-box';
import Segment from '@components/segment';
import useFetchPageData from './use-fetch-page-data';
import SegmentHeader from './segment-header';

const LatestArticlesSection = () => {
    const { page, isLoading } = useFetchPageData(`/api/latestarticles`);

    return (
        <Segment>
            <Container pt={10}>
                <SegmentHeader>Latest</SegmentHeader>
                <SimpleGrid columns={[1, 2]} spacingX={4} spacingY={8}>
                    {isLoading ? null : page.map((article) => (
                        <ArticleBox data={article} key={`article-${article.id}`} />
                    ))}
                </SimpleGrid>
            </Container>
        </Segment>
    )
};

export default LatestArticlesSection;
