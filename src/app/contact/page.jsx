import Navbar from '@/components/common/Navbar/Navbar';
import Footer from '@/components/common/Footer/Footer';
import ContactForm from '@/components/contact/ContactForm/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo/ContactInfo';
import ContactMap from '@/components/contact/ContactMap/ContactMap';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <div className="contact-page">
          <ContactInfo />
          <ContactForm />
          <ContactMap />
        </div>
      </main>
      <Footer />
    </>
  );
} 