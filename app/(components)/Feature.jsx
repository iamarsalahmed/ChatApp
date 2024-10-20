const FeatureSection = () => {
    const features = [
      {
        image: 'https://cdn-icons-png.flaticon.com/512/8728/8728300.png', 
        title: 'Real-Time Messaging',
        description: 'Communicate instantly with our real-time messaging feature, ensuring seamless conversations without delays.',
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ArU2CSCieGCjSTWJwELOanNJPUFGelgTxQ&s', 
        title: 'Secure Authentication',
        description: 'Our platform guarantees top-notch security with reliable authentication protocols to protect your data.',
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/10435/10435164.png', 
        title: 'Cross-Platform Accessibility',
        description: 'Access our service across all devices and platforms, ensuring a seamless experience no matter where you are.',
      },
    ];
  
    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 mx-auto mb-4">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-contain"/>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeatureSection;
  