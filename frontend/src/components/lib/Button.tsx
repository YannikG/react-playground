export interface ButtonProps {
    type: 'primary' | '',
    label: string,
    onClick: () => void
}

function Button({type, label, onClick}: ButtonProps) {

    let styleClass = 'font-small py-2 px-3 rounded-md  transition duration-200 ease-in-out';
    styleClass += type == 'primary' ? ' bg-blue-800 text-white hover:bg-blue-700' : ' bg-gray-200 text-gray-800 hover:bg-gray-300'; 

    return (
        <button className={styleClass} onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;