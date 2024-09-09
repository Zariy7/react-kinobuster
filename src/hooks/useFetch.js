import { useState, useEffect } from 'react';

export const useFetch = (address) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData(){
            const response = await fetch(address);
            const json = await response.json();
            setData(json.results);
        }

        getData();
    }, [address]);

    return { data };
};