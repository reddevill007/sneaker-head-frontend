import React from 'react'
import { getIn } from 'formik'

const AddressForm = ({
    type,
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
}) => {

    const formattedName = (feild) => `${type}.${feild}`;

    const formattedError = (feild) =>
        Boolean(
            getIn(touched, formattedName(feild)) &&
            getIn(errors, formattedName(feild))
        );

    const formattedHelper = (feild) => getIn(touched, formattedName(feild)) && getIn(errors, formattedName(feild));

    return (
        <div className='p-10'>
            <input
                className='w-[40%] p-2 mr-2 mb-10 border'
                type="text"
                placeholder='first name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name={formattedName("firstName")}
                error={formattedError("firstName")}
                helperText={formattedHelper("firstName")}
            />
            <input
                className='w-[40%] p-2 border'
                type="text"
                placeholder='last name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name={formattedName("lastName")}
                error={formattedError("lastName")}
                helperText={formattedHelper("lastName")}
            />
            <input
                className='w-[40%] p-2 mr-2 mb-10 border'
                type="text"
                placeholder='country'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.country}
                name={formattedName("country")}
                error={formattedError("country")}
                helperText={formattedHelper("country")}
            />
            <input
                className='w-[40%] p-2 mr-2 mb-10 border'
                type="text"
                placeholder='Street Address'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.streed1}
                name={formattedName("streed1")}
                error={formattedError("streed1")}
                helperText={formattedHelper("streed1")}
            />
            <input
                className='w-[40%] p-2 mr-2 mb-10 border'
                type="text"
                placeholder='Street Address 2 (optional)'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.streed2}
                name={formattedName("streed2")}
                error={formattedError("streed2")}
                helperText={formattedHelper("streed2")}
            />
            <input
                className='w-[40%] p-2 mr-2 mb-10 border'
                type="text"
                placeholder='City'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.city}
                name={formattedName("city")}
                error={formattedError("city")}
                helperText={formattedHelper("city")}
            />
            <input
                className='w-[40%] p-2 mr-2 mb-10 border'
                type="text"
                placeholder='State'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.state}
                name={formattedName("state")}
                error={formattedError("state")}
                helperText={formattedHelper("state")}
            />
            <input
                className='w-[40%] p-2 mr-2 mb-10 border'
                type="text"
                placeholder='Zip Code'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.zipCode}
                name={formattedName("zipCode")}
                error={formattedError("zipCode")}
                helperText={formattedHelper("zipCode")}
            />
        </div>
    )
}

export default AddressForm