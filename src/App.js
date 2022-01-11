import "./App.css";
import NameCard from "./components/name-card/NameCard";
import ProjectCard from "./components/project-card/ProjectCard";
import SkillsCard from "./components/skills-card/SkillsCard";
import BlogPostCard from "./components/blogpost-card/BlogPostCard";
import Banner from "./components/banner/Banner";
import HobbiesCard from "./components/hobbies-card/HobbiesCard";
import ExperienceCard from "./components/experience-card/ExperienceCard";
import Footer from "./components/footer/Footer";

const App = () => {
  const nameCardParagraphs = [
    "Self-motivated developer, who is willing to learn and create outstanding UI applications.",
    "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
  ];

  const projectsArray = [
    {
      id: 1,
      description:
        "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. ",
      tags: ["#HTML", "#CSS", "#responsive"],
      demoLink: "",
      codeLink: "",
    },
  ];

  const skillsArray = [
    ["React", 60],
    ["Javascript", 80],
    ["CSS", 90],
    ["Vue", 60],
    ["Redux", 80],
    ["React Native", 90],
  ];

  const blogArray = [
    {
      id: 1,
      title: "How to organize your CSS",
      description:
        "In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
      image:
        "https://images.unsplash.com/photo-1533906966484-a9c978a3f090?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
      platform: "dev.to",
      link: "",
    },
  ];

  const tagsArray = [];

  const hobbiesArray = [
    {
      id: 1,
      hobby: "Gaming",
      description: "Quisque feugiat malesuada molestie.",
      image:
        "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
    },
    {
      id: 2,
      hobby: "Cooking",
      description: "Quisque feugiat malesuada molestie.",
      image:
        "https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
    },

    {
      id: 3,
      hobby: "Biking",
      description: "Quisque feugiat malesuada molestie.",
      image:
        "https://images.unsplash.com/photo-1531502774286-5e4e8e94879f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];

  const experienceArray = [
    {
      id: 1,
      logo: "https://w7.pngwing.com/pngs/488/478/png-transparent-adidas-originals-t-shirt-logo-brand-adidas-angle-text-retail.png",
      title: "Front-end developer",
      period: "Feb 2017 - Current",
      description:
        "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    },
    {
      id: 2,
      logo: "https://logodownload.org/wp-content/uploads/2014/04/h-m-logo.png",
      title: "Full-stack developer",
      period: "Aug 2016 - Feb 2018",
      description:
        "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    },
    {
      id: 3,
      logo: "http://www.bananaaudio.com/wp-content/uploads/2014/09/Nivea-logo.png",
      title: "Junior front-end developer",
      period: "Jun 2015 - Aug 2016",
      description:
        "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <NameCard
          fullName="Billy Pearson"
          jobTitle="Front-end developer"
          email="billy@example.com"
          phone="(+603) 546 624 342"
          imageSrc="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          paragraphContent={nameCardParagraphs}
          cardOrientation="horizontal"
        />
        <NameCard
          fullName="Billy Pearson"
          jobTitle="Front-end developer"
          email="billy@example.com"
          phone="(+603) 546 624 342"
          imageSrc="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          paragraphContent={nameCardParagraphs}
          cardOrientation="vertical"
        />
        <Banner
          bannerTitle="Projects"
          count={projectsArray.length}
          tags={["React", "Vue", "Responsive"]}
        />
        <ProjectCard
          projectTitle="Recipe Blog"
          paragraphContent={projectsArray[0].description}
          projectTags={projectsArray[0].tags}
          imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          demoLink={projectsArray[0].demoLink}
          codeLink={projectsArray[0].codeLink}
          cardOrientation="horizontal"
        />
        <ProjectCard
          projectTitle="Recipe Blog"
          paragraphContent={projectsArray[0].description}
          projectTags={projectsArray[0].tags}
          imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          demoLink={projectsArray[0].demoLink}
          codeLink={projectsArray[0].codeLink}
          cardOrientation="vertical"
        />
        <SkillsCard
          jobField="Front End"
          skills={skillsArray}
          cardOrientation="horizontal"
        />
        <SkillsCard
          jobField="Front End"
          skills={skillsArray}
          cardOrientation="vertical"
        />
        <Banner bannerTitle="Blogs" count={blogArray.length} tags={tagsArray} />

        <BlogPostCard
          postTitle={blogArray[0].title}
          postDescription={blogArray[0].description}
          postPlatform={blogArray[0].platform}
          postLink={blogArray[0].link}
          postImage={blogArray[0].image}
          cardOrientation="horizontal"
        />
        <BlogPostCard
          postTitle={blogArray[0].title}
          postDescription={blogArray[0].description}
          postPlatform={blogArray[0].platform}
          postLink={blogArray[0].link}
          postImage={blogArray[0].image}
          cardOrientation="vertical"
        />
        <ExperienceCard
          experienceType="Work"
          experienceArray={experienceArray}
          cardOrientation="horizontal"
        />
        <ExperienceCard
          experienceType="Work"
          experienceArray={experienceArray}
          cardOrientation="vertical"
        />
        <HobbiesCard hobbies={hobbiesArray} cardOrientation="horizontal" />
        <HobbiesCard hobbies={hobbiesArray} cardOrientation="vertical" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
