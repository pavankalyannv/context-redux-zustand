// Reusable player component that render Players- details and actions.
const Player = ({ label, score, onIncrease, onDecrease, renderCount }: any) => (
  <div className="">
    <span className="bg-red-400 p-1  rounded-sm">
      Re-renders: {renderCount}
    </span>
    <div className="flex flex-col mt-3">
      <span className="font-bold">{label}</span>
      <span className="font-bold"> {score} </span>
    </div>

    <div className="p-3 flex">
      <button className="mx-3 my-1" onClick={onDecrease}>
        -
      </button>
      <button className="mx-3 my-1" onClick={onIncrease}>
        +
      </button>
    </div>
  </div>
);

export default Player;
