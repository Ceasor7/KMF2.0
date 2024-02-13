import Image from "next/image";
import { SocialIcon } from "react-social-icons";

const Footer = () => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className=" text-white">
      <div className=" bg-[#733612] flex flex-col sm:flex-row justify-between items-center">
        
        <div className="mb-4 mt-4 sm:ml-28 sm:mb-4">
          <Image src="/Logo_Black.png" alt="KMF Logo" width={200} height={120} />
        </div>

      
       <div className="flex sm:mt-4 flex-row space-x-20 sm:space-x-72 sm:mr-44">
       <div className="mb-4 sm:mb-4">
          <h2 className="text-lg font-semibold font-custom mb-2">Quick Links</h2>
          <ul className="text-sm">
            <li className="mb-2 font-custom"><a href="/">Home</a></li>
            <li className="mb-2 font-custom"><a href="/about">About Us</a></li>
            <li className="mb-2 font-custom"><a href="/partnership">Partnership</a></li>
            <li className="mb-2 font-custom"><a href="/leadership">Leadership</a></li>
            <li className="mb-2 font-custom"><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="flex flex-col justify-center text-center">
          <h2 className="text-lg font-semibold font-custom mb-2">Follow Us</h2>
          <div className="flex flex-col sm:flex-row text-center justify-center ">
          <SocialIcon url="https://x.com/kmf_kenya" fgColor="white" bgColor="transparent" />
          <SocialIcon url="https://instagram.com/kenya_musical_festival" fgColor="white" bgColor="transparent" />
          <SocialIcon url="https://youtube.com/Kenya_Musical_FesticalTV" fgColor="white" bgColor="transparent" />
          <SocialIcon url="https://facebook.com/kenya_musical_festival" fgColor="white" bgColor="transparent" />
          </div>
        </div>
       </div>
      </div>
      <div className="bg-[#733612] w-full p-5 flex flex-row justify-center text-white text-center">
      <a href="https://creativeage.agency/"
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 sm:mr-3">
             <p className="font-custom">Design by Creative Age</p>
      </a>
      <button
        //onClick={handleScrollToTop}
        className="text-gray-300 hover:text-white focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
      </button>
      </div>
    </footer>
  );
};

export default Footer;