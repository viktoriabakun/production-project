import { ICounterSchema } from 'entities/Counter';
import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';

// not required to use reselect, just an example
export const getCounterValue = createSelector(
    getCounter,
    (counter: ICounterSchema) => counter.value,
);
