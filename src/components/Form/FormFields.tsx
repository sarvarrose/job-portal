import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { Listing } from '../../../types'
import { setFieldValue } from '../../store/slices/formSlice'
import { formFields } from '../../constants'

interface IInputFieldProps {
  id: string
  name: string
  placeholder?: string
  value: string
  error: string
  required?: boolean
  options?: {
    [key: string]: string
  }
}

export default function FormFields() {
  const { data, step } = useAppSelector((state) => state.form)
  const fields = step === 1 ? formFields.stepOne : formFields.stepTwo

  return (
    <>
      {fields.map((field) => {
        const { value, error } = data[field.id as keyof Listing]
        return <InputField key={field.id} {...field} value={value} error={error} />
      })}
    </>
  )
}

function InputField(props: IInputFieldProps) {
  const { id, name, placeholder, value, error, options, required } = props
  const dispatch = useAppDispatch()
  const border = error ? 'border-error' : 'border-neutral-300'

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(
      setFieldValue({
        input: e.target.name as keyof Listing,
        value: e.target.value
      })
    )
  }

  return (
    <div className='flex flex-col'>
      <label className='text-primary-dark text-xs font-medium lg:text-sm'>
        {name} {required && <span className='text-error'>*</span>}
      </label>
      {options ? (
        <div className='flex flex-row gap-x-4'>
          {Object.keys(options).map((key) => {
            return (
              <div key={key} className='flex flex-row items-center gap-x-2'>
                <input
                  className={`${border} text-primary-dark w-full rounded border px-4 py-2 outline-none focus:border-primary`}
                  id={id}
                  name={id}
                  type='radio'
                  value={key}
                  checked={value === key}
                  onChange={handleChange}
                  placeholder={placeholder}
                />
                <label htmlFor={key}>{options[key]}</label>
              </div>
            )
          })}
        </div>
      ) : (
        <input
          className={`${border} text-primary-dark w-full rounded border px-4 py-2 outline-none focus:border-primary`}
          id={id}
          name={id}
          type='text'
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      )}
      {error !== '' && <span className='text-sm text-error'>{error}</span>}
    </div>
  )
}
