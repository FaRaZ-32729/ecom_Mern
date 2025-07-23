import React, { Children, useEffect, useState } from 'react'
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : "";
    });
    console.log("main user",user)

    useEffect(() => {
        if (user && user.name) {
            const { name, email , _id } = user;
            localStorage.setItem("user", JSON.stringify({ name, email , _id}));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);
    console.log("context api user ", user)
    return (

        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
