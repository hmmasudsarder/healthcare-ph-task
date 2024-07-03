import doctor from "../../assets/Media/Rectangle 24.png";
const Team = () => {
  return (
    <div>
      <div>
        <div className="hero min-h-screen mt-10">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="w-1/2 relative h-3/4 -mr-16">
              <img
                src={doctor}
                className=" rounded-lg shadow-2xl h-12/12 w-11/12"
              />
              <div className="w-2/4 absolute -left-10 top-1/2 bg-slate-800 rounded-lg shadow-2xl">
                <h1 className="text-xl text-white">Our Mission is Simple</h1>
              </div>
              {/* <img
            src={doctor}
            className="w-1/4 absolute right-16 top-1/2  rounded-lg border-8 border-white shadow-2xl"
          /> */}
            </div>
            <div className="w-1/2 mr-24">
              <p className="font-semibold rounded-full border-black border-2 w-3/12 text-center mb-4">
                Who we are
              </p>
              <div className="">
                <h1 className="text-4xl font-bold">We Help To Get</h1>
                <p className="text-4xl font-bold mt-2">Soultions</p>
              </div>
              <p className="py-3">
                We are proud to be a trusted healthcare provider in our
                community, and we look forward to serving you and your family
                with excellence, integrity, and compassion. Your health is our
                priority, and we are here for you every step of the way. We
                believe in treating each patient with dignity, respect, and
                empathy, ensuring that they receive the attention and care they
                deserve.
              </p>
              <button className="btn btn-warning font-bold mt-2">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
