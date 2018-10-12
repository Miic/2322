import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import fetch from 'isomorphic-fetch';

let AppActions = {
    add: function (reactionToAdd) {
        AppDispatcher.dispatch({
            actionType: AppConstants.API_ADD_START
        });

        fetch('http://api.reactiontracker.com/reactions', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(reactionToAdd)
        }).then(function (response) {
            return response.json();
        }).then(function (apiData) {
            AppDispatcher.dispatch({
                actionType: AppConstants.API_ADD_SUCCESS,
                data: apiData
            });
        })

    },
    remove: function (id) {
        AppDispatcher.dispatch({
            actionType: AppConstants.REACTION_REMOVE,
            id: id
        });
    },
    voteAnswer1: function (id, name) {
        AppDispatcher.dispatch({
            actionType: AppConstants.VOTE_ANSWER1,
            id: id,
            name: name
        });
    },
    voteAnswer2: function (id, name) {
        AppDispatcher.dispatch({
            actionType: AppConstants.VOTE_ANSWER2,
            id: id,
            name: name
        });
    },
    setUsername: function (name) {
        AppDispatcher.dispatch({
            actionType: AppConstants.SET_USERNAME,
            name: name
        });
    },
    apiGetAll: function () {
        AppDispatcher.dispatch({
            actionType: AppConstants.API_GETALL_START
        });
        fetch('http://api.reactiontracker.com/reactions').then(function (response) {
            if (!response.ok) {
                throw new Error(response);
            } else {
                return response.json();
            }
        }).then(function (apiData) {
            AppDispatcher.dispatch({
                actionType: AppConstants.API_GETALL_SUCCESS,
                data: apiData
            });
        }).catch(function (error) {
            AppDispatcher.dispatch({
                actionType: AppConstants.API_GETALL_ERROR,
                error: error
            });
        });
    }
}

export default AppActions;