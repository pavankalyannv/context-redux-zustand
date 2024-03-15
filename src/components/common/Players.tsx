// Players component will contains all active player components

const Players = ({ children }: any) => {
  ("players===========================");
  return (
    <div className=" mr-10 mt-10 border-[1px] p-3 ">
      <h3 className="p-3">Players</h3>
      <div className="flex  ">{children}</div>
    </div>
  );
};

export default Players;
