import useFetchPageData from '@components/page/use-fetch-page-data';
import Layout from '@components/layout';
import PageContent from '@components/page/page-content';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container, SimpleGrid, Skeleton, Stack } from '@chakra-ui/react';
import Segment from '@components/segment';

const ShowAll = () => {
    const router = useRouter();
    const [articleId, setArticleId] = useState(null);

    useEffect(() => {
        if (router.isReady) {
            setArticleId(router.query.id);
        }
    }, [router.isReady]);

    const { page, isLoading, error } = useFetchPageData(articleId ? `/api/categoryarticles?id=${articleId}` : null);

    useEffect(() => {
        if (error) {
            router.push('/error');
        }
    }, [error, router]);

    if (isLoading || !articleId) {
        return (
            <Container pt={10}>
                <Skeletons />
            </Container>
        );
    }

    return (
        <Layout title='Show All'>
            <PageContent page={isLoading ? null : page} title='Show All' all={true} />
        </Layout>
    );
};

const Skeletons = () => (
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
)

export default ShowAll;
