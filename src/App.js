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
