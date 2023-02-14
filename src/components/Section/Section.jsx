import propTypes from 'prop-types';

const Section = ({ children, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: propTypes.string,
  children: propTypes.element.isRequired,
};

export default Section;
