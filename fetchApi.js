import React, { useEffect }from 'react';

useEffect(() =>{
  const axios = require('axios');
 
  // Make a request for a user with a given ID
  axios.get('/https://api.github.com/users')
    .then(function (response) {
      // handle success
     console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}, [])

function fetchApi() {
  return (
    <div className="App">
    
    </div>
  );
}

export default fetchApi;