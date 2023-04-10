import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('get counter', () => {
    test('should return the counter', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };

        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
