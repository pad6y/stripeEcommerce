import Layout from '../components/shared/layout';
import Hero from '../components/hero/hero';
import MainSection from '../components/main-section/main-section';
import FeaturedCollection from '../components/featured-collection/featured-collection';

function HomePage() {
  return (
    <Layout>
      <Hero />
      <MainSection />
      <FeaturedCollection />
    </Layout>
  );
}

export default HomePage;
