import React, { useCallback, useState, useMemo, useEffect } from "react";
import { useContext } from "react";
const AppContext = React.createContext({});
const Demo = () => {
  return (
    <AppContext.Provider value={{ name: "ticktack" }}>
      <div>
        <Child></Child>
        <Child1></Child1>
      </div>
    </AppContext.Provider>
  );
};
export default Demo;
const Child = () => {
  const { name } = useContext(AppContext);
  return <div>{name}</div>;
};
const Child1 = () => {
  const { name } = useContext(AppContext);
  return <div>{name}</div>;
};
