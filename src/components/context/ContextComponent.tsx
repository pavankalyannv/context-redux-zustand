import useRenderCount from "../../hooks/useRenderCount";
import Player from "../common/Player";
import Players from "../common/Players";
import { WinnerComponent } from "../common/WinnerComponent";
import StoreContextProvider, {
  useStoreContext,
} from "../context/PlayerContext";

// Winner Component that shows the final results.
const Winner = () => {
  const { teamA, teamB } = useStoreContext();
  return <WinnerComponent teamA={teamA} teamB={teamB} lib={"CONTEXT API"} />;
};

// Player A Components that subscribed the Context.
const PlayerA = () => {
  const renderCount = useRenderCount();

  const { teamA, increaseTeamAScore, decreaseTeamAScore } = useStoreContext();

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
  const { teamB, increaseTeamBScore, decreaseTeamBScore } = useStoreContext();

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

export default function ContextComponent() {
  return (
    <div className="">
      <main>
        <StoreContextProvider>
          <Winner />
          <Players>
            <PlayerA />
            <PlayerB />
          </Players>
        </StoreContextProvider>
      </main>
    </div>
  );
}
