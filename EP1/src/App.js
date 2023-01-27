import classes from "./App.module.scss";
import NewSection from "./components/NewSection";
import { useRef } from "react";

import image1 from "./images/pexels-frans-van-heerden-624015.jpg";
import image2 from "./images/pexels-luis-del-río-15286.jpg";
import image3 from "./images/pexels-mengliu-di-3064079.jpg";
import image4 from "./images/pexels-stanislav-kondratiev-2909077.jpg";

function App() {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();

  function scrollTo(section) {
    section.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={classes.container}>
      <div ref={section1}>
        <NewSection
          image={image1}
          headline={"lorem ispum dolor"}
          scrollTo={scrollTo}
          goToSectionRef={section2}
        />
      </div>
      <div ref={section2}>
        <NewSection
          image={image2}
          headline={"lorem ispum dolor"}
          scrollTo={scrollTo}
          goToSectionRef={section3}
        />
      </div>
      <div ref={section3}>
        <NewSection
          image={image3}
          headline={"lorem ispum dolor"}
          scrollTo={scrollTo}
          goToSectionRef={section4}
        />
      </div>
      <div ref={section4}>
        <NewSection
          image={image4}
          headline={"lorem ispum dolor"}
          scrollTo={scrollTo}
        />
      </div>
    </div>
  );
}

export default App;
