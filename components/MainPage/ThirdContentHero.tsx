import React from "react";

const ThirdContentHero = () => {
  return (
    <section className=" border border-gray-100 dark:border-gray-900 pt-10 pb-8 overflow-hidden bg-white dark:bg-black sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className=" dark:text-white text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Connect with all apps
          </h2>
          <p className=" dark:text-white max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
          <a
            href="#"
            title=""
            className=" dark:text-white inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 transition-all duration-200 border-2 border-gray-200 rounded-md mt-9 hover:bg-gray-900 hover:text-white hover:border-gray-900 focus:bg-gray-900 focus:text-white focus:border-gray-900"
            role="button"
          >
            Check all apps
          </a>
        </div>
      </div>

      <img
        className="w-full min-w-0 mx-auto mt-12 scale-150 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-7xl lg:min-w-0 lg:mt-0 lg:scale-100 "
        src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/1/services-icons.png"
        alt=""
      />
    </section>
  );
};

export default ThirdContentHero;
