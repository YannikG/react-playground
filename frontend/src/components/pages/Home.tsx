import { useState } from "react";
import SearchResultModel from "../../models/SearchResultModel";
import Grid from "../lib/Grid";
import Search from "../sub/Search";
import Stop from "../sub/Stop";
import Departure from "../sub/Departure";

function Home() {
    const [result, setResultValue] = useState<SearchResultModel | undefined>();

    const onSearch = (_: string, searchResult: SearchResultModel) => {
        setResultValue(searchResult);
    };

    return (
        <Grid cols={2}>
            <Search onSearch={onSearch} />
            <div className='my-4'>
                <Stop model={result} />
                <Departure model={result} />
            </div>
        </Grid>
    );
};

export default Home;