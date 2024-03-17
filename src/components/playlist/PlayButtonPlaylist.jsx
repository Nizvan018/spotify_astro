import { Pause, Play } from '@/components/player/Player';
import { usePlayerStore } from '@/store/playerStore';

function CardPlayButton({ id }) {
    const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore();

    const handleClick = () => {
        if (isPlayingPlaylist) {
            setIsPlaying(false)
            return
        }

        if (currentMusic?.playlist?.id == id) {
            setIsPlaying(true);
            return
        }

        fetch(`/api/get_info_playlist.json?id=${id}`)
            .then(res => res.json())
            .then(data => {
                const { songs, playlist } = data;
                setIsPlaying(true);
                setCurrentMusic({ playlist, song: songs[0], songs, index: 0 });
            });
    }

    const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;

    return (
        <button onClick={handleClick} className='w-fit h-fit p-4 rounded-full bg-green-500 shadow-lg shadow-black hover:bg-green-400 hover:scale-105'>
            {isPlayingPlaylist ? <Pause size='large' /> : <Play size='large' />}
        </button>
    )
}

export default CardPlayButton;