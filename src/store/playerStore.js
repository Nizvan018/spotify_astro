import { create } from 'zustand';

export const usePlayerStore = create((set) => ({
    isPlaying: false,
    currentMusic: {
        playlist: null,
        song: null,
        songs: [],
        index: null
    },
    volume: 1,
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentMusic: (currentMusic) => set({ currentMusic }),
    setVolume: (volume) => set({ volume }),
}));