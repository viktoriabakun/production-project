import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from 'shared/config/i18n/for-tests';
import { I18nextProvider } from 'react-i18next';
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export interface IComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<IStateSchema>
}

export function componentRender(component: ReactNode, options: IComponentRenderOptions = {}) {
    const { route, initialState } = options;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
}
