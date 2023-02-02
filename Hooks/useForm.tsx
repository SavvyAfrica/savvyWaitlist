import React, { useState } from 'react';
import { IFormValues } from '../type/type';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TypeOptions } from 'react-toastify/dist/types';



const useForm = (callback: { (formData: IFormValues): Promise<void>;}) => {
    //Register Form values
    const [formRegData, setFormRegData] = useState<any>({
        firstName:'',
        lastName:'',
        countryCode: 'Nigeria',
        phoneNumber:'',
        email:'',
        password:''
    });

    //Login Form values
    const [formLogData, setFormLogData] = useState<any>({
        email:'', 
        password:''
    })

    //Errors
    const [formErrors, setFormErrors] = useState<IFormValues>({
        firstName:'',
        lastName:'',
        countryCode:'',
        phoneNumber:'',
        email:'',
        password:''
    });

    const notify = (text: string, type: TypeOptions) => toast(text, { type });

    // Omit Function for Omitting Properties From an Object
    function omit(obj: { [x: string]: any; }, ...props: any[]) {
        const result = { ...obj };

        props.forEach(function(prop: any) {
          delete result[prop];
        });
        return result;
    }


    const validate = (_event: any, name: string, value: string) => {
        // A function to validate each input values
        switch (name) {
            case 'firstName':
                if(value.trim().length <= 1){
                    // we will set the error state

                    setFormErrors({
                        ...formErrors,
                        firstName:'First name should atleast have 2 letters'
                    })

                    if(value.trim().length === 0){
                        // we will set error state
    
                        setFormErrors({
                            ...formErrors,
                            firstName:'First name is required'
                        })
                    }
                }else if(!new RegExp(/^[a-zA-Z]+$/).test(value)){
                    setFormErrors({
                        ...formErrors,
                        firstName:'First name must contain letters'
                    })
                }
                else{
                    // set the error state empty or remove the error for firstName input

                    //omit function removes/omits the value from given object and returns a new object
                    let errorObj = omit(formErrors, "firstName");
                    setFormErrors(errorObj);
                }
                break;


            case 'lastName':
                if(value.length <= 1){
                    // we will set the error state

                    setFormErrors({
                        ...formErrors,
                        lastName:'Last name should atleast have 2 letters'
                    })

                    if(value.trim().length === 0){
                        // we will set error state
    
                        setFormErrors({
                            ...formErrors,
                            lastName:'Last name is required'
                        })
                    }
                }else if(!new RegExp(/^[a-zA-Z]+$/).test(value)){
                    setFormErrors({
                        ...formErrors,
                        lastName:'Last name must contain letters'
                    })
                }
                else{
                    // set the error state empty or remove the error for lastName input

                    //omit function removes/omits the value from given object and returns a new object
                    let errorObj = omit(formErrors, "lastName");
                    setFormErrors(errorObj);
                }
                break;


            case 'phoneNumber':
                if(!new RegExp(/^[0-9]+$/).test(value)){
                    setFormErrors({
                        ...formErrors,
                        phoneNumber:'Phone number must contain numbers'
                    })

                    if(value.length !== 11){
                        // we will set the error state
    
                        setFormErrors({
                            ...formErrors,
                            phoneNumber:'Please provide a valid phone number'
                        })
    
                        if(value.trim().length === 0){
                            // we will set error state
        
                            setFormErrors({
                                ...formErrors,
                                phoneNumber:'Phone number is required'
                            })
                        }
                    }
                }
                else if(value.length >= 12){
                    // we wiil set the error state

                    setFormErrors({
                        ...formErrors,
                        phoneNumber:'confirm the provided phone number'
                    })
                }
                else{
                    // set the error state empty or remove the error for phoneNumber input

                    //omit function removes/omits the value from given object and returns a new object
                    let errorObj = omit(formErrors, "phoneNumber", "countryCode");
                    setFormErrors(errorObj);
                }
                break;

        
            case 'email':
                if(
                    !new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ){
                    setFormErrors({
                        ...formErrors,
                        email:'Enter a valid email address'
                    })

                    if(value.trim().length === 0){
                        // we will set error state
    
                        setFormErrors({
                            ...formErrors,
                            email:'Email address is required'
                        })
                    }
                }
                else{

                    let errorObj = omit(formErrors, "email");
                    setFormErrors(errorObj);
                }
                break;
            
            case 'password':
                if(
                    !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
                ){
                    setFormErrors({
                        ...formErrors,
                        password:'Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers'
                    })

                    if(value.trim().length === 0){
                        // we will set error state
    
                        setFormErrors({
                            ...formErrors,
                            password:'Password is required'
                        })
                    }
                }
                else{

                    let errorObj = omit(formErrors, "password");
                    setFormErrors(errorObj);
                }
                break;
            
            default:
                break;
        }
    }


    const handleChange = (event: any) => {
        event.preventDefault();
        
        let name = event.target.name;
        let val = event.target.value;

        validate(event, name, val);

        //Let's set these values in state
        setFormRegData({
            ...formRegData,   //spread operator to store old values
            [name]:val
        })
        setFormLogData({
            ...formLogData,
            [name]:val
        })
    }

    // Register Form
    const handleRegisterSubmit = (event: any) => {
        if(event) event.preventDefault();


        if(
            formRegData.firstName, formRegData.lastName, formRegData.phoneNumber, 
            formRegData.email, formRegData.password === '' && Object.keys(formErrors).length !== 0
        ){
            notify('Please complete the required details', 'error');
        }
        else{
            // Callback function that recieves the form data as an argument
            callback(formRegData);

            // Reset the form fields after submission 
            setFormRegData({firstName: '',lastName: '',countryCode: 'Nigeria',phoneNumber: '',email: '',password: ''})
        }
    }

    
    // Login Form
    const handleLoginSubmit = (event: any) => {
        if(event) event.preventDefault();

        if(formLogData.email, formLogData.password === '' && Object.keys(formErrors).length !== 4){
            notify('Please complete your login details', 'error')
        }else if(Object.keys(formErrors).length === 4){
            // Callback function that recieves the form data as an argument
            callback(formLogData);

             // Reset the form fields after submission 
             setFormLogData({email: '',password: ''})
        }
    }
    

    return {
        formRegData,
        formLogData,
        formErrors,
        handleRegisterSubmit,
        handleLoginSubmit,
        handleChange
    }
    
}
    
export default useForm;