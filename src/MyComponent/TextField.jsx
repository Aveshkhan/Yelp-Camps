import React from 'react'
import { ErrorMessage ,useField } from 'formik'

export const TextField = ({ label, ...props }) => {
    const[ field ] = useField(props)
    return (
        <div>
            <div className="inputs">
                <label htmlFor={field.name} >{label}</label>
                <input {...field} {...props} autoComplete="off" />
                <ErrorMessage component="div" name={field.name} className="error" />
            </div>
        </div>
    )
}
