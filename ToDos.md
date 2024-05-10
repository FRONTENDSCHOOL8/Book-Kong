# To-dos

## 유의 사항

- **아래 수정 요청 사항 보면 `<a>`태그로 구현한 페이지 이동 기능을 React-router의 `<Link>` 컴포넌트를 이용하여 대체 구현해달라는 요청이 있는데, 이거는 일단 문제가 있는지 없는지 확실하지가 않아져서 읽을 때 무시하고 읽어도 될 것 같음.**

## 수정 요청 사항

### 공통

- 피그마 시안에 있는 디자인 가이드 참고하여 컴포넌트 스타일 적용 시 디자인 토큰(피그마 시안에서 추출하여 tailwindCSS로 쓸 수 있게 우리 프로젝트에서 가공한 클래스들)을 사용할 수 있도록 하고, 같은 컴포넌트가 다른 곳에서 쓰일 경우 그 컴포넌트 만든 사람과 협의하여 같은 디자인 토큰을 이용할 수 있도록 하기(className을 props로 넘겨줘야 하는 경우).

- ~~코드를 이용한 페이지 이동 시 React-router에서 제공하는 기능(e.g. useNavigate, `<Link>` component)을 이용하여 페이지 이동을 하지 않은 경우(e.g. `<a>` JSX 요소를 이용하여 'href' property로 페이지 이동을 한 경우), React-router에서 제공하는 기능을 이용하여 페이지를 이동할 수 있도록 코드 변경~~

  - ~~사유: `<a>` 태그로 그냥 주소 이동하면 React-router로 라우팅이 안 됨.~~

  - ~~페이지 이동 시 `<a>` 태그와 같이 다른 페이지로 이동하는 링크를 삽입하고 싶으면 `<a>` 태그 대신에 React-router의 `<Link>` component를 사용하면 됨.~~

- TailwindCSS에서 기본적으로 제공하는 유틸리티 클래스는 반응형으로 이루어진 부분들이 있음. 우리는 반응형으로 개발하고 디자인 시스템이 갖춰져 있으니까, 가급적이면 스타일을 적용할 때는 arbitrary value (e.g. border-[1px]) 말고 기본 유틸리티 클래스를 이용하는 것이 좋을 것 같음.

  &rarr; 기존에 arbitrary value로 구현한 스타일 중에 보이는 부분이 있다면 기본 utility class로 다시 스타일 설정해주면 좋을 것 같음.

  - Figma 시안에 width 등의 수치가 'Fixed(33px)'와 같이 Fixed로 표현 되어 있는 경우는 예외로 두면 될 것 같음.

- **각 컴포넌트의 스토리들 다 만들기.**

  - **페이지 컴포넌트 포함.**

### 인원별 수정 사항

- **건**

  - _Page 단위 component들_

    - **LoginPage**

      - ~~컴포넌트 내 정의한 상태 변수들 Zustand로 재정의하기.~~

      - FormInputBox를 EmailInputBox랑 PasswordInputBox로 나누는 게 좋을 것 같음.

        - 상태 관리 관점 외

        - 저거 하려면 FormInput 컴포넌트도 EmailInput과 PasswordInput 컴포넌트로 각각 나눠야 함.

      - Input error message 뿌리는 JSX 요소들 각각 컴포넌트화 하기.

      - ~~마크업 맨 아래에 있는 회원가입이랑 비밀번호 찾기도 Link component를 이용하여 마크업 해놓기.~~

        - ~~Link 관련 내용 주소: <https://reactrouter.com/en/main/components/link>~~

    - **RegisterPage**

      - ~~컴포넌트 내 정의한 상태 변수들 Zustand로 재정의하기.~~

        - ~~재정의할 때 묶을 수 있는 변수들 객체로 묶는 방법도 고려해보면 좋을 것 같음.~~

      - 비밀번호 숨김/표시 처리하는 눈 모양 아이콘 컴포넌트로 만들어서 관리하고, 비밀번호 관련 컴포넌트들 re-rendering 시 눈 모양 컴포넌트가 같이 re-rendering 될 필요가 없다면 memoization(memo 함수로 컴포넌트 기억시켜두는 것) 해놓기.

      - ~~'로그인' `<a>` 태그로 구현한 글자는 React Router의 Link 컴포넌트를 이용하여 구현하기.~~

        - ~~그냥 `<a>` 태그로 구현하면 React Router에서 navigate(html 파일 같은 거 찾는 거)이 안 됨.~~

    - **MypagePage**

      - 컴포넌트 내 JSX 요소들 중 컴포넌트화 할 수 있는 것들은 다 컴포넌트화해서 컴포넌트들 전체적으로 정리하기.

        - Atom 단위 컴포넌트들을 묶어 molecule 단위 component로, molecule 단위 컴포넌트들 중 묶을 만한 것들은 organism 단위 component로 묶어서 코드 가독성 높이고 유지·보수 용이하게 만들기.

      - **캐릭터 CSS 등 style 무너진 부분들 전부 다 시안과 같이 styling하기.**

  - _Molecule 단위 component들_

    - **FormInputBox**

      - **FormInputBox 안에 쓰인 Label의 className 확인 필요 - 디자인 가이드에 명시된 거랑 스타일이 다른 것 같음.**

        - **같은 label 디자인 사용하는 컴포넌트 담당자와 소통하여 클래스 이름 맞추기.**

    - **Link**

      - Link component 제거하고 React Router에서 제공하는 Link component를 이용하여 마크업 구현하기.

  - _Atom 단위 component들_

    - **SignUpPrompt**

      - **안에 있는 `<h2>` 태그랑 `<div>` 태그 각각 컴포넌트로 만들고 children으로 받아서 사용할 수 있도록 만들기.**

        - **현재 상태로는 코드 작동 안 함. LoginPage랑 RegisterPage에 해당 컴포넌트 쓴 부분 보면 됨.**

        - 재원 멘토님 조언

        - **안에 있는 h2 태그 있는 요소 컴포넌트로 분리할 때 h2 말고 `<p>` 태그 같은 설명해주는 태그 넣기.**

          - **h2는 내가 A11yHidden으로 페이지 최상단에 '로그인' 글자 집어넣음. 코드 참고.**

          - **cf.) `<p>` 태그는 block element이다.**

        - **현재 있는 SignUpPrompt 내 요소들 각각 컴포넌트로 분리 완료하고 만약 두 개 하나의 컴포넌트로 묶는다고 하면, 그 묶은 컴포넌트는 로그인이나 회원가입 페이지가 다시 렌더링 되더라도 바뀔 필요가 없는 컴포넌트이니 memo 함수를 사용하여 메모 시킨 후 내보내기.**

        - **현재 있는 SignUpPrompt 안에 있는 요소들은 각각 atom 단위 컴포넌트로 분류하면 될 것 같고, 두 컴포넌트 묶은 컴포넌트는 molecule 단위 component로 분류하면 될 것 같음.**

  - _기타_

    - **prop-types 이름으로 불러온 거 (e.g. 'import { Proptypes } from 'prop-types') 파일 있는지 확인하기. 만약 있으면 prop-type 체크 제대로 되는지 확인하기. Prop-type 체크가 제대로 안 되고 있으면 불러오기 방식을 이름 없는 불러오기로 바꾸거나, 또는 안에 있는 내용들 객체 구조 분해 할당으로 받아와서 prop-type 적용 시키기.**

&nbsp;

- **주현**

  - _Atom 단위 component들_

    - **TabLink**

      - TabLink component 대신 React Router에서 제공하는 Link 컴포넌트 불러와서 그걸로 마크업 하기.

        - TabLink component 삭제하기.

        - TabLink component 쓰는 component들에서 TabLink component 대신에 React Router의 'Link' component 사용하기.

          - Link 관련 내용 주소: <https://reactrouter.com/en/main/components/link>

&nbsp;

- **삼열**

  - _Organism 단위 component들_

    - **BookSearchMain (구 'SearchMainContents')**

      - 'main' JSX 태그에 className 적용된 거 디자인 토큰(피그마 시안을 통해 정의 된 디자인 변수들)을 이용하여 구현할 수는 없는지, 확인 안 해봤으면 확인하기.

    - **List와 BookList**

      - **현재 origin-develop 버전 ~/components/organisms 폴더에 List와 BookList 폴더가 모두 존재. Contents는 똑같아 보임. 확인 후 필요 없는 거 지워서 다시 커밋하기.**

        - **`<BookSearchMain>`(구 'SearchMainContents') 컴포넌트 내에는 현재 origin-develop 버전 기준으로 `<List>`가 사용 되고 있음. 뭔가 `<BookList>`가 더 최신 버전의 책 리스트 컴포넌트인 것 같은데, 이 부분 확인하고 수정 필요하면 수정 요.**

    - **MemoCard**

      - **`<a>` 안에 `<button>` 있음. 마크업 수정 필요.**

  - _Molecule 단위 component들_

    - **Card**

      - ~~Card 내 `<a>` 태그 React-router의 `<Link>` 컴포넌트로 대체하여 구현~~

        - ~~사유: `<a>` 태그로 그냥 주소 이동하면 React-router로 라우팅이 안 됨.~~

      - **책 검색 페이지 route path를 'search' -> 'book-search'로 변경하면서 Card 컴포넌트 내에서 조건부 페이지 이동(현재 `<a>`에 href로 구현 되어 있는)할 때에도 routh path 값 변경이 필요.**

        - **이번 PR에 포함된 커밋에 해당 내용 반영해놓음. 확인 요.**

    - **CardInfo**

      - 안에 있는 JSX 마크업 중 컴포넌트 분리할 부분들 있으면 분리.

  - _Atom 단위 component들_

    - **AddBookIconButton**

      - ~~`<a>`로 구현한 링크 라우터의 `<Link>` component로 바꿔서 구현하기.~~

    - **LargeHeaderIcon**

      - ~~`<a>`로 구현한 링크 라우터의 `<Link>` component로 바꿔서 구현하기.~~

&nbsp;

- **예은**

  - _Atom 단위 component들_

    - **BookTitle**

      - **BookTitle 내 `<a>` 태그 `<span>` 태그로 변경.**

        - **사유: 링크는 BookTitle 컴포넌트가 아니라 BookBlock 컴포넌트에 걸려야 함.**

  - _Molecule 단위 component들_

    - **BookBlock**

      - ~~BookBlock의 `<li>` 안에 링크 거는 태그 넣을 때 `<a>` 태그 사용하지 말고 React-router의 `<Link>` component 사용하기.~~

        - ~~사유: `<a>` 태그로 그냥 주소 이동하면 React-router로 라우팅이 안 됨.~~

          - ~~Link 관련 내용 주소: <https://reactrouter.com/en/main/components/link>~~

      - **컴포넌트 맨 위쪽 8번 줄에 pageMap으로 BookBlock의 높이를 클래스로 만들어 전체 className에 병합을 해서 집어넣었음에도 불구하고 아래 마크업 `<li>`에 style로 height 스타일이 한번 더 적용 되게 코드가 만들어져 있음. 확인 후, 마크업 내 style property를 넣을 필요가 없다면 해당 property 빼기.**

&nbsp;

- **용범**

  - _Atom 단위 component들_

    - **ContextButton과 ContextButtonVertical**

      - **두 컴포넌트 내용이 겹치는 것 같은데, 확인 후 ContextButtonVertical 담당자와 소통해서 ContextButton 하나로 컴포넌트 합치기, 가능하면.**

        - **ContextButtonVertical 제작자: 손삼열**
