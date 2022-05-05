import Head from "next/head";
import { useState } from "react";
import SideBar from "./SideBar";

interface ILayout {
    children: JSX.Element | JSX.Element[],
    page : string;
}

const Layout = ({children,page}:ILayout): JSX.Element => {
    const [modalActive, setModalActive] = useState<boolean>(false);
  return (
    <div id="layout">
      <Head>
        <title>Portfolio | {page}</title>
        <meta name="description" content="Sitio web de venta de guitarras" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div
        className={modalActive ? "invisible" : ""}
        id="open-modal"
        onClick={() => setModalActive(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="14" y2="12" />
          <line x1="4" y1="18" x2="18" y2="18" />
        </svg>
      </div>
      <SideBar modalActive={modalActive} setModalActive={setModalActive}/>
      <div id="content">
          {children}
      </div>
    </div>
  );
};

export default Layout;
