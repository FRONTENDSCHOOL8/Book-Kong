import PropTypes from 'prop-types';

function TabButton({ title }) {
  return <button className="tab-menu py-[10px] text-gray-500">{title}</button>;
}

TabButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TabButton;
