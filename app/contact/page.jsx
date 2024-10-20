import Head from 'next/head';
import Header from '../(components)/Header';

const Contact = () => {
  return (
    <>
      <Header />
      <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <section className="py-16">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold text-blue-600 mb-6">Get in Touch</h1>
              <p className="text-lg text-gray-700 mb-8">
                We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
              </p>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-500 mb-2">Contact Details</h2>
                <p className="text-gray-700">
                  <strong>Address:</strong> 123 ChatApp Street, San Francisco, CA <br />
                  <strong>Email:</strong> contact@chatapp.com <br />
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-blue-500 mb-2">Working Hours</h2>
                <p className="text-gray-700">
                  Monday to Friday: 9:00 AM - 6:00 PM <br />
                  Saturday: 10:00 AM - 2:00 PM <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-blue-600 mb-6">Ask a Question</h2>
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
