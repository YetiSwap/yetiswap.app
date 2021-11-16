import React from "react";
import {LiqPoolPartners, NFTPartners} from "../../utils/constants";

const Partners = ({className, ...rest}) => {
    function compare(a, b) {
        if (a.name < b.name) {
            return -1
        }
        if (a.name > b.name) {
            return 1
        }
        return 0
    }
    return <div className="col-lg-12 col-md-12 col-sm-12 order-2 order-lg-1 partners">
        <div className="partners-wrapper">
           <div className="partners-group">
               <div className="partners-group-title">
                   <h3>Partners</h3>
               </div>
               <div className="partner-group-list">
                   {
                       LiqPoolPartners.sort(compare).map((partnerItem) => ( <div key={`${partnerItem.id}_LIQ_POOL`} className={`partners-group-item ${partnerItem.id}`}>
                           <a href={partnerItem.website} target="_blank">
                               <div className="partners-group-item-logo"><img src={partnerItem.logo} alt={`${partnerItem.logo} Logo`} /></div>
                               <div className="partners-group-item-name">{partnerItem.name}</div>
                           </a>
                       </div>))
                   }
               </div>
           </div>
            <div className="partners-group nft">
                <div className="partners-group-title">
                    <h3>NFT Partners</h3>
                </div>
                <div className="partner-group-list">
                    {
                        NFTPartners.sort(compare).map((partnerItem) => ( <div key={`${partnerItem.id}_LIQ_POOL`} className={`partners-group-item ${partnerItem.id}`}>
                            <a href={partnerItem.website} target="_blank">
                                <div className="partners-group-item-logo"><img src={partnerItem.logo} alt={`${partnerItem.logo} Logo`} /></div>
                                <div className="partners-group-item-name">{partnerItem.name}</div>
                            </a>
                        </div>))
                    }
                </div>
            </div>
        </div>
    </div>
}

export default Partners