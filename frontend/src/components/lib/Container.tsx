export interface ContainerProps {
    children: React.ReactNode
}

function Container({children} : ContainerProps) {
    return (
        <div className="container mx-auto px-4 py-8">
            {children}
        </div>
    );
}

export default Container