const SearchBar = (props) => {
  // const [searchText, setSearchText] = useState("");

  const { onBlur } = props;

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onBlur={(e) => {
          const moviesName = e.target.value;
          onBlur(moviesName);
        }}
      />
    </div>
  );
};

export default SearchBar;
