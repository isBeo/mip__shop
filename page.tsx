import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection'
import ShopSection from '../components/shopsection';
import FaqSection from '../components/FaqItem';
import ContactSection from '../components/ContactForm';
import BlogSection from '../components/BlogSection';
import Menu from '../components/Menu'
import {serv__details} from '../components/ServicesSection'

export default function HomePage() {
const services__objects: serv__details[]=[
  {
    id:1,title:'INTENSIVE HYPNOBIRTHING CLASSES',
    url:'/swimmingmom.jpg',
    alt:'A pregnant swimming mom',
    w:2849,
    h:3799,
    color:'tomato',
    details:'Unlock the power of a calm and positive birth experience through our hypnobirthing technique that helps you connect with your body at birth and beyound.'
  },
  {
    id:2,
    title:'MINDFUL BREASTFEEDING  PREPARATION CLASSES',
    url:'/breastfeeding.jpg',
    alt:'A pregnant swimming mom',
    w:2849,
    h:3799,
    color:'green',
    details:'Get ready for a calm and positive breastfeeding experience'
  },
  {
    id:3,
    title:'BESPOKE BIRTH PLANNING SERVICES',
    url:'/bespoke.jpg',
    alt:'BIRTH PLANNING',
    w:2849,
    h:3799,
    color:'cyan',
    details:'Your Birth , Your way! Craft your unique birth experience with our bespoke birth planning services . Lets work together to create a personalised birth plan that reflects your vision & feels just right for you.'
  },
  {
    id:4,
    title:'POSTNATAL CARE  BUNDLE',
    url:'/postnatalbundle.png',
    alt:'postnatal care',
    w:2849,
    h:3799,
    color:'yellow',
    details:'Get an unhurried, evidence-based postnatal care tailored to meet your specific needs in the comfort of your home at your specified time.'
  },
  
]



  return (
    <>
      <Navbar />
      <Menu />
      <HeroSection />
      <AboutSection />
      {/* <ServicesSection /> */}
     <div className="list__of__services
            grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-2
     ">
     {
        services__objects.map(s=>(
         
            <ServicesSection
               id={s.id} 
               key={s.id}
               title={s.title}
               url={s.url}
               alt={s.alt}
               h={s.h}
               w={s.w}
               color={s.color}
               details={s.details}
            />
        ))
      }
     </div>
      <ShopSection />
      <BlogSection />
      <FaqSection />
      <div>
      {/* Other content on your homepage */}
      <section className="contact-section flex justify-center max-w-full p-6 ">
      <ContactSection />
      </section>
    </div>
      <Footer />
    </>
  );
}