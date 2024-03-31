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
            const pageDataIds = getIdsByScId(id);
            if (!pageDataIds) {
                return res.status(404).json({ error: 'No data found for the provided SC ID' });
            }

            const articlesSorted = articles.filter(e => e.active);
            let sectionData = {
                id: id,
                title: 'Show All',
                articles: []
            };

            const articlePromises = pageDataIds.map(async (articleId) => {
                try {
                    const articleElement = articlesSorted.find(e => e.id === articleId);
                    if (!articleElement) throw new Error(`Article with ID ${articleId} not found`);

                    const articleData = await import(`@data/page-data/${encodeURIComponent(articleElement.page)}`);

                    const articleLabels = articleData.default.sections.find(e => e.type === page_types.labels);
                    const contributionLabel = articleLabels && articleLabels.value.find(e => e.meta === 'Contribution');

                    return {
                        id: articleElement.id,
                        year: articleElement.year,
                        title: articleData.default.title.charAt(0).toUpperCase() + articleData.default.title.slice(1),
                        thumb: articleData.default.thumb,
                        shortDescription: articleData.default.sDesc,
                        contribution: contributionLabel ? contributionLabel.value : ''
                    };
                } catch (error) {
                    console.error(`Failed to import data for ${articleId}:`, error);
                    return null;
                }
            });

            const importedArticles = (await Promise.all(articlePromises)).filter(article => article !== null).sort((a, b) => b.year - a.year);
            sectionData.articles = importedArticles;
            res.status(200).json([sectionData]);
            break;
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

function getIdsByScId(scId: string): string[] | undefined {
    for (const page of pages) {
        const sc = page.scs.find(s => s.id === scId);
        if (sc) {
            return sc.ids;
        }
    }
    return null;
}