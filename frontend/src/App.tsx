import './App.css'
import Container from './components/lib/Container';
import Search from './components/Search';
import SearchResultModel from './models/SearchResultModel';

function App() {

  const onSearch = (searchValue: string, searchResult: SearchResultModel) => {
    console.log(searchValue);
    console.log(searchResult);
  };

  return (
    <div>
      <Container>
        <Search onSearch={onSearch} />
      </Container>
    </div>
);
}

export default App
