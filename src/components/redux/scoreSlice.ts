import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teamA: 0,
  teamB: 0,
};

const scoreSlice = createSlice({
  name: 'score', // Use a descriptive name for the slice
  initialState,
  reducers: {
    increaseTeamAScore: (state : any) => {
      state.teamA++;
    },
    decreaseTeamAScore: (state : any) => {
      state.teamA = Math.max(0, state.teamA - 1); // Prevent negative scores
    },
    increaseTeamBScore: (state : any) => {
      state.teamB++;
    },
    decreaseTeamBScore: (state : any) => {
      state.teamB = Math.max(0, state.teamB - 1); // Prevent negative scores
    },
  },
});

export const {
  increaseTeamAScore,
  decreaseTeamAScore,
  increaseTeamBScore,
  decreaseTeamBScore,
} = scoreSlice.actions;

export default scoreSlice;