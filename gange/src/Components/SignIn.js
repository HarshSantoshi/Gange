import './signin.css'
function SignIn() {
    return (
        <section>
            <div className='sign_container'>
                <div className='sign_header'>
                    <img src= "" alt='Company LOGO' />
                </div>
                <div className='sign_form'>
                    <form method='POST'>
                        <h1>Sign-In</h1>
                        <div className='form_data'>
                            <label htmlFor='email' >Email</label>
                            <input type='text'
                                name="email" id='email' />
                        </div>
                        <div className='form_data'>
                            <label htmlFor='password' >Password</label>
                            <input type='password'
                                name="password" id='password' placeholder='At least 6 characters' />
                        </div>
                        dajkdh
                        <button className='signin_btn' >Login</button>
                    </form>
                </div>
                <div className='create_accountinfo'>
                    <p>Login as a farmer ?</p>
                    <button>Create your Account</button>
                </div>
            </div>
        </section>
    )
}

export default SignIn;
