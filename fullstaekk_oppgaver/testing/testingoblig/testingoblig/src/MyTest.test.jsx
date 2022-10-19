import { fireEvent, render, screen } from '@testing-library/react';
import { MyTest } from './MyTest';


it('should check that the text changes', () => {
    render(<MyTest />);

    const paragraph = document.querySelector('p')
    fireEvent.click(screen.getByText('Complete test'))
    expect(paragraph).toHaveTextContent('This test is currently completed')

})