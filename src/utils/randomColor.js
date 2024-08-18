import data from '../data.json';

const getRandomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const getDailyElement = () => {
  const today = new Date().toISOString().split('T')[0];
  const storedDate = localStorage.getItem('date');
  const storedElement = JSON.parse(localStorage.getItem('dailyElement'));

  if (storedDate === today && storedElement) {
    return storedElement;
  } else {
    const newElement = getRandomElement(data);
    localStorage.setItem('dailyElement', JSON.stringify(newElement));
    localStorage.setItem('date', today);
    return newElement;
  }
};

export default getDailyElement;
