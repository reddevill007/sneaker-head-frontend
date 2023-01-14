import React from 'react'

const Payment = ({ values, touched, errors, handleBlur, handleChange }) => {
    return (
        <div className='my-20'>
            <h1 className='text-black text-5xl'>Contact Info</h1>
            <input
                className='w-[40%] p-2 mr-2 mb-10 border'
                type="text"
                placeholder='email'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
            />
            <input
                className='w-[40%] p-2 mr-2 mb-10 border'
                type="email"
                placeholder='Phone Number'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phoneNumber}
                name="phoneNumber"
                error={!!touched.phoneNumber && !!errors.phoneNumber}
                helperText={touched.phoneNumber && errors.phoneNumber}
            />
        </div>
    )
}

export default Payment