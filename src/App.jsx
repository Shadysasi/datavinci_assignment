import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Payment from './components/payment';
import Carousel from './components/carousel';
import umflist from "./assets/umfList.png";
import VariantSecion from './components/VariantSecion';

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <Navbar />
      
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Column - Carousel and UMF List */}
        <div className="hidden w-full lg:w-1/2 lg:flex flex-col items-center justify-start p-4 lg:p-6 order-2 lg:order-1">
          <div className="w-full max-w-md lg:max-w-full mb-6">
            <Carousel />
          </div>
          <div className="w-full max-w-md lg:max-w-full">
            <img 
              src={umflist} 
              alt="UMF rating scale" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        
        {/* Right Column - Hero and Payment */}
        <div className="w-full lg:w-1/2 flex flex-col order-1 lg:order-2">
          <div className="w-full">
            <Hero />
            <VariantSecion/>
          </div>
          <div className="w-full">
            <Payment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;