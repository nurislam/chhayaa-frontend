import React from 'react';
import menu_data from '../menu-data';
import Link from 'next/link';

const MainMenu = () => {
    return (
        <ul className="mainmenu">
            {menu_data.map((menu, i) => (
                <li key={i} className="has-droupdown">
                    <a href="#">{menu.title}</a>
                    {menu.home_mega_menu && 
                    <ul className="mega-menu mega-menu-one">
                        {menu.submenus.map((home_menu_items) => (
                        <li key={home_menu_items.id}>
                            <ul className="submenu mega-sub-menu mega-sub-menu-01">
                                {home_menu_items.sub_menus.map((hm,i) => (
                                 <li key={i}>
                                    <Link href={`${hm.link}`}>
                                        {hm.title}
                                        {hm?.hot && <span className="badge-1">hot</span>}
                                        {hm?.new && <span className="badge">new</span>}
                                    </Link>
                                   </li>
                                ))}
                            </ul>
                        </li>
                        ))}
                        <li>
                            <ul className="submenu mega-sub-menu-01">
                                <li>
                                    <a href="https://1.envato.market/5bQ022">
                                        <img src="/assets/images/others/mega-menu-image.webp" alt="advertising Image"/>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    }
                    {!menu.mega_menu && 
                        <ul className="submenu">
                            {menu.submenus?.map((nav, i) => (
                                <li key={i}>
                                    <Link href={`${nav.link}`}>
                                            {nav.title}
                                            {nav?.hot && <span className="badge-1">hot</span>}
                                            {nav?.new && <span className="badge">new</span>}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    }
                    {menu.mega_menu && 
                        <ul className="mega-menu">
                            {menu.submenus.map((nav, i) => (
                                <li key={i}>
                                    <h6 className="menu-title">{nav.title}</h6>
                                    <ul className="submenu mega-sub-menu-01">
                                        {nav.mega_submenu.map((m, i) => (
                                            <li key={i}>
                                                <Link href={`${m.link}`}>
                                                    {m.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    }
                </li>
            ))}
        </ul>
    )
}

export default MainMenu;