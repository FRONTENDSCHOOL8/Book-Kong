function FeedDetailCommentContents() {
  return (
    <section className="bg-grayscale-white border-grayscale-100 border py-6 px-4">
      <form
        onSubmit={onsubmit}
        className="flex items-center flex-shrink-0 justify-between w-full rounded bg-grayscale-white border border-primary-500 mb-6 px-3 py-2"
      >
        <input
          type="text"
          className=" rounded"
          placeholder="댓글을 남겨보세요!"
        />
        <button className="w-[50px] h-[24px] bg-grayscale-200 rounded justify-center align-middle flex">
          <img src="/images/icons/arrow-up.svg" alt="등록버튼" />
        </button>
      </form>
      <span className="pr-2 text-grayscale-900 contents-md-bold">댓글</span>
      <span className="text-primary-500 contents-md-bold">5</span>
      <div className="flex gap-3 p-4 border rounded-lg bg-grayscale-white border-grayscale-100 list-shadow mt-6 mb-3">
        <img
          src="/images/characters/character_sm.png"
          alt="캐릭터"
          className="w-[45px] h-[45px]"
        />
        <div className="flex flex-col">
          <div className="flex mb-1">
            <span className="contents-xs-bold text-grayscale-black pr-2">
              나는개똥벌레
            </span>
            <span className="contents-2xs text-grayscale-400 flex items-center">
              2024년 3월 13일
            </span>
          </div>
          <span className="contents-small text-grayscale-700">
            댓글 본문이에요
          </span>
        </div>
      </div>
      <div className="flex gap-3 p-4 border rounded-lg bg-grayscale-white border-grayscale-100 list-shadow">
        <img
          src="/images/characters/character_sm.png"
          alt="캐릭터"
          className="w-[45px] h-[45px]"
        />
        <div className="flex flex-col">
          <div className="flex mb-1">
            <span className="contents-xs-bold text-grayscale-black pr-2">
              나는개똥벌레
            </span>
            <span className="contents-2xs text-grayscale-400 flex items-center">
              2024년 3월 13일
            </span>
          </div>
          <span className="contents-small text-grayscale-700">
            길게 들어가는 본문은 이렇게 나와요. <br />
            길게 들어가는 본문은 이렇게 나와요. <br />
            길게 들어가는 본문은 이렇게 나와요. <br />
            길게 들어가는 본문은 이렇게 나와요.
          </span>
        </div>
      </div>
      <div className="flex gap-3 p-4 border rounded-lg bg-grayscale-white border-grayscale-100 list-shadow mt-3 mb-3">
        <img
          src="/images/characters/character_sm.png"
          alt="캐릭터"
          className="w-[45px] h-[45px]"
        />
        <div className="flex flex-col">
          <div className="flex mb-1">
            <span className="contents-xs-bold text-grayscale-black pr-2">
              나는개똥벌레
            </span>
            <span className="contents-2xs text-grayscale-400 flex items-center">
              2024년 3월 13일
            </span>
          </div>
          <span className="contents-small text-grayscale-700">
            댓글 본문이에요
          </span>
        </div>
      </div>
    </section>
  );
}

export default FeedDetailCommentContents;
