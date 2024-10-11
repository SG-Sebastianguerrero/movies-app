import styles from "./sidebar.module.css";
const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      Search
      <input type="search" name="" id="" />
      Genres
      <select name="" id="">
        <option value="1">genre 1</option>
        <option value="2">genre 2</option>
        <option value="3">genre 3</option>
        <option value="4">genre 4</option>
        <option value="5">genre 5</option>
        <option value="6">genre 6</option>
        <option value="7">genre 7</option>
        <option value="8">genre 8</option>
        <option value="9">genre 9</option>
        <option value="10">genre 10</option>
      </select>
    </aside>
  );
};

export default Sidebar;
