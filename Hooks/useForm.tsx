import { useState } from 'react';


const useForm = (callback: { (formData: any): Promise<void>;}) => {
    const [registerState, setRegisterState] = useState<any>({
        firstName:'',
        lastName:'',
        countryCode:'Nigeria',
        phoneNumber:'',
        email:'',
        password:'',
    });
    const [loginState, setLoginState] = useState<any>({
        email:'',
        password:'',
    });
    const [employeeCompanyState, setEmployeeCompanystate] = useState<any>({
        bvn:'',
        companyRole:'',
        companyReg:'',
        companyLoc:'',
        validDoc:'',
    });
    const [employeeState, setEmployeeState] = useState<any>({
        bvn:'',
        income:'',
        residentState:'',
        homeAddress:'',
        idUpload:'',
    })
    const [studentState, setStudentState] = useState<any>({
        bvn:'',
        schoolName:'',
        matricNumber:'',
        homeAddress:'',
        idUpload:'',
    })

    //FormErrors
    const [formErrors, setFormErrors] = useState<any>({
        firstName:'',
        lastName:'',
        countryCode:'',
        phoneNumber:'',
        email:'',
        password:'',
        bvn:'',
        companyRole:'',
        companyReg:'',
        companyLoc:'',
        validDoc:'',
        income:'',
        residentState:'',
        address:'',
        idUpload:'',
        schoolName:'',
        matricNumber:'',
    });



    // Omit Function for Omitting Properties From an Object
    function omit(obj: { [x: string]: any; }, ...props: any[]) {
        const result = { ...obj };

        props.forEach(function(prop: any) {
          delete result[prop];
        });
        return result;
    }


    const validate = (event: any, name: string, value: string) => {
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
                        firstName:'First name must contain letters only'
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
                        lastName:'Last name must contain letters only'
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
                            phoneNumber:'Enter a valid phone number'
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
                        phoneNumber:'Enter a valid phone number'
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

            case 'bvn':
                if(value.length !== 11){
                    setFormErrors({
                        ...formErrors,
                        bvn:'Enter a valid bvn number'
                    })

                    if(value.trim().length === 0){
                        setFormErrors({
                            ...formErrors,
                            bvn:'Bvn number is required'
                        })
                    }

                    if(value.length >= 12){
                        setFormErrors({
                            ...formErrors,
                            bvn:'Enter a valid bvn number'
                        })
                    }
                    
                }else{
                    let errorObj = omit(formErrors, "bvn");
                    setFormErrors(errorObj);
                }
                break;

            case 'companyRole':
                if(value.trim().length === 0){
                    setFormErrors({
                        ...formErrors,
                        companyRole:'Field is required'
                    })
                }else if(!new RegExp(/^[a-zA-Z]+$/).test(value)){
                    setFormErrors({
                        ...formErrors,
                        companyRole:'Field must contain letters only'
                    })
                }else{
                    let errorObj = omit(formErrors, "companyRole");
                    setFormErrors(errorObj);
                }
                break;

            case 'companyReg':
                if(value.trim().length === 0){
                    setFormErrors({
                        ...formErrors,
                        companyReg:'Field is required'
                    })
                }
                else{
                    let errorObj = omit(formErrors, "companyReg");
                    setFormErrors(errorObj);
                }
                break;

            case 'companyLoc':
                if(value.trim().length === 0){
                    setFormErrors({
                        ...formErrors,
                        companyLoc:'Field is required'
                    })
                }
                else{
                    let errorObj = omit(formErrors, "companyLoc");
                    setFormErrors(errorObj);
                }
                break;

            case 'validDoc':
                if(value === ""){
                    setFormErrors({
                        ...formErrors,
                        validDoc:'Please select a file'
                    })
                }
                else{
                    let errorObj = omit(formErrors, "validDoc");
                    setFormErrors(errorObj);
                }
                break;

            case 'income':
                if(value === ""){
                    setFormErrors({
                        ...formErrors,
                        income:'Field is required'
                    })
                }
                else{
                    let errorObj = omit(formErrors, "income");
                    setFormErrors(errorObj);
                }
                break;
            
            default:
                break;
        }
    }

    
    // Handle  Input Change 
    const handleChange = (event: any) => {
        event.preventDefault();
        
        let name = event.target.name;
        let val = event.target.value;

        validate(event, name, val);

        //Let's set these values in state
        setRegisterState({
            ...registerState,
            [name]:val
        })
        setLoginState({
            ...loginState,
            [name]:val
        })
    }

    // Handle Register
    const handleRegisterSubmit = (event: any) => {
        if(event) event.preventDefault();


        if(Object.keys(formErrors).length === 11){
            // Callback function that recieves the form data as an argument
            callback(registerState);
        }
    }
    
    // Handle Login
    const handleLoginSubmit = (event: any) => {
        if(event) event.preventDefault();


        if(Object.keys(formErrors).length === 15){
            // Callback function that recieves the form data as an argument
            callback(loginState);
        }
    }

    const handleEmployeeCompanySubmit = (event: any) => {
        if(event) event.preventDefault();
        
        if(Object.keys(formErrors).length === 12){
            // Callback function that recieves the form data as an argument
            callback(employeeCompanyState);

            // Reset the form fields after submission 
            setEmployeeCompanystate({bvn:'',companyRole:'',companyReg:'',companyLoc:'',validDoc:''})
        }
    }
    

    return {
        registerState,
        loginState,
        employeeCompanyState,
        employeeState,
        studentState,
        formErrors,
        handleRegisterSubmit,
        handleLoginSubmit,
        handleChange
    }
    
}
    
export default useForm;