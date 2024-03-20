import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import ModalEmail from '../components/NewEmail/ModalEmail';

describe('ModalEmail', () => {
    beforeEach(() => {
        render(<ModalEmail />);
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    test('should open modal when button is clicked', () => {
        const button = screen.getByText('Nuevo Correo');
        fireEvent.click(button);

        const modal = screen.getByRole('dialog');
        expect(modal).toBeInTheDocument();
    });

    test('should close modal when discard button is clicked', async () => {
        const button = screen.getByText('Nuevo Correo');
        fireEvent.click(button);

        const discardButton = screen.getByText('Descartar');
        fireEvent.click(discardButton);

        await waitFor(() => {
            const modal = screen.queryByRole('dialog');
            expect(modal).not.toBeInTheDocument();
        });

    });

});
