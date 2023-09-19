import './signin.css'


function SignIn() {
    return (
        <section>
            <div className='sign_container'>
                <div className='sign_header'>
                    <h2 id = 'heading'>GANGE</h2>
                </div>
                <div className='sign_form'>
                    <form method='POST'>
                        <h1>Login</h1>
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

                        <button className='signin_btn' >Login as Farmer</button>
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
