import Hero from '../components/Hero/Hero';
import Technologies from '../components/Technologies/Technologies';
import AboutMe from '../components/AboutMe/AboutMe';
import Background from '../components/Background/Background';
import Projects from '../components/Projects/Projects';
import PriceList from '../components/PriceList/PriceList';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Background />
      <Section grid>
        <Hero />
      </Section>
      <AboutMe />
      <Technologies />
      <Projects />
    </Layout>
  );
};

export default Home;
