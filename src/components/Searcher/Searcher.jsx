import "./Searcher.css";

const Searcher = () => {
  return (
    <div className="searcher">
      <form className="searcher__form">
        <input
          className="searcher__input"
          placeholder="Jakiego kursu szukasz?"
        />
        <select className="searcher__level">
          <option value="Poziom">Poziom</option>
        </select>
      </form>
    </div>
  );
};

export default Searcher;
