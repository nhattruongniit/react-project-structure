import React, { createContext, PropsWithChildren, useContext } from "react";

type AppContextType = {
  defaultQuery: unknown;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider: React.FC<PropsWithChildren> = ({ children }) => {

  return (
    <AppContext.Provider
      value={{
        // states
        defaultQuery: null,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
