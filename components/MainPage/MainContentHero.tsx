import React from "react";

const testimonialsData = [
  {
    name: "Darrell Steward",
    username: "@darrels",
    avatar:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg",
    testimonial:
      "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    tags: ["#another"],
  },
  {
    name: "Leslie Alexander",
    username: "@lesslie",
    avatar:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-2.jpg",
    testimonial:
      "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
    tags: ["#Celebration"],
  },
  {
    name: "Jenny Wilson",
    username: "@jennywilson",
    avatar:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-3.jpg",
    testimonial:
      "This is a top quality product. No need to think twice before making it live on web.",
    tags: ["#make_it_fast"],
  },
  {
    name: "Kristin Watson",
    username: "@kristinwatson2",
    avatar:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-4.jpg",
    testimonial:
      "This is a top quality product. No need to think twice before making it live on web.",
    tags: ["#make_it_fast"],
  },
  {
    name: "Guy Hawkins",
    username: "@jennywilson",
    avatar:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-5.jpg",
    testimonial:
      "This is a top quality product. No need to think twice before making it live on web.",
    tags: ["#make_it_fast"],
  },
  {
    name: "Marvin McKinney",
    username: "@darrels",
    avatar:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-6.jpg",
    testimonial:
      "With Celebration, it’s quicker with the customer, the customer is more ensured of getting exactly what they ordered, and I’m all for the efficiency.",
    tags: ["#dev", "#tools"],
  },
  {
    name: "Annette Black",
    username: "@darrels",
    avatar:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-7.jpg",
    testimonial:
      "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    tags: ["#another"],
  },
  {
    name: "Floyd Miles",
    username: "@darrels",
    avatar:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-8.jpg",
    testimonial:
      "My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    tags: ["#Celebration"],
  },
];

const MainContentHero = () => {
  const renderTestimonials = () => {
    return testimonialsData.map((testimonial, index) => (
      <div
        key={index}
        className="overflow-hidden bg-white dark:bg-black rounded-md shadow-xl"
      >
        <div className="px-5 py-6">
          <div className="flex items-center justify-between">
            <img
              className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
              src={testimonial.avatar}
              alt=""
            />
            <div className="min-w-0 ml-3 mr-auto">
              <p className="text-base font-semibold text-black dark:text-white truncate">
                {testimonial.name}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                {testimonial.username}
              </p>
            </div>
            <a href="#" title="" className="inline-block text-sky-500">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
              </svg>
            </a>
          </div>
          <blockquote className="mt-5">
            <p className="text-base text-gray-800 dark:text-gray-300">
              {testimonial.testimonial}
            </p>
            {testimonial.tags.map((tag, index) => (
              <span key={index} className="block text-sky-500">
                {tag}
              </span>
            ))}
          </blockquote>
        </div>
      </div>
    ));
  };

  return (
    <section className="py-2 sm:py-2 lg:py-2 bg-white dark:bg-black">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className=" dark:text-white text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            What our customers say
          </h2>
          <p className=" dark:text-gray-100  max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>

        <div className=" grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
          {renderTestimonials()}
        </div>
      </div>
    </section>
  );
};

export default MainContentHero;
