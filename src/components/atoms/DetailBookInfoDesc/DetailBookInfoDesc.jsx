import { string, shape } from 'prop-types';

function DetailBookInfoDesc({ data: bookData }) {
  return (
    <div className="mt-4 whitespace-pre-wrap contents-sm ">
      {/* 더보기 버튼 줄 수 고정값 line-clamp-[20] */}
      {bookData.description.split('\n').map((line, index) => {
        return (
          <p key={index}>
            {line}
            <br />
          </p>
        );
      })}
    </div>
  );
}

DetailBookInfoDesc.propTypes = {
  data: shape({
    description: string.isRequired,
  }),
};

export default DetailBookInfoDesc;
