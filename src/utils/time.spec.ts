import { secondsToTime } from './time';

describe('time.ts', () => {
  it('Should return time to string', () => {
    const result = secondsToTime(10000);
    console.info(result);
    expect(typeof result).toBe('string')
  });
});