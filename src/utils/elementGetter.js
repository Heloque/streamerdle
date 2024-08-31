import data from '../data.json';

function hashDate(date, plafond) {
  let [annee, mois, jour] = date.split('-').map(Number);

  let valeurBase = annee * 10000 + mois * 100 + jour;

  function mix(x) {
      x = ((x >>> 16) ^ x) * 0x45d9f3b;
      x = ((x >>> 16) ^ x) * 0x45d9f3b; 
      x = (x >>> 16) ^ x;
      return x;
  }

  let hash = mix(valeurBase);

  let perturbation = (annee * 31 + mois * 59 + jour * 97) % plafond;
  hash = (hash + perturbation) % plafond;

  let nonLinearAdjustment = Math.floor((Math.sin(annee) * Math.cos(mois) * Math.tan(jour) * 1000) % plafond);
  hash = (hash + nonLinearAdjustment) % plafond;

  if (hash < 0) {
      hash += plafond;
  }

  let uniformHash = (hash + (hash >>> 3) ^ (hash >>> 5)) % plafond;
  if (uniformHash < 0) {
      uniformHash += plafond;
  }

  return Math.floor(uniformHash);
};

export const getDailyElement = () => {
  const today = new Date();
  const todayFrance = new Date(today.getTime()).toISOString().split('T')[0];
  const storedDate = localStorage.getItem('date');

  if (storedDate !== todayFrance) {
    localStorage.clear();
    localStorage.setItem('date', todayFrance);
  }
  return hashDate(todayFrance, data.length);
};

export const getRandomElement = () => {
  return Math.floor(Math.random() * (data.length + 1));
};


