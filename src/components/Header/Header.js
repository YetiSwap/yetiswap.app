import React, {useState, useContext} from "react";
import styled from "styled-components";
import {Container} from "react-bootstrap";
import {useScrollPosition} from "@n8tb1t/use-scroll-position";

import GlobalContext from "../../context/GlobalContext";
import Offcanvas from "../Offcanvas";
import Menu from "./Menu";
import NestedMenu from "../NestedMenu";
import Logo from "../Logo";

const SiteHeader = styled.header``;

const ToggleButton = styled.button``;

const Header = () => {
    const gContext = useContext(GlobalContext);
    const [showScrolling, setShowScrolling] = useState(false);
    const [showReveal, setShowReveal] = useState(false);

    useScrollPosition(({prevPos, currPos}) => {
        if (currPos.y < 0) {
            setShowScrolling(true);
        } else {
            setShowScrolling(false);
        }
        if (currPos.y < -300) {
            setShowReveal(true);
        } else {
            setShowReveal(false);
        }
    });

    return (
            <>
                <SiteHeader
                        className={`site-header ${
                                gContext.theme.headerClassName
                        } px-7 px-lg-10 dynamic-sticky-bg site-header--absolute site-header--sticky

        ${showScrolling ? "scrolling":""} ${
                                showReveal ? "reveal-header ":""
                        }`}
                >
                    <Container fluid={gContext.theme.headerFluid}>
                        <nav className="navbar site-navbar offcanvas-active navbar-expand-lg  px-0">
                            {/* <!-- Brand Logo--> */}
                            <div className="brand-logo mt-3 mt-md-0">
                                <Logo />
                            </div>

                            <div className="collapse navbar-collapse">
                                <div className="navbar-nav-wrapper">
                                    <Menu />
                                </div>
                            </div>

                            {gContext.theme.headerSocial && (
                                    <div
                                            className={`header-social-share ${
                                                    !gContext.theme.headerSocial ? "d-none":""
                                            }`}
                                    >
                                        <ul className="list-unstyled d-flex align-items-center text-right mb-0">
                                            <li>
                                                <a
                                                        target="_blank"
                                                        href="https://twitter.com/YetiSwap"
                                                        className="heading-default-color ml-10 gr-text-blue-3"
                                                        rel="noopener noreferrer"
                                                >
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                        target="_blank"
                                                        href="https://t.me/YetiSwap"
                                                        className="heading-default-color ml-10"
                                                        rel="noopener noreferrer"
                                                >
                                                    <i className="fab fa-telegram" />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                        target="_blank"
                                                        href="https://github.com/YetiSwap"
                                                        className="heading-default-color ml-10"
                                                        rel="noopener noreferrer"
                                                >
                                                    <i className="fab fa-github" />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    target="_blank"
                                                    href="https://discord.com/invite/EnXz5wD6"
                                                    className="heading-default-color ml-10"
                                                    rel="noopener noreferrer"
                                                >
                                                    <i className="fab fa-discord" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                            )}

                            <ToggleButton
                                    className={`navbar-toggler btn-close-off-canvas ml-3 ${
                                            gContext.visibleOffCanvas ? "collapsed":""
                                    }`}
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#mobile-menu"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                    onClick={gContext.toggleOffCanvas}
                                    dark={gContext.theme.headerDark ? 1:0}
                            >
                                {/* <i className="icon icon-simple-remove icon-close"></i> */}
                                <i className="icon icon-menu-34 icon-burger d-block" />
                            </ToggleButton>
                        </nav>
                    </Container>
                </SiteHeader>
                <div className="d-block d-lg-none">
                    <Offcanvas
                            show={gContext.visibleOffCanvas}
                            onHideOffcanvas={gContext.toggleOffCanvas}
                    >
                        <NestedMenu />
                    </Offcanvas>
                </div>
            </>
    );
};
export default Header;
