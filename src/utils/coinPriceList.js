let coinList = [
    {
        symbol: "AVAX",
        id: "avalanche-2",
        name: "Avalanche",
        img: "https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/ethereum-tokens/0x9dEbca6eA3af87Bf422Cea9ac955618ceb56EfB4/logo.png",
    },
    {
        symbol: "ETH",
        id: "ethereum",
        name: "Ether (Wrapped)",
        addr: "0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15",
    },
    {
        symbol: "USDT",
        id: "tether",
        name: "Tether USD",
        addr: "0xde3A24028580884448a5397872046a019649b084",
    },
    {
        symbol: "WBTC",
        id: "wrapped-bitcoin",
        name: "Wrapped BTC",
        addr: "0x408D4cD0ADb7ceBd1F1A1C33A0Ba2098E1295bAB",
    },
    {
        symbol: "LINK",
        id: "chainlink",
        name: "Chainlink Token",
        addr: "0xB3fe5374F67D7a22886A0eE082b2E2f9d2651651",
    },
    {
        symbol: "DAI",
        id: "dai",
        name: "Dai Stablecoin",
        addr: "0xbA7dEebBFC5fA1100Fb055a87773e1E99Cd3507a",
    },
    {
        symbol: "UNI",
        id: "uniswap",
        name: "Uniswap",
        addr: "0xf39f9671906d8630812f9d9863bBEf5D523c84Ab",
    },
    {
        symbol: "SUSHI",
        id: "sushi",
        name: "SushiToken",
        addr: "0x39cf1BD5f15fb22eC3D9Ff86b0727aFc203427cc",
    },
    {
        symbol: "AAVE",
        id: "aave",
        name: "Aave Token",
        addr: "0x8cE2Dee54bB9921a2AE0A63dBb2DF8eD88B91dD9",
    },
    {
        symbol: "YFI",
        id: "yearn-finance",
        name: "yearn.finance",
        addr: "0x99519AcB025a0e0d44c3875A4BbF03af65933627",
    },
];
export async function getCoinPriceList() {
    const priceList = await Promise.all(
            coinList.map(({id}, i) => {
                return fetch(
                        "https://api.coingecko.com/api/v3/coins/" +
                        id +
                        "?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false",
                )
                        .then((res) => res.json())
                        .then(({market_data: {current_price, price_change_percentage_24h, total_volume}}) => {
                            return  {
                                ...coinList[i],
                                ...(!("img" in coinList[i]) && {
                                    img:
                                            "https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/" +
                                            coinList[i].addr +
                                            "/logo.png",
                                }),
                                price: "$" + current_price.usd.toLocaleString("en-US"),
                                priceValue: current_price.usd,
                                price_change: price_change_percentage_24h,
                                volume: "$" + total_volume.usd.toLocaleString("en-US")
                            };
                        });
            }),
    )
    return  [...priceList];
}