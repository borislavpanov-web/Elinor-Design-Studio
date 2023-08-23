import frontImage from "../../../public/hero-image.png";
import signature from "../../../public/signature.png";
import ProjectMandur from "../../../public/Project-Mandur.png";
import ProjectTintyava from "../../../public/Project-Tintyava.png";
import mainImage from "../../../public/main-image.png";
import aboutUs from "../../../public/about-us.png";

const Homepage = () => {
  return (
    <>
      <div className="mx-6 lg:mx-56">
        <div className="flex flex-col justify-center mt-8">
          <img className="w-full" src={frontImage} alt="front" />
          <h1 className="text-center text-4xl sm:text-3xl lg:text-4xl font-normal mt-4">
            Redefining Luxury in Interior design.
          </h1>
          <p className="font-barlow text-center text-md mt-3">
            Shaping the essence of living into precisely crafted spaces
            <br /> where one can grow, breath, connect, adore.
          </p>
          <img
            src={signature}
            alt="signature"
            className="mx-auto w-1/3 md:w-32 lg:w-40 mt-2"
          />
        </div>
        <div className="flex flex-col mt-16">
          <div className="flex mt-8 justify-between">
            <h1 className="text-xl lg:text-4xl font-normal">Latest projects</h1>
            <a
              href="/"
              className="text-sm lg:text-base font-barlow font-normal relative tracking-widest"
            >
              SEE PORTFOLIO
              <hr className="border-black" />
            </a>
          </div>
          <div className="flex mt-16 gap-24 2xl:justify-between">
            <div className="flex flex-col">
              <img src={ProjectTintyava} alt="ProjectTintyava" />
              <div className="flex justify-between mt-6">
                <h1 className="text-xs lg:text-3xl">Project Tintyava</h1>
                <div className="flex items-center">
                  <a
                    href="/"
                    className="text-xs lg:text-sm font-barlow font-normal relative lg:tracking-widest"
                  >
                    VIEW DETAILS
                    <hr className="border-black" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <img src={ProjectMandur} alt="ProjectMandur" />
              <div className="flex justify-between mt-6">
                <h1 className="text-xs lg:text-3xl">Project Mandur</h1>
                <div className="flex items-center">
                  <a
                    href="/"
                    className="text-xs lg:text-sm font-barlow font-normal relative lg:tracking-widest"
                  >
                    VIEW DETAILS
                    <hr className="border-black" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:items-center justify-between mt-6"></div>
      </div>
      <div className="flex mt-24 bg-main-background">
        <div className="flex flex-col justify-center text-center lg:text-start items-center flex-grow">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-2xl lg:text-5xl font-normal">Elegant flow</h1>
            <p className="font-barlow text-xs lg:text-lg my-6">
              A great design tells a story. Discover our story and design <br />
              approach to creating flawless interiors.
            </p>
            <a
              href="/"
              className="text-xs lg:text-base font-barlow font-normal relative lg:tracking-widest"
            >
              ABOUT US
              <hr className="w-14 lg:w-24 border-black" />
            </a>
          </div>
        </div>
        <img className="w-1/2" src={mainImage} alt="main" />
      </div>
      <div className="flex bg-main-background">
        <img className="w-1/2" src={aboutUs} alt="main" />
        <div className="flex flex-col justify-center text-center lg:text-start items-center flex-grow">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-2xl lg:text-5xl font-normal">
              Redefining luxury
            </h1>
            <p className="font-barlow text-xs lg:text-lg my-6">
              Luxury in interior design has evolved, and redefining its meaning
              is <br /> at the heart of our philosophy and design approach.
            </p>
            <a
              href="/"
              className="text-xs lg:text-base font-barlow font-normal relative lg:tracking-widest"
            >
              VIEW SERVICES
              <hr className="w-[5.2rem] lg:w-[9.5rem] border-black" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
