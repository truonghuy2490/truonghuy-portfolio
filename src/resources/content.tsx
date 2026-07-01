import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Nguyen",
  lastName: "Huy",
  name: `Nguyen Vu Truong Huy`,
  role: "Software Developer (.NET Backend)",
  avatar: "/images/avatar.jpg",
  email: "nguyenvutruonghuy112@gmail.com",
  location: "Asia/Ho_Chi_Minh", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Vietnamese", "English"], // optional: Leave the array empty if you don't want to display languages
  locale: "vi-VN", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: `Meet ${person.name}, a .NET Backend Software Engineer passionate about building scalable enterprise applications.`,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/truonghuy2490",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/truonghuy2409/",
    essential: true,
  },
  // {
  //   name: "Instagram",
  //   icon: "instagram",
  //   link: "https://www.instagram.com/once_ui/",
  //   essential: false,
  // },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  //   essential: true,
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "${person.name} | .NET Backend Developer",
  description: "Portfolio showcasing enterprise backend projects, ASP.NET Core development, React/Next.js applications, and software engineering experience.",
  headline: <>Learning, building, and improving every day.</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm <strong>{person.lastName}</strong>, a{" "}
      <strong>.NET Backend Engineer</strong> based in Ho Chi Minh City, Vietnam.
      I build scalable web applications with ASP.NET Core while also having
      hands-on experience with React and Next.js. Currently, I'm part of
      NashTech's Rookie-to-Engineer Program, where I develop enterprise software
      and continuously grow as a software engineer.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.lastName} is a software engineer based in Ho Chi Minh City, Vietnam,
        specializing in .NET backend development. He has experience building enterprise
        applications with ASP.NET Core, Entity Framework Core, SQL Server, PostgreSQL,
        and Clean Architecture. Passionate about backend engineering, he enjoys solving
        complex business problems, writing maintainable code, and continuously improving
        through Agile development, code reviews, and modern engineering practices.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "NashTech",
        timeframe: "Apr 2026 - Present",
        role: "Software Engineer (Rookie-to-Engineer Program)",
        achievements: [
          <>
            Developed backend features for an enterprise Asset Management System using
            ASP.NET Core, Clean Architecture, CQRS, Entity Framework Core, and SQL Server.
          </>,
          <>
            Built and maintained RESTful APIs for authentication, user management, assets,
            assignments, return requests, and reporting while collaborating in a 6-developer
            Agile Scrum team.
          </>,
          <>
            Wrote unit tests with xUnit and Moq, participated in code reviews, managed pull
            requests with Azure DevOps, and worked with Docker and Git Flow throughout the
            development lifecycle.
          </>,
        ],
        images: [],
      },

      {
        company: "SPLUS Software",
        timeframe: "Oct 2025 - Apr 2026",
        role: "Fresher Backend Developer",
        achievements: [
          <>
            Contributed to the Engineering Management System (EMS) project for JGC Holdings
            Corporation using ASP.NET Core, Entity Framework Core, SQL Server, and C#.
          </>,
          <>
            Implemented backend APIs, business logic, and data access layers while supporting
            feature development, bug fixing, and performance improvements.
          </>,
          <>
            Collaborated with senior engineers to improve code quality, database design, and
            enterprise application workflows.
          </>,
        ],
        images: [],
      },

      {
        company: "FPT Software",
        timeframe: "Jan 2024 - Apr 2024",
        role: "Internship Trainee",
        achievements: [
          <>
            Assisted in developing backend features for the Fresher Academy Management System
            (FAMS) using ASP.NET technologies.
          </>,
          <>
            Supported API implementation, database operations, debugging, and software testing
            while learning enterprise development practices.
          </>,
          <>
            Collaborated with mentors and teammates in a professional software development
            environment to strengthen backend engineering fundamentals.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education & Certifications",
    institutions: [
      {
        name: "FPT University",
        description: (
          <>
            Bachelor of Engineering in Software Engineering (2022 – 2025).
            Focused on software engineering principles, object-oriented programming,
            databases, web development, software architecture, and Agile development.
          </>
        ),
      },
      {
        name: "Microsoft Learn",
        description: (
          <>
            Microsoft Certified: Azure Fundamentals (AZ-900).
            Gained knowledge of cloud computing concepts, Azure services, security,
            networking, governance, and cloud architecture fundamentals.
          </>
        ),
        certificateLink: "https://learn.microsoft.com/en-us/users/nguyenvutruonghuy-4952/credentials/c1a69a893a09aa6a", // AZ-900 credential URL
        certificateImage: "/images/certs/az-900.png",
      },
      {
        name: "Anthropic Academy",
        description: (
          <>
            Completed Claude Code 101, Claude Code in Action, and Introduction to
            Subagents, focusing on AI-assisted software development, agentic coding
            workflows, and developer productivity.
          </>
        ),
        certificateLink: "https://verify.skilljar.com/c/abm92m2sd6ax", // Anthropic verification URL
        certificateImage: "/images/certs/claude.png",
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: ".NET Backend Development",
        description: (
          <>
            Experienced in building RESTful APIs and backend services using ASP.NET Core,
            Entity Framework Core, and Clean Architecture. Comfortable implementing
            authentication, business logic, and enterprise application features.
          </>
        ),
        tags: [
          { name: "C#", icon: "csharp" },
          { name: ".NET", icon: "dotnet" },
          { name: "ASP.NET Core", icon: "dotnet" },
          { name: "ASP.NET Identity", icon: "Identity" },
          { name: "Entity Framework Core", icon: "database" },
        ],
        images: [], 
      },

      {
        title: "Frontend Development",
        description: (
          <>
            Comfortable building modern web interfaces with React.js and Next.js.
            Experienced integrating REST APIs, building forms, implementing CRUD
            features, authentication flows, and responsive UI while collaborating
            closely with backend development.
          </>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Tailwind CSS", icon: "tailwindcss" },
        ],
        images: [],
      },

      {
        title: "Database & API Development",
        description: (
          <>
            Familiar with designing relational databases, developing secure RESTful
            APIs, and working with SQL Server and PostgreSQL for enterprise
            applications.
          </>
        ),
        tags: [
          { name: "SQL Server", icon: "microsoft" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "REST API", icon: "globe" },
          { name: "Swagger", icon: "swagger" },
        ],
        images: [],
      },

      {
        title: "Development Workflow",
        description: (
          <>
            Experienced working in Agile Scrum teams using Git Flow, Azure DevOps,
            Docker, pull requests, code reviews, and unit testing as part of daily
            development.
          </>
        ),
        tags: [
          { name: "Azure DevOps", icon: "azure" },
          { name: "Docker", icon: "docker" },
          { name: "Git", icon: "git" },
          { name: "xUnit", icon: "code" },
        ],
        images: [],
      },
      
      {
        title: "AI-Assisted Development",
        description: (
          <>
            Use Claude Code, GitHub Copilot, and ChatGPT to improve development
            productivity, explore solutions, and streamline everyday engineering
            tasks while maintaining code quality.
          </>
        ),
        tags: [
          { name: "Claude Code", icon: "claude" },
          { name: "GitHub Copilot", icon: "github" },
          { name: "ChatGPT", icon: "openai" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    // DEV CAFE
    {
      src: "/images/gallery/dev-cafe-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/dev-cafe-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/dev-cafe-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/dev-cafe-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/dev-cafe-5.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/dev-cafe-6.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/dev-cafe-7.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    // DEV CAFE
    // ---
    // Nashtech football
    {
      src: "/images/gallery/football-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/football-vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/football-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/football-vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/football-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/football-vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/football-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/football-5.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/football-6.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/football-7.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    // Nashtech football
    // ---
    // Team Dev anh Phong va Nam 
    {
      src: "/images/gallery/team-anh-NnP-final.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/team-anh-NnP-start.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    // Team Dev anh Phong va Nam 
    // ---
    // Team Dev Rookie .NET
    {
      src: "/images/gallery/tean-dev-Phong-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/tean-dev-Phong-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/tean-dev-Phong-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/team-dev-NET-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/team-dev-NET-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/team-dev-NET-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/team-dev-NET-0.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    // Team Dev Rookie .NET
    // ---
    // Splus
    {
      src: "/images/gallery/splus-0.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/splus-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
