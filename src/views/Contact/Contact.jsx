import "./style.css";
import me from "../../img/me.jpg";
export const Contact = () => {
  return (
    <section>
      <img src={me} alt="Hugo Suárez"></img>
      <article>
        <h2>Hugo Suárez</h2>
        <ul>
          <li>Full Stack JavaScript Web Developer/mechanic Engineer</li>

          <li>
            <a href="mailto:hugolgsuarez@gmail.com?Subject=Perfil%20Profesional">
              Conozcámonos
            </a>
          </li>
          <li>O Grove(Pontevedra)</li>
          <li>enlace a linkedin</li>
        </ul>
      </article>
      <button className="damian">
        o boton que quere damian
      </button>
    </section>
  );
};
