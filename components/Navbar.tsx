import Image from 'next/image'
import React from 'react'
import Image1 from '../public/Image1.png'
import logo from '../public/Logo.png'
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <div className="bg-yellow-400 text-black text-center py-2 font-inter">
        Upto 70% Off on orders above Rs999
      </div>

      <div className="mx-20 my-8 flex justify-between">
      
        <div className="flex items-center">
         
        <div className="mr-4">
            <Image src={logo} width={60} height={60} alt="logo"/>
          </div>
        
          <div className="flex gap-8 ml-4">
            <Link href="/">Home</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Sale</Link>
            <Link href="/">Launching soon</Link>
            <Link href="/">Our Story</Link>
            <Link href="/">Contact Us</Link>
          </div>
        </div>

        <div className="flex items-center ">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-4 pr-12 py-2 border border-black rounded-full focus:outline-none"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <button className="p-2 bg-red-700 rounded-full">
                <CiSearch className="text-white" />
              </button>
            </span>
          </div>
          <div className="ml-4">
          <svg width="143" height="26" viewBox="0 0 143 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.0466 1.3784C16.6187 1.3784 14.493 2.42243 13.168 4.18718C11.843 2.42243 9.71729 1.3784 7.28944 1.3784C5.35683 1.38057 3.50399 2.14926 2.13743 3.51583C0.77087 4.88239 0.00217829 6.73522 0 8.66783C0 16.8978 12.2028 23.5594 12.7224 23.8346C12.8594 23.9082 13.0125 23.9468 13.168 23.9468C13.3235 23.9468 13.4766 23.9082 13.6136 23.8346C14.1333 23.5594 26.336 16.8978 26.336 8.66783C26.3338 6.73522 25.5652 4.88239 24.1986 3.51583C22.832 2.14926 20.9792 1.38057 19.0466 1.3784ZM13.168 21.9299C11.0212 20.6789 1.88114 14.9802 1.88114 8.66783C1.88301 7.23404 2.45341 5.8595 3.46726 4.84565C4.4811 3.83181 5.85564 3.26141 7.28944 3.25954C9.5762 3.25954 11.4961 4.47758 12.298 6.43397C12.3688 6.60648 12.4894 6.75403 12.6443 6.85787C12.7992 6.96171 12.9815 7.01716 13.168 7.01716C13.3545 7.01716 13.5368 6.96171 13.6917 6.85787C13.8466 6.75403 13.9672 6.60648 14.038 6.43397C14.8399 4.47405 16.7598 3.25954 19.0466 3.25954C20.4804 3.26141 21.8549 3.83181 22.8688 4.84565C23.8826 5.8595 24.453 7.23404 24.4549 8.66783C24.4549 14.9708 15.3125 20.6778 13.168 21.9299Z" fill="black"/>
<path d="M80.6462 1.52043H58.3619C57.8246 1.52043 57.3093 1.73387 56.9294 2.11379C56.5495 2.49371 56.3361 3.00899 56.3361 3.54628V21.7789C56.3361 22.3162 56.5495 22.8315 56.9294 23.2114C57.3093 23.5913 57.8246 23.8048 58.3619 23.8048H80.6462C81.1835 23.8048 81.6988 23.5913 82.0787 23.2114C82.4586 22.8315 82.6721 22.3162 82.6721 21.7789V3.54628C82.6721 3.00899 82.4586 2.49371 82.0787 2.11379C81.6988 1.73387 81.1835 1.52043 80.6462 1.52043ZM80.6462 21.7789H58.3619V3.54628H80.6462V21.7789ZM75.5816 7.59798C75.5816 9.20984 74.9413 10.7557 73.8015 11.8954C72.6618 13.0352 71.1159 13.6755 69.5041 13.6755C67.8922 13.6755 66.3464 13.0352 65.2066 11.8954C64.0668 10.7557 63.4265 9.20984 63.4265 7.59798C63.4265 7.32933 63.5332 7.07169 63.7232 6.88173C63.9132 6.69177 64.1708 6.58505 64.4395 6.58505C64.7081 6.58505 64.9657 6.69177 65.1557 6.88173C65.3457 7.07169 65.4524 7.32933 65.4524 7.59798C65.4524 8.67255 65.8792 9.70312 66.6391 10.463C67.3989 11.2228 68.4295 11.6497 69.5041 11.6497C70.5786 11.6497 71.6092 11.2228 72.3691 10.463C73.1289 9.70312 73.5558 8.67255 73.5558 7.59798C73.5558 7.32933 73.6625 7.07169 73.8524 6.88173C74.0424 6.69177 74.3 6.58505 74.5687 6.58505C74.8373 6.58505 75.095 6.69177 75.2849 6.88173C75.4749 7.07169 75.5816 7.32933 75.5816 7.59798Z" fill="black"/>
<path d="M138.859 23.7842C136.932 20.4536 133.963 18.0654 130.499 16.9333C132.213 15.9131 133.544 14.3585 134.289 12.5083C135.034 10.6581 135.15 8.61461 134.621 6.6916C134.092 4.76859 132.947 3.07242 131.36 1.86356C129.774 0.6547 127.834 0 125.84 0C123.846 0 121.906 0.6547 120.32 1.86356C118.734 3.07242 117.588 4.76859 117.059 6.6916C116.53 8.61461 116.647 10.6581 117.391 12.5083C118.136 14.3585 119.467 15.9131 121.181 16.9333C117.717 18.0642 114.748 20.4524 112.821 23.7842C112.751 23.8994 112.704 24.0276 112.683 24.1612C112.663 24.2948 112.67 24.4311 112.703 24.5621C112.736 24.6931 112.795 24.8161 112.877 24.9238C112.958 25.0316 113.061 25.1219 113.178 25.1895C113.295 25.2571 113.424 25.3006 113.558 25.3174C113.692 25.3342 113.828 25.3239 113.959 25.2872C114.089 25.2506 114.21 25.1882 114.316 25.1039C114.421 25.0195 114.509 24.9149 114.573 24.7962C116.956 20.6775 121.169 18.2185 125.84 18.2185C130.511 18.2185 134.724 20.6775 137.107 24.7962C137.171 24.9149 137.259 25.0195 137.364 25.1039C137.47 25.1882 137.591 25.2506 137.722 25.2872C137.852 25.3239 137.988 25.3342 138.122 25.3174C138.256 25.3006 138.385 25.2571 138.502 25.1895C138.619 25.1219 138.722 25.0316 138.803 24.9238C138.885 24.8161 138.944 24.6931 138.977 24.5621C139.01 24.4311 139.017 24.2948 138.997 24.1612C138.976 24.0276 138.929 23.8994 138.859 23.7842ZM118.756 9.11097C118.756 7.70996 119.172 6.34041 119.95 5.17551C120.729 4.01062 121.835 3.10269 123.129 2.56655C124.424 2.0304 125.848 1.89012 127.222 2.16345C128.596 2.43677 129.858 3.11142 130.849 4.10208C131.84 5.09275 132.514 6.35493 132.788 7.72902C133.061 9.10311 132.921 10.5274 132.384 11.8218C131.848 13.1161 130.94 14.2224 129.775 15.0008C128.611 15.7792 127.241 16.1946 125.84 16.1946C123.962 16.1926 122.161 15.4456 120.833 14.1176C119.505 12.7896 118.758 10.989 118.756 9.11097Z" fill="black"/>
</svg>
</div>

        </div>
      </div>


      <div className="">
        <Image src={Image1} height={1000} width={1000}  className='w-full'alt="Image1"/>
      </div>
    
      </>
  )
}

export default Navbar
