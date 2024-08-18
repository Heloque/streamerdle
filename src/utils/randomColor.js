import data from '../data.json';

const getRandomElement = (array) => {
  const currentIndex = localStorage.getItem('dailyElement')
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * array.length);
  } while (randomIndex === currentIndex)
  return randomIndex;
};

const getDailyElement = () => {
  const today = new Date();
  const todayFrance = new Date(today.getTime()).toISOString().split('T')[0];
  const storedDate = localStorage.getItem('date');
  const storedElement = localStorage.getItem('dailyElement');

  if (storedDate === todayFrance && storedElement) {
    return storedElement;
  } else {
    const newElement = getRandomElement(data);
    localStorage.clear();
    localStorage.setItem('dailyElement', newElement);
    localStorage.setItem('date', todayFrance);
    return newElement;
  }
};

export default getDailyElement;
