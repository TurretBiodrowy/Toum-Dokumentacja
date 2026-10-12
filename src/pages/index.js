import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const menuItems = [
    {label: 'ROLE', to: 'docs/role/O Rolach', icon: '/img/Ikony/Inne/Folder Role.png'},
    {label: 'MODYFIKATORY', to: '/docs/modyfikatory/O Modyfikatorach', icon: '/img/Ikony/Inne/Folder Mody.png'},
    {label: 'USTAWIENIA', to: '/docs/ustawienia/ogolne/Host-Specific Options', icon: '/img/Ikony/Inne/Settings.png'},
];

const subMenuItems = [
    {label: 'AKTUALIZACJE', to: '/blog'},
   // {label: 'INSTALOWACJA MODA', to: 'role'},
    //{label: 'MODY ROZSZERZAJĄCE', to: 'role'},
];

export default function Home() {
    return (
        <Layout title="Dokumentacja">
            <div className={styles.wrapper}>
                <div className={styles.topBar}>
                    <div className={styles.userBadge}>
                        <img src={useBaseUrl('/img/TOUMLogo.png')} alt="TOUMLogo" className={styles.avatar} />
                        <span className={styles.statusDot} />
                        <span className={styles.username}>TOWN OF US: MIRA</span>
                    </div>
                    <Link className={styles.friendsButton} to="https://discord.gg/jndkkaKK4h">
                        DC - STREFA WSPÓLNIKÓW
                    </Link>
                    <Link className={styles.friendsButton} to="https://discord.gg/kwR2YqUQAV">
                        DC - TOWN OF US
                    </Link>
                    <Link className={styles.friendsButton} to="https://au-avengers.github.io/docs.toum.gg/">
                        ORYGINALNA DOKUMENTACJA
                    </Link>
                    <Link className={styles.friendsButton} to="https://github.com/AU-Avengers/TOU-Mira">
                        LINK DO MODA
                    </Link>
                </div>

                <div className={styles.main}>
                    <div className={styles.sidebar}>
                        <h1 className={styles.logo}>NIEOFICJALNA DOKUMENTACJA</h1>
                        <div className={styles.panel}>
                            <div className={styles.menuGroup}>
                                {menuItems.map((item) => (
                                    <Link key={item.label} to={item.to} className={styles.menuButton}>
                                        <img src={useBaseUrl(item.icon)} alt="" className={styles.menuIcon} />
                                        <span>{item.label}</span>
                                    </Link>
                                ))}
                            </div>

                            <div className={styles.subMenuGroup}>
                                {subMenuItems.map((item) => (
                                    <Link key={item.label} to={item.to} className={styles.subMenuButton}>
                                        {item.label}
                                    </Link>
                                ))}
                            </div>

                            <div className={styles.footerRow}>
                                <Link to="/docs/Twórcy" className={styles.footerButton}>
                                    TWÓRCY
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.viewport}>
                        <div className={styles.stars} />
                        <div className={styles.viewportContent}>
                            <img
                                src={useBaseUrl('/img/MiraBanner.png')}
                                alt="MiraBanner"
                                className={styles.viewportImage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}