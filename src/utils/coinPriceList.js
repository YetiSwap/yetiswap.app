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
        symbol: "LINK",
        id: "chainlink",
        name: "Chainlink Token",
        addr: "0xB3fe5374F67D7a22886A0eE082b2E2f9d2651651",
    },
    {
        symbol: "YTS",
        id: "yetiswap",
        name: "YetiSwap",
        addr: "0x488F73cddDA1DE3664775fFd91623637383D6404",
    },
    {
        symbol: "CNR",
        id: "canary",
        name: "Canary",
        addr: "0x8D88e48465F30Acfb8daC0b3E35c9D6D7d36abaf",
    },
    {
        symbol: "AVE",
        id: "avaware",
        name: "Avaware",
        addr: "0x78ea17559B3D2CF85a7F9C2C704eda119Db5E6dE",
    },
    {
        symbol: "ELK",
        id: "elk-finance",
        name: "ELK Finance",
        addr: "0xE1C110E1B1b4A1deD0cAf3E42BfBdbB7b5d7cE1C",
    },
    {
        symbol: "SISTA",
        id: "srnartgallery-tokenized-arts",
        name: "srnArtGallery Tokenized Arts",
        addr: "0x4e840AADD28DA189B9906674B4Afcb77C128d9ea",
    },
    {
        symbol: "ROCO",
        id: "roco-finance",
        name: "Roco Finance",
        addr: "0xb2a85C5ECea99187A977aC34303b80AcbDdFa208",
    },
    {
        symbol: "AVXT",
        id: "avaxtars",
        name: "Avaxtars",
        addr: "0x397bBd6A0E41bdF4C3F971731E180Db8Ad06eBc1",
    },
    {
        symbol: "PEFI",
        id: "penguin-finance",
        name: "Penguin Finance",
        addr: "0xe896CDeaAC9615145c0cA09C8Cd5C25bced6384c",
    },
    {
        symbol: "YAY",
        id: "yay-games",
        name: "YAY Games",
        addr: "0x01C2086faCFD7aA38f69A6Bd8C91BEF3BB5adFCa",
    },
];
export async function getCoinPriceList() {
    const priceList = await Promise.all(
            coinList.map(({id}, i) => {
                return getCoinGeckoApi(id, i);
            }),
    )
    return  [...priceList];
}

function getCoinGeckoApi(id, i) {
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
                        "https://raw.githubusercontent.com/YetiSwap/tokens/main/assets/" +
                        coinList[i].addr +
                        "/logo.png",
                }),
                price: "$" + current_price.usd.toLocaleString("en-US"),
                priceValue: current_price.usd,
                price_change: price_change_percentage_24h,
                volume: "$" + total_volume.usd.toLocaleString("en-US")
            };
        }).catch((e) => {
            console.error('Price Error', id, e)
        });
}