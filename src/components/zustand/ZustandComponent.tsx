import useRenderCount from "../../hooks/useRenderCount";
import Player from "../common/Player";
import Players from "../common/Players";
import { WinnerComponent } from "../common/WinnerComponent";
import useStore from "../zustand/store";

// Winner Component that shows the final results.
const Winner = () => {
  const { teamA, teamB }: any = useStore();
  return <WinnerComponent teamA={teamA} teamB={teamB} lib={"ZUSTAND API"} />;
};

// Player A Components that subscribed the Context.
const PlayerA = () => {
  const renderCount = useRenderCount();
  const teamA = useStore((state: any) => state?.teamA);
  const increaseTeamAScore = useStore(
    (state: any) => state?.increaseTeamAScore
  );
  const decreaseTeamAScore = useStore(
    (state: any) => state?.decreaseTeamAScore
  );

  return (
    <Player
      label={"Team A"}
      score={teamA}
      onIncrease={increaseTeamAScore}
      onDecrease={decreaseTeamAScore}
      renderCount={renderCount}
    />
  );
};

// Player B Components that subscribed the Context.
const PlayerB = () => {
  const renderCount = useRenderCount();
  const teamB = useStore((state: any) => state?.teamB);
  const increaseTeamBScore = useStore(
    (state: any) => state?.increaseTeamBScore
  );
  const decreaseTeamBScore = useStore(
    (state: any) => state?.decreaseTeamBScore
  );
  ("Team B");
  return (
    <Player
      label={"Team B"}
      score={teamB}
      onIncrease={increaseTeamBScore}
      onDecrease={decreaseTeamBScore}
      renderCount={renderCount}
    />
  );
};

export default function zustandComponent() {
  return (
    <div className="">
      <main>
        <Winner />
        <Players>
          <PlayerA />
          <PlayerB />
        </Players>
      </main>
    </div>
  );
}

// import { create } from "zustand";
// import StoreContextProvider from "../context/PlayerContext";

// const useThemeStore = create((set) => ({
//   isDarkTheme: false,
//   toggleTheme: () => set((state: any) => ({ isDarkTheme: !state.isDarkTheme })),
// }));

// const MyComponent = () => {
//   const isDarkTheme = useThemeStore((state: any) => state.isDarkTheme);
//   const toggleTheme = useThemeStore((state: any) => state.toggleTheme);

//   return (
//     <div style={{ backgroundColor: isDarkTheme ? "black" : "white" }}>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//     </div>
//   );
// };

// const UnrelatedComponent = () => {
//   ("UNEEEEEEEEEEEEEEEEEEEEEE");
//   return <div>I don't care about the theme!</div>;
// };

// export default function ZustandComponent() {
//   ("HELLLLLLLLLLLLLLL@)))))))))");
//   return (
//     <StoreContextProvider>
//       <div>
//         <MyComponent />
//         <UnrelatedComponent />
//       </div>
//     </StoreContextProvider>
//   );
// }
