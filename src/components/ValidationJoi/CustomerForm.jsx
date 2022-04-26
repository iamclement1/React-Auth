import React, { useState } from 'react'
import Joi from 'joi'
import { toast } from 'react-toastify'

function CustomerForm(props) {

    const [ customer, setCustomer ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const [ error, setError ] = useState({})

    const schema = {
        firstName: Joi.string().min(1).max(20).required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required
    }
  return (
    <div></div>
  )
}

export default CustomerForm