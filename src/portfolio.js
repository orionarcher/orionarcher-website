/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Orion's Portfolio",
  description:
    "Doctoral Candidate at UC Berkeley in the Persson Group. NSF Fellow.",
  og: {
    title: "Orion Cohen's Portfolio",
    type: "website",
    url: "http://orioncohen.com/",
  },
};

//Home Page
const greeting = {
  title: "Orion Archer Cohen",
  logo_name: "OrionArcher",
  nickname: "@orionarcher",
  subTitle: [
    "Invested in shifting the materials discovery paradigm.",
    "NSF Fellow, Persson Group.",
  ],
  // Climate change demands faster materials discovery.
  // "Specialized generalist" uniting molecular simulation, scientific software engineering,
  //
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/orionarcher",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/orionarcher",
    fontAwesomeIcon: "fab fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/orioncohen/",
    fontAwesomeIcon: "fab fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Email",
    link: "mailto:orion@lbl.gov",
    fontAwesomeIcon: "fas fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/orionarcher_",
    fontAwesomeIcon: "fab fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Research",
    link: "https://perssongroup.lbl.gov/people.html",
    fontAwesomeIcon: "fas fa-graduation-cap", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#003262", // Reference https://simpleicons.org/?q=linkedin
  },
];

const skills = {
  data: [
    {
      title: "Computational Molecular Science",
      fileName: "FeelingScience",
      skills: [
        "New materials are deperately needed to drive a renewable energy transition but the " +
          "space of possible new materials is impossibly large. To accelerate discovery, I" +
          "simulate materials before they are ever synthesized in a lab, trying to determine " +
          "their properties and behavior at a much lower cost.",
      ],
      softwareSkills: [
        {
          skillName: "Plotly",
          fontAwesomeClassname: "simple-icons:plotly", // from iconify
          style: {
            color: "#3f5075",
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "logos:numpy", // from iconify
          style: {
            color: "#3f5075",
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos:pytorch-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#0080d0",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "cib:r",
          style: {
            backgroundColor: "transparent",
            color: "#2167ba",
          },
        },
      ],
    },
    {
      title: "Scientific Software Engineering",
      fileName: "ClusterImg",
      skills: [
        "Simulating hundreds or thousands of materials is challenging. Requiring highly " +
          "specialized codes and generating huge amounts of data. I write software that " +
          "it easier to run, store, and analyze the results of simulations.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "bxl:c-plus-plus",
          style: {
            backgroundColor: "transparent",
            color: "#3f5075",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "clarity:cluster-solid",
          style: {
            backgroundColor: "transparent",
            color: "#004480",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "With great data comes great responsibility. I use cutting edge data science " +
          "and AI techniques to turn heaps of raw simulation data into useful results. " +
          "I also study how visualization and design can help " +
          "humans glean greater understanding from raw data.",
      ],
      softwareSkills: [
        {
          skillName: "Plotly",
          fontAwesomeClassname: "simple-icons:plotly", // from iconify
          style: {
            color: "#3f5075",
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "logos:numpy", // from iconify
          style: {
            color: "#3f5075",
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos:pytorch-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#0080d0",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "cib:r",
          style: {
            backgroundColor: "transparent",
            color: "#2167ba",
          },
        },
        {
          skillName: "Slides",
          fontAwesomeClassname: "logos:slides",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
    {
      title: "Front End Development",
      fileName: "FullStackImg",
      skills: [
        "Ultimately, insights must be communicated. No medium is more widespread or more " +
          "flexible than the modern web. I use web technologies like React and Plotly Dash " +
          "to build accessible and attractive apps that communicate scientific findings.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "ThreeJS",
          fontAwesomeClassname: "logos:threejs",
          style: {
            color: "#ff9900",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    // {
    //   title: "Indian Institute of Information Technology Kurnool",
    //   subtitle: "B.Tech. in Computer Engineering",
    //   logo_path: "iiitk_logo.png",
    //   alt_name: "IIITDM Kurnool",
    //   duration: "2016 - Present",
    //   descriptions: [
    //     "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
    //     "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
    //     "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
    //   ],
    //   website_link: "http://iiitk.ac.in",
    // },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Education, Research, and Leadership",
  description:
    "As a student, researcher, teacher, and leader, I " +
    "pursue core principles: science should be open, inclusive, and stunningly effective.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Education",
      experiences: [
        {
          title: "Ph.D. Chemistry",
          company: "University of California, Berkeley",
          company_url: "https://www.berkeley.edu/",
          logo_path: "berkeley_logo.png",
          duration: "Expected 2024",
          location: "Berkeley, California",
          description:
            "My coursework has focused on chemistry, machine learning, and scientific communication. I have earned a Designated Emphasis in Computational Data Science and Engineering and a certificate in Applied Data Science.",
          color: "#c4820d",
        },
        {
          title: "B.A. Chemistry",
          company: "Reed College",
          company_url: "https://www.reed.edu/",
          logo_path: "reed_logo.png",
          duration: "Graduated 2018",
          location: "Portland, Oregon",
          description:
            "My undergraduate coursework focused on chemistry and physics and my senior thesis used spectroscopy and microscopy to characterize the surface properties of meteorites.",
          color: "#a70e16",
        },
      ],
    },
    {
      title: "Research",
      experiences: [
        {
          title: "Graduate Research Fellow",
          company: "Lawrence Berkeley National Laboratory",
          company_url: "https://www.lbl.gov/",
          logo_path: "lbl_logo.jpeg",
          duration: "August 2019 - PRESENT",
          location: "Berkeley, California",
          description:
            "Working with Prof. Kristin Persson I use molecular dynamics (MD) and density " +
            "functional theory (DFT) to explore battery electrolytes and recyclable polymers.",
          color: "#013959",
        },
        {
          title: "Domain Consultant",
          company: "Berkeley ResearchIT",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "berkeley_logo.png",
          duration: "August 2022 - PRESENT",
          location: "Berkeley, California",
          description:
            "At ResearchIT I advise researchers on how to leverage campus data and compute infrastruture, supporting equitable access to computation.",
          color: "#c4820d",
        },
        {
          title: "Scientific Software Developer",
          company: "Google Summer of Code",
          company_url: "https://summerofcode.withgoogle.com/",
          logo_path: "gsoc_logo.png",
          duration: "August 2021 - May 2021",
          location: "Remote",
          description:
            "Supported by Google and working closely with the MDAnalysis core developers, I developed the solvation-analysis package as part of the MDAnalysis ecosystem.",
          color: "#e37500",
        },
        {
          title: "English Teacher",
          company: "Soochow University",
          company_url: "http://eng.suda.edu.cn/",
          logo_path: "soochow_logo.png",
          duration: "January 2019 - July 2019",
          location: "Suzhou, China",
          description:
            "I taught college-level english to 110 freshmen and sophmore students.",
          color: "#fc1011",
        },
        {
          title: "Croynyn Fellow & Senior Thesis",
          company: "Reed College",
          company_url: "https://www.reed.edu/",
          logo_path: "reed_logo.png",
          duration: "September 2017 - Aug 2018",
          location: "Portland, Oregon",
          description:
            "Alongside Prof. Dan Gerrity and Prof. Natasja Swartz I explored surface properties of meteorites with electron microscopy and spectroscopy.",
          color: "#a70e16",
        },
        {
          title: "Research Assistant",
          company: "Reed College",
          company_url: "https://www.reed.edu/",
          logo_path: "reed_logo.png",
          duration: "June 2017 - Aug 2017",
          location: "Portland, Oregon",
          description:
            "In the lab of Prof. Dan Gerrity I probed the distribution of states formed in CrCO6 dissociation and nurtured our venerable laser.",
          color: "#a70e16",
        },
        {
          title: "REU Summer Fellow",
          company: "Portland State University",
          company_url: "https://www.reed.edu/",
          logo_path: "psu_logo.png",
          duration: "June 2017 - Aug 2017",
          location: "Portland, Oregon",
          description:
            "Worked under Prof. Theresa McCormick at PSU's Microscopy and Microanalysis REU program. This featured a week-long electron microscopy course.",
          color: "#6b8e1c",
        },
      ],
    },
    {
      title: "Leadership",
      experiences: [
        {
          title: "Chair",
          company: "Science Leadership and Management",
          company_url: "https://qb3.berkeley.edu/education/slam/",
          logo_path: "slam_logo.png",
          duration: "May 2022 - Present",
          location: "Berkeley, California",
          description:
            "We organize seminars and workshops on science leadership and management at UC Berkeley.",
          color: "#000000",
        },
        {
          title: "Founder",
          company: "Open Science at Berkeley",
          company_url: "",
          logo_path: "boss_logo.png",
          duration: "May 2022 - Present",
          location: "Berkeley, California",
          description:
            "We further open-science through discussions of and workshops on personal development, education, and policy.",
          color: "#183361",
        },
        {
          title: "Founder",
          company: "Berkeley Chemistry Mathematics Bootcamp",
          company_url: "https://chemmathbootcamp.com/",
          logo_path: "berkeley_logo.png",
          duration: "March 2020 - Present",
          location: "Berkeley, California",
          description:
            "We designed and executed a week-long mathematics bootcamp for physical chemistry graduate students, now in it's fourth year.",
          color: "#c4820d",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Software",
  description:
    "I write software that makes molecular simulation easier and faster. All my codes and contributions " +
    "are openly available on GitHub. ",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "My past work has focused on creating software for high-throughput molecular dynamics and applying " +
    "it to lithium ion battery electrolytes.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
