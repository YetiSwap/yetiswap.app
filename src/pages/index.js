import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home/Hero";
import YetiHelmet from "../components/YetiHelmet";

const Index = () => {
    return (
            <>
                <YetiHelmet
                        title="Yeti Swap - Scale Your DeFi Trading"
                        description="Yeti Swap decentralized exchange for Avalanche and Ethereum assets with fast settlement, low transaction fees"
                />
                <PageWrapper>
                    <Hero className="position-relative pt-22 pt-lg-31 pb-13 pb-lg-25" />
                </PageWrapper>
            </>
    );
};
export default Index;
