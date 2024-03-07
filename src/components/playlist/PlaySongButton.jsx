import { usePlayerStore } from '@/store/playerStore';

export const Play = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="text-white icon icon-tabler icon-tabler-player-play-filled" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" stroke-width="0" fill="currentColor" /></svg>
    )
}

export const Pause = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="text-white icon icon-tabler icon-tabler-player-pause-filled" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" stroke-width="0" fill="currentColor" /><path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" stroke-width="0" fill="currentColor" /></svg>
    )
}

function PlayingPlaylistIcon({ idPlaylist, idSong, index }) {
    const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore();

    const handleClick = () => {
        if (songIsPlaying) {
            setIsPlaying(false)
            return
        }

        if (currentMusic?.song?.id == idSong) {
            setIsPlaying(true);
            return
        }

        fetch(`/api/get_info_playlist.json?id=${idPlaylist}`)
            .then(res => res.json())
            .then(data => {
                const { songs, playlist } = data;
                setIsPlaying(true);
                setCurrentMusic({ playlist, song: songs[index], songs });
            });
    }

    const songIsPlaying = isPlaying && currentMusic?.playlist?.id == idPlaylist && currentMusic?.song?.id === idSong;

    return (
        <>
            {songIsPlaying ? (
                <>
                    <div className="group-hover:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-green-500 icon icon-tabler icon-tabler-brand-deezer" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 16.5h2v.5h-2z" /><path d="M8 16.5h2.5v.5h-2.5z" /><path d="M16 17h-2.5v-.5h2.5z" /><path d="M21.5 17h-2.5v-.5h2.5z" /><path d="M21.5 13h-2.5v.5h2.5z" /><path d="M21.5 9.5h-2.5v.5h2.5z" /><path d="M21.5 6h-2.5v.5h2.5z" /><path d="M16 13h-2.5v.5h2.5z" /><path d="M8 13.5h2.5v-.5h-2.5z" /><path d="M8 9.5h2.5v.5h-2.5z" /></svg>
                    </div>
                    <button onClick={handleClick} class="hidden group-hover:block">
                        <Pause />
                    </button>
                </>
            ) : (
                <>
                    <span class="group-hover:hidden">{index + 1}</span>
                    <button onClick={handleClick} class="hidden group-hover:block">
                        <Play />
                    </button>
                </>
            )}
        </>
    )
}

export default PlayingPlaylistIcon;