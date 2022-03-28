import { Button, Spinner } from 'react-bootstrap';
import './App.css';
import CardGroup from './component/cardgroup/CardGroup';

function App() {


  return (
    <div className='App'>

      <h1>react Boootatrap</h1>
      <Button variant='danger'>My Button</Button>

      <div>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>

      <CardGroup></CardGroup>

    </div>
  );
}

export default App;
