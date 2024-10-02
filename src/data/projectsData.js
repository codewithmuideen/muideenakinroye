
import RestCountries from "./../assets/portfolioImages/restcountries.jpg";
import SpaceTourism from "./../assets/portfolioImages/spacetourism.jpg";
import Advice from "./../assets/portfolioImages/advice.jpg";
import Page from "./../assets/portfolioImages/intropage.jpg";
// import AWS from "./../assets/portfolioImages/s3.PNG";
import Todo from "./../assets/portfolioImages/todo.jpg"
import Vanlife from "./../assets/portfolioImages/vanlife.png"

// in progress projects

import Servista from './../assets/portfolioImages/servista.png'
import landingPage from './../assets/portfolioImages/url.jpg'

const ProjectsData = [
  {
    id: "vanlife",
    img: Vanlife,
    name: "Project Van Life",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://muideenakinroye.vercel.app/",
    source: "https://github.com/codewithmuideen/",
    description:
      "I developed a Single Page Application (SPA) for renting a van for road trips with 10+ routes, using ReactJS, React Router 6, and CSS for styling. The application features a responsive design and seamless navigation, ensuring an optimal user experience across devices.",
  },
  {
    id: "fyp",
    img: Servista,
    name: "Service Provider Application",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://muideenakinroye.vercel.app/",
    source: "https://github.com/codewithmuideen/",
    description:
      "A cross-platform web application that connects local service providers with customers. As a full-stack developer, I contributed to the development of the app using Node.js, Express.js, Next.js, and MongoDB. I also designed the user interface using Figma. The mobile app is currently in the testing phase, and the web app's frontend is fully completed and ready for launch.",
  },
  {
    id: "rest-countries",
    img: RestCountries,
    name: "REST Countires API",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://muideenakinroye.vercel.app/",
    source: "https://github.com/codewithmuideen/",
    description:
      "Responsive website which integrates with the REST Countries API to pull country data. You can view the list of all countries and find one via search or by filtering regions. Individual country page, enables you to see further details about the country like border countries. Mobile first workflow and Bootstrap v5 is used to make it responsive.",
  },

  {
    id: "space-tourism",
    img: SpaceTourism,
    name: "Space Tourism Website",
    stack: ["< React.js />", "< CSS3 />"],
    live: "https://muideenakinroye.vercel.app/",
    source: "https://github.com/codewithmuideen/",
    description:
      "Multi-page space tourism website provides relevent information for users. It has a responsive design and navigation. A large and complex project that required me to plan ahead and break down the work into smaller chunks. I used React.js to build the website and CSS3 for styling.",

  },
  // {
  //   id: "cloud-storage",
  //   img: AWS,
  //   name: "Cloud Storage with AWS Simple Storage Service",
  //   stack: ["< AWS S3 /> " , "< JavaScript /> " , "< Express.js />"],
  //   live: "",
  //   source: "https://github.com/rimshub/cloud-storage-s3",
  //   description:  
  //       "This challenge from frontendmentor tested my skills to create dropdown navigation menus, a common pattern on larger sites. It also has some nice basic layout challenge",
  // },

  {
    id: "advice-generator",
    img: Advice,
    name: "Advice Generator App",
    stack: ["< HTML5 />", "< CSS3 />", "< JavaScript />"],
    live: "https://muideenakinroye.vercel.app/",
    source: "https://github.com/codewithmuideen/",
    description:
      "This advice generator app using the Advice Slip API. A small and fun app to practice JavaScript and mobile first workflow and CSS3. It has a responsive design and navigation.",
  },


  {
    id: "todo",
    img: Todo,
    name: "JavaScript Todo App",
    stack: ["< JavaScript />  ", "< Sass />"],
    live: "https://muideenakinroye.vercel.app/",
    source: "https://github.com/codewithmuideen/",
    description:
      "Responsive JS todo app with color theme switcher. Enables users to add, delete, filter, and clear day-to-day tasks. It has user-friendly interface and navigation. I was able to practice my JavaScript and Sass skills in this project.",
  },

  {
    id: "dropdown-nav",
    img: Page,
    name: "Homepage with dropdown navigation / Figma to React",
    stack: ["< React.js />   ", "< CSS3 />"],
    live: "https://muideenakinroye.vercel.app/",
    source: "https://github.com/codewithmuideen/",
    description:
      "This challenge from frontendmentor tested my skills to create dropdown navigation menus, a common pattern on larger sites. It also has some nice basic layout challenge. As a front-end developer, I was able to practice my React.js and CSS3 skills in this project.",
  },

];

const InprogressProjectsData = [

  {
    id: "url-short",
    img: landingPage,
    name: "URL shortening API landing page",
    stack: ["< JavaScript />", "< NodeJS />"],
    live: "https://muideenakinroye.vercel.app/",
    source: "https://github.com/codewithmuideen/",
    description:
      "Integrate with the shrtcode URL shortening API and play with browser storage in this landing page challenge",
  },

];

export default { ProjectsData, InprogressProjectsData }