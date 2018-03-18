import { Action } from '@ngrx/store';

export function i18nReducer(state: string = i18n.message['FR'], action: Action) {
    console.log(action.type, state);

    switch (action.type) {
        case 'FR':
            return state = i18n.message['FR'];
        case 'EN':
            return state = i18n.message['EN'];
        default:
            return state;
    }
}

const i18n = {
    'title': {
        'FR': 'Accueil',
        'EN': 'Home'
    },
    'message': {
        'FR': 'Bienenue à NgRx',
        'EN': 'Welcome to NgRx'
    }
};
