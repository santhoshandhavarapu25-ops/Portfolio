import { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>My Projects</h1>

      {projects.map((project) => (
        <div
          key={project._id}
          style={{
            border: "1px solid gray",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <h2>{project.name}</h2>

          <p>{project.summary}</p>

          <p>{project.details}</p>

          <p>
            <strong>Tech Stack:</strong>{" "}
            {project.stack.join(", ")}
          </p>

          <a
            href={project.link}
            target="_blank"
          >
            GitHub
          </a>

          <br />

          <a
            href={project.liveLink}
            target="_blank"
          >
            Live Demo
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;