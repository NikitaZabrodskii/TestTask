import { useEffect } from "react";
import { Link } from "react-router-dom";

import cardStyles from "./styles.module.scss";

export const Card = ({ title, name, setHeaderTitle }) => {
  //двусторонним связыванием передаю title в header
  console.log(setHeaderTitle);
  useEffect(() => {
    setHeaderTitle(title);
    return () => {
      setHeaderTitle("");
    };
  }, []);

  return (
    <div
      className={
        name === "Facebook" ? cardStyles.Facebook : cardStyles.Whatsapp
      }
    >
      <h1>{name}</h1>
    </div>
  );
};
