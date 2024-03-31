import { Container, SimpleGrid, Skeleton, Stack } from '@chakra-ui/react';
import ArticleGrid from '@components/article-grid';
import Segment from '@components/segment';

const PageContent = ({ page, title, all = false }) => {
    if (!page) {
        return (
            <Container pt={10}>
                <Segment>
                    <Skeleton height='30px' width='200px' />
                </Segment>

                <Segment>
                    <SimpleGrid columns={[1, 2]} spacingX={4} spacingY={8} pt={4} pb={4}>
                        {[...Array(2)].map((_, index) => (
                            <Stack key={index}>
                                <Skeleton height="155px" borderRadius={6} />
                                <Skeleton height="23px" width='220px' />
                                <Skeleton height="10px" />
                                <Skeleton height="10px" />
                                <Skeleton height="10px" width='100px' />
                            </Stack>
                        ))}
                    </SimpleGrid>
                </Segment>
            </Container>
        );
    }

    return page.map((e, i) => (
        <ArticleGrid data={e.articles} title={e.title || title} amount={all ? e.articles.length : 4} showallId={e.id} key={`grid-${e.id}`} divider={page.length !== i + 1} />
    ));
};

export default PageContent;
