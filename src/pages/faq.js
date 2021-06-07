import React from "react";

import PageWrapper from "../components/PageWrapper";
import YetiHelmet from "../components/YetiHelmet";

const Faq = () => {
    return (
            <>
                <YetiHelmet
                        title="FAQ - Yeti Swap"
                        description="Yeti Swap decentralized exchange for Avalanche assets with fast settlement, low transaction fees."
                />
                <PageWrapper>
                    <div className="pt-23 pt-md-26 pt-lg-31 pb-13 pb-md-18 pb-lg-23">
                        <div className="container">
                            {/* Section Title */}
                            <div className="row justify-content-center">
                                <div className="col-xl-8 col-lg-9">
                                    <div className="text-center mb-13 mb-lg-18">
                                        <h2 className="font-size-11 mb-7">
                                            Frequently Asked Question
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            {/* End Section Title */}
                            {/* Faqs */}
                            {/* Faqs */}
                            <div className="row justify-content-center">
                                {/* Single Faq */}
                                <div className="col-lg-6 col-md-10">
                                    <div className="d-flex mb-10 mb-lg-17">
                                        <div className="mr-6">
                                            <div className="bg-light-orange circle-28 text-white mt-1">
                                                <i className="fa fa-question" />
                                            </div>
                                        </div>
                                        <div className="">
                                            <h4 className="font-size-7 mb-7">
                                                Why are my fees displayed in ETH on MetaMask?
                                            </h4>
                                            <p className="font-size-5 pr-md-10 pr-lg-0 mb-0">
                                                MetaMask is originally built for Ethereum and does not support the
                                                native tokens of other blockchain networks.
                                                The ETH units displayed are actually AVAX units when on the Avalanche
                                                network.
                                                Therefore, to get the true cost of transactions, you need to multiply
                                                the units by the current market rate of AVAX.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Faq */}
                                {/* Single Faq */}
                                <div className="col-lg-6 col-md-10">
                                    <div className="d-flex mb-10 mb-lg-17">
                                        <div className="mr-6">
                                            <div className="bg-light-orange circle-28 text-white mt-1">
                                                <i className="fa fa-question" />
                                            </div>
                                        </div>
                                        <div className="">
                                            <h4 className="font-size-7 mb-7">
                                                Why do I have to make two transactions sometimes using MetaMask?
                                            </h4>
                                            <p className="font-size-5 pr-md-10 pr-lg-0 mb-0">
                                                MetaMask will ask you to first approve the YetiSwap app to interact with
                                                your tokens.
                                                Afterwards, you will then be able to confirm the transaction.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Faq */}
                                {/* Single Faq */}
                                <div className="col-lg-6 col-md-10">
                                    <div className="d-flex mb-10 mb-lg-17">
                                        <div className="mr-6">
                                            <div className="bg-light-orange circle-28 text-white mt-1">
                                                <i className="fa fa-question" />
                                            </div>
                                        </div>
                                        <div className="">
                                            <h4 className="font-size-7 mb-7">
                                                Am I able to use my Ethereum wallet on Avalanche?
                                            </h4>
                                            <p className="font-size-5 pr-md-10 pr-lg-0 mb-0">
                                                Yes - that is the power of Avalanche! It allows you to use your same
                                                wallet that you use on Ethereum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Faq */}
                                {/* Single Faq */}
                                <div className="col-lg-6 col-md-10">
                                    <div className="d-flex mb-10 mb-lg-17">
                                        <div className="mr-6">
                                            <div className="bg-light-orange circle-28 text-white mt-1">
                                                <i className="fa fa-question" />
                                            </div>
                                        </div>
                                        <div className="">
                                            <h4 className="font-size-7 mb-7">
                                                What is YTS?
                                            </h4>
                                            <p className="font-size-5 pr-md-10 pr-lg-0 mb-0">
                                                YTS is the YetiSwap governance token. Learn more about YTS governance <a className="hover:no-underline" href="/introduction">here</a>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Faq */}
                                {/* Single Faq */}
                                <div className="col-lg-6 col-md-10">
                                    <div className="d-flex mb-10 mb-lg-17">
                                        <div className="mr-6">
                                            <div className="bg-light-orange circle-28 text-white mt-1">
                                                <i className="fa fa-question" />
                                            </div>
                                        </div>
                                        <div className="">
                                            <h4 className="font-size-7 mb-7">
                                                Why does my liquidity not show up on the pools page?
                                            </h4>
                                            <p className="font-size-5 pr-md-10 pr-lg-0 mb-0">
                                                If you deposit your YSL tokens, your liquidity won’t show up on the pools page until you withdraw your YSL tokens.
                                                Technically, you are handing ownership of your liquidity to the staking pools and you can’t claim your liquidity until you withdraw your YSL tokens.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Faq */}
                                {/* Single Faq */}
                                <div className="col-lg-6 col-md-10">
                                    <div className="d-flex mb-10 mb-lg-17">
                                        <div className="mr-6">
                                            <div className="bg-light-orange circle-28 text-white mt-1">
                                                <i className="fa fa-question" />
                                            </div>
                                        </div>
                                        <div className="">
                                            <h4 className="font-size-7 mb-7">
                                                Do I still get fees when staking YSL to mine YTS?
                                            </h4>
                                            <p className="font-size-5 pr-md-10 pr-lg-0 mb-0">
                                                Yes. Fees are added to the pool and are extracted proportionally when you withdraw your YSL.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Faq */}
                                {/* Single Faq */}
                                <div className="col-lg-6 col-md-10">
                                    <div className="d-flex mb-10 mb-lg-17">
                                        <div className="mr-6">
                                            <div className="bg-light-orange circle-28 text-white mt-1">
                                                <i className="fa fa-question" />
                                            </div>
                                        </div>
                                        <div className="">
                                            <h4 className="font-size-7 mb-7">
                                                MetaMask is giving me an error and my transaction is still pending.
                                            </h4>
                                            <p className="font-size-5 pr-md-10 pr-lg-0 mb-0">
                                                If you have a pending transaction that has not finalized, you can try the following steps <a className="hover:no-underline" href="https://support.avalabs.org/en/articles/4872721-metamask-transactions-are-stuck-rejected">here</a>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Faq */}
                            </div>
                        </div>
                    </div>
                </PageWrapper>
            </>

    );
};
export default Faq;
