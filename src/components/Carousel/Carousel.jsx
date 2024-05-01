import { Swiper, SwiperSlide } from "swiper/react";
<<<<<<< HEAD
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import image3 from "../../img/image3.jpg";

export const Carousel = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <figure>
          <img
            className="card-image "
            src="https://blog.escuelacervecera.com/wp-content/uploads/2017/09/image-3.jpeg"
            alt="the founders"
          />
        </figure>

        <h3> 2007 IT BEGINS</h3>
        <p>
          Our founders James Watt and Martin Dickie decide they are fed up of
          the stuffy UK beer market… so, aged just 24, do something about it.
          Thanks to some very scary bank loans, the guys start making their own
          hardcore craft beers in Fraserburgh, a town in northeast Scotland.
          They brew tiny batches, fill bottles by hand, sell their first beers
          at local markets out of a beaten-up old van… and BrewDog is born.
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <figure>
          <img
            className="card-image "
            src="https://i0.wp.com/www.aprendemasingles.com/wp-content/uploads/2014/04/hundred-dollar-bills.jpeg?resize=1024%2C682&ssl=1"
            alt="money"
          />
        </figure>

       
        <h3> 2008 THINGS GET… WEIRD </h3>
        <p>
          The banks are somehow persuaded to give James and Martin more money…
          which they use to mastermind the UK's strongest ever beer, Tokyo. The
          press go bananas, calling it “the downfall of Western civilisation”.
          The Portman Group ban our products. We carry on regardless, start
          exporting to Sweden, Japan and America and become Scotland's largest
          independent brewery.
        </p>
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>

    // <section className="section">
    //   <div className="swiper">
    //     <div id="carousel-demo" className="swiper-wrapper">
    // <div className="swiper-slide">
    //   <div className="card-image">
    //     <figure className="image is-16by9">
    //       <img
    //         className="card-image "
    //         src="https://blog.escuelacervecera.com/wp-content/uploads/2017/09/image-3.jpeg"
    //         alt="the founders"
    //       />
    //     </figure>
    //   </div>
    //   <h3> 2007 IT BEGINS</h3>
    //   <p>
    //     Our founders James Watt and Martin Dickie decide they are fed up
    //     of the stuffy UK beer market… so, aged just 24, do something about
    //     it. Thanks to some very scary bank loans, the guys start making
    //     their own hardcore craft beers in Fraserburgh, a town in northeast
    //     Scotland. They brew tiny batches, fill bottles by hand, sell their
    //     first beers at local markets out of a beaten-up old van… and
    //     BrewDog is born.
    //   </p>
    // </div>
    //       <div className="swiper-slide">
    //         <img
    //           src="https://i0.wp.com/www.aprendemasingles.com/wp-content/uploads/2014/04/hundred-dollar-bills.jpeg?resize=1024%2C682&ssl=1"
    //           alt="money"
    //         />
    //         <h3> 2008 THINGS GET… WEIRD </h3>
    //         <p>
    //           The banks are somehow persuaded to give James and Martin more
    //           money… which they use to mastermind the UK's strongest ever beer,
    //           Tokyo. The press go bananas, calling it “the downfall of Western
    //           civilisation”. The Portman Group ban our products. We carry on
    //           regardless, start exporting to Sweden, Japan and America and
    //           become Scotland's largest independent brewery.
    //         </p>
    //       </div>
    //       <div className="swiper-slide">
    //         <img src={image3} alt="beer" />
    //         <h3>2009 GOOD BEER: RECESSION PROOF</h3>
    //         <p>
    //           The banks finally stop giving us money… so we launch the
    //           ground-breaking Equity For Punks, offering people the chance to
    //           buy shares in our company. Over 1,300 invest and our anti-business
    //           business model is born. We continue to push boundaries by brewing
    //           the world's strongest ever beer, Tactical Nuclear Penguin at 32%.
    //           We also age a beer on the deck of a fishing boat and grow our
    //           business by 200% .
    //         </p>
    //       </div>
    //     </div>
    //     <div class="swiper-button-prev"></div>
    //     <div class="swiper-button-next"></div>
    //   </div>
    // </section>
=======
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
>>>>>>> 258bab15d0b074e1d421711400f97da538188def
  );
};
