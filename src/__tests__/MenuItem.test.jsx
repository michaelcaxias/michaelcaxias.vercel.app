import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import MenuItem from '../components/MenuItem';

const icon = <span data-testid="icon" />;

test('renders link when href is provided', () => {
  const { container } = render(
    <MenuItem text="Github" icon={icon} link="https://github.com" onClick={() => {}} />,
  );
  const anchor = container.querySelector('a');
  expect(anchor).toHaveAttribute('href', 'https://github.com');
});

test('calls onClick handler when clicked', async () => {
  const handleClick = jest.fn();
  const { getByRole } = render(
    <MenuItem text="Copy" icon={icon} onClick={handleClick} link="" />,
  );
  const button = getByRole('button');
  await userEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});
