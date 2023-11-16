import jwt_decode from 'jwt-decode';

/**
 * 1. Given the User information, make a request to our Server's api/register route
 * 2. If the response's status code is 201, redirect to Login route 
 * 3. If the status code is not 201, throw an error with our api's error message 
 * 
 */
export async function registerUser(userData) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/public/register-user`, {
    method: 'POST',
    // userData is a FormData object so no need to JSON.stringify
    body: userData,
  });

  const data = await res.json();

  if (res.status === 201) {
    return true;
  } else {
    /**
     * Our Error object from server has this structure:
     * https://github.com/hamitsehjal/CampusCart-BACKEND/blob/main/src/response.js#L35C7-L35C8
     */
    throw new Error(data.error.message);
  }
}

/**
 * Given the partner information, make a request to our server with api endpoint(partner-register)
 * If status code is 201, return true 
 * Otherwise, throw an error with the API's error message 
 */
export async function registerPartner(formData) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/public/register-partner`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const data = await res.json();

  if (res.status == 201) {
    return true;
  } else {
    /**
  * Our Error object from server has this structure:
  * https://github.com/hamitsehjal/CampusCart-BACKEND/blob/main/src/response.js#L35C7-L35C8
  */
    throw new Error(data.error.message);
  }
}

/**
 * 1. Given an email and password, it should obtain JWT from our Server's api/login route
 * 2. Store the JWT token locally if status code of above request's response is 200
 * 3. If status code is not 200, throw an error with the error message from the API
 */
export async function authenticateUser(user, password) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/public/login`, {
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
    /**
     * Our Error object from server has this structure:
     * https://github.com/hamitsehjal/CampusCart-BACKEND/blob/main/src/response.js#L35C7-L35C8
     */
    throw new Error(data.error.message);
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

// set cart state in localStorage
export function setCartItems(items) {
  localStorage.setItem('cart', JSON.stringify(items));
}

// get cart state from localStorage
export function getCartItems() {
  try {
    return localStorage.getItem('cart');
  } catch (err) {
    return null
  }
}

// Empty cart state from loalStorage
export function removeCartItems() {
  localStorage.removeItem('cart');
}
export function isAuthenticated() {
  const token = readToken();
  return token ? true : false;
}