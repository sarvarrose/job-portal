import { FC } from 'react'
import { Listing } from '../../../../types'
import Button from '../../Button.tsx'
import { useAppDispatch } from '../../../store'
import { openForm, setFormData } from '../../../store/slices/formSlice'
import deleteListing from '../../../apis/listings/deleteListing'

interface Props {
  listing: Listing
}
const JobCard: FC<Props> = ({ listing }) => {
  const dispatch = useAppDispatch()
  const { id, jobTitle, companyName, location, remoteType, totalEmployees, industry, salaryMinimum, salaryMaximum, experienceMinimum, experienceMaximum, avatar, applyType } = listing

  return (
    <div className='flex min-w-[500px] basis-[40%] flex-row items-start justify-start gap-1 self-stretch rounded-lg bg-white px-6 py-4'>
      <img className='block h-12 w-12 rounded-[5px]' src={avatar} alt='logo' />
      <div className='flex flex-col gap-y-6'>
        <div className='flex flex-col'>
          <p className='text-2xl font-normal'>{jobTitle}</p>
          <p className='text-base font-normal'>
            {companyName} - {industry}
          </p>
          <p className='text-gray text-base font-normal text-neutral-500'>{location}</p>
        </div>
        <div className='flex flex-col items-start justify-start gap-2'>
          <p className='flex items-start justify-start gap-1'>
            <p className='text-lightBlack text-base font-normal text-neutral-800'>{remoteType}</p>
          </p>
          <p className='flex items-start justify-start gap-1'>
            <p className='text-lightBlack text-base font-normal text-neutral-800'>
              Experience ({experienceMinimum} - {experienceMaximum} years)
            </p>
          </p>
          <p className='flex items-start justify-start gap-1'>
            <p className='text-lightBlack text-base font-normal text-neutral-800'>
              INR (₹) {salaryMinimum} - {salaryMaximum} / Month
            </p>
          </p>
          <p className='flex items-start justify-start gap-1'>
            <p className='text-lightBlack text-base font-normal text-neutral-800'>{totalEmployees} employees</p>
          </p>
        </div>
        <div className='flex'>
          <Button variant={applyType === 'now' ? 'filled' : 'outlined'}>{applyType === 'now' ? 'Apply Now' : 'External Apply'}</Button>
        </div>
      </div>
      <div className='flex flex-col items-end justify-end gap-y-2'>
        <Button
          variant='outlined'
          onClick={() => {
            dispatch(setFormData(listing))
            dispatch(openForm())
          }}
          className='text-2xl'
        >
          ✎
        </Button>
        <Button variant='outlined' onClick={() => deleteListing(id)} className='text-2xl'>
          ×
        </Button>
      </div>
    </div>
  )
}

export default JobCard
