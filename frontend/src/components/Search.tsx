import { useState } from "react";
import SearchResultModel from "../models/SearchResultModel";
import Input, { InputChangeEvent } from "./lib/Input";
import Button from "./lib/Button";
import Grid from "./lib/Grid";

export interface SearchProps {
    onSearch: (searchValue: string, result: SearchResultModel) => void;
}

function Search({onSearch}: SearchProps) {
    const [searchValue, setSearchValue] = useState('');
    const apiBaseUrl = 'https://search.ch/timetable/api/stationboard.json';

    const handleOnChange = (e: InputChangeEvent) => {
        setSearchValue(e.target.value);
    };

    const handleOnSearch = () => {
        if (searchValue.length > 0) {
            const url = `${apiBaseUrl}?stop=${searchValue}&limit=30&show_tracks=1`;

            fetch(url).then(async (response) => {
                const data = await response.json() as SearchResultModel;
                onSearch(searchValue, data);
            })
        }
    };
    
    return (
        <Grid cols={2}>
            <Input type={'text'} value={searchValue} placeholder={'Bern, Thun, Zürich ...'} onChange={handleOnChange} />
            <Button type={'primary'} label={'Suchen'} onClick={handleOnSearch} />
        </Grid>
    );
}

export default Search;