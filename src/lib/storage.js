const SESSION_KEY = "redux-toolkit"

export const setAutHToken = (token) => {
    localStorage.setItem(SESSION_KEY, token)
}

export const getAuthToken = () => {
    return localStorage.getItem(SESSION_KEY) || null
}

export const removeAuthToken = () => {
    localStorage.removeItem(SESSION_KEY)
}

export const StorageService = {
    setAutHToken,
    getAuthToken,
    removeAuthToken,
}