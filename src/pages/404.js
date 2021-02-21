import React from "react";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";

import imgE from "../assets/image/404-error-img.png";

const PricingPage = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          footerStyle: "style5"
        }}
      >
        <div className="pt-24 pt-md-26 pb-15 pt-lg-33 pb-md-19 pb-lg-25">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-8 col-sm-11">
                <div className="text-center">
                  <div
                    className="mb-8 mb-lg-16"
                    data-aos="fade-up"
                    data-aos-duration={500}
                  >
                    <img className="w-100 w-xs-auto" src={imgE} alt="" />
                  </div>
                  <h1
                    className="font-size-13 mb-8"
                    data-aos="fade-up"
                    data-aos-duration={700}
                  >
                    404 Error
                  </h1>
                  <p
                    className="font-size-7 mb-0"
                    data-aos="fade-up"
                    data-aos-duration={900}
                  >
                    The page you are looking for is not available or doesn’t belong to this website!
                  </p>
                  <div className="">
                    <div
                      className="pt-11 max-w-322 mx-auto"
                      data-aos="fade-up"
                      data-aos-duration={1100}
                    >
                      <Link
                        to="/"
                        className="btn btn-bali-gray w-100 text-white"
                      >
                        Go back to home
                      </Link>
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
export default PricingPage;
