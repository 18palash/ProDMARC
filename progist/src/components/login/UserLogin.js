import React from 'react';
const UserLogin = () => {
    return(
        <div className='userlogin'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 ml-auto mr-auto">
                        <div className="card card-login">
                            <form className="form" method action>
                                <div className="card-header card-header-primary text-center">
                                <h3 className="card-title">Login</h3> 
                                                               
                                </div>                                
                                <div className="card-body">
                                <div className="input-group">
                                    
                                    <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="material-icons">face</i>
                                    </span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="First Name..." />
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="material-icons">mail</i>
                                    </span>
                                    </div>
                                    <input type="email" className="form-control" placeholder="Email..." />
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="material-icons">lock_outline</i>
                                    </span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="Password..." />
                                </div>
                                </div>
                                <br/><br/>
                                <div className="footer text-center">
                                <button className="btn btn-primary btn-raised">
                                        Get Started
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserLogin;