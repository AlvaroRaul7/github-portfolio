import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import getProfileInformation from "@lib/getProfileInformation";



const Home = (props) => {

  return  (
    <ContainerBlock
      title="Alvaro Valarezo - Software Engineer"
      description=""
    >
      <Hero profile = {props.profile} />
      <FavouriteProjects />
      <LatestCode repositories={props.repositories} />
    </ContainerBlock>
  );
};

export default Home;

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  console.log("REPOSITORIES", repositories);

  const profile = await getProfileInformation(userData,token);
  console.log("profile", profile);
  return {
    props: {
      repositories,
      profile
      
    },
  };
};



