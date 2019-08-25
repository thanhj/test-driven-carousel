import React from 'react';

const referralParams = 'utm_source=test-driven-carousel&utm_medium=referral';

const getUsernameUrl = username =>
  `https://unsplash.com/@${username}?${referralParams}`;

const getAttribution = ({ name, username }) => (
  <>
    Photo by <a href={getUsernameUrl(username)}>{name}</a> on{' '}
    <a href={`https://unsplash.com/?${referralParams}`}>Unsplash</a>
  </>
);

// Improve: Use unsplash API to auto generate list of imgUrl
export default [
  {
    description: 'Seattle',
    attribution: getAttribution({
      name: 'Ganapathy Kumar',
      username: 'gkumar2175',
    }),
    imgUrl:
      'https://images.unsplash.com/photo-1566590550646-fd9feb942d49?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=1084',
  },
  {
    description: 'Chicago',
    attribution: getAttribution({
      name: 'Austin Neill',
      username: 'arstyy',
    }),
    imgUrl:
      'https://images.unsplash.com/photo-1564657536900-e6118c5e25f0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=1084',
  },
  {
    description: 'Barcelona',
    attribution: getAttribution({
      name: 'Enes',
      username: 'royalfound',
    }),
    imgUrl:
      'https://images.unsplash.com/photo-1564586302016-48ce89f1d350?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=1084',
  },
  {
    description: 'New York',
    attribution: getAttribution({
      name: 'Anthony DELANOIX',
      username: 'anthonydelanoix',
    }),
    imgUrl:
      'https://images.unsplash.com/photo-1566632210731-fe314e49a75f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=1084',
  },
  {
    description: 'Rio de Janeiro',
    attribution: getAttribution({
      name: 'Agustín Diaz',
      username: 'agussdiaz28',
    }),
    imgUrl:
      'https://images.unsplash.com/photo-1565504052809-fd18286e5ed8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=1084',
  },
];
