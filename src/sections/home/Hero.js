import React, {useState, useEffect} from "react";
import {getTotalStats} from "../../utils/getTotalStats";
import priceToString from "../../utils/priceToString";
import Partners from "./Partners";
import FindUs from "./FindUs";


const Hero = ({className, ...rest}) => {
    const [stats, setStats] = useState({totalLiquidityAVAX: 0, totalVolumeAVAX: 0});

    useEffect(() => {

        getTotalStats()
                .then((result) => {
                    const totalLiquidityAVAX = result.totalLiquidityAVAX ? parseFloat(result.totalLiquidityAVAX).toFixed(0):0;
                    const totalVolumeAVAX = result.totalVolumeAVAX ? parseFloat(result.totalVolumeAVAX).toFixed(0):0;

                    setStats({totalVolumeAVAX, totalLiquidityAVAX})
                })

    }, [])

    const totalVolume = priceToString(Math.trunc((stats.totalVolumeAVAX)))
    const totaliquidity = priceToString(Math.trunc((stats.totalLiquidityAVAX)))

    return (
            <div className={className} {...rest}>
                <div className="container">
                    <div className="row align-items-center">
                        {/* Hero Content */}
                        <div className="col-lg-12 col-md-12 col-sm-12 order-2 order-lg-1">
                            <div
                                    className="mt-8 mt-lg-0 mr-xl-13"
                                    data-aos="fade-right"
                                    data-aos-delay={500}
                            >
                                <h1 className="font-size-12 mb-9">Future of Decentralized Trading DeFi</h1>
                                <div className="total-stats">
                                    <div className="total-stat-item">
                                        <div className="total-stat-value">${totalVolume}</div>
                                        <div className="total-stat-text">Total Volume</div>
                                    </div>
                                    <div className="total-stat-item">
                                        <div className="total-stat-value">${totaliquidity}</div>
                                        <div className="total-stat-text">Total Liquidity</div>
                                    </div>
                                </div>
                                <p className="font-size-8 mb-lg-13 pr-sm-15 pr-lg-8 pr-xl-15">
                                    YetiSwap is a decentralized exchange (DEX) and NFT marketplace , running on the Avalanche blockchain. Yeti Swap uses the same automated market-making (AMM) model as Uniswap and features a native governance token called YTS that is fully community driven, with users capable of trading all native Avalanche tokens. In a crowded marketplace with multiple contenders, YetiSwap offers three critically important benefits: fast and cost-efficient trades, with a fair and open token distribution system.
                                    YetiSwap is the only NFT marketplace offering royalties on Avalanche, profiting both NFT artists and collection owners.
                                </p>
                            </div>
                        </div>
                        {/* End Hero Content */}
                        <div className="col-lg-12 col-md-12 col-sm-12 order-2 order-lg-1 hero-button-groups">
                            <a href="https://exchange.yetiswap.app/"
                               target="_blank" rel="noopener noreferrer"
                               className="btn btn-bali-gray text-white"
                            >
                                Launch App
                            </a>
                            <a href="https://marketplace.yetiswap.app/"
                               target="_blank" rel="noopener noreferrer"
                               className="btn btn-outline text-white"
                            >
                                NFT Marketplace
                            </a>
                            <a
                                href="https://docs.yetiswap.app/"
                                target="_blank" rel="noopener noreferrer"
                                className="btn btn-outline text-white">
                                Introduction
                            </a>
                            <a
                                href="https://gas.yetiswap.app/"
                                target="_blank" rel="noopener noreferrer"
                                className="btn btn-outline text-white">
                                GAS Station
                            </a>
                            <a href="https://docs.yetiswap.app/faq"
                               target="_blank" rel="noopener noreferrer"
                               className="btn btn-outline text-white">
                                FAQ
                            </a>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 order-2 order-lg-1 coin-price-list">
                            <table>
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Volume (24 hrs)</th>
                                    <th>Price</th>
                                    <th>Price Change</th>
                                </tr>
                                </thead>
                                <tbody>
                                {coinPriceList.map((coin) =>
                                {
                                    return  <tr>
                                        <td className="coin-name">
                                            <div className="coin-image">
                                                <img src={coin.img} alt={coin.symbol} />
                                            </div>
                                            <div className="coin-symbol">
                                                <div>{coin.symbol}</div>
                                                <div>{coin.name}</div>
                                            </div>
                                        </td>
                                        <td className="coin-volume">
                                            {coin.volume}
                                        </td>
                                        <td className="coin-price">
                                            {coin.price}
                                        </td>
                                        <td>
                                              <span className={`coin-price-change ${coin.price_change >= 0 ? 'bg-green':'bg-red'}`}>
                                                  {coin.price_change > 0
                                                      ? <i className="fas fa-arrow-up" />
                                                      :<i className="fas fa-arrow-down" />
                                                  }
                                                  <span>{Math.abs(coin.price_change).toFixed(2)}%</span>
                                              </span>
                                        </td>
                                    </tr>
                                }
                                )}
                                </tbody>
                            </table>
                        </div>
                        <Partners className="position-relative" />
                        <FindUs />
                    </div>
                </div>
            </div>
    );
};

export default Hero;
