import { useState, useMemo } from "react";
import "./App.css";
import NameCard from "./components/name-card/NameCard";
import ProjectCard from "./components/project-card/ProjectCard";
import SkillsCard from "./components/skills-card/SkillsCard";
import BlogPostCard from "./components/blogpost-card/BlogPostCard";
import Banner from "./components/banner/Banner";
import HobbiesCard from "./components/hobbies-card/HobbiesCard";
import ExperienceCard from "./components/experience-card/ExperienceCard";
import Pagination from "./components/pagination/Pagination";
import Footer from "./components/footer/Footer";
import {
  nameCardParagraphs,
  projectsArray,
  skillsArray,
  blogArray,
  tagsArray,
  hobbiesArray,
  experienceArray,
} from "./components/data/data.js";

const App = () => {
  const [projectsToRender, setProjectsToRender] = useState(projectsArray);
  const [maxProjects, setMaxProjects] = useState(
    window.screen.width > 1250 ? 3 : 1
  );

  window.addEventListener("resize", () => {
    if (window.screen.width < 1250) {
      setMaxProjects(1);
      setCurrentPage(1);
    } else {
      setMaxProjects(3);
      setCurrentPage(1);
    }
  });

  const handleTagClick = (event) => {
    document.querySelectorAll(".tag-button").forEach((button) => {
      button.classList.remove("button-active");
    });
    event.target.classList.add("button-active");
    if (event.target.id === "All") {
      setProjectsToRender(projectsArray);
      setCurrentPage(1);
    } else {
      setProjectsToRender(
        projectsArray.filter((project) => {
          return project.tags.includes(event.target.id);
        })
      );
      setCurrentPage(1);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);

  const currentProjectData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * maxProjects;
    const lastPageIndex = firstPageIndex + maxProjects;
    return projectsToRender.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, projectsToRender, maxProjects]);

  return (
    <div className="App">
      <div className="container">
        <NameCard
          cardID="name-card"
          fullName="Billy Pearson"
          jobTitle="Front-end developer"
          email="billy@example.com"
          phone="(+603) 546 624 342"
          imageSrc="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          paragraphContent={nameCardParagraphs}
          cardOrientation="horizontal"
        />
        <SkillsCard
          cardID="skill-card"
          jobField="Front End"
          skills={skillsArray}
          cardOrientation="vertical"
        />
        <BlogPostCard
          cardID="blogpost-card"
          postTitle={blogArray[0].title}
          postDescription={blogArray[0].description}
          postPlatform={blogArray[0].platform}
          postLink={blogArray[0].link}
          postImage={blogArray[0].image}
          cardOrientation="vertical"
        />
        <HobbiesCard
          cardID="hobbies-card"
          hobbies={hobbiesArray}
          cardOrientation="vertical"
        />
        <ExperienceCard
          cardID="work-experience-card"
          experienceType="Work"
          experienceArray={experienceArray}
          cardOrientation="vertical"
        />
        <div id="projects">
          <Banner
            clickFunction={handleTagClick}
            cardID="project-banner"
            bannerTitle="Projects"
            count={projectsToRender.length}
            tags={tagsArray}
          />
          {currentProjectData.map((item) => {
            return (
              <ProjectCard
                key={item.id}
                projectTitle="Recipe Blog"
                paragraphContent={item.description}
                projectTags={item.tags}
                imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                demoLink={item.demoLink}
                codeLink={item.codeLink}
                cardOrientation="vertical"
              />
            );
          })}
          <Pagination
            paginationID="project-pagination"
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={projectsToRender.length}
            pageSize={maxProjects}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
