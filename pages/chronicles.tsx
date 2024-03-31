import PageContent from '@components/page/page-content';
import Layout from '../components/layout';
import useFetchPageData from '@components/page/use-fetch-page-data';

const Chronicles = () => {
    const { page, isLoading } = useFetchPageData(`/api/page?id=95dca0`);

    return (
        <Layout title='DevChronicles'>
            <PageContent page={isLoading ? null : page} title='DevChronicles' />
        </Layout>
    );
};

export default Chronicles;
