import { Container, Skeleton, Stack } from '@chakra-ui/react';
import Layout from '@components/layout';
import Segment from '@components/segment';
import componentMap from '../components/article-sections/article-components';
import { useRouter } from 'next/router';
import { ArticleHeader } from '@components/article-sections/article-header';
import Picture from '@components/article-sections/picture';
import useFetchPageData from '@components/page/use-fetch-page-data';
import Interactible from '@components/article-sections/interactible';
import { useEffect, useState } from 'react';

export default function Article() {
    const router = useRouter();
    const [articleId, setArticleId] = useState(null);

    useEffect(() => {
        if (router.isReady) {
            setArticleId(router.query.id);
        }
    }, [router.isReady]);

    const { page, isLoading, error } = useFetchPageData(articleId ? `/api/article?id=${articleId}` : null);

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

    try {
        return (
            <Layout title={page.title}>
                <ArticleHeader page={page.page} title={page.title} year={page.year} />
                {page.interactible ? <ArticleInteractible project={page.interactible} /> : <ArticlePicture thumb={`${page.thumb}`} />}
                {page.sections.map((section, index) => (
                    <ArticleSection key={index} section={section} />
                ))}
            </Layout>
        );
    }
    catch (e) {
        router.push('/error');
    }
}

function ArticlePicture({ thumb }) {
    return <Segment>
        <Container>
            <Picture src={`thumbnails/${thumb}`} alt='' />
        </Container>
    </Segment>
}

function ArticleInteractible({ project }) {
    return (
        <Segment>
            <Container>
                <Interactible project={project} />
            </Container>
        </Segment>
    )
}

function ArticleSection({ section }) {
    const SectionComponent = componentMap[section.type];

    if (!SectionComponent) {
        console.warn(`No component found for type "${section.type}"`);
        return null;
    }
    return (
        <Segment>
            <Container pb={4}>
                <SectionComponent value={section.value} />
            </Container>
        </Segment>
    );
}

function Skeletons() {
    return (
        <Stack>
            <Skeleton height="40px" width='450px' />
            <Skeleton height="250px" borderRadius={6} />
            <Skeleton height="10px" />
            <Skeleton height="10px" />
            <Skeleton height="10px" width='150px' />
        </Stack>
    );
}