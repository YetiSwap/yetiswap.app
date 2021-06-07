import React from "react";

import PageWrapper from "../components/PageWrapper";

import YTSDistribution from "../assets/image/YTS-distribution.png"
import YetiHelmet from "../components/YetiHelmet";

const Introduction = () => {
    return (
            <>
                <YetiHelmet
                        title="Introduction - Yeti Swap"
                        description="Learn more about Yeti Swap and the YTS token. Yeti Swap is a decentralized exchange for Avalanche assets."
                />
                <PageWrapper>
                    <div className="pt-20 pb-9 pb-md-16 pb-lg-21">
                        <div className="container">
                            <div className="">
                                <div className="row justify-content-center">
                                    <div className="w-100">
                                        <div>
                                            <div className="mt-1 mt-lg-11">
                                                <h5 className="font-size-7 mb-7">Introduction</h5>
                                                <p className="heading-default-color">YetiSwap is a decentralized exchange (DEX) which runs on Avalanche, uses the
                                                    <a className="ml-1"
                                                       href="https://uniswap.org/docs/v2/protocol-overview/how-uniswap-works/">same
                                                        automated market-making (AMM) model as Uniswap</a>, features a native
                                                    governance token called YTS that is fully community distributed and is
                                                    capable of trading all
                                                    tokens issued on Ethereum and Avalanche. In a crowded marketplace with
                                                    multiple contenders, YetiSwap offers three
                                                    critically important benefits: <strong>fast and cheap trades</strong>, and a <strong>fair and open token distribution</strong>.
                                                </p>
                                                <p className="heading-default-color">First, YetiSwap can finalize trades quickly and cheaply. Since YetiSwap is built on Avalanche, it enables users to
                                                    swap assets while enjoying sub-second transaction finality and transaction fees as low as a few cents. Oftentimes,
                                                    trades on YetiSwap will feel as fast as trades on centralized exchanges. Second, beyond the significant
                                                    performance upgrades to the technical status quo.</p>
                                                <p className="heading-default-color">Users of existing AMMs, such as Pangolin, Uniswap and Sushiswap, are already familiar with their mechanism of action.
                                                    Therefore, the rest of this post does not discuss how YetiSwap achieves its trading capabilities. Instead, we
                                                    discuss the YTS token in more detail, including its distribution mechanism and governance rules.</p>
                                            </div>
                                            <div className="mt-9 mt-lg-11">
                                                <h5 className="font-size-7 mb-7">YTS Distribution</h5>
                                                <p className="heading-default-color">We will at community driven in the future...</p>
                                            </div>
                                            <div className="mt-9 mt-lg-13">
                                                <h5 className="font-size-7 mb-7">
                                                    Distribution Breakdown
                                                </h5>
                                                <p className="heading-default-color">No YTS tokens are allocated to the investors, advisors, or any sort of insiders. YTS is capped at a supply of 556 million tokens, 100% of
                                                    which will be distributed to the community according to
                                                    <p className="heading-default-color">
                                                        <img width="70%" className="mb-5 mt-5" src={YTSDistribution} alt="YTS Distribution" />
                                                        <p> <strong>Chart 1</strong>. The first 90% of tokens, or 500 million tokens, are dedicated to the community treasury,
                                                            where they will initially be used to fund liquidity mining. 5% of tokens, or 28 million tokens, are dedicated to a community airdrop and  5% of tokens, 28 million tokens, dev fee</p>
                                                    </p>
                                                </p>
                                            </div>
                                            <div className="mt-9 mt-lg-13">
                                                <h5 className="font-size-7 mb-7">Community - Liquidity Mining Allocation (90% of YTS)</h5>
                                                <p className="heading-default-color">The vesting schedule is algorithmically specified as follows: starting from 250 M tokens for the first four years,
                                                    the number of tokens distributed halves every additional four years, meaning that the next four years contribute
                                                    roughly a quarter, and so on. This pattern continues into perpetuity. For reference, during the first four years,
                                                    roughly 5.2 M YTS will be distributed per month to liquidity miners. The full schedule of distribution of YTS in
                                                    the liquidity mining allocation is shown below:</p>
                                            </div>
                                            <div className="mt-9 mt-lg-13">
                                                <table className="w-100 heading-default-color distribution-table">
                                                    <thead>
                                                    <tr>
                                                        <th>Time</th>
                                                        <th>Total YTS Distributed</th>
                                                        <th>YTS / Month</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>0 - 4 years</td>
                                                        <td>250 M</td>
                                                        <td>~ 5.2 M</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4 - 8 years</td>
                                                        <td>125 M</td>
                                                        <td>~ 2.6M</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8 - 12 years</td>
                                                        <td>62.5 M</td>
                                                        <td>~ 1.3 M</td>
                                                    </tr>
                                                    <tr>
                                                        <td>12 - 16 years</td>
                                                        <td>31 M</td>
                                                        <td>~ 650 K</td>
                                                    </tr>
                                                    <tr>
                                                        <td>16 - 20 years</td>
                                                        <td>15.5 M</td>
                                                        <td>~ 325 K</td>
                                                    </tr>
                                                    <tr>
                                                        <td>20 - 24 years</td>
                                                        <td>7.5 M</td>
                                                        <td>~ 162 K</td>
                                                    </tr>
                                                    <tr>
                                                        <td>24 - 28 years</td>
                                                        <td>3.5 M</td>
                                                        <td>~ 81 K</td>
                                                    </tr>
                                                    <tr>
                                                        <td>...</td>
                                                        <td>...</td>
                                                        <td>...</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="mt-9 mt-lg-13">
                                                <h5 className="font-size-7 mb-7">Developer Fee (5% of YTS)</h5>
                                            </div>
                                            <div className="mt-9 mt-lg-13">
                                                <table className="w-100 heading-default-color distribution-table">
                                                    <thead>
                                                    <tr>
                                                        <th>Time</th>
                                                        <th>Total YTS Distributed</th>
                                                        <th>YTS / Month</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>0 - 4 years</td>
                                                        <td>14 M</td>
                                                        <td>~ 291 K</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4 - 8 years</td>
                                                        <td>7 M</td>
                                                        <td>~ 145 K</td>
                                                    </tr>
                                                    <tr>
                                                        <td>8 - 12 years</td>
                                                        <td>3.5 M</td>
                                                        <td>~ 72.5 K</td>
                                                    </tr>
                                                    <tr>
                                                        <td>12 - 16 years</td>
                                                        <td>1.75 M</td>
                                                        <td>~ 36 K</td>
                                                    </tr>
                                                    <tr>
                                                        <td>16 - 20 years</td>
                                                        <td>875 K</td>
                                                        <td>~ 18 K</td>
                                                    </tr>
                                                    <tr>
                                                        <td>20 - 24 years</td>
                                                        <td>437 K</td>
                                                        <td>~ 9 K</td>
                                                    </tr>
                                                    <tr>
                                                        <td>24 - 28 years</td>
                                                        <td>218 K</td>
                                                        <td>~ 4.5 K</td>
                                                    </tr>
                                                    <tr>
                                                        <td>...</td>
                                                        <td>...</td>
                                                        <td>...</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="mt-9 mt-lg-13">
                                                <h5 className="font-size-7 mb-7">Community - Airdrop Allocation (5% of YTS)</h5>
                                                <p className="heading-default-color">We will distribute totally 28m YTS on Airdrop in different phases. Details will be announced later...</p>
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
export default Introduction;
