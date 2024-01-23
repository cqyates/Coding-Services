import { useState } from 'react';

const Subtitle = () => {
  const phraseArray = [
    'Consultant and Educator',
    'Software Developer',
    'Javascript Teacher',
    'Debugger',
    'React Master',
    'Designer'
  ];
  const [phrase, setPhrase] = useState();
  const [position, setPosition] = useState(0);
  const cyclePhrase = () => {
    setTimeout(function () {
      setPosition(position+1)
      if(position===phraseArray.length) {
        setPosition(0)
       
      }
      setPhrase(phraseArray[position])
    }, 1000);
  };

  cyclePhrase();
  return <h3>{phrase}</h3>;
};

export default Subtitle;
