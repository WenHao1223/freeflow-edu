import React, { useState, useEffect } from 'react';

const URL = "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd";

const SOLtoUSD = (props) => {
    const [rate, setRate] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL);
            result.json().then((json) => {
                setRate(json.solana.usd);
            });
        };
        fetchData();
    }, []);

    return (rate*props.sol).toFixed(6);
}

export default SOLtoUSD;