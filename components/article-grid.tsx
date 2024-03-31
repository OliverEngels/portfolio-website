import { Heading, SimpleGrid, Container, Button, Text, Divider } from '@chakra-ui/react'
import ArticleBox from './article-box'
import Segment from './segment'
import Link from 'next/link';

function ArticleGrid({ data = [], title = "", divider = true, amount = 4, after = 0, showallId = null }) {
    const slicedData = amount == 0 ? data : data.slice(after, amount + after);

    // Code from: https://stackoverflow.com/a/7273717
    const size = 2;
    const sortedData = [];
    for (let i = 0; i < slicedData.length; i += size)
        sortedData.push(slicedData.slice(i, i + size));

    return (
        <Container pt={10}>
            <Segment>
                <Heading as='h4' size='md' textAlign='left' mb={4}>
                    {title}
                </Heading>
            </Segment>

            {sortedData.map((sort, i) => (
                <Segment key={`article-segment-${i}`}>
                    <SimpleGrid columns={[1, 2]} spacingX={4} spacingY={8} pb={4}>
                        {sort.map((art) => (
                            <ArticleBox data={art} key={`article-${art.id}`} />
                        ))}
                    </SimpleGrid>
                </Segment>
            ))}

            <Segment>
                {(data.length > amount && showallId) &&
                    <Link href={{ pathname: '/showall', query: { id: showallId } }} scroll={false}>
                        <Button colorScheme='red' size='sm' mt={6} variant='link'>
                            <Text as='samp'>
                                Show All
                            </Text>
                        </Button>
                    </Link>
                }
            </Segment>

            <Segment>
                {divider && <Divider pt={10} borderColor={'gray.500'} />}
            </Segment>
        </Container>
    )
}

export default ArticleGrid
