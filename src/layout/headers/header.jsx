import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import MainMenu from '../headers/component/main-menu';
import HeaderTopRight from '../headers/component/header-top-right';
import HeaderTopLeft from '../headers/component/header-top-left';
import SearchPopup from '../../components/common/popup-modal/search-popup';
import useSticky from '../../hooks/use-sticky';
import { wishlistItems } from '../../redux/features/wishlist-slice';
import useCartInfo from '../../hooks/use-cart-info';
import OffCanvas from '../../components/common/sidebar/off-canvas';
import Cart from './component/cart';
import { useCategoryQuery } from "@/data/category/use-category.query";  

const Header =  ({ header_style, no_top_bar, disable_full_width, disable_category,cls='' }) => {
    const { sticky } = useSticky();
    const { quantity } = useCartInfo();
    const wishlists = useSelector(wishlistItems);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false); 

    const {
    data: category = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useCategoryQuery({ 
    where: { deleted: 0,categoryType:"course" },
    order: ["createdAt DESC"],
  });
  
  const categories = category
  .filter(cat => cat.status === 'active' && !cat.deleted)
  .map(cat => ({
    link: `/courses/category/${cat.identifier}`,
    title: cat.categoryName
  }));
  

    return (
        <>
            <header className={`edu-header header-style-${header_style ? header_style : '1'} ${ disable_full_width ? 'disbale-header-fullwidth' : 'header-fullwidth' } ${no_top_bar ? 'no-topbar' : ''} ${cls}`}>
                { ! no_top_bar && 
                    <div className="header-top-bar">
                        <div className="container-fluid">
                            <div className="header-top">
                                <div className="header-top-left">
                                    <HeaderTopLeft />
                                </div>
                                <div className="header-top-right">
                                    <HeaderTopRight />
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div id="edu-sticky-placeholder"></div>
                <div className={`header-mainmenu ${sticky ? 'edu-sticky' : ''}`}>
                    <div className="container-fluid">
                        <div className="header-navbar">
                            <div className="header-brand">
                                <div className="logo">
                                    <Link href={'/'}>
                                        <>
                                            <img className="logo-light" src='/assets/images/logo/logo-dark.png' alt="logo" />
                                            <img className="logo-dark" src='/assets/images/logo/logo-white.png' alt="logo" />
                                        </>
                                    </Link>
                                </div>

                                { ! disable_category &&
                                    <div className="header-category">
                                        <nav className="mainmenu-nav">
                                            <ul className="mainmenu">
                                                <li className="has-droupdown">
                                                    <a href="#"><i className="icon-1"></i>Category</a>
                                                    <ul className="submenu">
                                                        {
                                                            categories.map((category, i) => (
                                                                <li key={i}>
                                                                    <Link href={`${category.link}`}>
                                                                        {category.title}
                                                                    </Link>
                                                                </li>
                                                            ) )
                                                        }
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                }
                            </div>
                            <div className="header-mainnav">
                                <nav className="mainmenu-nav">
                                    {/* main menu start */}
                                    <MainMenu />
                                    {/* main menu end */}
                                </nav>
                            </div>
                            <div className="header-right">
                                <ul className="header-action">
                                    <li className="search-bar">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search" />
                                            <button className="search-btn" type="button">
                                                <i className="icon-2"></i>
                                            </button>
                                        </div>
                                    </li>
                                    <li className="icon search-icon">
                                        <a style={{cursor:'pointer'}} onClick={() => setIsSearchOpen(true)} className="search-trigger">
                                            <i className="icon-2"></i>
                                        </a>
                                    </li>
                                    <li className="icon">
                                        <Link href="/wishlist" className="wishlist">
                                                <i className="icon-22"></i>
                                                <span className="count">{wishlists?.length}</span>
                                        </Link>
                                    </li>
                                    <li className="icon cart-icon">
                                        <Link href="/cart" className="cart-icon">
                                            <i className="icon-3"></i>
                                            <span className="count">{quantity}</span>
                                        </Link>
                                        <Cart />
                                    </li>
                                    <li className="header-btn">
                                        <Link href="/sign-in" className="edu-btn btn-medium">
                                           Registration <i className="icon-4"></i>
                                        </Link>
                                    </li>
                                    <li className="mobile-menu-bar d-block d-xl-none">
                                        <button className="hamberger-button" onClick={() => setIsOpen(true)}>
                                            <i className="icon-54"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Start Search Popup  --> */}
                <SearchPopup isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
                {/* <!-- End Search Popup  --> */}
            </header>

            {/* sidebar start */}
            <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
            {/* sidebar end */}
        </>
    )
}

export default Header;