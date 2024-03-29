import React, { createContext, useState, useContext } from "react";

const Context: React.Context<any> = createContext(null);

const useStore = () => {
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);
  return {
    teamA, // Team A's score
    teamB, // Team B's score
    increaseTeamAScore: () => setTeamA((v) => v + 1), // Increase Team A's score by one
    decreaseTeamAScore: () => setTeamA((v) => Math.max(0, v - 1)), // Decrease Team A's score by one
    increaseTeamBScore: () => setTeamB((v) => v + 1), // Increase Team B's score by one
    decreaseTeamBScore: () => setTeamB((v) => Math.max(0, v - 1)), // Decrease Team B's score by one
  };
};

const StoreContextProvider = ({ children }: any) => {
  return <Context.Provider value={useStore()}>{children}</Context.Provider>;
};

export const useStoreContext = () => useContext(Context);

export default StoreContextProvider;
