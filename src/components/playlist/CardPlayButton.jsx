import { Pause, Play } from '@components/Player';
import { usePlayerStore } from '@/store/playerStore';

function CardPlayButton({ id }) {
    const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore();

    const handleClick = () => {
        setCurrentMusic({
            playlist: {
                id
            }
        });

        if (isPlayingPlaylist && isPlaying) {
            setIsPlaying(!isPlaying);
        } else if (!isPlayingPlaylist && !isPlaying) {
            setIsPlaying(true);
        }
    }

    const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;

    return (
        <div
            class={`z-10 absolute right-5 bottom-20 translate-y-4 transition-all duration-500 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ${isPlayingPlaylist ? 'translate-y-0 opacity-100' : ''}`}
        >
            <button onClick={handleClick} className='p-2 rounded-full bg-green-500 shadow-lg shadow-black hover:bg-green-400 hover:scale-105'>
                {isPlayingPlaylist ? <Pause /> : <Play />}
            </button>
        </div>
    )
}

export default CardPlayButton