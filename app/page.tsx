import Link from "next/link";
import { CiSearch, CiHeart, CiUser } from "react-icons/ci";
import { RiShoppingBag2Line } from "react-icons/ri";
import { FaTruck, FaHeadset, FaShieldAlt, FaRocket } from "react-icons/fa";
import logo from '../public/Logo.png'
import Image from "next/image";
import Image1 from '../public/Image1.png'
import '@fontsource/inter/';
import '@fontsource/poppins/600.css'; // Semi-bold weight
import './globals.css';
import '@fontsource/poppins'; // Defaults to all weights and styles
// OR import specific weights and styles for optimized loading
import '@fontsource/poppins/400.css'; // Regular weight
import '@fontsource/poppins/700.css';
import shop_by_category from '../public/shop_by_category.png'
import comingSoon from '../public/coming_soon.png'
import chutney from '../public/Garlic Chutney (1) (1) 1.png'
import TalkOfTown from "@/components/TalkOfTown";
import BestCombo from "@/components/BestCombo";
import chakKrDekho from '../public/chak_kr_dekho.png'
import Definately from "@/components/Definately";
import FansPage from "@/components/FansPage";
import CustomerHome from "@/components/CustomerHome";
import Footer from '@/components/Footer'
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar/>


      <div className="bg-yellow-100 my-4">
      <div className="flex mx-20 justify-between my-4 bg-yellow-100">
        {/* Free Shipping */}
        <div className="flex flex-col items-center text-center my-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white border border-white-500 mb-4">
          <FaTruck className="text-4xl text-red-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2 font-poppins">Free Shipping</h3>
          <p className="text-gray-600">Get free shipping on all orders</p>
        </div>

        {/* Customer Service */}
        <div className="flex flex-col items-center text-center my-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white border border-white-500 mb-4">
          <FaHeadset className="text-4xl text-red-500 " />
          </div>
          <h3 className="text-xl font-semibold mb-2">Customer Service</h3>
          <p className="text-gray-600">
            Please contact us at +9196259220070
          </p>
        </div>

        {/* Secure Payment */}
        <div className="flex flex-col items-center text-center my-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white border border-white-500 mb-4">
          <FaShieldAlt className="text-4xl text-red-500 " />
          </div>
          <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
          <p className="text-gray-600">We ensure your money is safe</p>
        </div>

        {/* Fast Delivery */}
        <div className="flex flex-col items-center text-center my-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white border border-white-500 mb-4">
    <FaRocket className="text-4xl text-red-500" />
  </div>
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-gray-600">
            Delivering within 3-5 days across India
          </p>
        </div>
      </div>
    </div>


    <div className="my-12">
        <div className="flex justify-center">
          <Image src={shop_by_category} height={600} width={800} alt="shop_by_category"/>
        </div>




        <div className="bg-gray-100 mx-20">
      <div className="my-12">
        {/* First Row: 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-8">
          {/* Card 1 */}
          <div className="rounded-lg shadow-lg p-6  bg-green-900 text-white flex justify-between">
            <div className="flex flex-col justify-between">
            <h3 className="text-4xl font-bold mb-4 ">PICKLES</h3>
            <button className="bg-green-900 border  text-white  py-2 rounded-full hover:bg-blue-600 transition">
              Button
            </button>
            </div>
            <Image src={chutney} width={200} height={200} alt="chutney"/>
          </div>

          {/* Card 2 */}
          <div className=" rounded-lg shadow-lg p-6  bg-red-900 text-white flex justify-between">
            <div className="flex flex-col justify-between">
            <h3 className="text-4xl font-bold mb-4">CHUTNEY</h3>
            <button className="bg-red-900 border  text-white py-2  rounded-full hover:bg-blue-600 transition">
              Button
            </button>
            </div>
            <Image src={chutney} width={200} height={200} alt="chutney"/>
          </div>

          {/* Card 3 */}
          <div className=" rounded-lg shadow-lg p-6  bg-blue-400 text-white flex justify-between">
            <div className="flex flex-col justify-between">
            <h3 className="text-4xl font-bold mb-4">GIFTING</h3>
            <button className="bg-blue-400 border  text-white py-2 rounded-full hover:bg-blue-600 transition">
              Button
            </button>
            </div>
            <Image src={chutney} width={200} height={200} alt="chutney"/>
          </div>
        </div>

        {/* Second Row: 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-8 h-[300px]">
  {/* Card 4 */}
  <div className="relative rounded-lg shadow-lg p-6 bg-green-900 text-white flex flex-col justify-between overflow-hidden">
    <h3 className="text-4xl font-bold mb-4 z-10">HEALTHY<br /> MIX NUTS</h3>
    <button className="bg-green-900 mb-4 border w-1/2 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition z-10">
      Button
    </button>
    <Image
      src={chutney}
      width={240}
      height={240}
      alt="chutney"
      className="absolute right-0 bottom-0 aspect-square"
    />
  </div>

  {/* Card 5 */}
  <div className="relative rounded-lg shadow-lg p-6 bg-green-900 text-white flex flex-col justify-between overflow-hidden">
    <h3 className="text-4xl font-bold mb-4 z-10">SUPER SEEDS</h3>
    <button className="bg-green-900 border w-1/2 text-white px-6 py-2 my-8 rounded-full hover:bg-blue-600 transition z-10">
      Button
    </button>
    <Image
      src={chutney}
      width={240}
      height={240}
      alt="chutney"
      className="absolute right-0 bottom-0 aspect-square"
    />
  </div>

  {/* Card 6 */}
  <div className="relative rounded-lg shadow-lg p-6 bg-green-900 text-white flex flex-col justify-between overflow-hidden">
    <h3 className="text-4xl font-bold mb-4 z-10">FOX NUTS</h3>
    <button className="bg-green-900 border w-1/2 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition z-10">
      Button
    </button>
    <Image
      src={chutney}
      width={240}
      height={240}
      alt="chutney"
      className="absolute right-0 bottom-0 aspect-square "
    />
  </div>
</div>

        
      </div>
    </div>


        


       
    </div>

    {/* talk of the town */}
    <div className="bg-yellow-100">

<div className="bg-yellow-100 mx-20">

    <div className="flex justify-between my-16 mt-8">
    <div className='text-6xl font-bold mt-12'>
      Talk Of The Town
    </div>
    <div className="mt-12">
      <button className="px-8 py-2 bg-green-900 rounded-full border text-white mx-4">Best Sellers</button>
      <button className="border border-red-900 text-red-900 bg-white px-6 py-2 rounded-full hover:bg-brown-500 hover:text-white transition">
  New Launches
</button>

    </div>
   </div>

    <div className="flex justify-between space-x-4">
  {[...Array(4)].map((_, index) => (
    <TalkOfTown key={index} />
  ))}
</div>
</div>
<div className="flex justify-center">
  <button className="bg-custom-green border border-white px-12 text-white rounded-full py-4 ">View All</button>
</div>
</div>



{/* best combo */}

<div>
<BestCombo/>
</div>



<div className="w-full my-8">
<Image src={chakKrDekho} alt='chak_Kr_Dekho' height={700} width={700} className="w-full"/>
</div>


<div>
  <Definately/>
</div>


<div className="bg-custom-bg-fan my-4">
  <FansPage/>
</div>

<div className="bg-custom-bg-fan">
  <CustomerHome/>

</div>

<div className="bg-custom-green flex mt-20 py-2 justify-between">
  <p className="text-white text-2xl py-4">RY JAR HAS A STORY</p>
  <svg className="mx-8 " width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 0C14.4753 7.52634 20.4736 13.5247 28 14C20.4736 14.4753 14.4753 20.4736 14 28C13.5247 20.4736 7.52634 14.4753 0 14C7.52634 13.5247 13.5247 7.52634 14 0Z" fill="#FEC136"/>
</svg>

  <p className="text-white font-intel text-2xl py-4">EVERY JAR HAS A STORY</p>
  <svg className="mx-8 " width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 0C14.4753 7.52634 20.4736 13.5247 28 14C20.4736 14.4753 14.4753 20.4736 14 28C13.5247 20.4736 7.52634 14.4753 0 14C7.52634 13.5247 13.5247 7.52634 14 0Z" fill="#FEC136"/>
</svg>

  <p className="text-white font-intel text-2xl py-4">EVERY JAR HAS A STORY</p>
  <svg  className='mx-8 ' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 0C14.4753 7.52634 20.4736 13.5247 28 14C20.4736 14.4753 14.4753 20.4736 14 28C13.5247 20.4736 7.52634 14.4753 0 14C7.52634 13.5247 13.5247 7.52634 14 0Z" fill="#FEC136"/>
</svg>

  <p className="text-white font-intel text-2xl py-4">EVERY JAR HAS A STORY</p>
  

</div>

<div className="bg-custom-bg-fan">
<Footer/>
</div>


    </>
  );
}