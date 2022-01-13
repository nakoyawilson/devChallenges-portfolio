import { useState, useMemo, useEffect } from "react";
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

  const initialNumProjects = window.screen.innerWidth > 1250 ? 3 : 1;
  const [maxProjects, setMaxProjects] = useState(initialNumProjects);

  const initialCardOrientation =
    window.screen.innerWidth > 1250 ? "horizontal" : "vertical";
  const [nameCardOrientation, setNameCardOrientation] = useState(
    initialCardOrientation
  );

  console.log(initialNumProjects);
  console.log(initialCardOrientation);

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

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.screen.innerWidth < 1250) {
        setMaxProjects(1);
        setCurrentPage(1);
        setNameCardOrientation("vertical");
      } else {
        setMaxProjects(3);
        setCurrentPage(1);
        setNameCardOrientation("horizontal");
      }
    });
  }, [maxProjects, currentPage, nameCardOrientation]);

  return (
    <div className="App">
      <div className="container">
        <NameCard
          cardID="name-card"
          fullName="Billy Pearson"
          jobTitle="Front-end developer"
          email="billy@example.com"
          phone="(+603) 546 624 342"
          imageSrc="assets/images/profile-picture.jpg"
          paragraphContent={nameCardParagraphs}
          cardOrientation={nameCardOrientation}
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
                projectTitle={item.projectTitle}
                paragraphContent={item.description}
                projectTags={item.tags}
                imageSrc={item.screenshot}
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
