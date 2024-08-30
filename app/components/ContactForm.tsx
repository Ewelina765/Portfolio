'use client';

import { useRef, useState } from 'react';
import Swal from 'sweetalert2';

import '../../styles/contactForm.scss';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const formKey = process.env.NEXT_PUBLIC_KEY_FORM;

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (formKey) {
      formData.append('access_key', formKey);

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setIsSubmitted(true);
        formRef.current?.reset();
        Swal.fire({
          title: 'Good job!',
          text: 'Message sent successfully!',
          icon: 'success',
        });
      }
    } else {
      console.error(
        'Brak klucza dostępu (KEY_FORM) w zmiennych środowiskowych.'
      );
    }
  };

  return (
    <div className="contactForm">
      <form onSubmit={onSubmit} ref={formRef}>
        <div className="name-email-form">
          <div className="input-box">
            <label htmlFor="name">
              Your Name <span className="required">*</span>
            </label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="input-box">
            <label htmlFor="email">
              Your Email <span className="required">*</span>
            </label>
            <input type="email" id="email" name="email" required />
          </div>
        </div>
        <div className="message-form">
          <div className="input-box">
            <label htmlFor="message">
              Message <span className="required">*</span>
            </label>
            <textarea required id="message" name="message" />
          </div>
        </div>
        <button className="button-contact" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
