import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserTable() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get('https://dummyjson.com/users')
            .then(response => {
                setUsers(response.data.users);
                setLoading(true);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(true);
            });
    }, []);

    return (
        <div className="UserTable">
            <h1>Dummy Data</h1>
            {loading && (
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Profile Pic</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Domain</th>
                            <th>IP</th>
                            <th>University</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>
                                    <img
                                        src={user.image}
                                        alt={`${user.firstName} ${user.lastName}`}
                                        style={{ width: '50px', height: '50px' }}
                                    />
                                </td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.gender}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.domain}</td>
                                <td>{user.ip}</td>
                                <td>{user.university}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default UserTable;
