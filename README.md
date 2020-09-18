# React Study

# Release: https://JeongSeongHun054.github.io/ReactStudy

## 2020.09.10 Start

- npm install npx -g
- npx create-create-app 만들이름명
- React 작동원리
  - public/index.html에 id가 root인 div안에서 render가 된다.
  - index.js에
  ```javascript
  ReactDOM.render(<App />, document.getElementById("root"));
  ```
  이 부분에서 id가 root인 DOM 안에 App이라는 컴포넌트를 렌더링하는 구조이다.
  - React로 만든 페이지의 소스코드를 보면 빈 어떤 코드도 찾아볼 수 없다. 왜냐하면 index.js가 기본적으로 빈 파일이기 때문에!
  - 이런한 부분 때문에 React의 속도가 빠르다. React는 소스코드에 처음부터 HTML을 넣지 않고, HTML에서 HTML을 추가하거나 제거하는 법을 알고 있다.

## 2020.09.12

- Component => HTML을 반환하는 함수
- Component를 만드는 방법

`Potato.js`

```javascript
import React from "react";

function Potato() {
  return <h3>I love potato</h3>;
}

export default Potato;
```

`App.js`

```javascript
import React from "react";
import Potato from "./Potato";

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
import React from "react";

function Food({ name }) {
  return <h1>I like Potato and {name}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      <Food name="kimchi" />
    </div>
  );
}

export default App;
```

- 동적으로 데이터를 렌더링하는 법

  - App에서 바로 렌더링하는 법

```javascript
import React from "react";

function Food({ name }) {
  return <h1>I like Potato and {name}</h1>;
}

const foodILike = [
  {
    name: "Kimchi",
    image: "https://i.ytimg.com/vi/mB8c529pd80/maxresdefault.jpg",
  },
  {
    name: "Kimbab",
    image: "https://i.ytimg.com/vi/Y-Y9CXGRJPU/maxresdefault.jpg",
  },
  {
    name: "samgyubsal",
    image: "https://i.ytimg.com/vi/IsEVv1Jt2Ro/maxresdefault.jpg",
  },
  {
    name: "woodong",
    image: "https://japan-brand.jnto.go.jp/wp-content/uploads/2014/03/80-a.jpg",
  },
  {
    name: "ramen",
    image:
      "https://pds.joins.com/news/FbMetaImage/201810/7ef439fb-8386-49e7-aae0-9473cfcb5b5c.jpg",
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
import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h1>I like Potato and {name}</h1>
      <img src={picture} alt="그림" />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://i.ytimg.com/vi/mB8c529pd80/maxresdefault.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Kimbab",
    image: "https://i.ytimg.com/vi/Y-Y9CXGRJPU/maxresdefault.jpg",
    rating: 2,
  },
  {
    id: 3,
    name: "samgyubsal",
    image: "https://i.ytimg.com/vi/IsEVv1Jt2Ro/maxresdefault.jpg",
    rating: 3,
  },
  {
    id: 4,
    name: "woodong",
    image: "https://japan-brand.jnto.go.jp/wp-content/uploads/2014/03/80-a.jpg",
    rating: 4,
  },
  {
    id: 5,
    name: "ramen",
    image:
      "https://pds.joins.com/news/FbMetaImage/201810/7ef439fb-8386-49e7-aae0-9473cfcb5b5c.jpg",
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
import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://i.ytimg.com/vi/mB8c529pd80/maxresdefault.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Kimbab",
    image: "https://i.ytimg.com/vi/Y-Y9CXGRJPU/maxresdefault.jpg",
    rating: 2,
  },
  {
    id: 3,
    name: "samgyubsal",
    image: "https://i.ytimg.com/vi/IsEVv1Jt2Ro/maxresdefault.jpg",
    rating: 3,
  },
  {
    id: 4,
    name: "woodong",
    image: "https://japan-brand.jnto.go.jp/wp-content/uploads/2014/03/80-a.jpg",
    rating: 4,
  },
  {
    id: 5,
    name: "ramen",
    image:
      "https://pds.joins.com/news/FbMetaImage/201810/7ef439fb-8386-49e7-aae0-9473cfcb5b5c.jpg",
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

## 2020.09.18

- Class Component 만드는 방법과 State 기본

```javascript
import React, { Component } from "react";
import PropTypes from "prop-types";

class App extends Component {
  state = {
    count: 0,
  };

  add = () => {
    console.log("add");
  };

  minus = () => {
    console.log("minus");
  };

  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
```

- setState를 이용한 State 값 변화

```javascript
import React, { Component } from "react";
import PropTypes from "prop-types";

class App extends Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };

  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };

  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
```

- Component Life Cycle

```javascript
import React, { Component } from "react";
import PropTypes from "prop-types";

class App extends Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };

  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };

  // Component가 마운트되고 난 후
  componentDidMount() {
    console.log("ComponentDidMount");
  }

  // Component가 업데이트되고 난 후
  conmonentDidUpdate() {
    console.log("ComponentDidUpdate");
  }

  //Component가 사라지고 난 후
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
```

- 간단한 Loading 만들기

```javascript
import React, { Component } from "react";
import PropTypes from "prop-types";

class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 4000);
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
  }
}

export default App;
```

- axios와 async & awiat 기본

```javascript
import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
```

- axios를 이용한 API Data 다루기

  `App.js`

```javascript
import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
      </div>
    );
  }
}

export default App;
```

`Movie.js`

```javascript
import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
  return <h4>{title}</h4>;
}

Movie.protoTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
```

- Text 길이 통일하기

  `Movie.js`

```javascript
import React from "react";
import PropTypes from "prop-types";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <label htmlFor=""></label>
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, i) => (
            <li key={i} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
}

Movie.protoTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
```

- github pages를 이용한 배포

  1. npm i gh-pages
  2. package.json 설정 "homepage 추가", scripts에 "deploy" 추가

  ```javascript
  {
  "name": "study",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "axios": "^0.20.0",
    "eslint-config-prettier": "^6.11.0",
    "gh-pages": "^3.1.0",
    "prop-types": "^15.7.2",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-scripts": "3.4.3"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  //"homepage": "https://{your github username}.github.io/{the name of your project in github}"
  "homepage": "https://JeongSeongHun054.github.io/ReactStudy"
  }

  ```
