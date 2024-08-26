import Image from 'next/image';

import '../../../styles/contact.scss';
import ContactForm from '@/app/components/ContactForm';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2 className="contact-margin-left">Contact</h2>
      <p className="p-contact">
        I believe that{' '}
        <span className="p-red">collaboration and creativity</span> are the
        cornerstones of progress, and I am dedicated to bringing a fresh
        perspective.
      </p>{' '}
      <div className="divider"></div>
      <div className="info-details-contact">
        <h3>Email</h3>
        <h4>ewelinakonieczkowska@gmail.com</h4>
      </div>
      <div className="foto-contact-container">
        <Image
          src="/contact5.svg"
          alt="Picture nr 2 of the author"
          fill={true}
          className="foto-contact"
          quality={100}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
