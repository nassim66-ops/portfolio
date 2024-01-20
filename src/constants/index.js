import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  ast,
  // mern,
  refine,
  threadClone,
  socialMediaClone,
  promptopia,
  kgc
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React and React Native Developer",
    icon: mobile,
  },
  {
    title: "Full Stack NextJs Developer",
    icon: backend,
  },
  {
    title: "MERN Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "AST",
    icon: ast,
    iconBg: "#fff",
    date: "Nov 2022 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "AST",
    icon: ast,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - April 2023",
    points: [
      "Developing and maintaining mobile applications using React Native.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design to all mobile sizes.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "IT Specialist",
    company_name: "Khattar Group",
    icon: kgc,
    iconBg: "#000",
    date: "Oct 2023 - Present",
    points: [
      "Technical skills",
      "Software and hardware maintenance.",
      "Soft skills",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Promptopia App",
    description:
      "Promptopia is a full-stack Next.js application that lets users share creative prompts. With a sleek React-powered front-end and a robust Node.js back-end, it's the go-to platform for prompt enthusiasts to ignite their creativity and connect with a global community.",
    tags: [
      {
        name: "full-stack",
        color: "",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nextJs",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: promptopia,
    source_code_link: "https://github.com/nassim66-ops/promptopia_project",
    link: "https://promptopia-project-nassim.vercel.app/",
  },
  {
    name: "Threads clone",
    description:
      "ThreadsClone is a modern and engaging social networking application developed using the MERN (MongoDB, Express.js, React, Node.js) stack with the added power of Next.js for seamless server-side rendering and routing. This platform allows users to create, share, and engage in threaded conversations on a variety of topics.",
    tags: [
      {
        name: "mern-stack",
        color: "",
      },
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "clerk",
        color: "pink-text-gradient",
      },
      {
        name: "uploadThing",
        color: "",
      },
    ],
    image: threadClone,
    source_code_link: "https://github.com/nassim66-ops/threads_clone",
    link: "https://threads-clone-nassim.vercel.app/",
  },
  {
    name: "Refine Dashboard",
    description:
      "Web application platform that offers users the ability to effortlessly search, book, and efficiently manage property rentals from multiple providers. Designed to cater to diverse property needs, this platform provides a seamless and convenient solution, ensuring an optimal rental experience for all users",
    tags: [
      {
        name: "mern-stack",
        color: "",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "refine",
        color: "pink-text-gradient",
      },
    ],
    image: refine,
    source_code_link: "https://github.com/nassim66-ops/refine_dashboard",
    link: "https://dashboard-refine-app.netlify.app/dashboard",
  },

  {
    name: "Social Media App Clone",
    description:
      "Experience a familiar and dynamic social media app clone, developed using the MERN stack (MongoDB, Express, React, and Node.js). Enjoy seamless communication and content sharing.",
    tags: [
      {
        name: "mern-stack",
        color: "",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: socialMediaClone,
    source_code_link: "https://github.com/nassim66-ops/social-media-app",
    link: "https://social-media-clone-app.netlify.app/home",
  },
];

const summary =
  "I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!";

export { services, technologies, experiences, testimonials, projects, summary };
