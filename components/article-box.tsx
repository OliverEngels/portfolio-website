import { Image, Box, GridItem, Text, Grid, Heading, Badge } from '@chakra-ui/react'
import Link from 'next/link'
import { useState } from 'react';
import { ColorSeperator } from './article-elm';

export default function ArticleBox({ work }) {
    const [data, setData] = useState(undefined);
    const [contribution, setContribution] = useState('');

    const title_sub = work.substring(2, work.length);
    const title = title_sub.match(/[A-Z][a-z]+|[0-9]+/g).join(" ");

    import(`@data/page-data/${work}`).then((e) => {
        setData(e.default);

        const labels = e.default.labels;
        const index = labels.findIndex(e => e.meta == 'Contribution');
        if (index > -1) {
            const contribution = labels[index].value;
            setContribution(contribution);
        }
    });


    return (
        <Link href={`/article?id=${work}`} passHref scroll={false}>
            <Box overflow={'hidden'} position={'relative'}>
                <Box sx={{ position: 'absolute', zIndex: '5', left: '5px' }}>
                    <Badge backgroundColor={'rgba(0,0,0,.75)'} fontSize={'.6rem'} color="#FFF">
                        <ColorSeperator value={contribution} />
                    </Badge>
                </Box>
                <Grid>
                    <GridItem>
                        <Box cursor='pointer' position='relative' borderRadius={6} overflow='hidden'>
                            <Image
                                src={`/images/thumbnails/${title_sub.toLowerCase()}.webp`}
                                placeholder='blur'
                                alt='Experience Image'
                            />
                        </Box>
                    </GridItem>
                    <GridItem mt={3}>
                        <Heading textAlign="left" as='h4' size='sm' fontWeight='600' fontSize={{ base: '1.15rem', sm: '1rem' }} mb={1}>
                            {title}
                        </Heading>
                    </GridItem>
                    <GridItem>
                        <Text fontSize='.80rem' noOfLines={[1, 2, 3]} textAlign='left'>
                            {data && data.sDesc}
                        </Text>
                    </GridItem>
                </Grid>
            </Box>
        </Link>
    )
}
