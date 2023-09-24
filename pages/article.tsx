import { List, ListItem, Container, Divider } from '@chakra-ui/react'
import Layout from '@components/layout'
import {
    Bread,
    CodeElement,
    Meta,
    MetaGray,
    ColorSeperator,
    Picture,
    Title,
    Video,
    WebLink,
    BulletPoints,
} from '@components/article-elm'
import P from '@components/paragraph'
import Segment from '@components/segments'
import { useEffect, useState } from 'react'
import page_types from '@data/page-data/types'
import { isValidUrl } from '@components/helpers'

export default function Article() {
    const [data, setData] = useState(undefined);
    const [articleId, setArticleId] = useState(null);
    const [title, setTitle] = useState("");
    const [thumbnail, setThumbnail] = useState('');

    useEffect(() => {
        // Where not using Next.js router here as it will break the 
        // framer-motion, as the router is updated before the animation is started
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id');
        setArticleId(id);

        import(`@data/page-data/${id}`).then((e) => setData(e.default));

        const title_sub = id.substring(2, id.length);
        setThumbnail(title_sub);
        setTitle(title_sub.match(/[A-Z][a-z]+|[0-9]+/g).join(" "));
    }, []);

    return (
        <Layout title={title}>
            <Segment>
                <Container pb={3} mt={6}>
                    {articleId && <Bread page={(articleId.charAt(0) == "e" ? "experience" : "tinkerings")}>
                        {title && title + ' '}
                        <MetaGray>
                            {data && data.year}
                        </MetaGray>
                    </Bread>}
                </Container>
            </Segment>

            <Segment>
                <Container>
                    <Picture src={`/thumbnails/${thumbnail.toLowerCase()}`} alt='' />
                </Container>
            </Segment>

            <Segment>
                <Container pb={3}>
                    <P>{data && data.desc}</P>
                </Container>
            </Segment>

            <Segment>
                <Container pb={4}>
                    <List>
                        {data && data.labels.map((e, i) => (
                            <ListItem textAlign='left' key={`${e.meta}_${i}`}>
                                <Meta>{e.meta}</Meta>
                                <span>{e.meta == 'Download' ? <WebLink link={`files/${e.value}`} title={e.value} /> : isValidUrl(e.value) ? (<WebLink link={e.value} title={e.title} />) : <ColorSeperator value={e.value} />}</span>
                            </ListItem>
                        ))}
                    </List>
                </Container>
            </Segment>

            <Segment>
                {data && data.content.map((e, i) => (
                    <Container textAlign='left' key={`cont-${i}`}>
                        {{
                            [page_types.title]: <Title>{e.value}</Title>,
                            [page_types.paragraph]: <P>{e.value}</P>,
                            [page_types.picture]: <Picture src={`article_images/${e.value}`} alt='' />,
                            [page_types.link]: <WebLink link={e.value} title={e.value} />,
                            [page_types.video]: <Video src={e.value} title="" />,
                            [page_types.code]: <CodeElement code={e.value} />,
                            [page_types.divider]: <Divider mb={4} />,
                            [page_types.list]: <BulletPoints value={e.value} />
                        }[e.type]}
                    </Container>
                ))}
            </Segment>
        </Layout>
    )
}
