import { Track } from "@/components/Main/Main.types"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { stat } from "fs";

type playerStateType = {
    tracks: Track[];
    currentTrack: Track | null;
    isPlaying: boolean;
    tracksOrigin: Track[];
    tracksShuffle: Track[];
    isShuffle: boolean;
}

const initialState: playerStateType = {
    tracks: [],
    currentTrack: null,
    isPlaying: false,
    tracksOrigin: [],
    tracksShuffle: [],
    isShuffle: false,
}

const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        setTracks: (state, action: PayloadAction<Track[]>) => {
            state.tracks = action.payload;
        },
        setCurrentTrack: (state, action: PayloadAction<Track>) => {
            state.currentTrack = action.payload;
        },
        setIsPlaying: (state, action: PayloadAction<boolean>) => {
            state.isPlaying = action.payload;
        },
        setTracksOrigin: (state, action: PayloadAction<Track[]>) => {
            state.tracksOrigin = action.payload;
        },
        setTracksShuffle: (state, action: PayloadAction<Track[]>) => {
            state.tracksShuffle = action.payload;
        },
        setIsShuffle: (state, action: PayloadAction<boolean>) => {
            state.isShuffle = action.payload;
        }
    }
})

export const {
    setTracks,
    setCurrentTrack,
    setIsPlaying,
    setTracksOrigin,
    setTracksShuffle,
    setIsShuffle
} = playerSlice.actions;

export const playerReducer = playerSlice.reducer;