import { useState } from 'react';
import { TbReload } from "react-icons/tb";
import { SlArrowRight,SlArrowLeft  } from "react-icons/sl";
import { FaChevronDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import bundle1 from "../assets/bundle1.png";
import bundle2 from "../assets/bundle2.png";
import bundle3 from "../assets/bundle3.png";
import colourclub from "../assets/Colourclub.png";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";

const Payment = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className='w-auto flex flex-col items-start justify-start px-4 pt-8 mb-6'>
      <h4>PAYMENT OPTIONS (SELECT ONE)</h4>
      <div className='bg-gray-100 w-full p-4 rounded-2xl mt-6'>
        <div className='flex flex-col md:flex-row gap-3 mt-3'>
          <button className='flex md:flex-row justify-around items-center bg-yellowish border-0 rounded-full grow p-2 px-6'>
            <p className='text-white'>One-time <br/> purchase</p>
            <p className='text-white'>$55.88 <br/> USD</p>
          </button>
          <button className='flex md:flex-row justify-around items-center bg-white border-1 border-yellowish rounded-full grow p-2 px-6'>
            <p>Subscribe & save <br/> 20%</p>
            <p>$44.70 <br/> USD</p>
          </button>
        </div>
        <a href='#' className='text-sm flex items-center gap-2 mt-3'><TbReload /> <span>What is a Subscription?</span></a>
      </div>

      <div className='w-full mt-6'>
        <h5 className='text-sm'>SELECT QUANTITY</h5>
        <div className='flex gap-3 mt-3'>
          <div className='w-50 text-center bg-yellowish border-0 rounded-full p-2 px-6 text-white'>
              <button 
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="px-3 py-1 border-0"
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button 
                onClick={() => setQuantity(prev => prev + 1)}
                className="px-3 py-1 border-0"
              >
                +
              </button>
          </div>
          <button className='text-white text-center bg-black rounded-full p-2 px-6 grow'>
            ADD TO CART
          </button>
        </div>
      </div>

      <div className='bg-gray-100 w-full p-4 rounded-2xl mt-6'>
        <div className='flex justify-center items-center gap-4 mb-3'>
            <button><SlArrowLeft/></button>
            <h3 className='font-medium'>Beauty Bundle</h3>
            <button><SlArrowRight/></button>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-3'>
          <div className='flex justify-center items-center gap-2'>
            <div className='flex flex-col items-center'>
              <img src={bundle1} alt='bundle' className='mb-2'/>
              <p className='font-medium mb-2'>UMF 20+</p>
              <div class="relative">
                <button class="flex items-center h-8 pl-3 pr-2 border border-black focus:outline-none">
                  <span class="text-sm leading-none mr-2">250g</span>
                  <FaChevronDown/>
                </button>
              </div>
            </div>
            <p className='font-bold'><FaPlus/></p>
            <div className='flex flex-col items-center'>
              <img src={bundle2} alt='bundle' className='mb-2'/>
              <p className='font-medium mb-2'>UMF 24+</p>
              <div class="relative">
                <button class="flex items-center h-8 pl-3 pr-2 border border-black focus:outline-none">
                  <span class="text-sm leading-none mr-2">250g</span>
                  <FaChevronDown/>
                </button>
              </div>
            </div>
            <p className='font-bold'><FaPlus/></p>
            <div className='flex flex-col items-center'>
              <img src={bundle3} alt='bundle' className='mb-2'/>
              <p className='font-medium mb-2'>Wooden Spoon</p>
            </div>
          </div>
          <div>
            <div className='flex mb-3 gap-2'>
              <p className='text-sm'>$478.75 USD</p>
              <p className='text-sm font-bold'>$430.88 USD</p>
              <p className='text-sm text-green-600'>Save 10%</p>
            </div>
            <button className='text-white text-center bg-black rounded-full p-2 px-6 grow'>
              ADD BUNDLE TO CART
            </button>
          </div>
        </div>

      </div>

      <div className='flex mt-6'>
        <img src={colourclub} alt='colorclub'/>
        <p className='ml-4'>Colourclub members earn up tp <span className='text-yellowish'>56</span> reward points when buy this item. Signup or login</p>
      </div>

      <div className='w-full mt-6'>
        <div className='flex justify-between items-center py-4'>
          <div>
            <h4>DELIVERY</h4>
            <h4>FREE DELIVERY ON ORDERS OVER $30</h4>
          </div>
          <div>
            <h4>ESTIMATED DELIVERY DATE.</h4>
            <h4>Jun 9 - Jun 13 to</h4>
          </div>
        </div>

        <hr/>

        <div className='py-4'>
          <h4>AFTER PAY</h4>
          <p className='flex items-center'>or 4 interest free payments of $13.97 with <FaDollarSign/> AFTERPAY <IoMdInformationCircleOutline/> </p>
        </div>

        <hr/>

        <div className='py-4'>
          <h4>UMF™ SCALE</h4>
          <div className="flex justify-between space-y-2">
            {['UMF™ 10+', 'UMF™ 15+', 'UMF™ 20+', 'UMF™ 24+', 'UMF™ 26+', 'UMF™ 28+', 'UMF™ 30+'].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full mr-2 ${item === 'UMF™ 24+' ? 'bg-amber-500' : 'bg-gray-300'}`}></div>
                <span className={`text-sm ${item === 'UMF™ 24+' ? 'font-semibold text-amber-700' : 'text-gray-600'}`}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <hr/>

        <div className="mt-6">
          <h4>TASTE PROFILE</h4>
          <div className="flex justify-between">
            <p className="text-gray-700">Clean & Intense</p>
            <p className="text-gray-700">Bold & Intense</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Payment;
