import React from "react";
import {Link} from "gatsby";

const Hero = ({className, ...rest}) => {
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
                                <p className="font-size-8 mb-lg-13 pr-sm-15 pr-lg-8 pr-xl-15">
                                    A decentralized exchange for Avalanche and Ethereum assets with
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
                    </div>
                </div>
            </div>
    );
};

export default Hero;
