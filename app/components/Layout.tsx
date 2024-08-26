'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

import '../../styles/layout.scss';
import Image from 'next/image';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const path = usePathname();
  // const searchParams = useSearchParams()
  // const search = searchParams.get('skills')

  const socialMediaLinks = [
    { name: 'INS.', path: 'https://www.instagram.com' },
    { name: 'YT.', path: 'https://www.youtube.com/' },
    { name: 'LIN.', path: 'https://www.linkedin.com/in//' },
  ];
  const navItems = [
    { name: 'Home', path: '/#home' },
    { name: 'Skills', path: '/#skills' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/#contact' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <div className="layout" id="home">
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
          <h2>EWELINA KONIECZKOWSKA</h2>
          <ul>
            {navItems.map((item) => (
              <li
                key={item.name}
                className={path === item.path ? 'active' : ''}
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="logo-container">
          <Image src="/logo_white.png" alt="logo" width={200} height={0} />
        </div>
      </div>
    </div>
  );
};
export default Layout;
