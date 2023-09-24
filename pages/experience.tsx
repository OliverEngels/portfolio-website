import Layout from '../components/layout'
import ArticleGrid from './article-grid'
import data from '../data/ids'

export default function Experience() {
    const experiences = data.filter(e => e.charAt(0) === "e");

    return (
        <Layout title='Experience'>
            <ArticleGrid data={experiences} title="Projects" filter="i" showall={false} divider={false} />
        </Layout>
    )
}
