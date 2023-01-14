import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Formik } from 'formik'
import * as yup from 'yup'
import Payment from '../../components/checkout/Payment'
import Shipping from '../../components/checkout/Shipping'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(
    "pk_test_51MPdxVSBIBbCCoMm4a9nvnkFhVApgqtep9b53gWSwSu9qmy9AWMp45KQ31GuRHJPHc3YfThzGfUzT2cmP8pwSTcP005hecK0ls"
)

const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0);
    const cart = useSelector((state) => state.cart.cart);
    const isFirstStep = activeStep === 0;
    const isSecondStep = activeStep === 1;

    const handleFormSubmit = async (values, action) => {
        setActiveStep(activeStep + 1);

        // copies the billing address onto shipping address
        if (isFirstStep && values.shippingAddress.isSameAddress) {
            action.setFieldValue("shippingAddress", {
                ...values.billingAddress,
                isSameAddress: true
            })
        }

        if (isSecondStep) {
            makePayment(values)
        }

        action.setTouched({})
    }

    async function makePayment(values) {
        const stripe = await stripePromise;
        const requestBody = {
            userName: [values.firstName, values.lastName].join(" "),
            email: values.email,
            product: cart.map(({ id, count }) => ({
                id,
                count,
            }))
        };

        const res = await fetch("http://localhost:1337/api/orders", {
            method: "POST",
            header: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        });

        const session = await res.json();
        await stripe.redirectToCheckout({
            sessionId: session.id
        })
    }

    console.log(activeStep)

    return (
        <div className='mt-16'>
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema[activeStep]}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                }) => (
                    <form onSubmit={handleSubmit}>
                        {isFirstStep && (
                            <Shipping
                                values={values}
                                errors={errors}
                                touched={touched}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                setFieldValue={setFieldValue}
                            />
                        )}
                        {isSecondStep && (
                            <Payment
                                values={values}
                                errors={errors}
                                touched={touched}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                setFieldValue={setFieldValue}
                            />
                        )}

                        <div>
                            {isFirstStep && (
                                <button onClick={() => setActiveStep(activeStep - 1)} className='border p-4'>Back</button>
                            )}
                            <button type='submit' onClick={() => handleFormSubmit} className='border p-4'>{!isSecondStep ? "Next" : "Place Order"}</button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

const initialValues = {
    billingAddress: {
        firstName: "",
        lastName: "",
        country: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        zipCode: "",
    },
    shippingAddress: {
        isSameAddress: true,
        firstName: "",
        lastName: "",
        country: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        zipCode: "",
    },
    email: "",
    phoneNumber: "",
}

const checkoutSchema = [
    yup.object().shape({
        billingAddress: yup.object().shape({
            firstName: yup.string().required("required"),
            lastName: yup.string().required("required"),
            country: yup.string().required("required"),
            street1: yup.string().required("required"),
            street2: yup.string(),
            city: yup.string().required("required"),
            state: yup.string().required("required"),
            zipCode: yup.string().required("required"),
        }),

        shippingAddress: yup.object().shape({
            isSameAddress: yup.boolean(),
            firstName: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required("required")
            }),
            lastName: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required("required")
            }),
            country: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required("required")
            }),
            street1: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required("required")
            }),
            street2: yup.string(),
            city: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required("required")
            }),
            state: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required("required")
            }),
            zipCode: yup.string().when("isSameAddress", {
                is: false,
                then: yup.string().required("required")
            }),
        }),
    }),
    yup.object().shape({
        email: yup.string().required("required"),
        phoneNumber: yup.string().required("required")
    })
]

export default Checkout