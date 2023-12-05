import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserNavigation from "./userNavigation";
import { Link } from "react-router-dom";

function AccountInfo() {
  const [account, setAccount] = useState(null);
  const { id } = useParams();
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account); //this saves info, and calls the updateUser function, passes user account info
  };

  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/signin");
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className=" col-3">
          <UserNavigation />
        </div>
        <div className=" col-9">
          <div className="w-50">
            <h1>AccountInfo</h1>
            {account && (
              <div>
                <input
                  value={account.password}
                  onChange={(e) =>
                    setAccount({ ...account, password: e.target.value })
                  }
                  style={{ marginBottom: "5px", borderRadius: "5px" }} // Inline CSS for input
                />
                <br />
                <input
                  value={account.firstName}
                  onChange={(e) =>
                    setAccount({ ...account, firstName: e.target.value })
                  }
                  style={{ marginBottom: "5px", borderRadius: "5px" }} // Inline CSS for input
                />
                <br />
                <input
                  value={account.lastName}
                  onChange={(e) =>
                    setAccount({ ...account, lastName: e.target.value })
                  }
                  style={{ marginBottom: "5px", borderRadius: "5px" }} // Inline CSS for input
                />
                <br />
                <input
                  value={account.dob}
                  onChange={(e) =>
                    setAccount({ ...account, dob: e.target.value })
                  }
                  style={{ marginBottom: "5px", borderRadius: "5px" }} // Inline CSS for input
                />
                <br />
                <input
                  value={account.email}
                  onChange={(e) =>
                    setAccount({ ...account, email: e.target.value })
                  }
                  style={{ marginBottom: "5px", borderRadius: "5px" }} // Inline CSS for input
                />
                <br />
                <select
                  value={account.role}
                  onChange={(e) =>
                    setAccount({ ...account, role: e.target.value })
                  }
                  style={{ marginBottom: "5px", borderRadius: "5px" }} // Inline CSS for input
                >
                  <option value="USER">User</option>
                  <option value="ADMIN">Admin</option>
                  <option value="FACULTY">Faculty</option>
                  <option value="STUDENT">Student</option>
                </select>
                <br />
                <button className="btn btn-primary" onClick={save}>
                  Save
                </button>
                <button className="btn btn-danger" onClick={signout}>
                  Signout
                </button>
                {/* this naviages to AllUsers table page */}
                <Link to="/Kanbas/AllUsers" className="btn btn-warning">
                  Users
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default AccountInfo;
