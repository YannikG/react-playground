import { useState } from "react";
import SearchResultModel from "../../models/SearchResultModel";
import Input, { InputChangeEvent } from "../lib/Input";
import Button from "../lib/Button";
import Grid from "../lib/Grid";
import { toast } from "sonner";

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
                const responseText = await response.text();

                if (response.ok && !responseText.includes('messages')) {
                    const data = JSON.parse(responseText);
                    onSearch(searchValue, data);
                } else if (response.ok && responseText.includes('messages') && responseText.includes('not found.')) {
                    toast.error('Station nicht gefunden!');
                } else {
                    toast.error('Unbekannter Fehler');
                    console.error('Station loading failed', response);
                }
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