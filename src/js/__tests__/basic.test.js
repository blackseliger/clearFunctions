import alarmColor from '../app';

describe('alarm Color ', () => {
  test('is healthy', () => {
    const expected = 'healthy';
    const received = alarmColor({ name: 'Маг', health: 100 });
    expect(received).toBe(expected);
  });
  test('is wounded', () => {
      const expected = 'wounded';
      const received = alarmColor({ name: 'Маг', health: 90 });
    expect(received).toBe(expected);
  });
  test('is wounded', () => {
      const expected = 'wounded';
      const received = alarmColor({ name: 'Маг', health: 80 });
    expect(received).toBe(expected);
  });
  test('is wounded', () => {
      const expected = 'wounded';
      const received = alarmColor({ name: 'Маг', health: 70 });
    expect(received).toBe(expected);
  });
  test('is wounded', () => {
    const expected = 'wounded';
    const received = alarmColor({ name: 'Маг', health: 60 });
    expect(received).toBe(expected);
  });
  test('is wounded', () => {
    const expected = 'wounded';
    const received = alarmColor({ name: 'Маг', health: 50 });
    expect(received).toBe(expected);
  });
  test('is wounded', () => {
    const expected = 'wounded';
    const received = alarmColor({ name: 'Маг', health: 40 });
    expect(received).toBe(expected);
  });
  test('is wounded', () => {
    const expected = 'critical';
    const received = alarmColor({ name: 'Маг', health: 30 });
    expect(received).toBe(expected);
  });
  test('is wounded', () => {
    const expected = 'critical';
    const received = alarmColor({ name: 'Маг', health: 20 });
    expect(received).toBe(expected);
  });
  test('is wounded', () => {
    const expected = 'critical';
    const received = alarmColor({ name: 'Маг', health: 10 });
    expect(received).toBe(expected);
  });
});
