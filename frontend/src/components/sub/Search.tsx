import Input, { InputChangeEvent } from "../lib/Input";
import Button from "../lib/Button";

export interface SearchProps {
    searchStop: string;
    handleOnChange: (e: InputChangeEvent) => void;
    handleOnSearchButton: () => void;
}

function Search({searchStop, handleOnChange, handleOnSearchButton}: SearchProps) {    
    return (
        <>
            <div className="grid grid-cols-1 gap-1">
                <Input type={'text'} value={searchStop} placeholder={'Bern, Thun, Zürich ...'} onChange={handleOnChange} />
                <Button type={'primary'} label={'Suchen'} onClick={handleOnSearchButton} />
            </div>
        </>
    );
}

export default Search;