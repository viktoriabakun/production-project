import { DeepPartial } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('get counter value', () => {
    test('should return the counter value', () => {
        const state: DeepPartial<IStateSchema> = {
            counter: { value: 10 },
        };

        expect(getCounterValue(state as IStateSchema)).toEqual(10);
    });
});
