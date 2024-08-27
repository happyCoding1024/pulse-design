import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Icon } from './index';

describe('Icon', () => {
  test('render Icon', () => {
    const { container } = render(<Icon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  test('custom className', () => {
    const { container } = render(<Icon className='custom'></Icon>);
    expect(container.querySelector('.custom')).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();

    const { container } = render(<Icon onClick={onClick}></Icon>);

    const linkElement = container.querySelector('svg') as Element ;
    fireEvent.click(linkElement);

    expect(onClick).toBeCalled();
  });
});
