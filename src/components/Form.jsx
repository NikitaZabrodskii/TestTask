import { useState } from "react";
import { useLocation } from "react-router";

export const Form = () => {
  const location = useLocation();
  const [inputValue, setInputValue] = useState({
    route: "",
    title: "",
  });
  // в этой функции хотел реализовать добавление путей в store. 
  const changeValue = (e) => {
    e.preventDefault();

    let routeString = location.pathname + "/" + inputValue.route;

    const data = {
      route: location.pathname + "/" + inputValue.route,
      title: inputValue.title,
      nodes: [],
    };

  
  };
  return (
    <form onSubmit={(e) => changeValue(e)}>
      <input
        value={inputValue.route}
        type="text"
        placeholder="route"
        name="route"
        required
        onChange={(e) =>
          setInputValue({ ...inputValue, route: e.target.value })
        }
      />
      <input
        value={inputValue.title}
        type="text"
        placeholder="title"
        name="title"
        required
        onChange={(e) =>
          setInputValue({ ...inputValue, title: e.target.value })
        }
      />
      <button type="submit">Submit</button>
    </form>
  );
};
