import React, { createContext, useEffect, useRef } from "react";

export const PlayerContext = createContext();
const PlayerContextProvider = (props) => {
  const audioRef = useRef();

  const ContextValue = {
    audioRef,
  };

  return (
    <PlayerContext.Provider value={ContextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};
export default PlayerContextProvider;
