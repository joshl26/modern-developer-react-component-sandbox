import { useEffect, useRef } from "react";
import classes from "./NewSection.module.scss";

const NewSection = ({ image, headline, scrollTo, goToSectionRef }) => {
  return (
    <div className={classes.section}>
      <div className={classes.copy}>
        <h2>{headline}</h2>
      </div>
      <img alt="" src={image} className={classes.image} />
      <button
        className={classes.downarrow}
        onClick={() => scrollTo(goToSectionRef)}
      ></button>
    </div>
  );
};

export default NewSection;
