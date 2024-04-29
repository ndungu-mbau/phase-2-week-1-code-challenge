import PropTypes from "prop-types";

export const SearchInput = ({ value, onChange }) => {
  return (
    <div className="flex justify-center mb-4 flex-1">
      <input
        type="text"
        placeholder="Search"
        className="w-full shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-8"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
