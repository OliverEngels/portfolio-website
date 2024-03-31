import PageContent from '@components/page/page-content';
import Layout from '../components/layout';
import useFetchPageData from '@components/page/use-fetch-page-data';

const Experience = () => {
    const { page, isLoading } = useFetchPageData(`/api/page?id=2607f4`);

    return (
        <Layout title='Experience'>
            <PageContent page={isLoading ? null : page} title='Experience' />
        </Layout>
    );
};

export default Experience;
