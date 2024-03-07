import SearchCard from '../../molecules/SearchCard/SearchCard';
import { motion } from 'framer-motion';
function SearchList() {
  const searchListVar = {
    start: { opacity: 0 },
    end: {
      opacity: 1,
      transition: { type: 'spring', mass: 0.8, staggerChildren: 0.05 },
    },
  };
  return (
    <motion.ul
      variants={searchListVar}
      initial="start"
      animate="end"
      className="flex flex-col gap-3 mt-[14px]"
    >
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
    </motion.ul>
  );
}

export default SearchList;
