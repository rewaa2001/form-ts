import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  return (
    <div className="bg-red-50">
   <h1 > job form  </h1>
    <hr/>
    <form >
   <label > name </label>
   <input
    value={name}
          onChange={e => setName(e.target.value)}
   />

   <label > phone number </label>
   <input/>

   <label > age </label>
   <input/>
   
   <label > Checkbox </label>
   <input type="checkbox"  />


 </form>
    </div>
  )
}

export default App