import styles from "./App.module.css";
import { getImageUrl } from "./utils";

function App() {
  return (
    <>
      <body>
        <div className={styles.titleContainer}>
          <p className={styles.date}>5 AUG 2024</p>
          <h1 className={styles.title}>
            Evolución Histórica de la Calidad del Software
          </h1>
          <div className={styles.imagesContainer}>
            <img
              className={styles.images}
              src={getImageUrl("Home/uno.png")}
              alt="2logo"
            />
          </div>
        </div>
        <section className={styles.hero}>
          <p>
            <span>
              ¿Te imaginas cómo eran los programas hace unas décadas?{" "}
            </span>
            Bueno, más allá de los juegos de texto y los primeros procesadores
            de texto, lo que realmente destacaba era la impredectibilidad. Los
            programas se estrellaban con frecuencia, tenían bugs por doquier y
            la idea de una actualización que mejorara el rendimiento era algo de
            ciencia ficción.
          </p>
          <br />
          <p>
            Al principio, el desarrollo de software era un arte más que una
            ciencia. Dependíamos de programadores superdotados, a los que
            llamábamos héroes, para crear software que, francamente, a veces
            funcionaba por arte de magia. No había muchos métodos, ni
            estándares, solo el ingenio de unos pocos.
          </p>
        </section>
        <div className={styles.subHero}>
          <h3 className={styles.titleItalic}>
            Computador Antiguo de los años 80
          </h3>
          <img
            className={styles.heroimg}
            src={getImageUrl("Home/img.jpeg")}
            alt="imagen de un Computador"
          />
        </div>
        <section className={styles.hero}>
          <p>
            La llegada de la estructura: metodologías y estándares Con el
            tiempo, nos dimos cuenta de que necesitábamos más orden. Así
            nacieron las primeras metodologías, como el ciclo de vida en
            cascada, que intentaban poner un poco de estructura en el caos.
            También aparecieron los primeros estándares, que buscaban garantizar
            cierta calidad mínima. La ingeniería del software marcó un antes y
            un después. Empezamos a tratar el desarrollo de software como una
            disciplina de ingeniería, con sus propios principios y métodos. Los
            modelos de madurez, como el CMM, nos ayudaron a evaluar y mejorar
            nuestras capacidades.
          </p>
          <br />
          <p>
            La revolución ágil: flexibilidad y colaboración La agilidad llegó
            para romper moldes. El Manifesto Ágil nos recordó que la
            colaboración, la adaptación al cambio y la entrega de valor son
            fundamentales. Metodologías como Scrum y Kanban nos permitieron ser
            más flexibles y responder mejor a las necesidades de los
            usuarios.Hoy en día, la calidad es un objetivo constante. DevOps, la
            nube, la inteligencia artificial... todas estas tecnologías están
            transformando la forma en que desarrollamos software. La calidad ya
            no es solo un objetivo final, sino un proceso continuo que involucra
            a todo el equipo.
          </p>
        </section>
        <section className={styles.heroFinal}>
          <div>
            <h3 className={styles.title2}>¿Hacia dónde vamos?</h3>
          </div>
          <div className={styles.container}>
            <div className={styles.containerLeft}>
              <p>
                El futuro de la calidad del software es prometedor. Hablamos de:
                Calidad intrínseca: Software que nace siendo de alta calidad.
                Calidad basada en datos: Decisiones informadas gracias a los
                datos. Calidad centrada en el usuario: La satisfacción del
                usuario como medida principal.
              </p>
              <br />
              <p>
                En resumen, la evolución de la calidad del software ha sido un
                viaje apasionante. Hemos pasado de un caos inicial a un enfoque
                más estructurado y ágil. Y lo mejor de todo es que este viaje
                sigue en marcha.
              </p>
            </div>
            <div className={styles.containerRight}>
              <hr />
              <h3 className={styles.guestions}>
                ¿Qué te parece esta evolución? ¿Qué otros aspectos te gustaría
                conocer?
              </h3>
              <div className={styles.creators}>
                <img src={getImageUrl("Home/user.png")} alt="avatar-profile" />
                <hp className={styles.names}>
                  AUTHOR: WILLIAM - DANIEL - GABRIEL
                </hp>
              </div>
            </div>
          </div>
        </section>
        <div>
          <img src={getImageUrl("Home/corazon.png")} alt="corazon" />
          <p>621 LIKES</p>
          <img src={getImageUrl("Home/share.png")} alt="shrare" />
          <p>Share</p>
        </div>
        <footer>
          <p>@ 2024 Page Design by: William Espinoza</p>
        </footer>
      </body>
    </>
  );
}

export default App;
