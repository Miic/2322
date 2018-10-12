import fetch from 'isomorphic-fetch';

function _jsonWithError(response) {
    let json = response.json();
    if (response.ok) {
        return json;
    } else {
        return json.then(err => {
            throw err;
        });
    }
}

function _apiPost(url, data) {
    return fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(data)
    })
};

let ApiRequests = {
    add: function (reactionToAdd, start, success, error) {
        start();
        _apiPost('http://api.reactiontracker.com/reactions', reactionToAdd)
            .then(_jsonWithError)
            .then(apiData => success(apiData))
            .catch(apiError => error(apiError));
    },
    getAll: function (start, success, error) {
        start();
        fetch('http://api.reactiontracker.com/reactions')
            .then(_jsonWithError)
            .then(apiData => success(apiData))
            .catch(apiError => error(apiError));
    },
    remove: function (id, start, success, error) {
        start();
        fetch('http://api.reactiontracker.com/reactions/' + id, {
            headers: {
                'Accept': 'application/json'
            },
            method: 'delete'
        })
            .then(_jsonWithError)
            .then(apiData => success(apiData))
            .catch(apiError => error(apiError));
    },
    voteAnswer1: function (id, name, start, success, error) {
        start();
        _apiPost('http://api.reactiontracker.com/reactions/' + id + '/voteAnswer1/' + name, null)
            .then(_jsonWithError)
            .then(f => success())
            .catch(apiError => error(apiError.message));
    },
    voteAnswer2: function (id, name, start, success, error) {
        start();
        _apiPost('http://api.reactiontracker.com/reactions/' + id + '/voteAnswer2/' + name, null)
            .then(_jsonWithError)
            .then(f => success())
            .catch(apiError => error(apiError.message));
    }
};

export default ApiRequests;