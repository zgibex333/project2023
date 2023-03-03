import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './CounterSlice';

describe('counterSlice.test', () => {
    test('should handle actions correctly', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decrement())).toEqual({
            value: 9,
        });
    });

    test('should handle actions correctly', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.increment())).toEqual({
            value: 11,
        });
    });

    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({
            value: 1,
        });
    });
});
