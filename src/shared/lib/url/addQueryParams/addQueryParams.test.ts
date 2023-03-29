import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
    test('test with one params', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });
    test('test with multiple params', () => {
        const params = getQueryParams({
            test: 'value',
            search: '123',
        });
        expect(params).toBe('?test=value&search=123');
    });
    test('test with undefined', () => {
        const params = getQueryParams({
            test: undefined,
        });
        expect(params).toBe('?');
    });
});
