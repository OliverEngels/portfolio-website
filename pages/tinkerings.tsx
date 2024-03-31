import PageContent from '@components/page/page-content';
import Layout from '../components/layout';
import useFetchPageData from '@components/page/use-fetch-page-data';

const Experience = () => {
    const { page, isLoading } = useFetchPageData(`/api/page?id=e87b50`);

    return (
        <Layout title='Tinkerings'>
            <PageContent page={isLoading ? null : page} title='Tinkerings' />
        </Layout>
    );
};

export default Experience;
