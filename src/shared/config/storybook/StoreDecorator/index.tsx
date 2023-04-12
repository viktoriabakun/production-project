import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (initState: DeepPartial<IStateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={initState}>
        <StoryComponent />
    </StoreProvider>
);
