import { motion } from 'framer-motion';
import { string, func } from 'prop-types';

function PageReadInput({ id, name, value, onChange }) {
  return (
    <motion.input
      type="number"
      id={id}
      name={name}
      value={value}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      whileFocus={{ scale: 1.02, transition: { duration: 0.3 } }}
      className="px-3 py-2 contents-sm-bold text-grayscale-900 bg-grayscale-white border border-grayscale-400 rounded h-[36px] flex-grow"
      onChange={onChange}
    />
  );
}

PageReadInput.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
};

export default PageReadInput;
