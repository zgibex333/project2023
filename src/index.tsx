import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundry';
import { StoreProvider } from 'app/providers/storeProvider';
import { App } from './app/App';
import 'app/styles/index.scss';
import 'shared/config/i18n/i18n';

const container = document.getElementById('root');
if (!container) {
    throw new Error('Root is undefined. Unable to mount the app');
}

const root = createRoot(container);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
