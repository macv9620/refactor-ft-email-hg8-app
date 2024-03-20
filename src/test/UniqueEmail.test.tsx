import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import UniqueEmail from '../components/Home/UniqueEmail';

describe('UniqueEmail', () => {
    const email = {
        id: 1,
        sender: {
            name: 'John Doe',
            u_email: 'johndoe@example.com',
        },
        subject: 'Test Subject',
        body: 'Test Body',
        timestamp: '2022-01-01T12:00:00Z',
    };

    const handleEmailSelected = vi.fn();

    beforeEach(() => {
        render(
            <UniqueEmail email={{ ...email, recipient: { name: '', u_email: '' }, id: '1' }} handleEmailSelected={handleEmailSelected} />
        );
    });

    test('renders email sender name', () => {
        const senderName = screen.getByText('John Doe');
        expect(senderName).toBeInTheDocument();
    });

    test('renders email sender email', () => {
        const senderEmail = screen.getByText('johndoe@example.com');
        expect(senderEmail).toBeInTheDocument();
    });

    test('renders email subject', () => {
        const subject = screen.getByText('Test Subject');
        expect(subject).toBeInTheDocument();
    });

    test('renders email body', () => {
        const body = screen.getByText('Test Body');
        expect(body).toBeInTheDocument();
    });

    test('calls handleEmailSelected when clicked', () => {
        const emailWithRecipient = {
            ...email,
            recipient: {
                name: '',
                u_email: ''
            },
            id: '1' 
        };
        const { container } = render(<UniqueEmail email={emailWithRecipient} handleEmailSelected={handleEmailSelected} />);
        const emailContainer = container.querySelector('.h-fit.w-full');
        if (emailContainer) {
            fireEvent.click(emailContainer);
            expect(handleEmailSelected).toHaveBeenCalledWith('1'); 
        } else {
            throw new Error('Email container not found');
        }
    });

    test('renders formatted timestamp', () => {
        const timestamp = screen.getByText('2022-01-01 12:00:00');
        expect(timestamp).toBeInTheDocument();
    });
});