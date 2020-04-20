import { InventoryState, ADD_ITEM_TO_INVENTORY, REMOVE_ITEM_FROM_INVENTORY, InventoryActionTypes } from './types';

const initialState: InventoryState = {
    items: [
        {
            id: 1,
            name: 'Study'
        },
        {
            id: 2,
            name: 'Exercise'
        },
        {
            id: 3,
            name: 'Daily Chores'
        },
        {
            id: 4,
            name: 'Assignment'
        }
    ]
}

export function inventoryReducer ( state = initialState, action: InventoryActionTypes ) {
    switch ( action.type ) {
        case ADD_ITEM_TO_INVENTORY:
            return {
                ...state,
                items: [ ...state.items, action.payload ]
            }
        case REMOVE_ITEM_FROM_INVENTORY:
            return {
                ...state,
                items: state.items.filter( item => item.id !== action.payload )
            }
        default:
            return state;
    }
}