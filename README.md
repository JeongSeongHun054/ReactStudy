# React Study

## 2020.09.10 Start

- npm install npx -g
- npx create-create-app 만들이름명
- React 작동원리
  - public/index.html에 id가 root인 div안에서 render가 된다.
  - index.js에
  ```javascript
  ReactDOM.render(<App />, document.getElementById('root'));
  ```
  이 부분에서 id가 root인 DOM 안에 App이라는 컴포넌트를 렌더링하는 구조이다.
- React로 만든 페이지의 소스코드를 보면 빈 어떤 코드도 찾아볼 수 없다. 왜냐하면 index.js가 기본적으로 빈 파일이기 때문에!
