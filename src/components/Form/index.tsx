import { Listing } from '../../../types'
import { createListingRequest, updateListingRequest } from '../../apis/listings'
import { formFields } from '../../constants'
import { useAppDispatch, useAppSelector } from '../../store'
import { closeForm, selectForm, selectListingCreatePayload, selectListingUpdatePayload, setFieldError, setStep } from '../../store/slices/formSlice'
import { insertListing, updateListing } from '../../store/slices/listingsSlice'
import Button from '../Button'
import FormFields from './FormFields'

const Form = () => {
  const dispatch = useAppDispatch()

  const { isOpen, step, data } = useAppSelector(selectForm)
  const listingCreatePayload = useAppSelector(selectListingCreatePayload)
  const listingUpdatePayload = useAppSelector(selectListingUpdatePayload)

  const handleFormAction = async () => {
    // validate form before proceeding
    const fields = step === 1 ? formFields.stepOne : formFields.stepTwo

    // @ts-ignore
    const requiredFieldIds: keyof Listing[] = fields.filter((field) => field.required).map((field) => field.id)
    // @ts-ignore
    const fieldsWithErrors = requiredFieldIds.filter((id) => data[id].value === '')

    // validation failed
    if (fieldsWithErrors.length > 0) {
      fieldsWithErrors.forEach((id: keyof Listing) => dispatch(setFieldError({ input: id, error: 'This field is required' })))

      return
    }

    if (step === 1) {
      dispatch(setStep(2))
    } else {
      // make api call
      if (data.id.value) {
        const updatedListing = await updateListingRequest(listingUpdatePayload)
        dispatch(updateListing(updatedListing))
      } else {
        const createdListing = await createListingRequest(listingCreatePayload)
        dispatch(insertListing(createdListing))
      }
      dispatch(closeForm())
    }
  }

  if (!isOpen) return null

  return (
    <div className='relative z-10' aria-labelledby='modal-title' role='dialog' aria-modal='true'>
      <div className='bg-gray-500 fixed inset-0 bg-opacity-75 transition-opacity'></div>
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
            <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
              <div className='flex flex-col gap-y-6 rounded-lg bg-white p-8'>
                <div className='flex justify-between'>
                  <span className='text-xl'>Create a job</span>
                  <span>Step {step}</span>
                  <button
                    type='button'
                    className='text-gray-400 hover:bg-gray-200 absolute right-2.5 top-3 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm'
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
        </div>
      </div>
    </div>
  )
}

export default Form
