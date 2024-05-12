import BookInfoList from './BookInfoList';

const metaConfig = {
  title: 'components/BookInfoList',
  component: BookInfoList,
  tags: ['autodocs'],
  args: {
    data: {
      adult: false,
      author: '안소영 (지은이)',
      categoryId: 48876,
      categoryName: '국내도서>어린이>동화/명작/고전>어린이를 위한 고전',
      cover:
        'https://image.aladin.co.kr/product/59/42/cover200/8943305842_2.jpg',
      customerReviewRank: 9,
      description:
        '간서치, 책만 보는 바보라 불리웠던 조선시대 선비 이덕무와 그의 벗들에 대한 이야기를 담았다. 지은이는 이덕무가 쓴 짧은 자서전 <간서치전>을 접한 후, 그 관심이 이덕무와 친하게 지낸 인물들과 시대에까지 이어져 이 책을 쓰게 되었다고.',
      fixedPrice: true,
      isbn: '8943305842',
      isbn13: '9788943305840',
      itemId: 594224,
      link: 'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=594224&amp;partner=openAPI&amp;start=api',
      mallType: 'BOOK',
      mileage: 900,
      priceSales: 16200,
      priceStandard: 18000,
      pubDate: '2005-11-04',
      publisher: '보림',
      salesPoint: 28540,
      seriesInfo: {
        seriesId: 4057,
        seriesLink:
          'http://www.aladin.co.kr/shop/common/wseriesitem.aspx?SRID=4057&amp;partner=openAPI',
        seriesName: '진경문고 6',
      },
      stockStatus: '',
      subInfo: {
        itemPage: 288,
        originalTitle: '',
        subTitle: '',
      },
      title: '책만 보는 바보',
    },
  },
};

export default metaConfig;

export const Base = {
  args: {},
};
Base.storyName = 'BookInfoList';
