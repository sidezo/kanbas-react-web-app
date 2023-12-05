import React, { useState, useEffect } from "react";
import * as client from "./client";
import {
  BsFillCheckCircleFill,
  BsTrash3Fill,
  BsPlusCircleFill,
  BsPencil,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import UserNavigation from "./userNavigation";
function UserTable() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "USER",
  });

  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  const selectUser = async (user) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className=" col-2">
          <UserNavigation />
        </div>
        <div className=" col-10">
          <h1>User List</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
              <tr>
                <td>
                  <input
                    value={user.username}
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                    placeholder="username"
                  />
                  <input
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    placeholder="password"
                  />
                </td>
                <td>
                  <input
                    value={user.firstName}
                    onChange={(e) =>
                      setUser({ ...user, firstName: e.target.value })
                    }
                    placeholder="first name"
                  />
                </td>
                <td>
                  <input
                    value={user.lastName}
                    onChange={(e) =>
                      setUser({ ...user, lastName: e.target.value })
                    }
                    placeholder="last name"
                  />
                </td>
                <td>
                  <select
                    value={user.role}
                    onChange={(e) => setUser({ ...user, role: e.target.value })}
                  >
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                    <option value="FACULTY">Faculty</option>
                    <option value="STUDENT">Student</option>
                  </select>
                
                  <button onClick={createUser} className="btn btn-primary">
                    <BsPlusCircleFill onClick={createUser} />
                  </button>
                  <button onClick={updateUser} className="btn btn-danger">
                    <BsFillCheckCircleFill onClick={updateUser} />
                  </button>
                </td>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <button
                    onClick={() => selectUser(user)}
                    className="btn btn-warning me-2"
                  >
                    <BsPencil />
                  </button>
                  <button
                    onClick={() => deleteUser(user)}
                    className="btn btn-info me-2"
                  >
                    <BsTrash3Fill />
                  </button>
                  <button className="btn btn-primary w-50 ">
                    <Link to={`/Kanbas/AccountInfo/${user._id}`}>
                      {user.username}
                    </Link>
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default UserTable;
