import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";


export interface GlobalContent {
  showNav: boolean
  setShowNav: Dispatch<SetStateAction<boolean>>;
}

export const AppStore = createContext<GlobalContent>({
  showNav: true,
  setShowNav: () => {}

})


export const useAppStore = () => useContext(AppStore)



export const globalState = () => {
  // SideNav state
  const [showNav, setShowNav] = useState<boolean>(true);

  
  return {
    showNav,
    setShowNav
  }
}