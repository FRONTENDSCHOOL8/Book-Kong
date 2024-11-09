function FeedDetailCommentContents() {
  return (
    <section className="px-4 pb-[100px] pt-6 border-t border-b bg-grayscale-white border-grayscale-200">
      <form
        onSubmit={onsubmit}
        className="flex items-center flex-shrink-0 w-full gap-2 px-3 py-2 mb-6 border rounded bg-grayscale-white border-primary-500"
      >
        <input
          type="text"
          className="flex-1 rounded"
          placeholder="댓글을 남겨보세요!"
        />
        <button className="w-[50px] h-[24px] bg-grayscale-200 rounded justify-center align-middle flex">
          <img src="/images/icons/arrow-up.svg" alt="등록버튼" />
        </button>
      </form>
      <span className="pr-2 text-grayscale-900 contents-md-bold">댓글</span>
      <span className="text-primary-500 contents-md-bold">3</span>
      <div className="flex gap-3 p-4 mt-6 mb-3 border rounded-lg bg-grayscale-white border-grayscale-100 list-shadow">
        <img
          src="/images/icons/sample-character.svg"
          alt="캐릭터"
          className="w-[45px] h-[45px]"
        />
        <div className="flex flex-col">
          <div className="flex mb-1">
            <span className="pr-2 contents-xs-bold text-grayscale-black">
              나는개똥벌레
            </span>
            <span className="flex items-center contents-2xs text-grayscale-400">
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
          src="/images/icons/sample-character.svg"
          alt="캐릭터"
          className="w-[45px] h-[45px]"
        />
        <div className="flex flex-col">
          <div className="flex mb-1">
            <span className="pr-2 contents-xs-bold text-grayscale-black">
              나는개똥벌레
            </span>
            <span className="flex items-center contents-2xs text-grayscale-400">
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
      <div className="flex gap-3 p-4 mt-3 mb-3 border rounded-lg bg-grayscale-white border-grayscale-100 list-shadow">
        <img
          src="/images/icons/sample-character.svg"
          alt="캐릭터"
          className="w-[45px] h-[45px]"
        />
        <div className="flex flex-col">
          <div className="flex mb-1">
            <span className="pr-2 contents-xs-bold text-grayscale-black">
              나는개똥벌레
            </span>
            <span className="flex items-center contents-2xs text-grayscale-400">
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
