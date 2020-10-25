import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import "./style.css";


const LastViewedUsers = ({ lastViewedUsers }) => {
  return (
    <ul className="last-viewed-list">
      <div><h4>LATEST VIEWED USERS</h4>
        <hr/>
      </div>
      {!lastViewedUsers[0] && <div><h6><em>No latest viewed users</em></h6></div>}
      {lastViewedUsers.map((user) => (
        <li key={user.id}>
          <div className="row">
            <div className="col-md-8">
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.gender}</p>
            </div>
            <div className="col-md-4">
              <Link
                to={{
                  pathname: `/posts`,
                  search: `?userId=${user.id}`,
                  state: {user: user},
                }}
              >
                <Button id="btn-viewed-posts" variant="outline-primary" className="bgColor">View Posts</Button>
              </Link>
            </div>
          </div>
          <hr/>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  lastViewedUsers: state.lastViewedUsers,
});

export default connect(mapStateToProps)(LastViewedUsers);
