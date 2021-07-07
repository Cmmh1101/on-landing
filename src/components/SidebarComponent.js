import React from "react";
import "../css/Sidebar.css";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

function Sidebar(props) {
  return (
    <React.Fragment>
      <aside className="sidebar">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row row-content">
                <div className="col my-3">
                  <Link to="/homepage">OurNet</Link>
                </div>
              </div>
              <div className="row my-3">
                <div className="col">
                  <div className="group-photo">
                    <img
                      className="group-photo__img shadow"
                      src="/assets/images/groupmeet.jpg"
                      alt="Group Meeting"
                    />
                  </div>
                  <p className="my-2 text-white">
                    <b>YourNet name here</b>
                  </p>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <ListGroup>
                    <ListGroupItem active tag={Link} to="/" action>
                      <i className="fa fa-home" aria-hidden="true" /> Home
                    </ListGroupItem>
                    <ListGroupItem tag={Link} to="/" action>
                      <i className="fa fa-commenting-o" aria-hidden="true" />{" "}
                      Comments{" "}
                      <Badge pill className="badges">
                        14
                      </Badge>
                    </ListGroupItem>
                    <ListGroupItem tag={Link} to="/" action>
                      <i className="fa fa-calendar" aria-hidden="true" />{" "}
                      Calendar
                    </ListGroupItem>
                    <ListGroupItem tag={Link} to="/" action>
                      <i className="fa fa-list" aria-hidden="true" /> Lists{" "}
                      <Badge pill className="badges">
                        3
                      </Badge>
                    </ListGroupItem>
                    <ListGroupItem tag={Link} to="/" action>
                      <i className="fa fa-file-image-o" aria-hidden="true" />{" "}
                      Gallery
                    </ListGroupItem>
                    <ListGroupItem tag={Link} to="/" action>
                      <i className="fa fa-comments" aria-hidden="true" />{" "}
                      Messages{" "}
                      <Badge pill className="badges">
                        1
                      </Badge>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <ul className="my-5 px-0">
                    <li>
                      <Link className="links" to="/">
                        Upgrade{" "}
                        <i
                          className="fa fa-star text-warning"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link className="links" to="/">
                        Go Mobile
                      </Link>
                    </li>
                    <li>
                      <Link className="links" to="/">
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link className="links" to="/">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="links" to="/">
                        Support
                      </Link>
                    </li>
                    <li>
                      <Link className="links" to="/">
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </React.Fragment>
  );
}

export default Sidebar;
