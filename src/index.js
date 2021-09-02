import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';



const App = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])


    /* const getUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: 'GET', // GET, POST, PUT, DELETE // Opcional
            // body: "", // POST, PUT
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response);

            return response.json();
        }).then((data) => {
            console.log(data);

            setUsers(data);

        }).catch((error) => {
            console.log(error);
        })
    } */


    /* async function test(){

    } */

    /* const test = async () => {

    } */

    const getUsers = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users", {
                method: 'GET', // GET, POST, PUT, DELETE // Opcional
                // body: "", // POST, PUT
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            console.log(data);

            setUsers(data);

        } catch (error) {
            console.log(error);
        }
    }

    // Promise.all
    return (
        <>
            <h1>Hello World</h1>
            <ul>
                {
                    users.length > 0 &&
                    users.map((user, index) => {
                        return (
                            <li key={index}>
                                {user.name}
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));