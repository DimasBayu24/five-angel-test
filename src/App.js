import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [inputQuote, setInputQuote] = useState('');
  const [favQuote, setFavQuote] = useState([]);
  const [myQuote, setMyQuote] = useState([]);

  const getKanyeQuote = () => {
    Axios.get('https://api.kanye.rest/').then((result) => {
      setQuote(result.data.quote);
    });
  };

  const mySelfQuote = () => {
    setMyQuote((myQuote) => [...myQuote, inputQuote]);
  };

  const getFavQuote = () => {
    setFavQuote((favQuote) => [...favQuote, quote]);
  };

  useEffect(() => {
    getKanyeQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Kanye West Quote!</p>
        <p>{quote}</p>
        <button onClick={() => getKanyeQuote()}>Get Quote</button>
        <button onClick={() => getFavQuote()}>Add to Favorite!</button>
        <p>
          {' '}
          {favQuote.map((quote, i) => (
            <h5>
              {i + 1}.{quote}
            </h5>
          ))}
        </p>
        <div>
          <input
            name="inputQuote"
            onChange={(e) => {
              setInputQuote(e.target.value);
            }}
            type="text"
          />
          <button onClick={() => mySelfQuote()}>submit</button>
          <p>
            {' '}
            {myQuote.map((quote, i) => (
              <h5>
                {i + 1}.{quote}
              </h5>
            ))}
          </p>
        </div>
      </header>
    </div>
  );
};

export default App;
