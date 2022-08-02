import { FC, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { IProyecto } from '../interfaces/index';
import Card from '../components/Card';
interface IProyectos {
    proyectos : IProyecto[]
}

const Projects:FC<IProyectos> = ({proyectos}):JSX.Element => {
    const [filter, setFilter] = useState<string>("");
    const [projects, setProjects] = useState<IProyecto[]>([]);
    const [filtereds, setFiltereds] = useState<IProyecto[]>([]);
    const [charging, setCharging] = useState<boolean>(true);

    useEffect(() => {
        setProjects(proyectos);
        setTimeout(() => {
          setCharging(false);
        }, 2000);
    },[proyectos]);

    useEffect(() => {
        if (filter.trim() === "") {
          return setFiltereds(projects);
        }
        setFiltereds(projects.filter((project) => filter === project.tech));
      }, [filter, projects]);

  return (
    <Layout page='Projects'>
        <section id="top-section">
        <h1 id="title">Projects</h1>
        <p>
          Most outstanding personal projects using web technologies, mostly
          frameworks/libraries focused on javascript on their front-end side.
        </p>
        <div id="filter">
          <label htmlFor="options" id="label-options">
            Filter by category
          </label>
          <select
            name="options"
            id="options"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">-- All Projects --</option>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="next">NextJS</option>
            <option value="basic">HTML and Css</option>
            <option value="vue">Vue Js</option>
            <option value="vanilla">Vanilla JS</option>
          </select>
        </div>
      </section>
      <div id="cards">
        {filtereds.length
          ? filtereds.map(
              ({name, description, usedSkills, repo, url, _id,image }) => (
                <Card
                  key={_id}
                  image={image.url}
                  name={name}
                  description={description}
                  usedSkills={usedSkills.split('-')}
                  repo={repo}
                  url={url}
                  charging={charging}
                />
              )
            )
          : projects.map(
              ({ name, description, usedSkills, repo, url, _id,image }) => (
                <Card
                  key={_id}
                  image={image.url}
                  name={name}
                  description={description}
                  usedSkills={usedSkills.split('-')}
                  repo={repo}
                  url={url}
                  charging={charging}
                />
              )
            )}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
    const url = `${process.env.API_URL}/proyectos?_sort=order:asc`;
    const respuesta = await fetch(url);
    const proyectos = await respuesta.json();
    return {
      props : {
        proyectos
      }
    }
  }

export default Projects