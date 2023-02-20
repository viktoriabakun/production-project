import classNames from '.';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames(
            'someClass',
        ))
            .toBe('someClass');
    });

    test('with additional class', () => {
        expect(classNames(
            'cat',
            {},
            ['meow', 'meow-meow'],
        ))
            .toBe('cat meow meow-meow');
    });

    test('with mods', () => {
        expect(classNames(
            'cat',
            { hovered: true, scrollable: true },
            ['meow', 'meow-meow'],
        ))
            .toBe('cat meow meow-meow hovered scrollable');
    });

    test('with mods: true/false', () => {
        expect(classNames(
            'cat',
            { hovered: false, scrollable: true },
            ['meow', 'meow-meow'],
        ))
            .toBe('cat meow meow-meow scrollable');
    });
});
