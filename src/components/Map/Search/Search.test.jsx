import { render, fireEvent } from '@testing-library/react';
import Search from './Search';

const { queryByTitle } = render(<Search />);
const input = queryByTitle('searchInput');

it('search render check', () => {
    expect(input).toBeTruthy();
});

describe('Change in input', () => {
    it('onChange', () => {
        fireEvent.change(input, { target: { value: 'London' } });
        expect(input.value).toBe("London");
    });
});
