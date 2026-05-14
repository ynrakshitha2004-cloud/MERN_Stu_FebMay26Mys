import './App.css'
import { ManagingApiState } from "./components/p1";
import { UseEffectLifecycle } from "./components/p2";
import { AxiosLifecycle } from "./components/p3";
import { CRUDOperation } from './components/p4';

function App() {

  return (
    <>
      {/* <ManagingApiState /> */}
      {/* <UseEffectLifecycle /> */}
      {/* <AxiosLifecycle /> */}
      <CRUDOperation />
    </>
  )
}

export default App;