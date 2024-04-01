
import React from 'react';
import style from './Style.module.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/music.png'

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://music-cart-iwee.onrender.com/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        const responseData = await response.json();
        throw new Error(responseData.error || 'Failed to Login. Please try again later.');
    }
      const responseData = await response.json();

      const { user, token } = responseData;
    
      console.log(user);
      console.log(token);
    
      console.log(responseData);
      window.localStorage.setItem('userId',responseData.user._id);

      window.localStorage.setItem('name', responseData.user.name);
      window.localStorage.setItem('email', responseData.user.email);
      window.localStorage.setItem('token', responseData.token);
      navigate('/');
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  return (
    <div className={style.main}>
        <div className={style.logo}>
        <div className={style.logoimage}>
        <img className={style.image4Icon} src={img1} alt="Image" />  
          <div className={style.musicartWrapper}>
            <div className={style.musicart}>Musicart</div>
          </div>
        </div>
       </div>
      
        <form className={style.siginform} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.formInputChild} />
          <div className={style.signIn}>{`Sign in `}</div>
           <div className={style.enterCredentials}>
          
             <div className={style.formValues1}>
             <div className={style.enterYourEmail}>
              Enter your email or mobile number
            </div>
             <input
             className={style.input1}
            type="text"
            {...register('emailOrMobile', { required: true })}
            
          />
          
        </div>
        {errors.email && <div style={{color:"red"}}>Email is required</div>}
        <div className={style.formValues2}>
        <div className={style.password}>Password</div>
          <input
            className={style.input2}
            type="password"
            {...register('password', { required: true })}
            
          />
          
        </div>
        {errors.password && <div style={{color:"red"}}>Password is required</div>}
       
        </div>
        <div className={style.privacyPolicy}>
          <button type="submit" className={style.continueButton}>
            <div className={style.continueButtonChild} />
            <div className={style.continue}>Continue</div>
          </button>
        </div>
        <div className={style.byContinuingYou}>
          By continuing, you agree to Musicart privacy notice and conditions of
          use.
        </div>
       
        
      </form>
      <div className={style.newUserLabel}>
        <div className={style.linesMessage}>
          <div className={style.line1}>
            <div className={style.line1Child} />
          </div>
          <div className={style.newToMusicart}>New to Musicart?</div>
          <div className={style.line2}>
            <div className={style.line2Child} />
          </div>
        </div>
        <button className={style.createAccountbtn} onClick={() => navigate('/signup')}>
          <div className={style.createAccountbtnChild} />
          <div className={style.createYourMusicart}>
            Create your Musicart account
          </div>
        </button>
      </div>



    
    </div>
  
  );
}

export default LoginForm;




