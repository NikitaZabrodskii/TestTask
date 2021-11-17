import { useSelector } from "react-redux";
import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import { Card } from "./pages/Card";
import { Main } from "./pages/Main";
import { Notfound } from "./pages/Notfound";

export const AllRoutes = ({ setHeaderTitle }) => {
  const { route, title, nodes } = useSelector((state) => state.routes);

  let paths = [];

  //с помощью рекурсии вынимаю все доступные path из store//
  function recursion(item) {
    console.log(paths);
    let dataItems = {
      title: item.title,
      route: item.route,
      isLast: Boolean(item.nodes.length),
    };
    paths.push(dataItems);

    if (item.nodes) {
      let nodes = item.nodes;
      nodes.map((i) => recursion(i));
    }
    ;
  }

  return (
    <Routes>
      <Route path={route} element={<Main />} />
      {nodes.map((item) => recursion(item))}{/* проверить*/}
      {paths.map((props) => ( 
        <Route
             path={props.route} 
          key={props.route}
          element={
            <Card
           
              setHeaderTitle={setHeaderTitle}
              name={props.isLast === false ? "Facebook" : "Whatsapp"}
              title={props.title}
              
            />
          }
        />
      ))}
      <Route path="*" element = {<Main/>} />
    </Routes>
  );
};
