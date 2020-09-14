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

## 2020.09.14

- props(비구조할당) => 컴포넌트에 들어가는 속성

```javascript
import React from 'react';

function Food({ name }) {
  return <h1>I like Potato and {name}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      <Food name='kimchi' />
    </div>
  );
}

export default App;
```

- 동적으로 데이터를 렌더링하는 법

  - App에서 바로 렌더링하는 법

```javascript
import React from 'react';

function Food({ name }) {
  return <h1>I like Potato and {name}</h1>;
}

const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://i.ytimg.com/vi/mB8c529pd80/maxresdefault.jpg',
  },
  {
    name: 'Kimbab',
    image: 'https://i.ytimg.com/vi/Y-Y9CXGRJPU/maxresdefault.jpg',
  },
  {
    name: 'samgyubsal',
    image: 'https://i.ytimg.com/vi/IsEVv1Jt2Ro/maxresdefault.jpg',
  },
  {
    name: 'woodong',
    image: 'https://japan-brand.jnto.go.jp/wp-content/uploads/2014/03/80-a.jpg',
  },
  {
    name: 'ramen',
    image:
      'https://pds.joins.com/news/FbMetaImage/201810/7ef439fb-8386-49e7-aae0-9473cfcb5b5c.jpg',
  },
];

function App() {
  return (
    <div>
      {foodILike.map((food) => (
        <Food name={food.name} />
      ))}
    </div>
  );
}

export default App;
```

- 따로 function을 만들어서 하는 방법

```javascript
import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h1>I like Potato and {name}</h1>
      <img src={picture} alt='그림' />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://i.ytimg.com/vi/mB8c529pd80/maxresdefault.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Kimbab',
    image: 'https://i.ytimg.com/vi/Y-Y9CXGRJPU/maxresdefault.jpg',
    rating: 2,
  },
  {
    id: 3,
    name: 'samgyubsal',
    image: 'https://i.ytimg.com/vi/IsEVv1Jt2Ro/maxresdefault.jpg',
    rating: 3,
  },
  {
    id: 4,
    name: 'woodong',
    image: 'https://japan-brand.jnto.go.jp/wp-content/uploads/2014/03/80-a.jpg',
    rating: 4,
  },
  {
    id: 5,
    name: 'ramen',
    image:
      'https://pds.joins.com/news/FbMetaImage/201810/7ef439fb-8386-49e7-aae0-9473cfcb5b5c.jpg',
    rating: 1,
  },
];

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}

function App() {
  return <div>{foodILike.map(renderFood)}</div>;
}

export default App;
```

- prop-types(npm install prop-types) => 해당 props가 올바른지 확인하는 것!

```javascript
import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://i.ytimg.com/vi/mB8c529pd80/maxresdefault.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Kimbab',
    image: 'https://i.ytimg.com/vi/Y-Y9CXGRJPU/maxresdefault.jpg',
    rating: 2,
  },
  {
    id: 3,
    name: 'samgyubsal',
    image: 'https://i.ytimg.com/vi/IsEVv1Jt2Ro/maxresdefault.jpg',
    rating: 3,
  },
  {
    id: 4,
    name: 'woodong',
    image: 'https://japan-brand.jnto.go.jp/wp-content/uploads/2014/03/80-a.jpg',
    rating: 4,
  },
  {
    id: 5,
    name: 'ramen',
    image:
      'https://pds.joins.com/news/FbMetaImage/201810/7ef439fb-8386-49e7-aae0-9473cfcb5b5c.jpg',
    rating: 1,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like Potato and {name}</h1>
      <h4>{rating}/5</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foodILike.map((food) => (
        <Food
          key={food.id}
          name={food.name}
          picture={food.image}
          rating={food.rating}
        />
      ))}
    </div>
  );
}

export default App;
```
