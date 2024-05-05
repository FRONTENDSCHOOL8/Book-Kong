import { motion } from 'framer-motion';
import { object, bool } from 'prop-types';
import { getRandomNumber } from '../../../utils/getRandomNumber';
import CardImage from '../../atoms/CardImage/CardImage';
import CardInfo from '../CardInfo/CardInfo';
import { useLocation } from 'react-router-dom';
import { Skeleton } from '@mui/material';
function Card({ data, isLoading = false }) {
  // ESLint 에러 나지 말라고 그냥 쓴 코드
  isLoading;

  const CardVar = {
    start: { y: 20 },
    end: { y: 0 },
  };

  const { pathname } = useLocation();

  // Skeleton UI 보여주려고 임시로 만든 리턴 코드
  return (
    <Skeleton variant="rounded" sx={{ borderRadius: '0.5rem' }}>
      <motion.li
        variants={CardVar}
        whileHover={{ scale: 1.02 }}
        className={' list-shadow bg-grayscale-white overflow-hidden rounded-lg'}
      >
        <a
          href={
            pathname === '/library/search'
              ? `/library/book-registration?title=${data.title}&author=${data.author}&publisher=${data.publisher}&page=${getRandomNumber(80, 1200)}&isbn=${data.isbn}&cover=${data.cover}`
              : '/'
          }
          className="flex w-full"
        >
          <CardImage data={data} />
          <CardInfo data={data} />
        </a>
      </motion.li>
    </Skeleton>
  );

  // return isLoading ? (
  //   <Skeleton variant="rounded" sx={{ borderRadius: '0.5rem' }}>
  //     <motion.li
  //       variants={CardVar}
  //       whileHover={{ scale: 1.02 }}
  //       className={' list-shadow bg-grayscale-white overflow-hidden rounded-lg'}
  //     >
  //       <a
  //         href={
  //           pathname === '/library/search'
  //             ? `/library/book-registration?title=${data.title}&author=${data.author}&publisher=${data.publisher}&page=${getRandomNumber(80, 1200)}&isbn=${data.isbn}&cover=${data.cover}`
  //             : '/'
  //         }
  //         className="flex w-full"
  //       >
  //         <CardImage data={data} />
  //         <CardInfo data={data} />
  //       </a>
  //     </motion.li>
  //   </Skeleton>
  // ) : (
  //   <motion.li
  //     variants={CardVar}
  //     whileHover={{ scale: 1.02 }}
  //     className={' list-shadow bg-grayscale-white overflow-hidden rounded-lg'}
  //   >
  //     <a
  //       href={
  //         pathname === '/library/search'
  //           ? `/library/book-registration?title=${data.title}&author=${data.author}&publisher=${data.publisher}&page=${getRandomNumber(80, 1200)}&isbn=${data.isbn}&cover=${data.cover}`
  //           : '/'
  //       }
  //       className="flex w-full"
  //     >
  //       <CardImage data={data} />
  //       <CardInfo data={data} />
  //     </a>
  //   </motion.li>
  // );
}

Card.propTypes = {
  data: object,
  isLoading: bool,
};

export default Card;
