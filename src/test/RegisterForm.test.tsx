import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { AxiosRequestHeaders, AxiosResponse } from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import { toast } from 'react-toastify';
import { describe, expect, test, vi } from 'vitest';
import signService from '../services/signService';
import RegisterForm from '../components/RegisterForm';


describe('RegisterForm', () => {
    test('renders form inputs', () => {
        render(
            <Router>
                <RegisterForm />
            </Router>
        );

        expect(screen.getByLabelText('Nombre:')).toBeInTheDocument();
        expect(screen.getByLabelText('Email:')).toBeInTheDocument();
        expect(screen.getByLabelText('Contraseña:')).toBeInTheDocument();
        expect(screen.getByLabelText('Confirmar Contraseña:')).toBeInTheDocument();
    });

    test('updates form data on input change', () => {
        render(
            <Router>
                <RegisterForm />
            </Router>
        );

        const nameInput = screen.getByLabelText('Nombre:') as HTMLInputElement;
        const emailInput = screen.getByLabelText('Email:') as HTMLInputElement;
        const passwordInput = screen.getByLabelText('Contraseña:') as HTMLInputElement;
        const confirmPasswordInput = screen.getByLabelText('Confirmar Contraseña:') as HTMLInputElement;

        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });

        expect(nameInput.value).toBe('John Doe');
        expect(emailInput.value).toBe('john.doe@example.com');
        expect(passwordInput.value).toBe('password123');
        expect(confirmPasswordInput.value).toBe('password123');
    });

    test('registers a new user', async () => {
        const successSpy = vi.spyOn(toast, 'success');
        const errorSpy = vi.spyOn(toast, 'error');
        const successMessage = 'Usuario registrado correctamente, ahora inicia sesión';
        const responseData = { message: successMessage };
        const response: AxiosResponse = {
            data: responseData,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: { headers: {} as AxiosRequestHeaders },
        };

        const registerSpy = vi.spyOn(signService, 'register').mockResolvedValue(response);

        const { getByLabelText, getByRole, container: testContainer } = render(
            <Router>
                <RegisterForm />
            </Router>
        );

        fireEvent.change(getByLabelText(/nombre:/i), {
            target: { value: 'John Doe' },
        });
        fireEvent.change(getByLabelText(/email:/i), {
            target: { value: 'john.doe@example.com' },
        });
        const inputFields = testContainer.querySelectorAll('input');
        fireEvent.change(inputFields[2], {
            target: { value: 'password' },
        });
        fireEvent.change(inputFields[3], {
            target: { value: 'password' },
        });

        fireEvent.submit(getByRole('button', { name: /registrarse/i }));

        await waitFor(() => {
            expect(registerSpy).toHaveBeenCalledWith({
                name: 'John Doe',
                u_email: 'john.doe@example.com',
                password: 'password',
            });
            expect(successSpy).toHaveBeenCalledWith('Usuario registrado correctamente, ahora inicia sesión');
            expect(errorSpy).not.toHaveBeenCalled();
        });
    });

});