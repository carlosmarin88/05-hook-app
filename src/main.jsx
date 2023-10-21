import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HooksApp } from './hooksApp'
import { BrowserRouter} from "react-router-dom";
// import './08-useReuder/intro-reducer'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHoolk } from './01-useState/CounterWithCustomHoolk'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layaout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
//import { TodoApp } from './08-useReuder/TodoApp'
import { MainApp } from './09-useContext/MainApp'


ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <MainApp/>
</BrowserRouter>
)

  {/*<React.StrictMode>*/}
   {/* <HooksApp/> */}
   {/* <CounterApp/> */}
   {/* <CounterWithCustomHoolk/> */}
   {/* <SimpleForm /> */}
   {/* <FormWithCustomHook /> */}
   {/* <MultipleCustomHooks /> */}
   {/* <FocusScreen/> */}
   {/* <Layaout /> */}
   {/* <MemoHook/> */}
   {/* <CallbackHook /> */}
  //  <Padre />
  {/*<TodoApp /> */}
  {/*</React.StrictMode>*/}

