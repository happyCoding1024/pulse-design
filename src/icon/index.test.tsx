import React from 'react';
import { render } from '@testing-library/react';
import { Icon } from './index';

describe('Icon', () => {
  test('render Icon', () => {
    const { container } = render(<Icon />);
    const sd = 91;
    const add = () => {
      console.log(1244);
    };
  });
});
