import {View, Text} from 'react-native';
import React, {createContext, useState} from 'react';

export const Context = createContext();

export default function ContextProvider({children}) {
  const [changePage, setChangePage] = useState(false);
  return (
    <Context.Provider value={{changePage, setChangePage}}>
      {children}
    </Context.Provider>
  );
}
