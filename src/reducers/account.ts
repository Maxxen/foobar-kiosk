import * as Redux from "redux";

import { REQUEST_ACCOUNT, LOGIN_ACCOUNT, CLEAR_ACCOUNT, FAILED_ACCOUNT } from "actions/account";

export interface IState {
    id?: string;
    name?: string;
    balance?: number;
    request?: any;
    failed?: boolean;
}

interface IAction extends Redux.Action {
    data: any;
}

export function account(state: IState = {}, action: IAction) {
    switch (action.type) {
        case REQUEST_ACCOUNT:
            return Object.assign({}, state, {
                request: true
            });
        case LOGIN_ACCOUNT:
            return action.data ? action.data : {};
        case CLEAR_ACCOUNT:
            return {};
        case FAILED_ACCOUNT:
            return Object.assign({}, state, {
                failed: true
            });
        default:
            return state;
    }
}
