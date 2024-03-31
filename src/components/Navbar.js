function Navbar() {
    return (
      <div className="navbar">
        <div className="navbar__s1">
          <h1 className="navbar__s1__title">Udemy</h1>
        </div>
        <div className="navbar__s2">
          <i className="fa fa-search" style={{ color: "black" }}></i>
          <input type="text" placeholder="Search for anything here. Tech, Business, Art...." />
        </div>
        <div className="navbar__s3">
          <p>Trending Courses</p>
  
          <div className="mylearning">
            <p>My Learning</p>
            <div className="mylearning__popup">
              <p>You did not purchase anything yet</p>
            </div>
          </div>
          <i className="fa fa-shopping-cart"></i>
          <i className="fa fa-bell"></i>
          <i className="fa fa-user"></i>
        </div>
        <div className="navbar__s4">
          <i className="fa fa-bars"></i>
        </div>
      </div>
    );
  }
  export default Navbar