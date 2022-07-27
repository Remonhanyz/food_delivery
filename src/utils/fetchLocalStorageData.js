export const fetchUser = () => {
    console.log(JSON.parse(localStorage.getItem('user')))
    const userInfo = 
        localStorage.getItem('user') !== "undefined"
            ? JSON.parse(localStorage.getItem('user'))
            : localStorage.clear()
    return userInfo
}

export const fetchIsAdmin = () => {
    console.log(JSON.parse(localStorage.getItem('isAdmin')))
    const userInfo = 
        localStorage.getItem('isAdmin') !== "undefined"
            && JSON.parse(localStorage.getItem('isAdmin'))

    return userInfo
}