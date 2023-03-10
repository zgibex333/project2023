import { render } from 'react-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundry';
import { StoreProvider } from 'app/providers/storeProvider';
import { App } from './app/App';
import 'app/styles/index.scss';
import 'shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
