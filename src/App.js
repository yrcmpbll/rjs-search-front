function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Seeker
        </h1>
        <form className="search-box">
          <input type="search" placeholder="What do you search?" />
        </form>
        <p>Search hits: 0</p>
        <div className="results">
          <div className="result">
            <h3>Title goes here</h3>
            <p>Lorem ipsum sit and so on.</p>
            <a href="#">Read</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
