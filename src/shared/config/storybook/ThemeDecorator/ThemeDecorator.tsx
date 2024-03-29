import { Story } from '@storybook/react';
// eslint-disable-next-line zgibex-plugin/layers-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/Theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme} `}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
