// src/app/page.js
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const skills = [
    {
      name: "Django",
      img: "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",
    },
    {
      name: "React",
      img: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    },
    {
      name: "Python",
      img: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    },
    {
      name: "Java",
      img: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
    },
    {
      name: "JavaScript",
      img: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
    },
    {
      name: "MySQL",
      img: "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white",
    },
    {
      name: "ElasticSearch",
      img: "https://img.shields.io/badge/-ElasticSearch-005571?style=for-the-badge&logo=elasticsearch",
    },
    {
      name: "Postgres",
      img: "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
    },
    {
      name: "Azure",
      img: "https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white",
    },
    {
      name: "GitHub",
      img: "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
    },
    {
      name: "Power Bi",
      img: "https://img.shields.io/badge/power_bi-F2C811?style=for-the-badge&logo=powerbi&logoColor=black",
    },
    {
      name: "Jira",
      img: "https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white",
    },
    {
      name: "Postman",
      img: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
    },
    {
      name: "Android",
      img: "https://img.shields.io/badge/Android_Studio-3DDC84?style=for-the-badge&logo=android-studio&logoColor=white",
    },
    {
      name: "D3.js",
      img: "https://img.shields.io/badge/d3%20js-F9A03C?style=for-the-badge&logo=d3.js&logoColor=white",
    },
    {
      name: "Figma",
      img: "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white",
    },
    {
      name: "AWS",
      img: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
    },
    {
      name: "Google Cloud",
      img: "https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white",
    },
    {
      name: "Flask",
      img: "https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white",
    },
    {
      name: "Terraform",
      img: "https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white",
    },
    {
      name: "FastAPI",
      img: "https://img.shields.io/badge/fastapi-109989?style=for-the-badge&logo=FASTAPI&logoColor=white",
    },
    {
      name: "Firebase",
      img: "https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black",
    },
  ];

  const projects = [
    {
      title: "ExpenseTrackerExtended",
      description:
        "A cloud-native expense tracker app leveraging AWS services, Kubernetes (EKS), and Docker for scalable, serverless architecture.",
      link: "https://github.com/namratabhaumik/ExpenseTrackerExtended",
    },
    {
      title: "VR-Evacuation-Simulation",
      description:
        "A VR evacuation simulation built with Unity3D to analyze pedestrian behavior during fire emergencies.",
      link: "https://github.com/namratabhaumik/VR-Evacuation-Simulation",
    },
    {
      title: "DalVacationHome",
      description:
        "Revolutionizing vacation rental management with a cutting-edge cloud platform, powered by GCP and AWS services",
      link: "https://github.com/namratabhaumik/DalVacationHome",
    },
    {
      title: "BlogIt",
      description: "A dynamic platform where content creators unite",
      link: "https://github.com/namratabhaumik/BlogIt",
    },
    {
      title: "MealMate",
      description:
        "An Android application for regular meal planning and sharing recipes",
      link: "https://github.com/namratabhaumik/MealMate",
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      link: "https://www.credly.com/badges/8cceb83b-b7e4-42f8-8a71-20bf2ad712b2/linked_in_profile",
    },
    {
      name: "Microsoft certified Azure Fundamentals",
      link: "https://www.credly.com/badges/1aab900c-d79f-4b18-93ab-7d1768217c7b/public_url",
    },
    {
      name: "Microsoft Certified: Power Platform Fundamentals",
      link: "https://www.credly.com/badges/c16b4879-0e08-46af-b834-7b8e0144250e/public_url",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      img: "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white",
      url: "https://www.linkedin.com/in/namratabhaumik/",
    },
    {
      name: "Gmail",
      img: "https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white",
      url: "mailto:namratabhaumik16@gmail.com",
    },
    {
      name: "Discord",
      img: "https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white",
      url: "https://discordapp.com/users/namrata2599",
    },
    {
      name: "Instagram",
      img: "https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white",
      url: "https://www.instagram.com/missing.nemo/",
    },
  ];

  return (
    <div className="container">
      <header className="hero-section">
        <h1>Hi there! I&apos;m Namrata 👋 (she/her)</h1>
        <p>
          I&apos;m currently exploring AI-augmented development workflows,
          including LLM-powered tools, prompt engineering, and the evolving
          landscape of context-aware systems. Hit me up for collaborations,
          discussions, events, or workshops related to Agentic Software
          Development or any technology in general!
        </p>
      </header>

      <section className="skills-section">
        <h2>My Foundations Lie In</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <Image
              key={index}
              src={skill.img}
              alt={skill.name}
              width={30}
              height={30}
            />
          ))}
        </div>
      </section>

      <section className="projects-section">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h3>
            <p>{project.description}</p>
          </div>
        ))}
        <p>
          Would you like to read more about my projects and journey in tech so
          far? Click here 👉
          <a
            href="https://namrata-bhaumik.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white"
              alt="Medium"
              width={30}
              height={30}
            />
          </a>
        </p>
      </section>

      <section className="certifications-section">
        <h2>Certifications</h2>
        {certifications.map((cert, index) => (
          <a
            key={index}
            className="certification-link"
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {cert.name}
          </a>
        ))}
      </section>

      <section className="contact-section">
        <h2>Say Hello</h2>
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={link.img} alt={link.name} width={30} height={30} />
            </a>
          ))}
        </div>
      </section>

      <footer
        style={{
          marginTop: "40px",
          paddingTop: "20px",
          borderTop: "1px solid #eee",
          textAlign: "center",
          fontSize: "0.9em",
          color: "#666",
        }}
      >
        <p>
          &copy; {new Date().getFullYear()} Namrata Bhaumik. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
