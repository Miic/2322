import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

let _reactionsList = [
    {id: 0, question: "Which dressing is tastier?", answer1: "Ranch", answer2: "Vinaigrette"},
    {id: 1, question: "Which has the better mane?", answer1: "Lion", answer2: "Horse", imageUrl:"/assets/lion.png"},
    {id: 2, question: "Which is faster?", answer1: "Cheetah", answer2: "Car", imageUrl:"/assets/cheetah.png"},
    {id: 3, question: "Which bird has the heavier legs?", answer1: "Turkey", answer2: "Ostrich", imageUrl:"/assets/ostrich.png"}
];

const CHANGE_EVENT = 'change';
let ReactionsStore = Object.assign({}, EventEmitter.prototype, {
    getAll: function () {
        return _reactionsList;
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

function _remove(id) {
    let index = _reactionsList.findIndex(function (item) {
        return item.id === id;
    });
    _reactionsList.splice(index, 1);
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
       default:

   }
});

export default ReactionsStore;