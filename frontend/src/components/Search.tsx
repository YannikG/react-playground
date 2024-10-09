import { useState } from "react";
import SearchResultModel from "../models/SearchResultModel";
import Input, { InputChangeEvent } from "./lib/Input";
import Button from "./lib/Button";

export interface SearchProps {
    onSearch: (searchValue: string, result: SearchResultModel) => void;
}

function Search({onSearch}: SearchProps) {
    const [searchValue, setSearchValue] = useState('');
    const apiBaseUrl = 'https://search.ch/timetable/api/stationboard.json';

    const handleOnChange = (e: InputChangeEvent) => {
        setSearchValue(e.target.value);
    }

    const handleOnSearch = () => {
        const url = `${apiBaseUrl}?stop=${searchValue}`;

        fetch(url).then(async (response) => {
            console.log(await response.json());

            onSearch(searchValue, {} as SearchResultModel)
        })
        
    }
    
    return (
        <div>
            <Input type={'text'} value={searchValue} onChange={handleOnChange} />
            <Button type={'primary'} label={'Suchen'} onClick={handleOnSearch} />
        </div>
    )
}

export default Search;