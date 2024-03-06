import { usePlayerStore } from '@/store/playerStore';
import { useEffect, useState } from 'react';

function PlayingPlaylistIcon({ id, type = 'aside' }) {
    const { isPlaying, currentMusic } = usePlayerStore(state => state);

    const visible = isPlaying && currentMusic?.playlist?.id === id;

    return (
        <>
            {type === 'aside' ? (
                <div className={visible ? 'opacity-100' : 'opacity-0'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-green-500 icon icon-tabler icon-tabler-volume" width={18} height={18} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 8a5 5 0 0 1 0 8" /><path d="M17.7 5a9 9 0 0 1 0 14" /><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" /></svg>
                </div>
            ) : (
                <div className={visible ? 'opacity-100' : 'opacity-0'}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-green-500 icon icon-tabler icon-tabler-brand-deezer" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 16.5h2v.5h-2z" /><path d="M8 16.5h2.5v.5h-2.5z" /><path d="M16 17h-2.5v-.5h2.5z" /><path d="M21.5 17h-2.5v-.5h2.5z" /><path d="M21.5 13h-2.5v.5h2.5z" /><path d="M21.5 9.5h-2.5v.5h2.5z" /><path d="M21.5 6h-2.5v.5h2.5z" /><path d="M16 13h-2.5v.5h2.5z" /><path d="M8 13.5h2.5v-.5h-2.5z" /><path d="M8 9.5h2.5v.5h-2.5z" /></svg>
                </div>
            )}
        </>
    )
}

export default PlayingPlaylistIcon;