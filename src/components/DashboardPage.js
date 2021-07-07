import React from "react";
import Sidebar from "./SidebarComponent";
import NewPostModal from "./NewPostModal";

function DashboardPage() {
  return (
    <React.Fragment>
      <div className="d-flex ">
        <Sidebar />
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="my-3">News</h1>
              <div className="col-8">
                <NewPostModal />
              </div>
              <div className="col-8"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DashboardPage;
