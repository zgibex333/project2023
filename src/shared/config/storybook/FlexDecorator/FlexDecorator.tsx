import { Story } from '@storybook/react';

type FlexType = 'column' | 'row';

export const FlexDecorator = (direction: FlexType) => (StoryComponent: Story) =>
    (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: direction,
            }}
        >
            <StoryComponent />
        </div>
    );
