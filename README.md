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
  - 이런한 부분 때문에 React의 속도가 빠르다. React는 소스코드에 처음부터 HTML을 넣지 않고, HTML에서 HTML을 추가하거나 제거하는 법을 알고 있다.

## 2020.09.12

- Component => HTML을 반환하는 함수
- Component를 만드는 방법

`Potato.js`

```javascript
import React from 'react';

function Potato() {
  return <h3>I love potato</h3>;
}

export default Potato;
```

`App.js`

```javascript
import React from 'react';
import Potato from './Potato';

function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      <Potato />
    </div>
  );
}

export default App;
```
