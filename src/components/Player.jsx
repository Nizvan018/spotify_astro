import { usePlayerStore } from "@/store/playerStore"
import { useState, useRef, useEffect } from "react"

export const Play = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="text-black icon icon-tabler icon-tabler-player-play-filled" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" stroke-width="0" fill="currentColor" /></svg>
    )
}

export const Pause = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="text-black icon icon-tabler icon-tabler-player-pause-filled" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" stroke-width="0" fill="currentColor" /><path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" stroke-width="0" fill="currentColor" /></svg>
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

function Player() {
    const { isPlaying, setIsPlaying } = usePlayerStore(state => state);
    const [currentSong, setCurrentSong] = useState(null);
    const audioRef = useRef();

    useEffect(() => {
        audioRef.current.src = '/music/1/01.mp3';
    }, []);

    const handleClick = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {

            audioRef.current.play();
            audioRef.current.volume = 0.5;
        }

        setIsPlaying(!isPlaying);
    }

    return (
        <div className='flex h-full flex-row justify-between items-center px-4 z-50'>
            {/* Current song information */}
            <div className="w-1/4">Current song...</div>

            {/* Player controls */}
            <div className='w-2/4 grid place-content-center gap-4 flex-1'>
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
            </div>

            {/* Volumne controls */}
            <div className="flex justify-end w-1/4">Volumen</div>
            <audio ref={audioRef}></audio>
        </div>
    )
}

export default Player