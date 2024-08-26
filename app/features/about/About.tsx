import Image from 'next/image';

import '../../../styles/about.scss';

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="h2-about">About</h2>
      <div className="foto-about-container">
        <Image
          src="/eklong.svg"
          alt="Picture nr 2 of the author"
          layout="fill"
          className="foto-about"
        />
        <div className="text-overlay">
          <p className="sacramento">Ewelina</p>
        </div>
      </div>
      <div className="text-container">
        <div className="pandbox">
          <p className="pfromthebox">
            I graduated with a degree in pharmacy but quickly realized that this
            career path wasn't for me. Seeking new opportunities, I enrolled in
            a frontend development course and found creating websites to be
            incredibly enjoyable. The course sparked my interest, and I began
            designing websites for my friends and family. This is how my passion
            for web development began. As I explored frontend development, I
            became curious about what happens "under the hood," which led me to
            learn about backend development as well.
          </p>
          <div className="info-box-container">
            <div className="info-box">
              <div className="info-details">
                <h3>Email</h3>
                <h4>ewelinakonieczkowska@gmail.com</h4>
              </div>
              <div className="info-details">
                <h3>English CV</h3>
                <h4>plik z CV do pobranie</h4>
              </div>
              <div className="info-details">
                <h3>Polish CV</h3>
                <h4>plik z CV do pobrania</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="p2-container">
          <p>
            I am eager to work and thrive in environments that challenge my
            curiosity and problem-solving abilities. To me, programming feels
            like solving puzzles or tackling complex riddles, and finding the
            solutions brings immense satisfaction. I bring positive energy to my
            work, which enhances collaboration and inspires those around me. I
            enjoy working with others and am open and ready to contribute to a
            team. My enthusiasm for tackling challenges and learning new things
            drives my passion for development.
          </p>
          <p>
            Lately, I have developed a keen interest in artificial intelligence
            and no-code tools like Bubble.io and Make.com. It's exciting to
            explore how programming can be combined with AI to create innovative
            solutions. I see tremendous potential in these technologies, as they
            empower developers to build sophisticated applications more
            efficiently. The synergy between coding and AI opens up new
            possibilities, and I'm enthusiastic about where this path will lead.
          </p>
        </div>
        <p>
          Looking ahead, I aspire to work in an inclusive where I can
          continuously grow and contribute. Building strong relationships with
          colleagues is incredibly important to me, as I believe that supporting
          one another fuels the entire team's success. I am passionate about
          fostering a collaborative atmosphere where everyone feels valued and
          inspired to achieve their best. My goal is to be part of a team that
          shares this vision and works together to create innovative and
          impactful solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
