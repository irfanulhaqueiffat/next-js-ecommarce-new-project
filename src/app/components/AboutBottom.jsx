import React from "react";

const brands = [
  { name: "steps", active: true },
  { name: "MANGO", active: false },
  { name: "Food", active: false },
  { name: "FOOD__", active: false },
  { name: "BOOK-OFF", active: false },
  { name: "G Series", active: false },
];

const AboutBottom = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">

        <div className="flex flex-wrap items-center justify-between gap-6">

          {brands.map((brand, idx) => (
            <div key={idx} className="flex items-center">

              {/* Divider except first */}
              {idx !== 0 && (
                <div className="h-6 w-px bg-gray-300 mx-4"></div>
              )}

              <p
                className={`text-lg font-semibold ${
                  brand.active
                    ? "text-pink-500"
                    : "text-gray-400 hover:text-gray-700"
                } cursor-pointer transition`}
              >
                {brand.name}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AboutBottom;
