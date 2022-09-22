import avalancheLogo from '../../assets/image/avalanche.png';
import bobaLogo from '../../assets/image/BobaLogo.png';

export const menuItems = [
    {
        name: "https://exchange.yetiswap.app/",
        label: "Exchange",
        isExternal: true
    },
    {
        name: "https://marketplace.yetiswap.app/",
        label: "NFT Marketplace",
        isExternal: true,
        items: [
            {
                name: "https://marketplace.yetiswap.app/",
                label: "Avalanche",
                img: avalancheLogo,
                isExternal: true
            },
            {
                name: "https://bobamarket.yetiswap.app/",
                label: "BobaNetwork",
                img: bobaLogo,
                isExternal: true
            }
        ]
    },
    {
        name: "https://info.yetiswap.app/",
        label: "Analytics",
        isExternal: true
    },
    {
        name: "https://docs.yetiswap.app/",
        label: "Docs",
        isExternal: true
    }
];