import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HooksApp } from './hooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHoolk } from './01-useState/CounterWithCustomHoolk'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layaout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
import { MemoHook } from './06-memos/MemoHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HooksApp/>
   {/* <CounterApp/> */}
   {/* <CounterWithCustomHoolk/> */}
   {/* <SimpleForm /> */}
   {/* <FormWithCustomHook /> */}
   {/* <MultipleCustomHooks /> */}
   {/* <FocusScreen/> */}
   {/* <Layaout /> */}
   <MemoHook/>
  </React.StrictMode>,
)
