import data from '../data/ids'
import ArticleGrid from './article-grid'
import Layout from '../components/layout'

export default function Tinkerings() {
    const experiences = data.filter(e => e.charAt(0) == "t");

    return (
        <Layout title='Tinkerings'>
            <ArticleGrid data={experiences} title="Code Tinkerings" filter="c" divider={false} />
        </Layout>
    )
}
