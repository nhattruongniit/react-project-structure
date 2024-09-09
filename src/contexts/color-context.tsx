import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

type ColorContextType = {
  mode: string;
  setMode: (mode: string) => void;
};

export const ColorContext = createContext<ColorContextType>({} as ColorContextType);

export const ColorContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const colorModeFromLocalStorage = localStorage.getItem('colorMode');
  // const isSystemPreferenceDark = window?.matchMedia("(prefers-color-scheme: light)").matches;

  // const systemPreference = isSystemPreferenceDark ? "dark" : "light";
  const [mode, setMode] = useState(colorModeFromLocalStorage || 'light');

  useEffect(() => {
    window.localStorage.setItem('colorMode', mode);
    document.documentElement.classList.add(mode);
  }, [mode]);

  const setColorMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.documentElement.classList.remove('light');
    } else {
      setMode('light');
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <ColorContext.Provider
      value={{
        setMode: setColorMode,
        mode,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export const useColorContext = () => useContext(ColorContext);
