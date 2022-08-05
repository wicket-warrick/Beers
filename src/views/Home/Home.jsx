import "./style.css";
import photo from "../../img/home.jpg";
export const Home = () => {
  return (
    <>
      <section>
        <header>
          <h2>a complete catalog about brewdog beer and its world</h2>
        </header>
        <p>
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
      </section>
      <section>
        <header>
          <h2>A little history</h2>
        </header>
        <ul>
          <li>
            <h3> 2007</h3>
            <p>
              Our founders James Watt and Martin Dickie decide they are fed up
              of the stuffy UK beer market… so, aged just 24, do something about
              it. Thanks to some very scary bank loans, the guys start making
              their own hardcore craft beers in Fraserburgh, a town in northeast
              Scotland. They brew tiny batches, fill bottles by hand, sell their
              first beers at local markets out of a beaten-up old van… and
              BrewDog is born.
            </p>
          </li>
          <li>
            <h3> 2008 THINGS GET… WEIRD </h3>
            <p>
              The banks are somehow persuaded to give James and Martin more
              money… which they use to mastermind the UK's strongest ever beer,
              Tokyo. The press go bananas, calling it “the downfall of Western
              civilisation”. The Portman Group (who make the rules for alcohol
              producers) ban our products. We carry on regardless, start
              exporting to Sweden, Japan and America and become Scotland's
              largest independent brewery.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};
