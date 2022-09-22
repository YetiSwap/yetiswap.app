import React from "react";
import { Link } from "gatsby";

import { menuItems } from "./menuItems";

const Menu = () => {
  return (
    <>
      <ul className="navbar-nav main-menu d-none d-lg-flex">
        {menuItems.map(
          ({ label, isExternal = false, name, items, ...rest }, index) => {
            const hasSubItems = Array.isArray(items);
            return (
              <React.Fragment key={name + index}>
                {hasSubItems ? (
                  <li className="nav-item dropdown" {...rest}>
                    <a
                      className="nav-link dropdown-toggle gr-toggle-arrow"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      href="/#"
                      onClick={(e) => e.preventDefault()}
                    >
                      {label}
                      <i className="icon icon-small-down" />
                    </a>
                    <ul className="gr-menu-dropdown dropdown-menu">
                      {items.map((subItem, indexSub) => {
                        const hasInnerSubItems = Array.isArray(subItem.items);
                        return (
                          <React.Fragment key={subItem.name + indexSub}>
                            {hasInnerSubItems ? (
                              <li className="drop-menu-item dropdown">
                                <a
                                  className="dropdown-toggle gr-toggle-arrow"
                                  role="button"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                  aria-haspopup="true"
                                  href="/#"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  {subItem.label}
                                  <i className="icon icon-small-down"></i>
                                </a>
                                <ul className="gr-menu-dropdown dropdown-menu dropdown-right">
                                  {subItem.items.map(
                                    (itemInner, indexInnerMost) => (
                                        <li
                                          className="drop-menu-item"
                                          key={itemInner.name + indexInnerMost}
                                        >
                                          {itemInner.isExternal ? (
                                            <a
                                              href={`${itemInner.name}`}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                            >
                                              {itemInner.img && <img src={itemInner.img} height={"32px"} width={"32px"} />}
                                              {itemInner.label}
                                            </a>
                                          ) : (
                                            <Link to={`/${itemInner.name}`}>
                                              {itemInner.label}
                                            </Link>
                                          )}
                                        </li>
                                      )
                                  )}
                                </ul>
                              </li>
                            ) : (
                              <li className="drop-menu-item">
                                {subItem.isExternal ? (
                                  <a
                                    href={`${subItem.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {subItem.img && <img src={subItem.img} height={"32px"} width={"32px"} />}
                                    {subItem.label}
                                  </a>
                                ) : (
                                  <Link to={`/${subItem.name}`}>
                                    {subItem.label}
                                  </Link>
                                )}
                              </li>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item" {...rest}>
                    {isExternal ? (
                      <a
                        className="nav-link"
                        href={`${name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {label}
                      </a>
                    ) : (
                      <Link
                        className="nav-link"
                        to={`/${name}`}
                        role="button"
                        aria-expanded="false"
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                )}
              </React.Fragment>
            );
          }
        )}
      </ul>
    </>
  );
};
export default Menu;
