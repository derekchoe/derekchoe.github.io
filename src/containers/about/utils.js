export const ABOUT_CONFIG = {
  header: "Hi,",
  textArray: [
    (onHover) => (
      <p>
        I’m{" "}
        <i className="about__highlights" onMouseEnter={() => onHover("derek")}>
          Derek
        </i>
        . A software engineer with a passion for technology, entrepreneurship,
        and innovation. From a young age, I’ve been drawn to technology and the
        process of building things from scratch. In the past, those interest led
        me to creating an eCommerce business focused on fashion. Since then,
        I’ve leveraged my interests of building and technology into a career in
        software development.
      </p>
    ),
    (onHover) => (
      <p>
        Currently, I am a Software Engineer and the official “Wing Leader” at{" "}
        <a
          className="about__highlights"
          href="https://actionnetwork.com/"
          onMouseEnter={() => onHover("action")}
        >
          The Action Network
        </a>
        , where my responsible include building tools to enhance a user’s sports
        betting experience and organizing weekly team outings for Wing
        Wednesday.
      </p>
    ),
    (onHover) => (
      <p>
        I spend my spare time taking long walks on the beach, exploring new
        restaurants and breweries, and religiously watching the{" "}
        <i className="about__highlights" onMouseEnter={() => onHover("lakers")}>
          Los Angeles Lakers
        </i>{" "}
        compete to bring their <s>17th</s> 18th banner to Los Angeles.
      </p>
    ),
  ],
};
