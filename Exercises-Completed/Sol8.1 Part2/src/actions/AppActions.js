import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

export class AppActions{
    static add(reactionToAdd) {
        AppDispatcher.dispatch({
            actionType: AppConstants.REACTION_ADD,
            data: reactionToAdd
        });
    }

    static remove(id) {
        AppDispatcher.dispatch({
            actionType: AppConstants.REACTION_REMOVE,
            id: id
        });
    }
}
