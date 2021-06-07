import React from "react";

import PageWrapper from "../components/PageWrapper";
import YetiHelmet from "../components/YetiHelmet";

const NftMarketplaceTutorial = () => {
    return (
        <>
            <YetiHelmet
                title="NFT Marketplace Public Beta Tutorial - Yeti Swap"
                description="NFT Marketplace Public Beta Tutorial. Yeti Swap is a decentralized exchange for Avalanche."
            />
            <PageWrapper>
                <div className="pt-20 pb-9 pb-md-16 pb-lg-21">
                    <div className="container">
                        <div className="">
                            <div className="row justify-content-center">
                                <div className="w-100">
                                    <div>
                                        <div className="mt-1 mt-lg-11">
                                            <h5 className="font-size-7 mb-7">NFT Marketplace Public Beta Tutorial</h5>
                                            <p className="heading-default-color">
                                                YetiSwap NFT Marketplace public beta has begun. Please follow these
                                                steps and if you find any error or bug please send your error/bug report
                                                to <a href="mailto:info@yetiswap.app">info@yetiswap.app</a> mail
                                                addresses with a detailed explanation like how
                                                you get it when you get it if it’s related to your transaction which
                                                blocks and whats the transaction hash etc.cls
                                            </p>
                                        </div>
                                        <div className="mt-9 mt-lg-11">
                                            <p className="heading-default-color">
                                                <h5 className="font-size-7 mb-7">Step 1:</h5>
                                                Setup your Metamask wallet to Avalanche Fuji Testnet: <br/>
                                                Helping document: <br/>
                                                <a href="https://www.blockreed.com/how-to-setup-avalanche-c-chain-on-metamask/"
                                                   rel="noreferrer nofollow"
                                                   target="_blank"
                                                >
                                                    https://www.blockreed.com/how-to-setup-avalanche-c-chain-on-metamask/
                                                </a>
                                            </p>
                                            <p className="heading-default-color">
                                            <strong>Fuji testnet settings:</strong> <br/><br/>

                                                <strong>Network Name:</strong> Avalanche FUJI C-Chain <br/>
                                                <strong>New RPC
                                                    URL: </strong>https://api.avax-test.network/ext/bc/C/rpc <br/>
                                                <strong>ChainID:</strong> 0xa869<br/>
                                                <strong>Symbol: </strong>AVAX <br/>
                                                <strong>Block Explorer
                                                    URL:</strong> https://cchain.explorer.avax-test.network
                                            </p>
                                        </div>
                                        <div className="mt-9 mt-lg-11">
                                            <p className="heading-default-color">
                                                <h5 className="font-size-7 mb-7">Step 2:</h5>
                                                Fund your wallet with Testnet Avax coin from the Test Network Faucet at<br/>
                                                <a target="_blank" href="https://faucet.avax-test.network/"
                                                   rel="noreferrer nofollow">
                                                    https://faucet.avax-test.network/
                                                </a>
                                            </p>
                                        </div>
                                        <div className="mt-9 mt-lg-11">
                                            <p className="heading-default-color">
                                                <h5 className="font-size-7 mb-7">Step 3:</h5>
                                                Connect your metamask wallet to public beta website :
                                                <a target="_blank" className="ml-1" href="https://beta.yetiswap.app">
                                                    https://beta.yetiswap.app
                                                </a><br />
                                                Get Testnet YTS Token from :
                                                <a target="_blank" className="ml-1" href="https://beta.yetiswap.app/#/yts-faucet">
                                                    https://beta.yetiswap.app/#/yts-faucet
                                                </a><br />
                                            </p>
                                            <p className="heading-default-color">
                                                <strong>Don’t forget you will only get 1 time 5000 YTS</strong>
                                            </p>
                                        </div>
                                        <div className="mt-9 mt-lg-11">
                                            <p className="heading-default-color">
                                                <h5 className="font-size-7 mb-7">Step 4 (Optional):</h5>
                                                You can add test YTS to your metamask with the explanations in the “How to add a custom token?” section in this article ; <br />
                                                <a href="https://metamask.zendesk.com/hc/en-us/articles/360015489031-How-to-view-see-your-tokens-custom-tokens-in-Metamask"
                                                   rel="noreferrer nofollow"
                                                   target="_blank"
                                                >
                                                    https://metamask.zendesk.com/hc/en-us/articles/360015489031-How-to-view-see-your-tokens-custom-tokens-in-Metamask
                                                </a>
                                            </p>
                                            <p className="heading-default-color">
                                                <strong>Test YTS contract address :</strong> 0xbd405AA77E50085706040c66E79c1CE78E7f4861
                                            </p>
                                        </div>
                                        <div className="mt-9 mt-lg-11">
                                            <p className="heading-default-color">
                                                <h5 className="font-size-7 mb-7">Step 5:</h5>
                                                Start testing YetiSwap NFT Marketplace from : <br />
                                                <a target="_blank" href="https://beta.yetiswap.app/#/nft-marketplace">
                                                    https://beta.yetiswap.app/#/nft-marketplace
                                                </a>
                                            </p>
                                        </div>
                                        <div className="mt-9 mt-lg-11">
                                           <p className="heading-default-color">Thanks. <br/> YetiSwap Team  </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>
    );
};
export default NftMarketplaceTutorial;
