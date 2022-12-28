import { createContext, Dispatch, SetStateAction, useContext } from "react";

export interface GlobalContent {
  showNav: boolean
  setShowNav: Dispatch<SetStateAction<boolean>>;

  isMobile: boolean
  setIsMobile: Dispatch<SetStateAction<boolean>>;
}

export const MyGlobalContext = createContext<GlobalContent>({
  showNav: true,
  setShowNav: () => { },
  
  isMobile: false,
  setIsMobile: () => { }
})

export const useGlobalContext = () => useContext(MyGlobalContext)