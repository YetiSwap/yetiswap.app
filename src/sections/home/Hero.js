import React, {useState, useEffect} from "react";
import {Link} from "gatsby";
import {getTotalStats} from "../../utils/getTotalStats";
import {getCoinPriceList} from "../../utils/coinPriceList";
import priceToString from "../../utils/priceToString";


const Hero = ({className, ...rest}) => {
    const [stats, setStats] = useState({totalLiquidityAVAX: 0, totalVolumeAVAX: 0});
    const [coinPriceList, setCoinPriceList] = useState([]);

    useEffect(() => {
        getCoinPriceList().then((priceListResult) => {
            setCoinPriceList(priceListResult)
        })

        getTotalStats()
                .then((result) => {
                    const totalLiquidityAVAX = result.totalLiquidityAVAX ? parseFloat(result.totalLiquidityAVAX).toFixed(0):0;
                    const totalVolumeAVAX = result.totalVolumeAVAX ? parseFloat(result.totalVolumeAVAX).toFixed(0):0;

                    setStats({totalVolumeAVAX, totalLiquidityAVAX})
                })

    }, [])


    const avaxData = coinPriceList.find((item) => item.id==="avalanche-2");
    const avaxPrice = avaxData ? avaxData.priceValue:0;
    const totalVolume = avaxPrice ? priceToString(Math.trunc((stats.totalVolumeAVAX * avaxPrice))):0
    const totaliquidity = avaxPrice ? priceToString(Math.trunc((stats.totalLiquidityAVAX * avaxPrice))):0

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
                                <h1 className="font-size-12 mb-9">Scale Your DeFi Trading with YetiSwap</h1>
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
                                    A decentralized exchange for Avalanche assets with
                                    fast settlement,
                                    low transaction fees. YetiSwap brings you the best trading opportunities to find and
                                    maximize your yield.
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
                            <Link to="/introduction" className="btn btn-outline text-white">
                                Introduction
                            </Link>
                            <Link to="/faq" className="btn btn-outline text-white">
                                FAQ
                            </Link>
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
                                {coinPriceList.map((coin) => <tr>
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
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Hero;
