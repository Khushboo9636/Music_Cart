import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './Style.module.css';
import { ToastContainer, toast } from 'react-toastify';
import img1 from '../../assets/music.png'

function SignForm() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (formData) => {
        try {
            const currentDate = new Date();
            formData.createdDate = currentDate.toISOString(); 

            const response = await fetch("http://localhost:4000/api/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            });
    
            if (!response.ok) {
                const responseData = await response.json();
                throw new Error(responseData.error || 'Failed to register. Please try again later.');
            }
    
            const responseData = await response.json();
            const { user, token } = responseData;
              
            console.log(user);
            console.log(token);
      
            window.localStorage.setItem("user", JSON.stringify(user));
            window.localStorage.setItem("name", user.name);
            window.localStorage.setItem("token", token);
            window.localStorage.setItem("createdDate", currentDate.toISOString());

            navigate('/login');
            toast.success('Signup Successfully', {
                position: 'top-center'
            });
        } catch (error) {
            console.error("Error during registration:", error);
            alert(error.message);
        
            if (error.message === "Email already exists. Please use a different email address.") {
                setErrorMessage("Email already exists. Please use a different email address.");
            } else {
                setErrorMessage("Registration failed. Please try again later.");
            }
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.logoWrapper}>
               <div className={styles.logo}>
                 <img className={styles.image4Icon} src={img1} alt="Image" />  
              <div className={styles.musicartLabel}>
               <div className={styles.musicart}>Musicart</div>
                  </div>
                 </div>
           </div>
            <div className={styles.container}>
               <div className={styles.containerChild} />
                 <div className={styles.createAccountWrapper}>
                       <div className={styles.createAccount}>Create Account</div>
                   </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                
                    <div className={styles.formValues1}>
                     <div className={styles.yourName}>Your name</div>
                        <input
                            className={styles.input1}
                            type="text"
                            
                            {...register('name', { required: true })}
                        />
                        {errors.name && <div className={styles.error}>Name is required</div>}
                    </div>
                    <div className={styles.formValues2}>
                     <div className={styles.mobileNumber}>Mobile number</div>
                        <input
                            className={styles.input2}
                            type="text"
                            
                            {...register('mobile', { required: true })}
                        />
                        {errors.mobile && <div className={styles.error}>Mobile number is required</div>}
                    </div>
                    <div className={styles.formValues3}>
                    <div className={styles.emailId}>Email Id</div>
                        <input
                            className={styles.input3}
                            type="email"
                           
                            {...register('email', { required: true })}
                        />
                        {errors.email && <div className={styles.error}>Email is required</div>}
                    </div>
                    <div className={styles.formValues4}>
                    <div className={styles.password}>Password</div> 
                        <input
                            className={styles.input4}
                            type="password"
                            
                            {...register('password', { required: true, minLength: 6 })}
                        />
                        {errors.password && <div className={styles.error}>Password is required (min length: 6)</div>}
                    </div>
                    <div className={styles.byEnrollingYourContainer}>
                        <p className={styles.byEnrollingYour}>
                        By enrolling your mobile phone number, you consent to receive
                         automated security notifications via text message from Musicart.
                           Message and data rates may apply.
                        </p>
                      </div>


                      <div className={styles.continueButton}>
                       <button className={styles.signupbtn} type="submit">
                         <div className={styles.signup} />
                         <div className={styles.continue}>Continue</div>
                         </button>
                     </div>
                     <div className={styles.byContinuingYou}>
                     By continuing, you agree to Musicart privacy notice and conditions
                      of use.
                    </div>
               </form>
         </div>
         <div className={styles.alreadyHaveAnAccountSignWrapper}>
         <div className={styles.alreadyHaveAnContainer}>
            <span className={styles.alreadyHaveAn}>Already have an account?</span>
            <span className={styles.signIn} onClick={() => navigate("/login")}> Sign in</span>
          </div>
         </div>

            <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
        </div>
    );
}

export default SignForm;
