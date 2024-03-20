import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import ViewEmail from '../components/Home/ViewEmail';

describe('ViewEmail', () => {
    test('renders loading spinner when emailSelected is falsy', () => {
        render(<ViewEmail emailSelected={null} />);

        const spinner = screen.getByLabelText('Loading');
        expect(spinner).to.exist;

        const message = screen.getByText('Selecciona un correo');
        expect(message).to.exist;
    });

    test('renders email details when emailSelected is truthy', () => {
        const emailSelected = {
            id: '1',
            subject: 'Test Subject',
            sender: { name: '', u_email: 'test@example.com' },
            recipient: { name: 'John Doe', u_email: '' }, 
            timestamp: '2022-01-01T12:00:00Z',
            body: 'Test email body',
        };

        render(<ViewEmail emailSelected={emailSelected} />);

        const subject = screen.getByText('Test Subject');
        expect(subject).toBeInTheDocument();

        const sender = screen.getByText('Enviado por:');
        expect(sender).toBeInTheDocument();

        const recipient = screen.getByText('Para:');
        expect(recipient).toBeInTheDocument();

        const timestamp = screen.getByText('2022-01-01 12:00:00');
        expect(timestamp).toBeInTheDocument();

        const body = screen.getByText('Test email body');
        expect(body).toBeInTheDocument();
    });
});