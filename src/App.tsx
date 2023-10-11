import JobCards from './components/JobCards'
import { useAppDispatch } from './store'
import Form from './components/Form'
import { openForm } from './store/slices/formSlice'
import Button from './components/Button.tsx'

const App = () => {
  const dispatch = useAppDispatch()

  return (
    <body className='bg-bgGray'>
      <header className='mb-10 flex items-center justify-center bg-white py-2'>
        <Button variant='filled' onClick={() => dispatch(openForm())}>
          Create A Job
        </Button>
      </header>
      <JobCards />
      <Form />
    </body>
  )
}

export default App
