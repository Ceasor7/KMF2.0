
const Contact = () => {
  return (
    <div className="relative mt-28">
    <h4 className="sm:text-4xl mb-10 text-3xl font-semibold font-custom text-center uppercase tracking-[3px]">
           Get In Touch</h4>
    <div className="flex flex-col sm:flex-row text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
    <div className="bg-slate-400/10 mb-10 rounded-lg p-10">
      <div className="mb-5">
        <p className="font-bold font-custom"> Physical address:</p>
        <p className="sm:ml-16 font-custom">Jogoo House B</p>
        <p className="sm:ml-16 font-custom">6th Floor - Room 605</p>
        <p className="sm:ml-16 font-custom">NAIROBI</p>
      </div>
      <div className="mb-5">
      <p className="font-bold font-custom"> Postal address:</p>
        <p className="sm:ml-16 font-custom">The Executive Secretary</p>
        <p className="sm:ml-16 font-custom">P.O Box 43343 - 00100</p>
        <p className="sm:ml-16 font-custom">NAIROBI</p>
      </div>
      <div>
        <p className="font-custom"><span className="font-bold"> Call :</span> <a href="+2540202212463">+254 (0)20 2212463</a></p>
        <p className="font-custom"><span className="font-bold"> Call :</span> <a href="+2540203318581">+254 (0)20 3318581</a></p>
      </div>
    </div>
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

    </div>
    </div>
  )
}

export default Contact