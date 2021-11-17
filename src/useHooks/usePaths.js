import { useEffect } from "react";

 const usePaths = (nodes) => {
  useEffect(() => mapNodes(nodes), []);
  let paths = [];

  function recursion(item) {
    console.log(paths);
    let dataItems = {
      title: item.title,
      route: item.route,
    };
    paths.push(dataItems);

    if (item.nodes) {
      let nodes = item.nodes;
      nodes.map((i) => recursion(i));
    }
  }

  function mapNodes(nodes) {
    nodes.map((item) => recursion(item));
  }

  console.log(paths);
  return paths;
};  
