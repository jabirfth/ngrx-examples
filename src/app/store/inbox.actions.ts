import { Action } from '@ngrx/store';

export const READ_ONE = '[INBOX] READ ONE';
export const READ_ALL = '[INBOX] READ ALL';
export const FETCH = '[INBOX] FETCH';


export class ReadOne implements Action {
    readonly type = READ_ONE;

    constructor(public payload: string) { }
}

export class ReadAll implements Action {
    readonly type = READ_ALL;
}

export class Fetch implements Action {
    readonly type = FETCH;
}

export type All = ReadOne | ReadAll | Fetch;
