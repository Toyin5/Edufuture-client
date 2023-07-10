
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import logo from "../assets/edufuture.png"
import Button from "../components/Button";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { logUser } from "../services/auth";
import { Spinner, useToast } from '@chakra-ui/react'
import { useState } from "react";

export default function Login() {
    interface IUser {
        email: string;
        password: string;
    }
    const toast = useToast()
    const [loading, setloading] = useState(false)
    return (
        <>
            <Helmet>
                <title>Login - EduFuture</title>
            </Helmet>
            <main className='bg-gray-50 dark:bg-gray-900 w-full h-screen flex flex-col items-center justify-center px-4'>
                <div className='max-w-sm w-full text-gray-600 dark:text-gray-300'>
                    <div className='text-center'>
                        <a href="/" className="flex items-center">
                            <img src={logo} alt="Brand logo" className="w-10 mr-4" />
                            <span className="font-bold text-2xl">EduFuture</span>
                        </a>
                        <div className='mt-5 space-y-2'>
                            <h3 className='text-gray-800 dark:text-white text-2xl font-bold sm:text-3xl'>
                                Log in to your account
                            </h3>
                            <p className=''>
                                Don't have an account?{" "}
                                <Link
                                    to='/register'
                                    className='font-medium text-blue-600 dark:text-sky-500 hover:text-blue-400 dark:hover:text-sky-600 duration-150'>
                                    Register
                                </Link>
                            </p>
                        </div>
                    </div>
                    <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        validationSchema={Yup.object({
                            email: Yup.string().email('Invalid email address').required('Required'),
                            password: Yup.string().required('Password is required')
                                .min(8, 'Password must be at least 8 characters long')
                                .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
                                .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
                                .matches(/[0-9]/, 'Password must contain at least one number')
                                .matches(/[!@#$%^&*()_+-~]/, 'Password must contain at least one special character'),
                        })}
                        onSubmit={async (values, { setSubmitting }) => {

                            const res = await logUser<IUser>(values)
                            setloading(true)
                            if (res.status === 200) {
                                toast({
                                    title: 'Login successful',
                                    description: "You will redirected to your dashboard",
                                    status: 'success',
                                    duration: 9000,
                                    isClosable: true,
                                })
                            }
                            if (res.status === 403) {
                                toast({
                                    title: 'Account not verified',
                                    description: "Check your mail for the verification link",
                                    status: 'warning',
                                    duration: 9000,
                                    isClosable: true,
                                })
                            }
                            if (res.status === 401) {
                                toast({
                                    title: 'Incorrect password',
                                    description: "Forgot your password?",
                                    status: 'error',
                                    duration: 9000,
                                    isClosable: true,
                                })
                            }
                            if (res.status === 400) {
                                toast({
                                    title: 'Server error',
                                    description: "Check your internet",
                                    status: 'error',
                                    duration: 9000,
                                    isClosable: true,
                                })
                            }
                            if (res.status === 404) {
                                toast({
                                    title: 'Account not found',
                                    description: "Register an account",
                                    status: 'error',
                                    duration: 9000,
                                    isClosable: true,
                                })
                            }
                            setSubmitting(true)
                            setloading(false)
                        }}
                    >
                        <Form className='mt-8 space-y-5'>

                            <div>
                                <label className='font-medium' htmlFor="email">Email Address</label>
                                <Field className='w-full mt-2 bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:text-gray-300 focus:border-gray-800 px-3 py-2 text-gray-500 outline-none border dark:border-gray-800 shadow-sm rounded-lg duration-150' name="email" type="email" />
                                <ErrorMessage name="email" />
                            </div>
                            <div>
                                <label className='font-medium' htmlFor="password">Password</label>
                                <Field className='w-full mt-2 bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:text-gray-300 focus:border-gray-800 px-3 py-2 text-gray-500 outline-none border dark:border-gray-800 shadow-sm rounded-lg duration-150' name="password" type="password" />
                                <ErrorMessage name="password" />
                            </div>


                            <Button type="submit" className='w-full text-white bg-gray-800 dark:bg-sky-500 hover:bg-gray-700 dark:hover:bg-sky-600 ring-offset-2 ring-gray-800 dark:ring-sky-500 focus:ring shadow rounded-lg'>
                                {(loading) ? <Spinner /> : "Sign in"}
                            </Button>
                        </Form>
                    </Formik>
                </div>
            </main>
        </>
    );
}
