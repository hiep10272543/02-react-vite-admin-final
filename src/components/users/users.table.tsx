import { useEffect, useState } from 'react';
import '../../styles/users.css';

interface IUsers {
    _id: string;
    email: string;
    name: string;
    role: string;
}

const UsersTable = () => {

    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        //update
        console.log(">>> check useEffect")
        getData()
    }, [])

    const getData = async () => {
        const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0b2tlbiBsb2dpbiIsImlzcyI6ImZyb20gc2VydmVyIiwiX2lkIjoiNjRkMWM0OTYxNmE3Nzc2YjExOThiZjcyIiwiZW1haWwiOiJob2lkYW5pdEBnbWFpbC5jb20iLCJhZGRyZXNzIjoiVmlldE5hbSIsImlzVmVyaWZ5Ijp0cnVlLCJuYW1lIjoiSSdtIEjhu49pIETDom4gSVQiLCJ0eXBlIjoiU1lTVEVNIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNjkyNzE0MDI1LCJleHAiOjE2OTI3NzQwMjV9.xPIzeZQCutmM4W9ELtD4urhAmv2lJWUZaAkK2DeP5B4"

        const res1 = await fetch(
            "http://localhost:8000/api/v1/auth/login",
            {
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    email: "hoidanit@gmail.com",
                    password: "123456"
                })
            })


        const res = await fetch(
            "http://localhost:8000/api/v1/users/all",
            {
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    "Content-Type": "application/json",
                },
            })

        const d = await res.json();
        setListUsers(d.data.result)
    }

    console.log(">>> check render listUsers: ", listUsers)//mounting
    return (
        <div>
            <h2>Table Users</h2>

            <table>
                <thead>
                    <tr>
                        <td>Email</td>
                        <td>Name</td>
                        <td>Role</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        listUsers.map((item: IUsers) => {
                            return (
                                <tr key={item._id}>
                                    <td>{item.email}</td>
                                    <td>{item.name}</td>
                                    <td>{item.role}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UsersTable;