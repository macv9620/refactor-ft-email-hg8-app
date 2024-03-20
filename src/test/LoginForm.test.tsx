import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import LoginForm from '../components/LoginForm';

describe('LoginForm', () => {
    test('should render login form correctly', () => {
        render(
            <Router>
                <LoginForm />
            </Router>
        );

        // Assert that the form elements are rendered correctly
        expect(screen.getByLabelText('Correo electrónico:')).toBeInTheDocument();
        expect(screen.getByLabelText('Contraseña:')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Ingresar' })).toBeInTheDocument();
        expect(screen.getByText('¿Aún no estás registrado?')).toBeInTheDocument();
    });

    test('should update form data on input change', () => {
        render(
            <Router>
                <LoginForm />
            </Router>
        );

        // Simulate user input
        fireEvent.change(screen.getByLabelText('Correo electrónico:'), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText('Contraseña:'), { target: { value: 'password123' } });

        // Assert that the form data is updated correctly
        expect(screen.getByLabelText('Correo electrónico:')).toHaveValue('test@example.com');
        expect(screen.getByLabelText('Contraseña:')).toHaveValue('password123');
    });

    test('should submit form data on button click', () => {
        render(
            <Router>
                <LoginForm />
            </Router>
        );

        // Simulate user input
        fireEvent.change(screen.getByLabelText('Correo electrónico:'), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText('Contraseña:'), { target: { value: 'password123' } });

        // Simulate form submission
        fireEvent.click(screen.getByRole('button', { name: 'Ingresar' }));

    });
});