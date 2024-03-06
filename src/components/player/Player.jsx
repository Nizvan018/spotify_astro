import { usePlayerStore } from "@/store/playerStore"
import { useState, useRef, useEffect } from "react"

import CurrentSong from "./CurrentSong";
import VolumeControl from "./VolumeControl";
import SongControl from "./SongControl";

export const Play = ({ size = 'small' }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="text-black icon icon-tabler icon-tabler-player-play-filled" width={size == "large" ? 24 : 18} height={size == "large" ? 24 : 18} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" stroke-width="0" fill="currentColor" /></svg>
    )
}

export const Pause = ({ size = 'small' }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="text-black icon icon-tabler icon-tabler-player-pause-filled" width={size == "large" ? 24 : 18} height={size == "large" ? 24 : 18} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" stroke-width="0" fill="currentColor" /><path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" stroke-width="0" fill="currentColor" /></svg>
    )
}

const SkipBack = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="text-zinc-400 hover:text-white icon icon-tabler icon-tabler-player-skip-back-filled" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.496 4.136l-12 7a1 1 0 0 0 0 1.728l12 7a1 1 0 0 0 1.504 -.864v-14a1 1 0 0 0 -1.504 -.864z" stroke-width="0" fill="currentColor" /><path d="M4 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" /></svg>
    )
}

const SkipForward = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="text-zinc-400 hover:text-white icon icon-tabler icon-tabler-player-skip-forward-filled" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 5v14a1 1 0 0 0 1.504 .864l12 -7a1 1 0 0 0 0 -1.728l-12 -7a1 1 0 0 0 -1.504 .864z" stroke-width="0" fill="currentColor" /><path d="M20 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" /></svg>
    )
}

const Random = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="text-zinc-400 hover:text-white icon icon-tabler icon-tabler-arrows-shuffle" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 4l3 3l-3 3" /><path d="M18 20l3 -3l-3 -3" /><path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" /><path d="M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3" /></svg>
    )
}

const Repeat = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="text-zinc-400 hover:text-white icon icon-tabler icon-tabler-repeat" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" /><path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" /></svg>
    )
}

const Microphone = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="text-zinc-400 icon icon-tabler icon-tabler-microphone-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" /><path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" /></svg>
    )
}

const SongCard = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="text-zinc-400 icon icon-tabler icon-tabler-cards" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3.604 7.197l7.138 -3.109a.96 .96 0 0 1 1.27 .527l4.924 11.902a1 1 0 0 1 -.514 1.304l-7.137 3.109a.96 .96 0 0 1 -1.271 -.527l-4.924 -11.903a1 1 0 0 1 .514 -1.304z" /><path d="M15 4h1a1 1 0 0 1 1 1v3.5" /><path d="M20 6c.264 .112 .52 .217 .768 .315a1 1 0 0 1 .53 1.311l-2.298 5.374" /></svg>
    )
}

const LineSong = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="text-zinc-400 icon icon-tabler icon-tabler-baseline-density-medium" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 20h16" /><path d="M4 12h16" /><path d="M4 4h16" /></svg>
    )
}

const Speaker = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="text-zinc-400 icon icon-tabler icon-tabler-device-speaker" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" /><path d="M12 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M12 7l0 .01" /></svg>
    )
}

const FullScreen = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="text-zinc-400 icon icon-tabler icon-tabler-arrows-diagonal" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 4l4 0l0 4" /><path d="M14 10l6 -6" /><path d="M8 20l-4 0l0 -4" /><path d="M4 20l6 -6" /></svg>
    )
}

function Player() {
    const { currentMusic, isPlaying, setIsPlaying, volume } = usePlayerStore(state => state);
    const audioRef = useRef();
    const volumeRef = useRef(1);

    useEffect(() => {
        isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }, [isPlaying]);

    useEffect(() => {
        audioRef.current.volume = volume;
    }, [volume]);

    useEffect(() => {
        const { song, playlist, songs } = currentMusic;

        if (song) {
            const src = `/music/${playlist.id}/0${song.id}.mp3`;
            audioRef.current.src = src;
            audioRef.current.volume = volume;
            audioRef.current.play();
        }
    }, [currentMusic]);

    const handleClick = () => {
        setIsPlaying(!isPlaying);
    }

    return (
        <div className='flex h-full flex-row justify-between items-center gap-8 px-4 z-50'>
            {/* Current song information */}
            <CurrentSong {...currentMusic.song} />

            {/* Player controls */}
            <div className='w-2/4 flex flex-col items-center gap-2'>
                <div className='flex justify-center gap-4'>
                    <button>
                        <Random />
                    </button>
                    <button>
                        <SkipBack />
                    </button>
                    <button className="p-2 rounded-full bg-white transition-transform hover:scale-105" onClick={handleClick}>
                        {isPlaying ? <Pause /> : < Play />}
                    </button>
                    <button>
                        <SkipForward />
                    </button>
                    <button>
                        <Repeat />
                    </button>
                </div>
                <SongControl audio={audioRef} />
            </div>

            {/* Volumen controls */}
            <div className="flex justify-end gap-2 w-1/4">
                <button className="hidden lg:block">
                    <SongCard />
                </button>
                <button className="hidden lg:block">
                    <Microphone />
                </button>
                <button className="hidden lg:block">
                    <LineSong />
                </button>
                <button className="hidden lg:block">
                    <Speaker />
                </button>
                <VolumeControl />
                <button>
                    <FullScreen />
                </button>
            </div>
            <audio ref={audioRef}></audio>
        </div>
    )
}

export default Player