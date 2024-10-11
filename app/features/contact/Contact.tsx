import Image from 'next/image';

import ContactForm from '@/app/components/ContactForm';
import '../../../styles/contact.scss';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">Contact</h2>
      <p className="contact__description">
        I believe that{' '}
        <span className="p-green">collaboration and creativity</span> are the
        cornerstones of progress, and I am dedicated to bringing a fresh
        perspective.
      </p>{' '}
      <div className="divider-contact"></div>
      <div className="contact__info-details">
        <h3>Email</h3>
        <h4>ewelinakonieczkowska@gmail.com</h4>
      </div>
      <div className="contact__foto-container">
        <Image
          src="/images/contact5.svg"
          alt="Picture nr 2 of the author"
          fill={true}
          quality={100}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
