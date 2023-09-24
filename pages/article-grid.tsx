import { Heading, SimpleGrid, Container, Button, Text, Divider } from '@chakra-ui/react'
import ArticleBox from '../components/article-box'
import Segment from '../components/segments'
import Link from 'next/link';

function ArticleGrid({ data = [], filter = 'i', title = "", divider = true, amount = 4, after = 0, showall = true, skipAmount = 0 }) {
    const filteredData = data.filter(e => e.charAt(1) == filter);
    const slicedData = filteredData.slice(after, amount + after);



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

            {sortedData.map((sort, j) => (
                <Segment key={`article-segment-${j}`}>
                    <SimpleGrid columns={[1, 2]} spacingX={4} spacingY={8} pb={4}>
                        {sort.map((work, i) => (
                            <ArticleBox work={work} key={`article-${i}`} />
                        ))}
                    </SimpleGrid>
                </Segment>
            ))}

            <Segment>
                {(filteredData.length > amount && showall) &&
                    <Link href={{ pathname: '/showall', query: { f: filter, s: skipAmount } }} scroll={false}>
                        <Button colorScheme='red' size='sm' mt={6} variant='link'>
                            <Text as='samp'>
                                Show All
                            </Text>
                        </Button>
                    </Link>
                }
            </Segment>

            <Segment>
                {divider && <Divider pt={10} />}
            </Segment>
        </Container>
    )
}

export default ArticleGrid
