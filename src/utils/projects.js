export const projects = [
  {
    name: "capstone project - pha cares tracker",
    description: `This was my first experience having to work with a client to 
      deliver an end product. It was a great learning experience. I learned a ton
      about working within a team and client relations. The application was for 
      LNPWI for tracking data surrounding public housing residents. We worked in sprints
      and had daily scrum meetings where we would rotate scrum master. Along with
      development we created documentation for the end user and deployed the application
      on AWS using Elastic Beanstalk and also Amazon's RDS service for the database.`,
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
    name: "twitter bot",
    description: `This was a personal project between semesters. I have always had
      an interest in learning python and I came up with the idea and figured I would
      try out the language. The script scrapes a subreddit for twitch clips using PRAW
      (Python Reddit API Wrapper), then using Selenium browser automation downloads
      the clip and finally posts the clips through the Twitter API.`,
    frontend: ["..."],
    backend: ["python"],
    source: "https://github.com/hachadorian/twitterbot",
    image: "python.png",
  },
  {
    name: "fullstack javascript authentication",
    description: `Since graduation I have shifted my focus more towards front-end
      development with Javascript and also learning fullstack Javascript development.
      This project was apart of a challenge from devChallenges.io. The backend server was created with NodeJS, apollo-server-express and Graphql and the 
      frontend was made with ReactJS and TailwindCSS. I also used redis for session management and Nodemailer 
      for sending emails to users. The backend is deployed on Heroku and for the frontend I used AWS amplify. 
      I also used AWS' s3 service for storing and retrieving profile pictures.`,
    frontend: ["react", "tailwindcss"],
    backend: ["nodejs", "graphql", "redis", "postgres"],
    live: "https://master.d24prayglrs9ko.amplifyapp.com",
    source: "https://github.com/hachadorian/authentication-app-frontend",
    image: "authentication.png",
  },
  {
    name: "twitch musicplayer",
    description: `Project that I have been working on for a short amount of time. It is a music player that was
      meant to be integrated with Twitch to create a small DMCA free community. For the login I integrated
      Twitch's OAuth and for session management I used redis to store a cookie on the server-side. The backend
      server uses NodeJS, apollo-server-express and GraphQL and the frontend uses ReactJS and TailwindCSS. I also
      used AWS' Cloudfront to set up a CDN to deliver the mp3 files to play. I think the idea was good in terms of 
      creating a community but if I do end up finishing this project I may integrate soundcloud as cost of Cloudfront
      and delivering mp3s can become pretty costly.`,
    frontend: ["react", "tailwindcss"],
    backend: ["nodejs", "graphql", "redis", "postgres"],
    source: "https://github.com/hachadorian/music-frontend",
    image: "twitchmusicplayer.png",
  },
];
