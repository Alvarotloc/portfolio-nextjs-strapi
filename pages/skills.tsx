import type { ISkill } from "../interfaces";
import Layout from '../components/Layout';
import { useEffect,useState } from 'react';
import Skill from "../components/Skill";

interface ISkills {
    skills : ISkill[]
}
const skills = ({skills}:ISkills):JSX.Element => {
    
    const [habilidades, setHabilidades] = useState<ISkill[]>([]);
    const [charging, setCharging] = useState<boolean>(true);

    useEffect(() => {
        setHabilidades(skills);
        setTimeout(() => {
          setCharging(false);
        }, 1000);
    },[])
  return (
    <Layout page="Skills">
              <div id="skills-container">
      <h1>Skills</h1>
      <div id="all-skills">
        {habilidades.map(({name,experience,_id,image}) => <Skill key={_id} image={image.url} name={name} experience={experience} charging={charging}/>)}
      </div>
    </div>
    </Layout>
  )
}

export async function getStaticProps() {
    const url = `http://localhost:1337/skills`;
    const respuesta = await fetch(url);
    const skills = await respuesta.json();
    return {
      props : {
        skills
      }
    }
  }

export default skills