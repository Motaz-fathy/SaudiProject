
const  RelatedLinks = () =>  {
  const links = [
    {
      title: "روابط ذات صلة",
      logo: "/logo.png"
    },
    {
      title: "روابط ذات صلة",
      logo: "/logo.png"
    },
    {
      title: "روابط ذات صلة",
      logo: "/logo.png"
    },
    {
      title: "روابط ذات صلة",
      logo: "/logo.png"
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#92d240]">روابط ذات صلة</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {links.map((link, index) => (
            <div key={index} className="text-center bg-white p-2 rounded-md">
              <img src={link.logo} alt={link.title} className="w-16 h-16 mx-auto mb-4" />
              <p className="text-gray-600">{link.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RelatedLinks