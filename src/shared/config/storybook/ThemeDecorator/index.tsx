import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import ThemeProvider, { THEME } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: THEME) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
