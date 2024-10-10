import { useState } from 'react';
import './App.css'
import Container from './components/lib/Container';
import Search from './components/Search';
import Stop from './components/Stop';
import SearchResultModel from './models/SearchResultModel';
import Grid from './components/lib/Grid';
import Departure from './components/Departure';

function App() {
  const [result, setResultValue] = useState<SearchResultModel | undefined>();

  const onSearch = (_: string, searchResult: SearchResultModel) => {
    setResultValue(searchResult);
  };

  return (
    <div>
      <Container>
        <Grid cols={2}>
          <div>
            <Search onSearch={onSearch} />
            <div className='my-4'>
              <Stop model={result} />
              <Departure model={result} />
            </div>
          </div>
        </Grid>
      </Container>
    </div>
);
}

export default App
