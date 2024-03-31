import articles from '@data/db/articles';
import page_types from '@data/types';
export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            const latestArticles = articles.sort((a, b) => b.year - a.year).filter(e => e.active).slice(0, 2);

            const articlePromises = latestArticles.map(async (article) => {
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
                    console.error(`Failed to import data for article ${article.page}:`, error);
                    return null;
                }
            });

            const importedArticles = (await Promise.all(articlePromises)).filter(article => article !== null);
            res.status(200).json(importedArticles);
            break;
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}