import articles from '@data/db/articles';
import pages from '@data/db/pages';
export default async function handler(req, res) {
    const { id } = req.query;
    if (!id) {
        return res.status(400).json({ error: 'id parameter is required' });
    }

    switch (req.method) {
        case 'GET':
            const article = articles.filter(e => e.active).find(e => e.id == id);
            if (!article || !article.active) {
                return res.status(404).json({ error: 'Article not found.' });
            }

            const foundPage = pages.find(page =>
                page.scs.some(subcategory => subcategory.ids.includes(id))
            );
            if (!foundPage) {
                return res.status(404).json({ error: 'Page for the article not found.' });
            }

            try {
                const articleData = await import(`@data/page-data/${encodeURIComponent(article.page)}`);
                articleData.default.page = foundPage.c.charAt(0).toLocaleLowerCase();
                res.status(200).json(articleData.default);
            } catch (error) {
                console.error(`Failed to import data for article ${id}:`, error);
                return res.status(500).json({ error: 'Failed to load article data.' });
            }
            break;
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}