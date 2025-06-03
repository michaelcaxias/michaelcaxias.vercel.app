import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../sections/About/components/Header';
import { MyProvider } from '../context/MyProvider';

test('theme toggle button switches darkMode in localStorage', () => {
  localStorage.setItem('darkMode', 'false');
  const { container } = render(
    <MyProvider>
      <Header />
    </MyProvider>,
  );
  const button = container.querySelector('.nav-menu button');
  const before = localStorage.getItem('darkMode');
  userEvent.click(button);
  expect(localStorage.getItem('darkMode')).not.toBe(before);
});
