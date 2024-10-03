import { motion } from 'framer-motion';
import { string, func } from 'prop-types';

// 추후 추가 기능들 구현 필요
function ExpectTextarea({ id, name, value, onChange }) {
  return (
    <motion.textarea
      id={id}
      name={name}
      value={value}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      whileFocus={{ scale: 1.02, transition: { duration: 0.3 } }}
      className="w-full aspect-auto min-h-[100px] border border-grayscale-400 rounded-lg p-4"
      onChange={onChange}
    />
  );
}

ExpectTextarea.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
};

export default ExpectTextarea;
