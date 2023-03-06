import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('Button', () => {
    test('Button rendered', () => {
        render(<Button>test-button</Button>);
        expect(screen.getByText('test-button')).toBeInTheDocument();
    });

    test('Button has a class "clear"', () => {
        render(<Button>test-button</Button>);
        expect(screen.getByText('test-button')).toHaveClass('clear');
        screen.debug();
    });
});
