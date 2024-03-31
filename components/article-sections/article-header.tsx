import { Container } from '@chakra-ui/react';
import Segment from '@components/segment'
import { PageBreadcrumb } from './page-breadcrumb';
import { MetaGray } from './misc';

const pageTypeMapping = {
    'e': 'experience',
    't': 'tinkerings',
    'd': 'chronicles'
};

export const ArticleHeader = ({ page, title, year }) => {
    const pageLabel = pageTypeMapping[page] || 'Unknown';

    return (
        <Segment>
            <Container pb={3} mt={6}>
                <PageBreadcrumb page={pageLabel}>
                    {title}
                    <MetaGray>
                        {year}
                    </MetaGray>
                </PageBreadcrumb>
            </Container>
        </Segment>
    );
};