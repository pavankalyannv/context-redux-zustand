import { create } from "zustand";

// Zustand store creation.
const useStore = create((set) => ({
  teamA: 0,
  teamB: 0,
  increaseTeamAScore: () =>
    set((state: { teamA: number }) => ({ teamA: state.teamA + 1 })),
  decreaseTeamAScore: () =>
    set((state: { teamA: number }) => ({
      teamA: Math.max(0, state.teamA - 1),
    })),
  increaseTeamBScore: () =>
    set((state: { teamB: number }) => ({ teamB: state.teamB + 1 })),
  decreaseTeamBScore: () =>
    set((state: { teamB: number }) => ({
      teamB: Math.max(0, state.teamB - 1),
    })),
}));

export default useStore;
