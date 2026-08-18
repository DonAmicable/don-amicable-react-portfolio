const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-[#1E1533] to-[#0F0A1F] p-4"
    >
      <div className="flex flex-col justify-center p-4 max-w-screen-lg mx-auto h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#7C3AED] text-white">
            Contact
          </p>
          <p className="text-xl py-6 text-gray-400">
            Submit the form below to get in touch with me
          </p>
        </div>
        <div className="flex justify-center items-baseline">
          <form
            action="https://getform.io/f/bgdyqkla"
            method="POST"
            className="flex flex-col gap-4 w-full md:w-1/2 px-2 sm:px-0"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your name"
              className="p-3 bg-[#150F26] border border-white/10 rounded-md focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]/50 text-white placeholder:text-gray-500 duration-200 w-full"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="p-3 bg-[#150F26] border border-white/10 rounded-md focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]/50 text-white placeholder:text-gray-500 duration-200 w-full"
            />

            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-3 bg-[#150F26] border border-white/10 rounded-md focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]/50 text-white placeholder:text-gray-500 duration-200 w-full"
            ></textarea>

            <button className="text-white bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] px-6 py-3 mx-auto items-center rounded-md hover:scale-105 hover:shadow-lg hover:shadow-[#7C3AED]/30 duration-300">
              Let`s talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;