import css from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { FiSearch } from "react-icons/fi";

function SearchBar({ onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    const value = e.target.elements.search.value.trim();
    if (!value) {
      toast.error("Please enter valid search text!");
      return;
    }
    onSubmit(value);
  }

  return (
    <header className={css.hat}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          <FiSearch />
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
