import { TaskState, ADD_ITEM_TO_TASK, REMOVE_ITEM_FROM_TASK, TaskActionTypes } from './types';

const initialState: TaskState = {
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

export function taskReducer ( state = initialState, action: TaskActionTypes ) {
    switch ( action.type ) {
        case ADD_ITEM_TO_TASK:
            return {
                ...state,
                items: [ ...state.items, action.payload ]
            }
        case REMOVE_ITEM_FROM_TASK:
            return {
                ...state,
                items: state.items.filter( item => item.id !== action.payload )
            }
        default:
            return state;
            // throw new Error ( 'you are out of task! thank you...');  | expected error display not working. 
    }
}