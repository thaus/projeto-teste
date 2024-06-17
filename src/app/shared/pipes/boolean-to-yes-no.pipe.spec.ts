import { BooleanToYesNoPipe } from './boolean-to-yes-no.pipe';

describe('BooleanToYesNoPipe', () => {
  let pipe: BooleanToYesNoPipe;

  beforeEach(() => {
    pipe = new BooleanToYesNoPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform true to "Yes"', () => {
    expect(pipe.transform(true)).toBe('Yes');
  });

  it('should transform false to "No"', () => {
    expect(pipe.transform(false)).toBe('No');
  });

  it('should transform null to "No"', () => {
    expect(pipe.transform(null as any)).toBe('No');
  });

  it('should transform undefined to "No"', () => {
    expect(pipe.transform(undefined as any)).toBe('No');
  });
});
