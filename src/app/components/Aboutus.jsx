import React from "react";
import farmerImg from "../../../public/images/Image(1).png";

const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16 gap-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-snug mb-4">
            100% Trusted <br /> Organic Food Store
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus ut accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={farmerImg}
            width={716}
            height={492}
            alt="Happy farmer holding fresh vegetables"
            className="rounded-md border border-blue-200 object-cover max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
