import {useEffect, useState} from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`)
        .then((response) => response.json())
        .then((response) => setData(response[currency]))
        console.log(data);
    }, [currency, data])
    console.log(data);
    return data;
}

export default useCurrencyInfo;