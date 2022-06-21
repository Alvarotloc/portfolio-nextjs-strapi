import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from 'next/image';

interface CardParams {
    image: string;
    name: string;
    description: string;
    usedSkills: string[];
    repo: string;
    url: string;
    charging: boolean;
  }
const Card = ({  image,
    name,
    description,
    usedSkills,
    repo,
    url,
    charging}:CardParams):JSX.Element => {
  return (
    <div className="card">
    {charging ? (
      <Skeleton height={150} width={300} />
    ) : (
        <div className="img-top-card">
            <Image src={image} alt="An image about the project" layout='responsive' width={310} height={150}/>
        </div>
    )}
    <div className="card-content">
      <h3>{charging ? <Skeleton /> : name}</h3>
      <p>{charging ? <Skeleton /> : description}</p>
      <div className="skills">
        {usedSkills.map((usedSkill) => (
          <div key={usedSkill} className="tech">
            {charging ? <Skeleton /> : usedSkill}
          </div>
        ))}
      </div>
      {charging === false && (
        <>
          <a href={repo} target="_blank" rel="noreferrer" className="btn-purple">
            Repo
          </a>
          <a href={url} target="_blank" rel="noreferrer" className="btn-purple">
            Working
          </a>
        </>
      )}
    </div>
  </div>
  )
}

export default Card