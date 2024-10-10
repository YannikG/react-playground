import { Toaster } from 'sonner';
import './App.css'
import Container from './components/lib/Container';
import Router from './components/Router';

function App() {
  return (
    <div>
      <Container>
          <Router />
          <Toaster richColors  />
      </Container>
    </div>
);
}

export default App
