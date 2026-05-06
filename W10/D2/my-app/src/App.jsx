import { useState } from 'react'
import './App.css'
import { UseContextIntro } from './components/p1'
import { CustomHooksIntro } from './components/p2'
import { useDocumentTitle } from './components/p2'
import { UseRefIntro } from './components/p3'
import { UseReducerIntro } from './components/p4'
import { UseCallbackIntro } from './components/p5'

function App() {
  return (
    <>
     {/* <UseContextIntro/> */}
     {/* <CustomHooksIntro/> */}
     {/* <UseRefIntro/> */}
     {/* <UseReducerIntro/> */}
     <UseCallbackIntro/>
    </>
  )
}

export default App