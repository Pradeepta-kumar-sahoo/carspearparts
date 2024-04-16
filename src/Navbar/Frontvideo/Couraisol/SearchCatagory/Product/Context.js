// Context.js
import React, { createContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [basename, setBasename] = useState('default');

  return (
    <MyContext.Provider value={{ basename }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => React.useContext(MyContext);
