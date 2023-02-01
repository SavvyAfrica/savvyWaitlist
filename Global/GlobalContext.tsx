import { createContext, Dispatch, SetStateAction, useContext } from "react";

export interface GlobalContent {
  showNav: boolean
  setShowNav: Dispatch<SetStateAction<boolean>>;
}

export const MyGlobalContext = createContext<GlobalContent>({
  showNav: true,
  setShowNav: () => { },
})

export const useGlobalContext = () => useContext(MyGlobalContext)