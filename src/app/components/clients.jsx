import React from "react";
import Image from "next/image";
import video from '../../../public/images/Video.png'
import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    text: `“Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele.”`,
    name: "Jenny Wilson",
    role: "Customer",
    image: "/images/client1.png",
  },
  {
    id: 2,
    text: `“Proin sed neque nec tellus malesuada ultricies eget a justo. Nullam a nibh faucibus, semper risus eu, ultricies sem. Maecenas eget purus in enim imperdiet dapibus in ac mi. Fusce faucibus lacus felis.”`,
    name: "Guy Hawkins",
    role: "Customer",
    image: "/images/client2.png",
  },
  {
    id: 3,
    text: `“Nam sed odio diam. Mauris sagittis sapien sed convallis cursus. Proin mattis ultricies urna ac eleifend. Cras vel nisi nec lectus sagittis venenatis. Curabitur laoreet leo sed lorem pulvinar”`,
    name: "Kathryn Murphy",
    role: "Customer",
    image: "/images/client3.png",
  },
];

const Clients = () => {
  return (
    <section id="clients" className="p-25 bg-[#F8FAF8] relative ">
      <div className="container mx-auto">
        
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-popins font-semibold text-[40px] text-center">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-xl shadow-sm p-6 text-center flex flex-col justify-between"
            >
              <div className="text-[#20B526] text-4xl font-bold mb-4 item-center flex justify-center"><FaQuoteRight /></div>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {client.text}
              </p>

              <div className="w-16 h-16 mx-auto mb-3">
                <Image
                  src={client.image}
                  width={64}
                  height={64}
                  alt={client.name}
                  className="rounded-full object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold">{client.name}</h3>
              <p className="text-sm text-gray-500">{client.role}</p>
            </div>
          ))}
        </div>


      </div>
        {/* 🎬 Video inside Container */}
        <div className="flex justify-center  absolute top-[80%] left-[50%]  translate-x-[-50%]  ">
          <Image
            src={video}
            alt="video"
            width={600}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
    </section>
  );
};

export default Clients;
