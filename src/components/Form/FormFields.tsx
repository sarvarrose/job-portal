import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { Listing } from '../../../types'
import { setFormField } from '../../store/slices/formSlice'

interface IInputFieldProps {
  id: string
  name: string
  placeholder?: string
  value: string
  errorMessage: string
  required?: boolean
  options?: {
    [key: string]: string
  }
}

const fieldsStepOne = [
  {
    id: 'jobTitle',
    name: 'Job Title',
    placeholder: 'ex. UI UX Designer',
    required: true
  },
  {
    id: 'companyName',
    name: 'Company Name',
    placeholder: 'ex. Google',
    required: true
  },
  {
    id: 'industry',
    name: 'Industry',
    placeholder: 'ex. Information Technology',
    required: true
  },
  {
    id: 'location',
    name: 'Location',
    placeholder: 'ex. Chennai'
  },
  {
    id: 'remoteType',
    name: 'Remote Type',
    placeholder: 'ex. In-Office'
  }
]

const fieldsStepTwo = [
  {
    id: 'experienceMinimum',
    name: 'Experience Minimum',
    placeholder: 'Minimum'
  },
  {
    id: 'experienceMaximum',
    name: 'Experience Maximum',
    placeholder: 'Maximum'
  },
  {
    id: 'salaryMinimum',
    name: 'Salary Minimum',
    placeholder: 'Minimum'
  },
  {
    id: 'salaryMaximum',
    name: 'Salary Maximum',
    placeholder: 'Maximum'
  },
  {
    id: 'totalEmployees',
    name: 'Total Employee',
    placeholder: 'ex. 100',
    required: true
  },
  {
    id: 'applyType',
    name: 'Apply Type',
    options: {
      now: 'Quick apply',
      external: 'External apply'
    }
  }
]

export default function FormFields() {
  const { data, step } = useAppSelector((state) => state.form)
  console.log('%cDEBUG data\n', 'color: white; background: green', data)
  const fields = step === 1 ? fieldsStepOne : fieldsStepTwo

  return (
    <>
      {fields.map((field) => {
        const { value, error } = data[field.id as keyof Listing]
        return <InputField key={field.id} {...field} value={value} errorMessage={error} />
      })}
    </>
  )
}

function InputField(props: IInputFieldProps) {
  const { id, name, placeholder, value, errorMessage, options, required } = props
  const dispatch = useAppDispatch()
  const border = errorMessage ? 'border-secondary' : 'border-neutral-300'

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(
      setFormField({
        input: e.target.name as keyof Listing,
        value: e.target.value
      })
    )
  }

  return (
    <div className='flex flex-col'>
      <label className='text-primary-dark text-xs font-medium lg:text-sm'>
        {name} {required && <span className='text-error'>*</span>}
        {errorMessage !== '' && <span className='text-secondary float-right font-bold'>{errorMessage}</span>}
      </label>
      {options ? (
        <div className='flex flex-row gap-x-4'>
          {Object.keys(options).map((key) => {
            return (
              <div key={key} className='flex flex-row items-center gap-x-2'>
                <input
                  className='text-primary-dark focus:border-primary w-full rounded border px-4 py-2 outline-none'
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
          className={`${border} text-primary-dark focus:border-primary w-full rounded border px-4 py-2 outline-none`}
          id={id}
          name={id}
          type='text'
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      )}
    </div>
  )
}
