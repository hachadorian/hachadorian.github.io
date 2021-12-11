import React from "react";

const Learning = () => {
  return (
    <div className="flex justify-center py-12">
      <div className="lg:w-1/4 text-white bg-gray-900 p-5 border-t-2">
        <h1 className="text-4xl mb-3">what am i currently learning?</h1>
        <div>
          I continue to learn more about front-end development each day.
          recently I have been working with react a ton and have been enjoying
          the workflow of the library. I even decided to create this site with
          react and I think it came out pretty nice. I also choose to learn a
          new CSS framework for this site. the framework I chose was tailwind.
          In college, we used a ton of bootstrap but I like how much more
          control tailwind gives to the dev. additionally, I have been going
          through the full-stack open course and have been learning about
          full-stack js development. the course also goes through other trendy
          technologies like graphql for example.
        </div>
      </div>
    </div>
  );
};

export default Learning;
