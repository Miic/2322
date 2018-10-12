import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

let _reactionsList = [
    {id: 0, question: "Which dressing is tastier?", answer1: "Ranch", answer2: "Vinaigrette", answer1Votes: ["A", "B", "C"], answer2Votes: ["X","Y"]},
    {id: 1, question: "Which has the better mane?", answer1: "Lion", answer2: "Horse", imageUrl:"/assets/lion.png", answer1Votes: ["A"], answer2Votes: ["B", "C"]},
    {id: 2, question: "Which is faster?", answer1: "Cheetah", answer2: "Car", imageUrl:"/assets/cheetah.png", answer1Votes: ["D", "E"], answer2Votes: [, "F"]},
    {id: 3, question: "Which bird has the heavier legs?", answer1: "Turkey", answer2: "Ostrich", imageUrl:"/assets/ostrich.png", answer1Votes: ["G", "H", "I", "J"], answer2Votes: []}
];

let _userName = "student!";

const CHANGE_EVENT = 'change';
let ReactionsStore = Object.assign({}, EventEmitter.prototype, {
    getAll: function () {
        return _reactionsList;
    },
    getOne: function (id) {
        return _getOne(id);
    },
    getName: function () {
      return _userName;
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

function _add(reactionToAdd) {
    _reactionsList.push(reactionToAdd);
}


function _getOne(id) {

    let index = _reactionsList.findIndex(function (item) {
        return item.id == id;
    });
    return _reactionsList[index];
}


function _remove(id) {
    let index = _reactionsList.findIndex(function (item) {
        return item.id === id;
    });
    _reactionsList.splice(index, 1);
}

function _voteAnswer1(id, name) {
    let index = _reactionsList.findIndex(function (item) {
        return item.id === id;
    });
    if (_reactionsList[index].answer1Votes.indexOf(name) < 0) {
        _reactionsList[index].answer1Votes.push(name);
    }
}

function _voteAnswer2(id, name) {
    let index = _reactionsList.findIndex(function (item) {
        return item.id === id;
    });

    if (_reactionsList[index].answer2Votes.indexOf(name) < 0) {
        _reactionsList[index].answer2Votes.push(name);
    }
}

function _setUserName(name) {
    _userName = name;
}

AppDispatcher.register(function (action) {
   switch (action.actionType) {
       case AppConstants.REACTION_ADD:
           _add(action.data);
           ReactionsStore.emitChange();
           break;
       case AppConstants.REACTION_REMOVE:
           _remove(action.id);
           ReactionsStore.emitChange();
           break;
       case AppConstants.VOTE_ANSWER1:
           _voteAnswer1(action.id, action.name);
           ReactionsStore.emitChange();
           break;
       case AppConstants.VOTE_ANSWER2:
           _voteAnswer2(action.id, action.name);
           ReactionsStore.emitChange();
           break;
       case AppConstants.SET_USERNAME:
           _setUserName(action.name);
           ReactionsStore.emitChange();
           break;
       default:
   }
});

export default ReactionsStore;