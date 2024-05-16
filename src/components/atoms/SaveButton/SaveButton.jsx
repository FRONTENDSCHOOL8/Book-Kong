import { string } from 'prop-types';
import { motion } from 'framer-motion';

function SaveButton({ formId }) {
  return (
    <motion.button
      type="submit"
      form={formId}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.9 }}
      className="contents-md-bold text-primary-500"
    >
      저장
    </motion.button>
  );
}

SaveButton.propTypes = {
  formId: string.isRequired,
};

export default SaveButton;
