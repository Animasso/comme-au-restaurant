import SectionPlat from "../components/SectionPlat";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <>
      <Hero />
      <SectionPlat />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
