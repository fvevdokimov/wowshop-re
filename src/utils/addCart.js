import React, { useState } from "react";

export const CurrentItemContext = React.createContext({
  item: null,
  changeItem: () => {},
});

export const CurrentItem = ({ children }) => {
  const [currentItem, setCurrentItem] = useState(null);

  return (
    <CurrentItemContext.Provider
      value={{
        currentItem,
        setCurrentItem,
      }}
    >
      {children}
    </CurrentItemContext.Provider>
  );
};