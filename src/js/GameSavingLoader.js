import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const result = await json(data).then((saving) => saving);
      const saving = new GameSaving(result);
      return saving;
    } catch (e) {
      console.log(e);
    }
  }
}
