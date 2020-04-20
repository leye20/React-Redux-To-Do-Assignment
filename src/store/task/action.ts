import { TaskActionTypes, ADD_ITEM_TO_TASK, REMOVE_ITEM_FROM_TASK, Item  } from './types';

export function addItemToTask ( item: Item): TaskActionTypes {
    return {
        type: ADD_ITEM_TO_TASK,
        payload: item
    }
}

export function removeItemFromTask ( id: number ): TaskActionTypes {
    return {
        type: REMOVE_ITEM_FROM_TASK,
        payload: id
    }
}