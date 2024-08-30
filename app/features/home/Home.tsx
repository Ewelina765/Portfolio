
import Image from 'next/image';

import '../../../styles/home.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="left" id="home">
      <div className="left-container">
        <p>
          JUNIOR <span className="p-red">FULLSTACK</span> DEVELOPER
        </p>
        <div className="h1">
          <h1>
            Hello I<span className="p-red">'</span>m{' '}
            <span className="p-red">Ewelina</span>
          </h1>
          <h1>Konieczkowska</h1>
        </div>
        <p className="text">
          With a strong work ethic and open-minded approach, I prioritize
          teamwork and value each member's input to achieve shared goals and
          foster a positive work environment.
        </p>
        <Link href="/#skills">
          <button>Explore my work</button>
        </Link>
      </div>
      <div className="foto-container">
        <Image
          src="/images/ek4.svg"
          alt="Ewelina Konieczkowska"
          width={600}
          height={750}
          className="foto"
          priority={true}
        />
      </div>
    </div>
  );
}
