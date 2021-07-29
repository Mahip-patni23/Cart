import React from 'react';
import Navbar from './Navbar';
import Cartcontainer from './Cartcontainer';
import {useGlobalcontext} from './Context'


function App() {

  const {isLoading} = useGlobalcontext()

  /* useEffect(() => {
    fetchData();
  },[]) */

  if(isLoading){
    return <h2>Loading...</h2>
  }

  return <main>
      <Navbar></Navbar>
      <Cartcontainer></Cartcontainer>
    </main>
}

export default App;
