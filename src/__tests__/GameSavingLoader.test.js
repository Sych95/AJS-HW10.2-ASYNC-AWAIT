import GameSaving from '../js/GameSaving';
import GameSavingLoader from '../js/GameSavingLoader';

test('Testing GameSavingLoader', async () => {
  const expected = new GameSaving('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
  const result = await GameSavingLoader.load().then((savingData) => savingData);
  expect(result).toEqual(expected);
});
