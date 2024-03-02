import { DisplayTodoPipe } from './display-todo.pipe';

describe('DisplayTodoPipe', () => {
  it('create an instance', () => {
    const pipe = new DisplayTodoPipe();
    expect(pipe).toBeTruthy();
  });
});
