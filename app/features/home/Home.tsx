'use client';

import Image from 'next/image';

import '../../../styles/home.scss';

export default function Home() {
  return (
    <div className="left">
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
        <button>Explore my work</button>
      </div>
      <div className="foto-container">
        <Image
          src="/ek4.svg"
          alt="Picture of the author"
          width={600}
          height={750}
          className="foto"
        />
      </div>
    </div>
  );
}
