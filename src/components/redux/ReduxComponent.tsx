import useRenderCount from "../../hooks/useRenderCount";
import Player from "../common/Player";
import Players from "../common/Players";
import { WinnerComponent } from "../common/WinnerComponent";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";
import {
  decreaseTeamAScore,
  decreaseTeamBScore,
  increaseTeamAScore,
  increaseTeamBScore,
} from "./scoreSlice";

// Winner Component that shows the final results.
const Winner = () => {
  const { teamA, teamB } = useSelector((state: any) => state?.score);
  useSelector((state: any) => state);
  return <WinnerComponent teamA={teamA} teamB={teamB} lib={"REDUX API"} />;
};

// Player A Components that subscribed the Context.
const PlayerA = () => {
  const renderCount = useRenderCount();

  const teamA = useSelector((state: any) => state?.score?.teamA);
  const dispatch = useDispatch();
  const increaseA = () => {
    dispatch(increaseTeamAScore());
  };
  const decreaseA = () => {
    dispatch(decreaseTeamAScore());
  };
  return (
    <Player
      label={"Team A"}
      score={teamA}
      onIncrease={increaseA}
      onDecrease={decreaseA}
      renderCount={renderCount}
    />
  );
};

// Player B Components that subscribed the Context.
const PlayerB = () => {
  const renderCount = useRenderCount();
  const teamB = useSelector((state: any) => state?.score?.teamB);
  const dispatch = useDispatch();
  const increaseB = () => {
    dispatch(increaseTeamBScore());
  };
  const decreaseB = () => {
    dispatch(decreaseTeamBScore());
  };
  return (
    <Player
      label={"Team B"}
      score={teamB}
      onIncrease={increaseB}
      onDecrease={decreaseB}
      renderCount={renderCount}
    />
  );
};

export default function ReduxComponent() {
  return (
    <div className="">
      <main>
        <Provider store={store}>
          <Winner />
          <Players>
            <PlayerA />
            <PlayerB />
          </Players>
        </Provider>
      </main>
    </div>
  );
}
