import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});
  
  const handleSearch = async e => {
    e.preventDefault();
    if (search === '') return;

    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${search}`;

    const response = await fetch(endpoint);

    // console.log(response)
    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();
    // console.log(json);

    setResults(json.query.search);
    setSearchInfo(json.query.searchinfo);
  }

  return (
    <div className="App">
      <header>
        <h1>
          Seeker
        </h1>
        <form className="search-box" onSubmit={handleSearch}>
          <input 
                type="search" 
                placeholder="What do you search?" 
                value={search}
                onChange={e => setSearch(e.target.value)}
          />
        </form>
        {/* <p>Search hits: 0</p> */}
        {(searchInfo.totalhits) ? <p>Hits: {searchInfo.totalhits}</p> : ''}
        <div className="results">
          {results.map((result, i) => 
              {

                const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
                return (


                  <div className="result" key={i} >
                  <h3>{result.title}</h3>
                  <p dangerouslySetInnerHTML={{__html: result.snippet}}>                    
                  </p>
                  <a href={url} target="_blank" rel="nofollow">Read</a>
                  </div>



                )
              }
          )}          
        </div>
      </header>
    </div>
  );
}

export default App;
