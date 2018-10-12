import fetch from 'isomorphic-fetch';


const BASE_URL = 'http://api.reactiontracker.com/reactions';

function _jsonError(response) {
    let json = response.json();
    if (response.ok) {
        return json;
    } else {
        return json.then(err => {
            throw err;
        });
    }
}

let ApiRequests = {
    add: function (reactionToAdd, start, success, error) {
        start();
        fetch(BASE_URL, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(reactionToAdd)
        })
            .then(_jsonError)
            .then(apiData => success(apiData))
            .catch(apiError => error(apiError));
    },
    getAll: function (start, success, error) {
        start();
        fetch(BASE_URL)
            .then(_jsonError)
            .then(apiData => success(apiData))
            .catch(apiError => error(apiError));
    },
    remove: function (id, start, success, error) {
        start();
        fetch(BASE_URL + '/' + id, {
            headers: {
                'Accept': 'application/json'
            },
            method: 'delete'
        })
            .then(_jsonError)
            .then(apiData => success(apiData))
            .catch(apiError => error(apiError));
    },
    voteAnswer1: function (id, name, start, success, error) {
        start();
        fetch(BASE_URL + '/' + id + '/voteAnswer1/' + name, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post'
        })
            .then(_jsonError)
            .then(f => success())
            .catch(apiError => error(apiError.message));
    },
    voteAnswer2: function (id, name, start, success, error) {
        start();
        fetch(BASE_URL + '/' + id + '/voteAnswer2/' + name, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post'
        })
            .then(_jsonError)
            .then(f => success())
            .catch(apiError => error(apiError.message));
    }
};

export default ApiRequests;