import { FaRegEnvelope } from "react-icons/fa"

const Contact = () => {
  return (
    <div className="flex flex-col w-full relative m-auto justify-center items-center h-screen bg-red-700 text-white lg:pt-0 mb-2">
      <h4 className="lg:text-4xl mb-10 text-3xl font-semibold font-custom text-center uppercase tracking-[3px] pt-60 ">
        Get In Touch</h4>
      <div className="flex flex-col ">
        <div className="bg-red-900/40 mb-36 rounded-lg w-screen flex flex-col md:flex-row p-16 text-center md:text-left md:px-32 md:py-32 gap-4 md:gap-12 justify-center">
          <div className="mb-5">
            <p className="font-custom mb-4 font-semibold text-2xl lg:text-3xl ">Visit:</p>
            <p className=" font-custom">Jogoo House B</p>
            <p className=" font-custom">6th Floor - Room 605</p>
            <p className=" font-custom">NAIROBI</p>
          </div>
          <div className="mb-5">
            <p className=" font-custom mb-4 font-semibold text-2xl lg:text-3xl ">Write:</p>
            <p className=" font-custom">The Executive Secretary</p>
            <p className=" font-custom">P.O Box 43343 - 00100</p>
            <p className=" font-custom">NAIROBI</p>
          </div>
          <div className="mb-5">
            <p className=" font-custom mb-4 font-semibold text-2xl lg:text-3xl ">Call:</p>
            <p className="font-custom "><a href="+2540202212463">+254 (0)20 2212463</a></p>
            <p className="font-custom "><a href="+2540203318581">+254 (0)20 3318581</a></p>
          </div>
          <div className="flex flex-col text-center items-center md:items-start">
            <div className="font-custom flex flex-row">
              <span className="mb-4 font-semibold text-2xl lg:text-3xl ">Email:</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="md:text-left">Click this email icon</p>
              <a className="" href="mailto:kmusicfestival@gmail.com"><FaRegEnvelope size={30} /></a>
            </div>
          </div>
        </div>
        {/*
    <div className="flex flex-col space-y-10 mb-8">
      <form className="flex flex-col space-y-5 w-fit mx-auto">
        <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-5">
          <input placeholder="Name" className="outline-none font-custom bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-[#36600A] placeholder-gray-800 transition-all focus:border-[#36600A]/40 focus:text-black hover:border-[#36600A]/40" type="text" />
          <input placeholder="Email" className="outline-none font-custom bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-[#36600A] placeholder-gray-800 transition-all focus:border-[#36600A]/40 focus:text-black hover:border-[#36600A]/40" type="email" />
        </div>
        <input placeholder="Subject" className="outline-none font-custom bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-[#36600A] placeholder-gray-800 transition-all focus:border-[#36600A]/40 focus:text-black hover:border-[#36600A]/40" type="text"/>

        <textarea placeholder="Message" className="outline-none font-custom bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-[#36600A] placeholder-gray-800 transition-all focus:border-[#36600A]/40 focus:text-black hover:border-[#36600A]/40" />
        <button type="submit" className="bg-[#0c5d28] py-5 px-10 rounded-md text-black font-bold font-custom">Send</button>
      </form>
    </div>
    */}

      </div>
    </div>
  )
}

export default Contact