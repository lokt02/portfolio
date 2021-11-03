import Projects from '../components/Projects/Projects';
import { Layout } from '../layout/Layout';
import Background from '../components/Background/Background';

// export async function getStaticProps() {
//   var response = await fetch('https://portfolio-rest-api-beige.vercel.app/projectsapi');
//   var result = await response.json();
//   return{
//     props:{
//       result: result
//     },
//   }
// }

const ProjectsPage = () => {
  return (
    <Layout>
      <Background />
      <Projects></Projects>
    </Layout>
  );
};

export default ProjectsPage;
