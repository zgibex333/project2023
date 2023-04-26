import { render, screen } from '@testing-library/react';
import Button, { ButtonTheme } from './Button';

describe('Button', () => {
    test('Renders', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('Renders with Theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
