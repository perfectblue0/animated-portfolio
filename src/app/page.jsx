import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 relative">
        <Image
          src="/womanLaptopBirds.png"
          alt="woman with birds looking at phone"
          fill
          className="object-contain"
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2"></div>
    </div>
  );
};

export default Homepage;
