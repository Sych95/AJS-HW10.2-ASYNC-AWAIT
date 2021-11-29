import GameSavingLoader from './js/GameSavingLoader';

const a = GameSavingLoader.load();
a.then((sav) => console.log(sav));
