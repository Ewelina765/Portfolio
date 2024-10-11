import Image from 'next/image';

import '../../../styles/about.scss';

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="about__title">About</h2>
      <div className="about__foto-container">
        <Image
          src="/images/eklong.svg"
          alt="Picture nr 2 of the author"
          fill={true}
          className="about__foto"
        />
        <div className="name-sacramento-container">
          <p className="name-sacramento">Ewelina</p>
        </div>
      </div>
      <div className="about__text-container">
        <div className="paragraph__and-box">
          <p className="paragraph__near-box">
            I graduated with a degree in pharmacy but quickly realized that this
            career path wasn't for me. Seeking new opportunities, I enrolled in
            a frontend development course and found creating websites to be
            incredibly enjoyable. The course sparked my interest, and I began
            designing websites for my friends and family. This is how my passion
            for web development began. As I explored frontend development, I
            became curious about what happens "under the hood," which led me to
            learn about backend development as well.
          </p>
          <div className="info-box">
            <div className="info-box__container">
              <div className="info-box__details">
                <h3>Email</h3>
                <a href="mailto:ewelinakonieczkowska@gmail.com">
                  <button className="info-box__button">Send an email</button>
                </a>
              </div>
              <div className="info-box__details">
                <h3>English CV</h3>
                <a href="/cv/english.pdf" download>
                  <button className="info-box__button">
                    Download my CV in English
                  </button>
                </a>
              </div>
              <div className="info-box__details">
                <h3>Polish CV</h3>
                <a href="/cv/polish.pdf" download>
                  <button className="info-box__button">
                    Download my CV in Polish
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="paragraphs-container">
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
