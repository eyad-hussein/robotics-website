import "./home.styles.scss";
import CarouselCounter from "../../components/carousel-counter/carousel-counter.component";
import Posts from "../../components/posts/posts.component";
import Footer from "../../components/footer/footer.component";
import { Fragment } from "react";
import { api } from "../../services/http_request";
import { useEffect, useState } from "react";

const Home = () => {
  const [carouselImages, setCarouselImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`images/active`);
      const result = response.data;
      setCarouselImages(result.mainCarouselImages);
    };
    fetchData();
  }, []);
  return (
    <Fragment>
      <main className='main u-margin-bottom-big'>
        {carouselImages.length && <CarouselCounter images={carouselImages} />}

        <Posts />
      </main>

      <Footer />
    </Fragment>
  );
};

export default Home;
