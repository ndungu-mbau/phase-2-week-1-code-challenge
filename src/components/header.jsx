import PropTypes from "prop-types";

export const Header = ({ title }) => {
  return (
    <header className="flex flex-grow w-screen justify-center bg-indigo-800 text-white py-4 mb-4">
      <h1 className="text-6xl">{title}</h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};
