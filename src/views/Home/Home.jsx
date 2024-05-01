// import "./Home.scss";
import photo from "../../img/home.jpg";
import { Carousel } from "../../components/Carousel/Carousel";

export const Home = () => {
  return (
    <>
    <section className="container is-flex is-flex-direction-column is-align-items-center ">
      <div className='column  is-four-fifths content is-medium is-flex is-flex-direction-column '>
        
          <h1 className='is-flex is-align-self-center has-text-centered'>A complete catalog about Brewdog  </h1>
        
        <p className='has-text-justified ' >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          iste quo quibusdam modi. Quis numquam quos architecto iure dolores
          quisquam voluptatem ut, repudiandae voluptas ipsam, vel ea? Alias
          incidunt voluptatem magni placeat quia suscipit eos ex eveniet
          repellendus sed ipsa iusto assumenda amet dignissimos animi,
          distinctio non? Consequuntur dolorum quibusdam voluptatum voluptatem
          quod delectus nihil quas. Laboriosam, laborum modi unde non ratione
          culpa perspiciatis dicta iure soluta minus quidem sapiente error,
          fugiat quo vitae voluptatibus quas eius aspernatur porro amet?
        </p>

        <img src={photo} alt="cheers"></img>
      </div>
      </section>
  

   <Carousel  />
   

    </>
  );
};
