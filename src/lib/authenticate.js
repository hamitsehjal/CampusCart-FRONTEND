import jwt_decode from 'jwt-decode';

/**
 * 1. Given an email and password, it should obtain JWT from our Server's api/login route
 * 2. Store the JWT token locally if status code of above request's response is 200
 * 3. If status code is not 200, throw an error with the error message from the API
 */
async function authenticateUser(user, password) {
    const res = await fetch(`http://localhost:8080/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: user, password: password }),
    });

    const data = await res.json();

    if (res.status === 200) {
        setToken(data.token);
        return true;
    }
    else {
        throw new Error(data.message);
    }
}

function setToken(token) {
    localStorage.setItem('access_token', token);
}

export function getToken() {
    try {
        return localStorage.getItem('access_token');
    } catch (err) {
        return null;
    }
}

export function removeToken() {
    localStorage.removeItem('access_token');
}

export function readToken() {
    try {
        const token = getToken();
        return token ? jwt_decode(token) : null;
    } catch (err) {
        return null;
    }
}

export function isAuthenticated() {
    const token = readToken();
    return token ? true : false;
}