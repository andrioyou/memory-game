import { PropertyToLabelPipe } from './property-to-label.pipe';

describe('PropertyToLabelPipe', () => {
  it('create an instance', () => {
    const pipe = new PropertyToLabelPipe();
    expect(pipe).toBeTruthy();
  });
});
