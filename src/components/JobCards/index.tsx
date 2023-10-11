import { useEffect } from 'react'
import getListings from '../../apis/listings/getListings'
import { useAppDispatch, useAppSelector } from '../../store'
import { setListings } from '../../store/slices/listingsSlice'
import JobCard from './JobCard'

const JobCards = () => {
  const listings = useAppSelector((state) => state.listings)
  const dispatch = useAppDispatch()

  useEffect(() => {
    ;(async () => {
      const listings = await getListings()
      dispatch(setListings(listings))
    })()
  }, [])

  return (
    <div className='flex flex-wrap items-start justify-center gap-x-20 gap-y-12'>
      {listings.map((listing) => {
        return <JobCard key={listing.id} listing={listing} />
      })}
    </div>
  )
}

export default JobCards
