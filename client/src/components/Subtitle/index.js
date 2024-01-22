import { useState } from 'react';

const Subtitle = () => {
  const phraseArray = [
    'Software Developer',
    'MERN Stack Expert',
    'Javascript Teacher',
    'Debugger',
    'React Master',
    'Design Pro',
    ''
  ];
  const [phrase, setPhrase] = useState(phraseArray[0]);
  const [position, setPosition] = useState();
  const cyclePhrase = () => {
    setTimeout(function () {
      setPosition(Math.floor(Math.random() * phraseArray.length));
      setPhrase(phraseArray[position]);
    }, 1000);
  };

  cyclePhrase();
  return <h3>{phrase}</h3>;
};

export default Subtitle;
