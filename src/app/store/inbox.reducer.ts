import { Action, ActionReducer, createSelector, createFeatureSelector } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import * as inboxActions from './inbox.actions';

const INBOX = {
    threads: [
        { id: '1', messages: ['', ''], unread: 2 },
        { id: '2', messages: ['', '', '', '', ''], unread: 5 },
        { id: '3', messages: ['', '', ''], unread: 3 },
    ],
    unread: 10
};

export interface InboxState {
    threads: any[];
    unread: number;
}

// Default Inbox state
const DEFAULT_INBOX_STATE: InboxState = {
    threads: [],
    unread: 0
};

// Helper function to create new state object
const newState = (state: InboxState) => {
    return Object.assign({}, state);
};


// Action Handlers
const handleReadOne = (state: InboxState, threadId: string) => {
    const updatedState = newState(state);
    const threadUnread = updatedState.threads.find(thread => thread.id === threadId).unread;
    updatedState.threads.find(thread => thread.id === threadId).unread = 0;
    updatedState.unread -= threadUnread;
    return updatedState;
};

const handleReadAll = (state: InboxState) => {
    const updatedState = newState(state);
    updatedState.threads.forEach(thread => thread.unread = 0);
    updatedState.unread = 0;
    return updatedState;
};

const handleFetch = (state: InboxState) => {
    const updatedState = newState(state);
    updatedState.threads = INBOX.threads;
    updatedState.unread = INBOX.unread;
    return updatedState;
};

// Reducer function
export function inboxReducer(state: InboxState = DEFAULT_INBOX_STATE, action: inboxActions.All) {
    console.log(action.type, state);

    switch (action.type) {
        case inboxActions.READ_ONE:
            return handleReadOne(state, action.payload);
        case inboxActions.READ_ALL:
            return handleReadAll(state);
        case inboxActions.FETCH:
            return handleFetch(state);
        default:
            return state;
    }
}

export const getInboxState = createFeatureSelector<InboxState>('inbox');

export const getThreads = createSelector(getInboxState, (state: InboxState) => state.threads);
export const getUnread = createSelector(getInboxState, (state: InboxState) => state.unread);
