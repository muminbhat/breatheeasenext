import Image from "next/image";
import { About, Hero, Services } from "./components/HomePageComponents";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookAppointment from "./components/BookAppointment";
import FeedBack from "./components/FeedBack";

export default function Home() {
  return (
   <>
   <div className="max-w-[85rem] mx-auto px-5 sm:px-6 lg:px-8">
   <Navbar />
   <Hero />
   <About />
   <Services />
   <BookAppointment />
   <FeedBack />
   <Footer />
   </div>
   </>
  );
}
