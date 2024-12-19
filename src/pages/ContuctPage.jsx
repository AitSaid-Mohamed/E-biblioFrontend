function ContactPage() {
    return ( 
        <>
                <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          {/* Contact Details */}
          <div className="mb-6 md:mb-0 md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-2">Email: support@example.com</p>
            <p className="mb-2">Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Main Street, City, Country</p>
          </div>

          {/* Contact Form */}
          <form className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
        </>
     );
}

export default ContactPage;