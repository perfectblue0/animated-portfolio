import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative mb-2 mr-3">
        <Image
          src="/womanLaptopBirds.png"
          alt="woman with birds looking at phone and holding laptop"
          fill
          className="object-contain"
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <h3 className="text-4xl md:text-6xl font-bold">
          Harnessing The Power of Tech and Creativity
        </h3>
        {/* DESCRIPTION */}
        <p className="md:text-xl">
          Welcome to my virtual gallery, where imagination intertwines with
          technical skill. Dive into my portfolio, showcasing a variety of
          projects meticulously crafted to highlight my dedication to quality
          and ingenuity.
        </p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
