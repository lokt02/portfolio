import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section, SectionDivider, SectionText, SectionTitle } from '../styles/GlobalComponents';

const ProjectsPage = () => {
  return (
    <Layout>
      <Projects />
    </Layout>
  );
};

export default ProjectsPage;
