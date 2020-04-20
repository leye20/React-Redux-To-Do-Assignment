export interface Item {
    id: number,
    name: string
}

export interface TaskState {
    items: Item[] // this allows and holds multiple items added to the list.
}

export const ADD_ITEM_TO_TASK = 'ADD_ITEM_TO_TASK';
export const REMOVE_ITEM_FROM_TASK = 'REMOVE_ITEM_FROM_TASK';

interface AddItemToTask {
    type: typeof ADD_ITEM_TO_TASK,
    payload: Item
}

interface RemoveItemFromTask {
    type: typeof REMOVE_ITEM_FROM_TASK,
    payload: number
}

export type TaskActionTypes = AddItemToTask | RemoveItemFromTask;