import createListing from '../../apis/listings/createListing'
import updateListing from '../../apis/listings/updateListing'
import { useAppDispatch, useAppSelector } from '../../store'
import { closeForm, selectListingCreatePayload, selectListingUpdatePayload, setStep } from '../../store/slices/formSlice'
import Button from '../Button.tsx'
import FormFields from './FormFields'

const Form = () => {
  const dispatch = useAppDispatch()
  const { isOpen, step, data } = useAppSelector((state) => state.form)
  const listingCreatePayload = useAppSelector(selectListingCreatePayload)
  const listingUpdatePayload = useAppSelector(selectListingUpdatePayload)
  if (!isOpen) return null

  const handleFormAction = async () => {
    if (step === 1) {
      dispatch(setStep(2))
    } else {
      const data1 = data.id.value ? await updateListing(listingUpdatePayload) : await createListing(listingCreatePayload)

      console.log('%cDEBUG data\n', 'color: white; background: green', data1)
      dispatch(closeForm())
    }
  }

  return (
    <div id='authentication-modal' tabIndex={-1} aria-hidden='true' className='relative top-0 z-50 h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0'>
      <div className='relative max-h-full w-full max-w-md'>
        <div className='flex flex-col gap-y-6 rounded-lg bg-white p-8'>
          <div className='flex justify-between'>
            <span>Create a job</span>
            <span>Step {step}</span>
            <button
              type='button'
              className='absolute right-2.5 top-3 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'
              onClick={() => dispatch(closeForm())}
            >
              <svg className='h-3 w-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'>
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6' />
              </svg>
              <span className='sr-only'>Close modal</span>
            </button>
          </div>
          <FormFields />
          <div className='flex justify-end'>
            <Button variant='filled' onClick={handleFormAction}>
              {step === 1 ? 'Next' : 'Save'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
