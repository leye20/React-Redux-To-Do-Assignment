export interface Item {
    id: number,
    name: string
}

export interface InventoryState {
    items: Item[] // this allows and holds multiple items added to the list.
}

export const ADD_ITEM_TO_INVENTORY = 'ADD_ITEM_TO_INVENTORY';
export const REMOVE_ITEM_FROM_INVENTORY = 'REMOVE_ITEM_FROM_INVENTORY';

interface AddItemToInventory {
    type: typeof ADD_ITEM_TO_INVENTORY,
    payload: Item
}

interface RemoveItemFromInventory {
    type: typeof REMOVE_ITEM_FROM_INVENTORY,
    payload: number
}

export type InventoryActionTypes = AddItemToInventory | RemoveItemFromInventory;