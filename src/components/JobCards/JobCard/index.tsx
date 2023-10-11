import { FC } from 'react'
import { Listing } from '../../../../types'

interface Props {
  listing: Listing
}
const JobCard: FC<Props> = ({ listing }) => {
  const { jobTitle, companyName, location, remoteType, totalEmployees, industry, salary, experience, avatar, applyType } = listing

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
              Experience ({experience.minumum} - {experience.maximum} years)
            </p>
          </p>
          <p className='flex items-start justify-start gap-1'>
            <p className='text-lightBlack text-base font-normal text-neutral-800'>
              INR (₹) {salary.minumum} - {salary.maximum} / Month
            </p>
          </p>
          <p className='flex items-start justify-start gap-1'>
            <p className='text-lightBlack text-base font-normal text-neutral-800'>{totalEmployees} employees</p>
          </p>
        </div>
        <div className='flex'>
          <button className={`rounded-xl px-4 py-2 ${applyType === 'now' ? 'bg-primary text-white' : 'border-primary text-primary border'}`}>
            {applyType === 'now' ? 'Apply Now' : 'External Apply'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default JobCard
