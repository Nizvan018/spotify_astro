function CurrentSong({ image, title, artists }) {
    return (
        <div className="flex items-center gap-4 w-1/4 relative overflow-hidden">
            <picture className="overflow-hidden w-16 h-16 bg rounded-sm bg-zinc-800 shadow-md">
                <img src={image} alt={title} />
            </picture>

            <div className="flex flex-col">
                <h3 className="text-sm font-semibold block">{title}</h3>
                <span className="text-xs font-medium text-gray-500">{artists?.join(', ')}</span>
            </div>
        </div>
    )
}

export default CurrentSong;