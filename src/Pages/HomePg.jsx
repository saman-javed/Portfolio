import Navbar from "../Components/NavBar/NavBar";
import HeroSection from "../Components/HeroSection/HeroSection";
import FeaturedPodcasts from "../Components/FeaturedPodcasts/FeaturedPodcasts";
import SuccessStories from "../Components/SuccessStories/SuccessStories";
import AwardsSection from "../Components/AwardsSection/AwardsSection";
import BannerSection from "../Components/BannerSection/BannerSection";
import BlogSection from "../Components/BlogSection/BlogSection";
import ServiceSlider from "../Components/ServiceSlider/ServiceSlider";
import Footer from "../Components/Footer/Footer";
export default function HomePg() {
    return (
        <div className="home-page">
            <Navbar />
            <HeroSection />
            <ServiceSlider />
            <BannerSection />
            <FeaturedPodcasts />
            <SuccessStories />
            <AwardsSection />
            <BlogSection />
            <Footer />
        </div>
    );
}