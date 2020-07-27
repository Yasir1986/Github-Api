import React from 'react';
import fetchApi from './fetchApi'
import { Container } from 'react-bootstrap';

function App() {

  const { repos, loading, error} = fetchApi()
  
  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Again!</h1>}
     <h1>Github API</h1>
     { <h1>{repos.length}</h1>}
    </Container>
  );
}

export default App;
