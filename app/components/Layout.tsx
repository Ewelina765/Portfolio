'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import '../../styles/layout.scss';
import Image from 'next/image';
import useScrollSpy from '../hooks/useScrollSpy';
import { useEffect, useState } from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const path = usePathname();
  const sectionIds = ['home', 'skills', 'about', 'contact', 'blog']; // Identyfikatory sekcji do obserwacji
  const activeSectionId = useScrollSpy(sectionIds, { threshold: 0.5 }); // Użyj hooka useScrollSpy
  const [activeLink, setActiveLink] = useState<string>(''); // Dodaj stan dla aktywnego linku

  useEffect(() => {
    if (path === '/blog') {
      setActiveLink('blog');
    } else {
      setActiveLink(activeSectionId); 
    }
  }, [path, activeSectionId]);

  const socialMediaLinks = [
    { name: 'INS.', path: 'https://www.instagram.com' },
    { name: 'YT.', path: 'https://www.youtube.com/' },
    { name: 'LIN.', path: 'https://www.linkedin.com/in//' },
  ];
  const navItems = [
    { name: 'Home', path: '/#home', id: 'home' },
    { name: 'Skills', path: '/#skills', id: 'skills' },
    { name: 'About', path: '/#about', id: 'about' },
    { name: 'Contact', path: '/#contact', id: 'contact' },
    { name: 'Blog', path: '/blog', id: 'blog' },
  ];

  return (
    <section className="layout">
      <div className="content">{children}</div>
      <div className="right">
        <div className="socialmedia">
          {socialMediaLinks.map(({ name, path }) => (
            <Link key={name} href={path}>
              {name}
            </Link>
          ))}
        </div>
        <div className="details">
          <h2>EWELINA</h2>
          <nav>
            <ul>
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className={activeLink === item.id ? 'active-scroll-spy' : ''}
                >
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}

              {/* {navItems.map((item) =>
                item.id !== 'blog' ? (
                  <li
                    key={item.name}
                    className={activeId === item.id ? 'active-scroll-spy' : ''}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {path === '/blog' ? ( // Sprawdzenie, czy jesteś na stronie 'blog'
                      <Link href="/">{item.name}</Link>
                    ) : (
                      item.name 
                    )}
                  </li>
                ) : (
                  <li
                    key={item.name}
                    className={activeId === item.id ? 'active-scroll-spy' : ''} // Klasa CSS dla aktywnej sekcji
                  >
                    <Link href={item.path}>{item.name}</Link>
                  </li>
                )
              )} */}
            </ul>
          </nav>
        </div>
        <div className="logo-container">
          <Image src="/images/logo_white.png" alt="logo" width={200} height={0} />
        </div>
      </div>
    </section>
  );
};

export default Layout;
