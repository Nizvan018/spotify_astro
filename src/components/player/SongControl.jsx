import { useState, useEffect } from "react";
import { Slider } from "./Slider";

export default function SongControl({ audio }) {
    const [currentTime, setCurrentTime] = useState(0);
    const duration = audio?.current?.duration ?? 0;

    const handleTimeUpdate = () => {
        setCurrentTime(audio.current.currentTime);
    }

    const formatTime = (time) => {
        if (isNaN(time)) return '0:00'

        const seconds = Math.floor(time % 60);
        const minutes = Math.floor(time / 60);

        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    useEffect(() => {
        audio.current.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            audio.current.removeEventListener('timeupdate', handleTimeUpdate);
        }
    }, []);

    return (
        <div className="w-full flex justify-center items-center gap-2">
            <span className="max-w-8 min-w-8 text-sm text-gray-300">{formatTime(currentTime)}</span>
            <Slider
                className="w-full max-w-[480px]"
                defaultValue={[0]}
                max={audio?.current?.duration ?? 0}
                min={0}
                value={[currentTime]}
                onValueChange={(value) => {
                    const [newCurrentTime] = value
                    audio.current.currentTime = newCurrentTime;
                }}
            />
            <span className="max-w-8 min-w-8 text-sm text-gray-300">{formatTime(duration)}</span>
        </div>
    );
}