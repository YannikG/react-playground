import Input, { InputChangeEvent } from "../lib/Input";
import Button from "../lib/Button";
import Grid from "../lib/Grid";

export interface SearchProps {
    searchStop: string;
    handleOnChange: (e: InputChangeEvent) => void;
    handleOnSearchButton: () => void;
}

function Search({searchStop, handleOnChange, handleOnSearchButton}: SearchProps) {    
    return (
        <Grid cols={2}>
            <Input type={'text'} value={searchStop} placeholder={'Bern, Thun, Zürich ...'} onChange={handleOnChange} />
            <Button type={'primary'} label={'Suchen'} onClick={handleOnSearchButton} />
        </Grid>
    );
}

export default Search;