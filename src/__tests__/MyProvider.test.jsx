import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MyProvider, MyContext } from '../context/MyProvider';

function Display() {
  const { darkMode } = useContext(MyContext);
  return <span>{darkMode ? 'dark' : 'light'}</span>;
}

test('initial darkMode state reads from localStorage', () => {
  localStorage.setItem('darkMode', 'false');
  const { getByText } = render(
    <MyProvider>
      <Display />
    </MyProvider>,
  );
  expect(getByText('light')).toBeInTheDocument();
});
