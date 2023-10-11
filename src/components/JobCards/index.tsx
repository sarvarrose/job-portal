import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { selectListings, setListings } from '../../store/slices/listingsSlice'
import JobCard from './JobCard'
import { readListingsRequest } from '../../apis/listings'
import Spinner from '../Spinner'

const JobCards = () => {
  const dispatch = useAppDispatch()

  // redux does not support suspense yet
  const [isLoading, setIsLoading] = useState(true)
  const listings = useAppSelector(selectListings)

  useEffect(() => {
    ;(async () => {
      const listings = await readListingsRequest()

      dispatch(setListings(listings))
      setIsLoading(false)
    })()
  }, [])

  if (isLoading) return <Spinner />

  return (
    <div className='flex flex-wrap items-start justify-center gap-x-20 gap-y-12'>
      {listings.map((listing) => {
        return <JobCard key={listing.id} listing={listing} />
      })}
    </div>
  )
}

export default JobCards
