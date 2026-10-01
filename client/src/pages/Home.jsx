import Hero from '../components/home/Hero';
import FeaturedDishes from '../components/home/FeaturedDishes';
import RestaurantIntro from '../components/home/RestaurantIntro';
import MenuPreview from '../components/home/MenuPreview';
import Experience from '../components/home/Experience';
import Reviews from '../components/home/Reviews';
import Gallery from '../components/home/Gallery';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedDishes />
      <RestaurantIntro />
      <MenuPreview />
      <Experience />
      <Reviews />
      <Gallery />
      <CallToAction />
    </div>
  );
};

export default Home;

