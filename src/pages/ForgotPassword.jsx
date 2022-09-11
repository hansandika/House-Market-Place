import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success('Email was sent');
    } catch (err) {
      toast.error('Could not send reset email');
    }
  };

  return (
    <div className='pageContainer'>
      <header>
        <p className='pageHeade'>Forgot Passsword</p>
      </header>
      <main>
        <form onSubmit={onSubmit}>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            placeholder='Email'
            className='emailInput'
            onChange={onChange}
          />
          <Link to='/sign-in' className='forgotPasswordLink'>
            Sign in
          </Link>
          <div className='signInBar'>
            <div className='signInText'>Send Reset Link</div>
            <button className='signInButton'>
              <ArrowRightIcon fill='#fffff' width='34px' height='34px' />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
