import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) return;

        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency.toLowerCase()}.json`)
            .then(res => res.json())
            .then(res => {
                const rates = res[currency.toLowerCase()];
                if (!rates) {
                    setData({});
                    return;
                }
                
                delete rates.date;
                setData(rates);
            })
            .catch(() => setData({}));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
