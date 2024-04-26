

const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><span className="badge  text-dark fs-5 btn btn-primary" >News App</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                {/* <div className="navbar-nav"> */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
                           
                        </li>
                        {/* <li className="nav-item">
                            <div className="nav-link" onClick={()=>setCategory("buisness")}>Buisness</div>
                           
                        </li> */}
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>setCategory("health")}>Health</div>
                           
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>setCategory("sports")}>Sports</div>
                           
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div>
                            
                        </li>
                        <li className="nav-item">
                        <span><a className="nav-link disabled" aria-disabled="true">Dev by Shubh Wankhede</a></span>
                        </li>
                    </ul>
                </div>
            </div>
        {/* </div> */}
    </nav>
  )
}

export default Navbar
