import { useEffect, useState } from 'react';
import '../../styles/users.css';

const UsersTable = () => {


    useEffect(() => {
        //update
        console.log(">>> check useEffect")
        getData()
    }, [])

    const getData = async () => {
        const res = await fetch(
            "http://localhost:8000/api/v1/auth/login",
            {
                method: "POST",
                body: JSON.stringify({
                    username: "hoidanit@gmail.com",
                    password: "123456"
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })

        const data = await res.json();

        const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0b2tlbiBsb2dpbiIsImlzcyI6ImZyb20gc2VydmVyIiwiX2lkIjoiNjRkMWM0OTYxNmE3Nzc2YjExOThiZjcyIiwiZW1haWwiOiJob2lkYW5pdEBnbWFpbC5jb20iLCJhZGRyZXNzIjoiVmlldE5hbSIsImlzVmVyaWZ5Ijp0cnVlLCJuYW1lIjoiSSdtIEjhu49pIETDom4gSVQiLCJ0eXBlIjoiU1lTVEVNIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNjkyNjI4NDg3LCJleHAiOjE2OTI2ODg0ODd9.hq9bsgH_-vy64E6Q86wgYXfZtrtUgPzv3_HXUdieegU"

        const res1 = await fetch(
            "http://localhost:8000/api/v1/users/all",
            {
                headers: {
                    'Authorization': `Bearer ${access_token}`,
                    "Content-Type": "application/json",
                },
            })

        const data1 = await res1.json();
        console.log(">>> check data 1: ", data1)
    }

    console.log(">>> check render")//mounting
    return (
        <div>
            <h2>HTML Table</h2>

            <table>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Canada</td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
                </tr>
            </table>


        </div>
    )
}

export default UsersTable;