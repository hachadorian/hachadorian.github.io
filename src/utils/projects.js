export const projects = [
  {
    name: "capstone project - pha cares tracker",
    description: `This was my first experience having to work with a client to 
      deliver an end product. It was a great learning experience. I learned a ton
      about working within a team and client relations. The application was for 
      LNPWI for tracking data surrounding public housing residents. We worked in sprints
      and had daily scrum meetings where we would rotate scrum master. Along with
      development we created documentation for the end user and deployed the application
      on AWS.`,
    frontend: ["html", "css", "bootstrap"],
    backend: ["asp.net", "c#"],
    live: "https://phacarestracker.com/",
    image: "carestracker.png",
  },
  {
    name: "instagram clone",
    description: `This was my final project for a class in server-side development.
      Designed website using HTML/CSS/Bootstrap; developed a RESTful API for most of
      the functionality; SOAP API for direct messaging; designed data model/database
      and implemented stored procedures to prevent SQL injection.`,
    frontend: ["html", "css", "bootstrap"],
    backend: ["asp.net", "c#"],
    source: "https://github.com/hachadorian/TermProject3342",
    image: "instagram.png",
  },
  {
    name: "fullstack javascript blog",
    description: `Since graduation I have shifted my focus more towards front-end
      development with Javascript. I found a course called fullstackopen.com which
      teaches fullstack javascript development. The application is just a basic
      blog application which allows the user to create a profile, login, create
      posts and comment on posts.`,
    frontend: ["react", "tailwindcss"],
    backend: ["nodejs", "graphql", "postgres"],
    live: "github.com",
    source: "github.com",
    image: "tempimage.png",
  },
  {
    name: "twitter bot",
    description: `This was a personal project between semesters. I have always had
      an interest in learning python and I came up with the idea and figured I would
      try out the language. The script scrapes a subreddit for twitch clips using PRAW
      (Python Reddit API Wrapper), then using Selenium browser automation downloads
      the clip and posts the clips through the Twitter API.`,
    frontend: ["..."],
    backend: ["python"],
    source: "https://github.com/hachadorian/twitterbot",
    image: "python.png",
  },
];
