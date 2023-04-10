import { DeepPartial } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('get counter', () => {
    test('should return the counter', () => {
        const state: DeepPartial<IStateSchema> = {
            counter: { value: 10 },
        };

        expect(getCounter(state as IStateSchema)).toEqual({ value: 10 });
    });
});
