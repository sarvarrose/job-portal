import { Provider } from 'react-redux'
import JobCards from './components/JobCards'
import { store } from './store'

const App = () => {
  return (
    <Provider store={store}>
      <div className='bg-bgGray'>
        <header className='App-header'>
        </header>
        <body>
          <JobCards />
        </body>
      </div>
    </Provider>
  )
}

export default App
