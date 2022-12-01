import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export const Carousel = ({ data }) => {
  return (
    <section className="container carousel is-hidden-mobile">
      <Swiper
        effect={"coverflow"}
        slidesPerView={3}
        spaceBetween={45}
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        keyboard={{
          enabled: true,
        }}
        centeredSlides={true}
        loop={true}
        modules={[Navigation, Keyboard, Pagination, EffectCoverflow]}
      >
        {data.map((event) => {
          return (
            <SwiperSlide className="card content is-small " key={event.year}>
              <figure className="card-image">
                <img
                  src={require(`../../img/${event.image}`)}
                  alt={event.alt}
                ></img>
              </figure>
              <h3 className='card-header-title is-centered'>{event.year}</h3>
              <h4 className='card-header-title is-centered'>{event.title}</h4>

              <p className="has-text-justified card-content">{event.text}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
