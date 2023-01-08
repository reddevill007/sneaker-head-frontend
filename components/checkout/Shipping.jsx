import React, { useState } from 'react'
import AddressForm from './AddressForm'

const Shipping = ({
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    setFieldValue,
}) => {

    const [checked, setChecked] = useState(false);

    const changeAddress = () => {
        setChecked(!checked);
    };

    return (
        <div>
            <div>
                {/* BILLING FORM */}
                <h3>BILLING INFORMATION</h3>
                <AddressForm
                    type="billingAddress"
                    values={values.billingAddress}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                />
            </div>
            <div>
                <label>
                    <input
                        defaultChecked
                        type="checkbox"
                        checked={checked}
                        value={values.shippingAddress.isShippingAddress}
                        onChange={() => setFieldValue("shippingAddress.isShippingAddress", !values.shippingAddress.isShippingAddress)}
                    />
                    Same for Shipping Address
                </label>
            </div>

            {!values.shippingAddress.isShippingAddress && (
                <div>
                    <h3>Shipping Information</h3>
                    <AddressForm
                        type="shippingAddress"
                        values={values.shippingAddress}
                        errors={errors}
                        touched={touched}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                    />
                </div>
            )}
        </div>
    )
}

export default Shipping