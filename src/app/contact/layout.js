import PropTypes from 'prop-types';

export default function ContactLayout({ children }) {
  return <>{children}</>;
}

ContactLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
