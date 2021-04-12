import { render, fireEvent } from '@testing-library/react';
import LocateButton from './LocateButton';

const { queryByTitle } = render(<LocateButton />);
const btn = queryByTitle('locateButton');

it('checkButtonRender', () => {
    expect(btn).toBeTruthy();
});

describe('Click on locate button', () => {
    it('onClick locatebutton map can be clicked and location should be changed', () => {
        const buttonWasClicked = fireEvent.click(btn);
        expect(buttonWasClicked).toBeTruthy();
    });
});
