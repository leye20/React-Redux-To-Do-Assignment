import { combineReducers, createStore } from 'redux';
import { inventoryReducer } from './inventory/reducer';

const rootReducer = combineReducers( {
    inventory: inventoryReducer
} );

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const store = createStore( rootReducer );
    return store;
}