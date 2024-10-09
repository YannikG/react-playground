export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

export interface InputProps {
    value: string | number;
    placeholder?: string | undefined;
    onChange: (event: InputChangeEvent) => void;
    type: 'number' | 'text';
};

function Input({value, placeholder, type, onChange} : InputProps) {
    return (
        <input 
            type={type}
            placeholder={placeholder}
            className="border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 py-2 px-4 w-full transition duration-200 ease-in-out"
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;