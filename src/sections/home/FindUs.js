import React from "react";
import CoingeckoLogo from '../../assets/findus/coingecko.png'
import CoinmarketcapLogo from '../../assets/findus/coinmarketcap.jpg'
import DappradarLogo from '../../assets/findus/dappradar.jpg'
import BlockspotLogo from '../../assets/findus/blockspot.png'
import DefillamaLogo from '../../assets/findus/defillama.jpg'
import NomicsLogo from '../../assets/findus/nomics.png'

const FindUs = () => {

    const findUsList = [
        {
            id: 'coingecko',
            logo: CoingeckoLogo,
            link: 'https://www.coingecko.com/en/coins/yetiswap'
        },
        {
            id: 'coinmarketcap',
            logo: CoinmarketcapLogo,
            link: 'https://coinmarketcap.com/currencies/yetiswap/'
        },
        {
            id: 'dappradar',
            logo: DappradarLogo,
            link: 'https://dappradar.com/avalanche/defi/yeti-swap'
        },
        {
            id: 'blockspot',
            logo: BlockspotLogo,
            link: 'https://blockspot.io/coin/yetiswap/'
        },
        {
            id: 'defillama',
            logo: DefillamaLogo,
            link: 'https://defillama.com/protocol/yetiswap'
        },
        {
            id: 'nomics',
            logo: NomicsLogo,
            link: 'https://nomics.com/assets/yts-yetiswap'
        },
    ]
    return <div className="col-lg-12 col-md-12 col-sm-12 order-2 order-lg-1 find-us">
        <div className="find-us-list">
            <div className="fin-us-title"><h5>Find us on</h5></div>
            <ul>
                {
                    findUsList.map((item) =>
                        <li key={`${item.id}_FIND_US`}>
                            <a href={item.link} target="_blank"><img src={item.logo} /></a>
                        </li>
                    )
                }
            </ul>
        </div>
    </div>
}

export default FindUs