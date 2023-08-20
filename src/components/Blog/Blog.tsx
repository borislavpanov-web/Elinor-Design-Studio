import blogPic from "../../../public/blog.png";

const Blog = () => {
  return (
    <>
      <div className="mx-6 lg:mx-44">
        <div className="flex flex-col mt-16">
          <div className="flex justify-between">
            <h1 className="text-xl lg:text-4xl font-normal">
              Check out our blog
            </h1>
            <a
              href="/"
              className="text-sm lg:text-base font-barlow font-normal relative tracking-widest"
            >
              VIEW ALL
              <hr className="border-black" />
            </a>
          </div>
          <div className="flex gap-5 lg:gap-20 mt-10">
            <div className="flex flex-col mb-14">
              <img
                className="w-full lg:max-w-[calc(150%-1rem)]"
                src={blogPic}
                alt="blog"
              />
              <p className="font-cormorant font-bold text-sm mt-2 leading-5">
                Dec 23, 2018 &nbsp;•&nbsp; 5min read
              </p>
              <h1 className="text-md lg:text-2xl mt-2">
                Blog article heading here
              </h1>
              <p className="font-barlow text-xs lg:text-sm my-3">
                As a warehouse manager, you would understand that handling
                warehouse <br /> operations are a massive task…
              </p>
              <a
                href="/"
                className="text-xs font-alata font-normal relative lg:tracking-widest"
              >
                READ MORE
                <hr className="w-16 lg:w-24 border-black mt-2" />
              </a>
            </div>
            <div className="flex flex-col mb-14">
              <img
                className="w-full lg:max-w-[calc(150%-1rem)]"
                src={blogPic}
                alt="blog"
              />
              <p className="font-cormorant text-sm mt-2 leading-5">
                Dec 23, 2018 &nbsp;•&nbsp; 5min read
              </p>
              <h1 className="text-md lg:text-2xl mt-2">
                Blog article heading here
              </h1>
              <p className="font-barlow text-xs lg:text-sm my-3">
                As a warehouse manager, you would understand that handling
                warehouse <br /> operations are a massive task…
              </p>
              <a
                href="/"
                className="text-xs font-alata font-normal relative lg:tracking-widest"
              >
                READ MORE
                <hr className="w-16 lg:w-24 border-black mt-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-128 bg-main-background mt-10 gap-5 text-center">
        <h1 className="text-2xl lg:text-3xl">
          Redefining minimalist design <br /> for your own home
        </h1>
        <p className="text-sm lg:text-base">
          To create timeless, interior spaces that inspire tranquility,
          <br /> elevate functionality, and reflect the unique personality and{" "}
          <br /> values of our clients.
        </p>
        <a
          href="/"
          className="text-xs lg:text-base font-barlow relative tracking-widest mt-1"
        >
          SEND AN ENQUIRE
          <hr className="border-black mt-1" />
        </a>
      </div>
    </>
  );
};

export default Blog;
