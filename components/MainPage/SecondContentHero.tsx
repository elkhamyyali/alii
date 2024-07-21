import React from "react";

const testimonialsData = [
  
  {
    name: "Leslie Alexander",
    username: "@lesslie",
    avatar: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-2.jpg",
    testimonial: "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
    tags: ["#Celebration"]
  },
 
  {
    name: "Ronald Richards",
    username: "@ronrich",
    avatar: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-2.jpg",
    testimonial: "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
    tags: ["#Celebration"]
  },
  {
    name: "Jane Cooper",
    username: "@janecoop",
    avatar: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-3.jpg",
    testimonial: "This is a top quality product. No need to think twice before making it live on web.",
    tags: ["#topquality"]
  },
  {
    name: "Theresa Webb",
    username: "@theresawebb",
    avatar: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-4.jpg",
    testimonial: "Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.",
    tags: ["#bootstrapped"]
  },
  {
    name: "Darlene Robertson",
    username: "@darlenerob",
    avatar: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-5.jpg",
    testimonial: "My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    tags: ["#fastersite"]
  },
  {
    name: "Floyd Miles",
    username: "@floydm",
    avatar: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-6.jpg",
    testimonial: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    tags: ["#simple"]
  }
];

const SecondContentHero = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:gap-10 sm:grid-cols-2 md:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="flex flex-col border border-gray-200 dark:border-gray-800 rounded-md">
              <div className="flex flex-col justify-between flex-1 p-8 ">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800 dark:text-white">
                      {testimonial.testimonial}
                    </p>
                  </blockquote>
                </div>
    
                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <div className="ml-3">
                      <p className=" dark:text-gray-300 text-base font-semibold text-gray-800 truncate">
                        {testimonial.name}
                      </p>
                      <p className=" dark:text-gray-300 text-base text-gray-500 truncate">
                        {testimonial.username}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondContentHero;
