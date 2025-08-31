import { useState } from "react";
import { FaHeart } from "react-icons/fa";

import cert1 from "../assets/certification/cert1.png";
import cert2 from "../assets/certification/cert2.png";
import cert3 from "../assets/certification/cert3.png";
import cert4 from "../assets/certification/cert4.png";
import cert5 from "../assets/certification/cert5.png";
import cert6 from "../assets/certification/cert6.png";


const Hero = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="w-full flex items-start justify-center px-4 md:px-8 py-6 md:py-8 mb-6">
      <div className="max-w-4xl mx-auto w-full">
        {/* Main Heading */}
        <div className="mb-4 md:mb-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-900">
            Manuka Honey
          </h3>
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-800">UMF 24+</h3>
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-gray-800">MGO 1122+</h3>
        </div>
        
        {/* What is UMF and MGO Link */}
        <div className="mb-8 md:mb-10">
          <button 
            onClick={() => setShowInfo(!showInfo)} 
            className="text-gray-600 hover:text-gray-900 text-sm bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-colors duration-200"
          >
            What is UMF and MGO?
          </button>
        </div>

        {/* Info Modal */}
        {showInfo && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-4 md:p-6 max-h-[90vh] overflow-y-auto">
              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  UMF is the strength and purity rating of Manuka honey.
                </p>
                <div className="flex overflow-x-auto space-x-2 md:space-x-4 py-2">
                  {['10+', '15+', '20+', '24+', '26+', '28+', '30+'].map((rating) => (
                    <div 
                      key={rating} 
                      className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center 
                        ${rating === '24+' ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                      {rating}
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 mt-4">
                  The higher the number, the greater the potency and rarity of Manuka honey.
                </p>
              </div>
              
              <div>
                <p className="text-gray-700 mb-4">
                  MGO is the key natural compound that gives Manuka honey its special antibacterial strength.
                </p>
                <div className="flex overflow-x-auto space-x-2 md:space-x-4 py-2">
                  {['263+', '514+', '829+', '1122+', '1282+', '1450+', '1620+'].map((rating) => (
                    <div 
                      key={rating} 
                      className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center 
                        ${rating === '1122+' ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                      {rating}
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 mt-4">
                  The higher the number, the higher the antibacterial properties in the honey.
                </p>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button 
                  onClick={() => setShowInfo(false)}
                  className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* The Optimiser Section */}
        <div className="mb-6 md:mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <h2 className="text-lg md:text-xl text-gray-900">
            The Optimiser
          </h2>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="flex gap-1">
              {Array(5).fill().map((_, index) => (
                <FaHeart key={index} color="gold" size={16} />
              ))}
            </div>
            <h3 className="text-sm text-gray-900">825 REVIEWS</h3>
          </div>
        </div>
        
        <p className="text-md text-gray-900 mb-6 md:mb-8">
          For those times in life when quality comes first. This pure UMF™ 24+ Manuka Honey is powerfully active, sourced from wild and rugged locations around Aotearoa New Zealand and great for almost all uses. It has a full, delicious flavour and your body will love you for it.
        </p>
        
        {/* Certifications */}
        <div className="mt-4">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-2">
            <li className="flex justify-center">
              <img src={cert1} alt="Certification 1" className="max-h-12 md:max-h-16 w-auto" />
            </li>
            <li className="flex justify-center">
              <img src={cert2} alt="Certification 2" className="max-h-12 md:max-h-16 w-auto" />
            </li>
            <li className="flex justify-center">
              <img src={cert3} alt="Certification 3" className="max-h-12 md:max-h-16 w-auto" />
            </li>
            <li className="flex justify-center">
              <img src={cert4} alt="Certification 4" className="max-h-12 md:max-h-16 w-auto" />
            </li>
            <li className="flex justify-center">
              <img src={cert5} alt="Certification 5" className="max-h-12 md:max-h-16 w-auto" />
            </li>
            <li className="flex justify-center">
              <img src={cert6} alt="Certification 6" className="max-h-12 md:max-h-16 w-auto" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;