import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import EmailType from '../types/EmailType';
import ListEmail from '../components/Home/ListEmail';

describe('ListEmail', () => {
    test('renders spinner when emails array is empty', () => {
        const emails: EmailType[] = [];
        render(<ListEmail emails={emails} handleEmailSelected={() => {}} />);
        
        const spinnerElement = screen.getByLabelText('Loading');
        expect(spinnerElement).toBeInTheDocument();
        
        const noEmailsText = screen.getByText('No se encontraron correos');
        expect(noEmailsText).toBeInTheDocument();
    });
    
    test('renders list of emails when emails array is not empty', () => {
        const emails: EmailType[] = [
            { id: '1', subject: 'Email 1', body: 'This is email 1', sender: { name: '', u_email: '' }, recipient: { name: '', u_email: '' }, timestamp: '' },
            { id: '2', subject: 'Email 2', body: 'This is email 2', sender: { name: '', u_email: '' }, recipient: { name: '', u_email: '' }, timestamp: '' },
        ];
        render(<ListEmail emails={emails} handleEmailSelected={() => {}} />);
        
        const emailElements = screen.getAllByText(/Email \d/);
        expect(emailElements.length).toBe(emails.length);
    });
});