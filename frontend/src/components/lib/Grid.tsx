export interface GridProps {
    cols: number,
    children: React.ReactNode
}

function Grid({cols, children}: GridProps) {

    const colClass = `grid grid-cols-${cols} gap-4`;
    return (
        <div className={colClass}>
            {children}
        </div>
    );
}

export default Grid;