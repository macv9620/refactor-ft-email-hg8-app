import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import Home from '../pages/Home';

vi.mock('../context/StateContext', () => ({
  useStateProvider: () => ({ dispatch: vi.fn() })
}));
vi.mock('../services/emailService', () => ({
  getEmails: vi.fn()
}));
let navigateMock = vi.fn();
vi.mock('react-router', () => {
  return { useNavigate: () => navigateMock };
});
vi.mock('react-toastify', () => ({
  toast: vi.fn()
}));

test('should render the Home component', () => {
  render(<Home />);
  const homeElement = screen.getByText('App Messages');
  expect(homeElement).not.equal(null);
});

test('should call logout function when clicked', () => {
  render(<Home />);
  const logoutButton = screen.getByText('Cerrar Sesión');
  fireEvent.click(logoutButton);
  expect(navigateMock).toHaveBeenCalled();
});

describe('Home component', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('should display user name and email from local storage', async () => {
    // Configura los valores en el almacenamiento local
    global.localStorage.setItem('userName', 'John Doe');
    global.localStorage.setItem('email', 'john.doe@example.com');
  
    render(<Home />);
    const welcomeElement = await screen.findByText('Welcome: John Doe');
    const userEmailElement = await screen.findByText('john.doe@example.com');
    expect(welcomeElement).not.toBe(null);
    expect(userEmailElement).not.toBe(null);
  });

});