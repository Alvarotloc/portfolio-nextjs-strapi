import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";

const Home: NextPage = ():JSX.Element => {
  return (
    <Layout page="About me">
      <div className="aboutme-info">
        <section id="info-general">
          <h1>Álvaro Suárez Cuerva</h1>
          <p>
            Hi! I`m Alvaro and I`m a junior full stack developer, specialized in
            front-end, more specifically in <span>ReactJS</span> and{" "}
            <span>NextJS</span>. I am in constant search of learning and
            personal improvement to know my best version.
          </p>
          <a
            href="https://drive.google.com/file/d/1GKF83Bq_Kt35bcLTO-eVU62Tk2c0C53g/view?usp=sharing"
            target="_blank" rel="noreferrer"
          >
            Curriculum Vitae
          </a>
        </section>
        <div className="profile">
        <Image src='/img/Profile.webp' alt="Image Profile" layout="responsive" width={250} height={250}/>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
