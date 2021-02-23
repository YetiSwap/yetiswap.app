import React, {useContext} from "react";
import GlobalContext from "../../context/GlobalContext";
import imgFavicon from "../../assets/favicon.png";
import ogImage from "../../assets/image/OGImage.png";
import {Helmet} from "react-helmet";

const YetiHelmet = ({title, description}) => {
    const gContext = useContext(GlobalContext);

    return <Helmet>
        <title>{title}</title>
        <link rel="icon" type="image/png" href={imgFavicon} />
        <meta name="description" content={description} />

        <meta name="twitter:site" content="@YetiSwap" />
        <meta name="twitter:creator" content="@YetiSwap" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImage} />

        <body data-theme={gContext.theme.bodyDark ? "dark":"light"} />
    </Helmet>
};

export default YetiHelmet;