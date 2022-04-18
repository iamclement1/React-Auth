

export const Register = () => {

    handleSubmit = () => {
        console.log('Works!')
    }


    return (
        <div>
            <form action="" onSubmit={handleSubmit} >
                <h3>
                    Sign Up
                </h3>

                <div className="form-group">
                    <label htmlFor="">
                        First Name
                    </label>
                    <input type="text"
                    className="form-control"
                    placeholder="First Name"/>
                </div>

                <div className="form-group">
                    <label htmlFor="">
                        Last Name
                    </label>
                    <input type="text"
                    className="form-control"
                    placeholder="Last Name"/>
                </div>

                <div className="form-group">
                    <label htmlFor="">
                        Email
                    </label>
                    <input type="email"
                    className="form-control"
                    placeholder="Email"/>
                </div>

                <div className="form-group">
                    <label htmlFor="">
                        Password
                    </label>
                    <input type="password"
                    className="form-control"
                    placeholder="Password"/>
                </div>

                <div className="form-group">
                    <label htmlFor="">
                        Confirm Password
                    </label>
                    <input type="password"
                    className="form-control"
                    placeholder="Confirm Password"/>
                </div>
                <button className="btn btn-primary btn-block">
                    Sign Up
                </button>
            </form>
        </div>
    )
}