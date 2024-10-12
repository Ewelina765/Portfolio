'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { CiInstagram } from 'react-icons/ci';
import {
  PiYoutubeLogoThin,
  PiGithubLogoThin,
  PiLinkedinLogoThin,
} from 'react-icons/pi';

import '../../styles/layout.scss';
import useScrollSpy from '../hooks/useScrollSpy';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const path = usePathname();
  const sectionIds = ['home', 'skills', 'about', 'contact', 'blog'];
  const activeSectionId = useScrollSpy(sectionIds, { threshold: 0.35 });
  const [activeLink, setActiveLink] = useState<string>('');
  const [navigationOpen, setNaviagtionOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (path === '/blog') {
      setActiveLink('blog');
    } else {
      setActiveLink(activeSectionId);
    }
  }, [path, activeSectionId]);

  const socialMediaLinks = [
    {
      icon: <PiLinkedinLogoThin size={25} />,
      path: 'https://www.linkedin.com/in/ewelinakonieczkowska/',
    },
    {
      icon: <PiGithubLogoThin size={25} />,
      path: 'https://github.com/Ewelina765',
    },
    {
      icon: <PiYoutubeLogoThin size={25} />,
      path: 'https://www.youtube.com/@DevJourney1',
    },
    {
      icon: <CiInstagram size={25} />,
      path: 'https://www.instagram.com/_devjourney_?igsh=bjh4ZzU5OXF1Njl6&utm_source=qr',
    },
  ];
  const navItems = [
    { name: 'Home', path: '/#home', id: 'home' },
    { name: 'Skills', path: '/#skills', id: 'skills' },
    { name: 'About', path: '/#about', id: 'about' },
    { name: 'Contact', path: '/#contact', id: 'contact' },
    { name: 'Blog', path: '/blog', id: 'blog' },
  ];

  const closeMenu = () => {
    setNaviagtionOpen(false);
  };

  return (
    <section className="layout">
      <div className="content">{children}</div>
      <div className="layout__container">
        {(isMobile && navigationOpen) || !isMobile ? (
          <div className="layout__navigation">
            <div className="socialmedia">
              {socialMediaLinks.map(({ icon, path }) => (
                <Link key={path} href={path} className="link-class">
                  {icon}
                </Link>
              ))}
            </div>
            <div className="details">
              <h2 className="details__title">EWELINA KONIECZKOWSKA</h2>
              <nav>
                <ul>
                  {navItems.map((item) => (
                    <li
                      key={item.name}
                      className={
                        activeLink === item.id ? 'active-scroll-spy' : ''
                      }
                      onClick={closeMenu}
                    >
                      <Link href={item.path} className="link-class">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        ) : null}

        <button
          className="logo__container"
          onClick={() => {
            if (isMobile) {
              setNaviagtionOpen(!navigationOpen);
            }
          }}
        >
          <Image
            src="/images/logo_white.png"
            alt="logo"
            width={200}
            height={0}
            style={{ height: 'auto' }}
          />
        </button>
      </div>
    </section>
  );
};

export default Layout;
