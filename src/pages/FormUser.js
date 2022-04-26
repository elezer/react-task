import React, { useState } from 'react';
import axios from 'axios';

const FormUser = () => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [occupation, setOccupation] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertFirstName, setShowAlertFirstName] = useState(false);
    const [showAlertLastName, setShowAlertLastName] = useState(false);
    const [showAlertEmail, setShowAlertEmail] = useState(false);
    const [message, setMessage] = useState('');
    const [showAlertOccupation, setShowAlertOccupation] = useState(false);
    let sit = false;

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(first_name==='' || first_name.length<4){
            setShowAlertFirstName(true);
            sit = true;
        }
        if(last_name==='' || last_name.length<4){
            setShowAlertLastName(true);
            sit = true;
        }
        if(email==='' || email.indexOf('@')=== -1 || email.indexOf('.')=== -1){            
            setShowAlertEmail(true);
            sit = true;
        }/* else{
            if(email.search('@')=== -1){
                setShowAlertEmail(true);
                sit = true;
            }else{
                if(email.indexOf('.')=== -1){
                    setShowAlertEmail(true);
                    sit = true;
                }
            }
        } */
        if(occupation==='' || occupation.length<4){
            setShowAlertOccupation(true);
            sit = true;
        }
       
        if(!sit){
            setShowAlertFirstName(false);
            setShowAlertLastName(false);
            setShowAlertEmail(false);
            setShowAlertOccupation(false);

            const user = {
                first_name: first_name,
                last_name: last_name,
                email: email,
                occupation: occupation,
                };

            await axios.post(`https://node-hmdyk.onrender.com/user/add-user`, { user })
            .then(res => {
                if(res.status===200) {
                    setMessage(res.data.message);                
                }else{
                    setMessage('Sorry, something went wrong! Please try again later');
                }
                setShowAlert(true);
            })
        }
    }

    return (
        <div className="bg-white h-screen flex items-center">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <div className="mt-10 sm:mt-0">            
                    <div className="px-4 sm:px-0 pb-4 text-center">
                        <h2 className="text-lg font-medium leading-6 text-gray-900">User Information</h2>                
                    </div>
                    <form action="#" method="POST" onSubmit = {handleSubmit}>
                        <div className="border-4 shadow overflow-hidden sm:rounded-md w-80">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                            First name
                                        </label>
                                        <input
                                            onChange = {(e) => setFirstName(e.target.value)} 
                                            value = {first_name}                                                
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="bg-gray-200 p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-64 shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                        {showAlertFirstName ? (
                                            <span className='text-red-600 text-sm'>
                                                First name is required!
                                            </span>
                                        ) : null}
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                            Last name
                                        </label>
                                        <input
                                            onChange = {(e) => setLastName(e.target.value)} 
                                            value = {last_name}                                                
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="bg-gray-200 p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-64 shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                        {showAlertLastName ? (
                                            <span className='text-red-600 text-sm'>
                                                Last name is required!
                                            </span>
                                        ) : null}
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                            Email address
                                        </label>
                                        <input
                                            onChange = {(e) => setEmail(e.target.value)} 
                                            value = {email}                                                
                                            type="text"
                                            name="email-address"
                                            id="email-address"
                                            autoComplete="email"
                                            className="bg-gray-200 p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-64 shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                        {showAlertEmail ? (                                               
                                            <span className='text-red-600 text-sm'>
                                                Email Address is required!
                                            </span>                                                
                                        ) : null}
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                            Occupation
                                        </label>
                                        <input
                                            onChange = {(e) => setOccupation(e.target.value)} 
                                            value = {occupation}                                                
                                            type="text"
                                            name="occupation"
                                            id="occupation"
                                            autoComplete="occupation"
                                            className="bg-gray-200 p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-64 shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                        {showAlertOccupation ? (
                                            <span className='text-red-600 text-sm'>
                                                Occupation is required!
                                            </span>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Add User
                                </button>
                            </div>
                            {showAlert ? (
                                <div className="px-4 py-3 text-white bg-green-600 text-center sm:px-6">
                                    <span>
                                        {message}
                                    </span>
                                </div>
                            ) : null}
                        </div>
                    </form>                
                </div>
            </div>
        </div>
    );
};

export default FormUser;