import { usePlayerStore } from "@/store/playerStore";
import { useRef } from "react";
import { Slider } from "./Slider";

const Volume2 = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="text-zinc-400 hover:text-white icon icon-tabler icon-tabler-volume" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 8a5 5 0 0 1 0 8" /><path d="M17.7 5a9 9 0 0 1 0 14" /><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" /></svg>
    )
}

const Volume1 = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="text-zinc-400 hover:text-white icon icon-tabler icon-tabler-volume-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 8a5 5 0 0 1 0 8" /><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" /></svg>
    )
}

const VolumeOff = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="text-zinc-400 hover:text-white icon icon-tabler icon-tabler-volume-3" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" /><path d="M16 10l4 4m0 -4l-4 4" /></svg>
    )
}

export default function VolumeControl() {
    const volume = usePlayerStore(state => state.volume);
    const setVolume = usePlayerStore(state => state.setVolume);
    const previosVolumeRef = useRef(volume);

    const isVolumeSilenced = volume < 0.1;

    const handleClickVolumen = () => {
        if (isVolumeSilenced) {
            setVolume(previosVolumeRef.current);
        } else {
            previosVolumeRef.current = volume;
            setVolume(0);
        }
    }

    return (
        <div className="flex justify-center items-center gap-2">
            <button onClick={handleClickVolumen}>
                {volume < 0.1 && (<VolumeOff />)}
                {(volume >= 0.1 && volume < 0.5) && (<Volume1 />)}
                {volume >= 0.5 && (<Volume2 />)}
            </button>

            <Slider
                className="w-[120px]"
                defaultValue={[100]}
                max={100}
                min={0}
                value={[volume * 100]}
                onValueChange={(value) => {
                    const [newVolume] = value;
                    const volumeValue = newVolume / 100;
                    setVolume(volumeValue);
                }}
            />
        </div>
    )
}