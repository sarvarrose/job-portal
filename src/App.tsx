import JobCards from './components/JobCards'
import { useAppDispatch } from './store'
import Form from './components/Form'
import { openForm } from './store/slices/formSlice'
import Button from './components/Button'

const App = () => {
  const dispatch = useAppDispatch()

  return (
    <div className='bg-bgGray'>
      <nav className='sticky top-0 mb-10 flex w-full items-center justify-center bg-white py-2 shadow-md'>
        <Button variant='filled' onClick={() => dispatch(openForm())}>
          Create A Job
        </Button>
      </nav>

      <JobCards />

      <Form />
    </div>
  )
}

export default App
