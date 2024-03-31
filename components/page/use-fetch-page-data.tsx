import { useState, useEffect } from 'react';
import router from 'next/router';

function useFetchPageData(urlOrUrlCreator) {
    const [page, setPage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const url = typeof urlOrUrlCreator === 'function' ? urlOrUrlCreator() : urlOrUrlCreator;
                if (!url) {
                    throw new Error('URL is not defined.');
                }

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();
                setPage(data);
            } catch (error) {
                console.error('Failed to fetch data:', error.message);
                setError(error);
                router.push('/error');
            } finally {
                setIsLoading(false);
            }
        };

        if (urlOrUrlCreator) {
            fetchData();
        }

        // @ts-ignore
    }, [urlOrUrlCreator]);

    return { page, isLoading, error };
}

export default useFetchPageData;
