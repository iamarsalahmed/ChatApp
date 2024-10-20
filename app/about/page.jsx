import Head from 'next/head';
import Image from 'next/image';
import Header from '../(components)/Header';
import { FaCheckCircle } from 'react-icons/fa'; // Importing an icon library for check icons

const Contact = () => {
  return (
    <>
      <Header />
      <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-100">
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold text-blue-600 mb-6">Contact Us</h1>
            <p className="text-lg text-gray-600 mb-12">
              We're here to help! If you have any questions, comments, or feedback, feel free to reach out to us.
            </p>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-3xl font-semibold text-blue-500 mb-4">Our Aim</h2>
              <p className="text-gray-700">
                Our aim is to provide a seamless and engaging chat experience for users around the globe. We strive to create a platform where people can connect, communicate, and collaborate effortlessly.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-3xl font-semibold text-blue-500 mb-4">Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature) => (
                  <div key={feature.name} className="flex items-center bg-gray-100 rounded-lg p-4 shadow-md">
                    <FaCheckCircle className="text-blue-600 mr-2" />
                    <span className="text-gray-700">{feature.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-3xl font-semibold text-blue-500 mb-4">Meet Our Core Team</h2>
              <p className="text-gray-700 mb-6">
                We are a passionate team of developers and designers committed to delivering the best chat experience.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member) => (
                  <div key={member.name} className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
                    <div className="relative w-36 h-36">
                      <Image
                        src={member.image}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-600">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

const features = [
  { name: 'Real-time messaging' },
  { name: 'User-friendly interface' },
  { name: 'Group chat functionality' },
  { name: 'Secure user authentication' },
  { name: 'File sharing capabilities' },
  { name: 'Cross-platform accessibility' },
];

const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'Lead Developer',
    image: 'https://img.freepik.com/free-photo/close-up-confident-corporate-woman-professional-entrepreneur-smiling-cross-arms-chest-smiling-enthusiastic-standing-white-background_1258-85600.jpg',
  },
  {
    name: 'Bob Smith',
    role: 'UI/UX Designer',
    image: 'https://headshots-inc.com/wp-content/uploads/2023/02/professional-headshot-photography-example-7-1.jpg',
  },
  {
    name: 'Charlie Brown',
    role: 'Backend Developer',
    image: 'https://media.istockphoto.com/id/1205972079/video/headshot-of-bearded-african-man-in-casual-businesswear.jpg?s=640x640&k=20&c=_C8FbhpmeecHVlEJC3f1yR55fa--X2-mwk9w2YPU5_M=',
  },
];

export default Contact;
