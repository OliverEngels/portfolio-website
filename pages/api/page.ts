import pages from '@data/db/pages';
import articles from '@data/db/articles';
import page_types from '@data/types';

export default async function handler(req, res) {
    const { id } = req.query;
    if (!id) {
        return res.status(400).json({ error: 'id parameter is required' });
    }

    switch (req.method) {
        case 'GET':
            const page = pages.find(e => e.id === id);
            if (!page) {
                return res.status(404).json({ error: 'No data found for the provided SC ID' });
            }
            let responseData = [];

            for (const section of page.scs) {
                let sectionData = {
                    id: section.id,
                    title: section.sc.charAt(0).toUpperCase() + section.sc.slice(1),
                    articles: []
                };

                const filteredAndSortedArticles = articles
                    .filter(e => e.active)
                    .filter(article => section.ids.includes(article.id))
                    .sort((a, b) => b.year - a.year);

                const articlePromises = filteredAndSortedArticles.map(async (article) => {
                    try {
                        const articleData = await import(`@data/page-data/${encodeURIComponent(article.page)}`);
                        const articleLabels = articleData.default.sections.find(e => e.type === page_types.labels);
                        const contributionLabel = articleLabels && articleLabels.value.find(e => e.meta === 'Contribution');

                        return {
                            id: article.id,
                            title: articleData.default.title.charAt(0).toUpperCase() + articleData.default.title.slice(1),
                            thumb: articleData.default.thumb,
                            shortDescription: articleData.default.sDesc,
                            contribution: contributionLabel ? contributionLabel.value : ''
                        };
                    } catch (error) {
                        console.error(`Failed to import data for ${article.page}:`, error);
                        return null;
                    }
                });

                const importedArticles = (await Promise.all(articlePromises)).filter(article => article !== null);
                sectionData.articles = importedArticles;
                responseData.push(sectionData);
            }

            res.status(200).json(responseData);
            break;
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}