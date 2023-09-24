import Layout from '../components/layout'
import ArticleGrid from './article-grid'
import data from '../data/ids'
import { useEffect, useState } from 'react';

export default function ShowAll() {
    const [filter, setFilter] = useState('');
    const [split, setSplit] = useState(0);

    useEffect(() => {
        // Where not using Next.js router here as it will break the 
        // framer-motion, as the router is updated before the animation is started
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const f = urlParams.get('f');
        const s = urlParams.get('s');
        setFilter(f);
        setSplit(parseInt(s));
    }, []);

    const date_set = data.filter(e => e.charAt(1) == filter).slice(split);
    const count = date_set.length;

    return (
        <Layout title="Show All">
            <ArticleGrid data={date_set} title={"Show All"} filter={filter} amount={count} divider={false} />
        </Layout>
    )
}
