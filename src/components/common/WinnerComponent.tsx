export function WinnerComponent({ teamA, teamB, lib }: any) {
  return (
    <div className="border-[1px] w-[250px] h-[250px] flex flex-col justify-around">,
          <span className="text-[23px] font-bold text-red-500">{lib}</span>

      <span className="text-[20px] font-bold">Winner</span>
      <span className="text-[16px] font-[900]">
        {teamA === teamB ? "DRAW" : teamA > teamB ? "TEAM A" : "TEAM B"}
      </span>
    </div>
  );
}
