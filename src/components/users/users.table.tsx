import { useEffect, useState } from 'react';
// import '../../styles/users.css';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

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
        const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0b2tlbiBsb2dpbiIsImlzcyI6ImZyb20gc2VydmVyIiwiX2lkIjoiNjRkMWM0OTYxNmE3Nzc2YjExOThiZjcyIiwiZW1haWwiOiJob2lkYW5pdEBnbWFpbC5jb20iLCJhZGRyZXNzIjoiVmlldE5hbSIsImlzVmVyaWZ5Ijp0cnVlLCJuYW1lIjoiSSdtIEjhu49pIETDom4gSVQiLCJ0eXBlIjoiU1lTVEVNIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNjkyODg2Mjk3LCJleHAiOjE2OTI5NDYyOTd9.R5UboL8Ot9zOcPd_bPK5DbSii3qNCBvTrWWYGn2ZdNU"

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

    const columns: ColumnsType<IUsers> = [
        {
            title: 'Email',
            dataIndex: 'email',
            render: (value, record) => {
                console.log()
                return (<div>{record.email}</div>)
            }
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Role',
            dataIndex: 'role',
        }
    ]


    return (
        <div>
            <h2>Table Users</h2>
            <Table
                columns={columns}
                dataSource={listUsers}
                rowKey={"_id"}
            />

            {/* <table>
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
            </table> */}
        </div>
    )
}

export default UsersTable;