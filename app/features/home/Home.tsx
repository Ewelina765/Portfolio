import Image from 'next/image';
import Link from 'next/link';

import '../../../styles/home.scss';
import '../../../styles/globals.scss';

export default function Home() {
  return (
    <>
      <div className="white-bar"></div>
      <div className="home" id="home">
        <div className="home__container">
          <div className="details__container">
            <p>
              JUNIOR <span className="p-green">FRONTEND</span> DEVELOPER
            </p>
            <div className="home__title">
              <h1>
                Hello I<span className="p-green">&apos;</span>m{' '}
                <span className="p-green">Ewelina</span>
              </h1>
              <h1>Konieczkowska</h1>
            </div>
            <p className="details__content">
              With a strong work ethic and open-minded approach, I prioritize
              teamwork and value each member&apos;s input to achieve shared
              goals and foster a positive work environment.
            </p>
            <div className="home__button-container">
              <Link href="/#skills">
                <button className="home__button">Explore my work</button>
              </Link>
              <Link href="/#contact">
                <button className="home__button">Contact with me</button>
              </Link>
            </div>
          </div>
          <div className="home__foto-container">
            <Image
              src="/images/ek4.svg"
              alt="Ewelina Konieczkowska"
              width={600}
              height={750}
              className="home__foto"
              priority={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}
