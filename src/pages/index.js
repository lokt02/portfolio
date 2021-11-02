import Hero from '../components/Hero/Hero';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import Background from '../components/Background/Background';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Background />
      <Section grid>
        <Hero />
      </Section>
      <Timeline />
      <Technologies />
    </Layout>
  );
};

export default Home;
