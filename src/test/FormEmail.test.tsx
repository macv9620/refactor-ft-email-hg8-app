import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import FormEmail from '../components/NewEmail/FormEmail';

describe('FormEmail', () => {
test('should update emailToSend state when input values change', () => {
    render(<FormEmail getEmail={() => {}} setAllowToSendMail={() => {}} />);

    const recipientEmailInput = screen.getByLabelText('Para') as HTMLInputElement;
    const subjectInput = screen.getByLabelText('Asunto') as HTMLInputElement;
    const bodyTextarea = screen.getByLabelText('Descripción') as HTMLInputElement;

    fireEvent.change(recipientEmailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
    fireEvent.change(bodyTextarea, { target: { value: 'Test Body' } });

    expect(recipientEmailInput.value).toBe('test@example.com');
    expect(subjectInput.value).toBe('Test Subject');
    expect(bodyTextarea.value).toBe('Test Body');
});

  test('should call getEmail and setAllowToSendMail when input values change', () => {
    const getEmailMock = vi.fn();
    const setAllowToSendMailMock = vi.fn();

    render(<FormEmail getEmail={getEmailMock} setAllowToSendMail={setAllowToSendMailMock} />);

    const recipientEmailInput = screen.getByLabelText('Para');
    const subjectInput = screen.getByLabelText('Asunto');
    const bodyTextarea = screen.getByLabelText('Descripción');

    fireEvent.change(recipientEmailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
    fireEvent.change(bodyTextarea, { target: { value: 'Test Body' } });

    expect(getEmailMock).toHaveBeenCalledWith({
      recipient_email: 'test@example.com',
      subject: 'Test Subject',
      body: 'Test Body',
      timestamp: '',
    });
    expect(setAllowToSendMailMock).toHaveBeenCalledWith(true);
  });
});