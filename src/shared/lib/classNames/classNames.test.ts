import { classNames } from './classNames';

describe('classNames', () => {
    test('with one class', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional classes', () => {
        const expected = 'someClass additional1 additional2';
        expect(
            classNames('someClass', {}, ['additional1', 'additional2']),
        ).toBe(expected);
    });
    test('with mods', () => {
        const expected = 'someClass additional1 additional2 hovered scrollable';
        expect(
            classNames('someClass', { hovered: true, scrollable: true }, [
                'additional1',
                'additional2',
            ]),
        ).toBe(expected);
    });
    test('with some mods false', () => {
        const expected = 'someClass additional1 additional2 hovered';
        expect(
            classNames('someClass', { hovered: true, scrollable: false }, [
                'additional1',
                'additional2',
            ]),
        ).toBe(expected);
    });
    test('with mods undefined', () => {
        const expected = 'someClass additional1 additional2 hovered';
        expect(
            classNames('someClass', { hovered: true, scrollable: undefined }, [
                'additional1',
                'additional2',
            ]),
        ).toBe(expected);
    });
});
