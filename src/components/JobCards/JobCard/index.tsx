import { FC } from 'react'
import { Listing } from '../../../../types'
import Button from '../../Button'
import { useAppDispatch } from '../../../store'
import { openForm } from '../../../store/slices/formSlice'
import { deleteListing } from '../../../store/slices/listingsSlice'
import { deleteListingRequest } from '../../../apis/listings'

interface Props {
  listing: Listing
}
const JobCard: FC<Props> = ({ listing }) => {
  const { id, jobTitle, companyName, location, remoteType, totalEmployees, industry, salaryMinimum, salaryMaximum, experienceMinimum, experienceMaximum, avatar, applyType } = listing

  const dispatch = useAppDispatch()
  const handleDelete = async () => {
    await deleteListingRequest(id)

    dispatch(deleteListing(id))
  }

  return (
    <div className='flex min-w-[500px] basis-[40%] flex-row items-start justify-start gap-1 self-stretch rounded-lg bg-white px-6 py-4'>
      <img className='block h-12 w-12 rounded-[5px]' src={avatar} alt='logo' />
      <div className='flex flex-col gap-y-6'>
        <div className='flex flex-col'>
          <p className='text-2xl font-normal'>{jobTitle}</p>
          <p className='text-base font-normal'>
            {companyName} - {industry}
          </p>
          <p className='text-neutral-500 text-base font-normal text-gray'>{location}</p>
        </div>
        <div className='flex flex-col items-start justify-start gap-2'>
          <div className='flex items-start justify-start gap-1'>
            <p className='text-neutral-800 text-base font-normal text-lightBlack'>{remoteType}</p>
          </div>
          <div className='flex items-start justify-start gap-1'>
            <p className='text-neutral-800 text-base font-normal text-lightBlack'>
              Experience ({experienceMinimum} - {experienceMaximum} years)
            </p>
          </div>
          <div className='flex items-start justify-start gap-1'>
            <p className='text-neutral-800 text-base font-normal text-lightBlack'>
              INR (₹) {salaryMinimum} - {salaryMaximum} / Month
            </p>
          </div>
          <div className='flex items-start justify-start gap-1'>
            <p className='text-neutral-800 text-base font-normal text-lightBlack'>{totalEmployees} employees</p>
          </div>
        </div>
        <div className='flex'>
          <Button variant={applyType === 'now' ? 'filled' : 'outlined'}>{applyType === 'now' ? 'Apply Now' : 'External Apply'}</Button>
        </div>
      </div>
      <div className='flex flex-auto flex-col items-end justify-end gap-y-2'>
        <Button variant='outlined' onClick={() => dispatch(openForm(listing))} className='text-2xl'>
          ✎
        </Button>
        <Button variant='outlined' onClick={handleDelete} className='text-2xl'>
          ×
        </Button>
      </div>
    </div>
  )
}

export default JobCard
