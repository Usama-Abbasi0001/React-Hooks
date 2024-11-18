// import React, { useState } from 'react'

// function UseState() {
//     const [Value, setValue ]= useState(false)
//   return (
//     <div>
//         <span onClick={()=>setValue(!Value)}>Using Use State</span>
//     { Value && (
//         <div>Usama Abbasi</div>
//     )}
//     </div>
//   )}

// export default UseState;

// import React, { useState } from 'react';

// function UseState() {
//   const [value, setValue] = useState(false); // Use camelCase for variable names by convention

//   return (
//     <div>
//       <span 
//         onClick={() => setValue(!value)} 
//         className="cursor-pointer text-blue-500">
//         Using Use State
//       </span>
      
//       {value && (
//         <div>Usama Abbasi</div>
//       )}
//     </div>
//   );
// }

// export default UseState;
import React, { useState } from 'react'

function UseState() {
    const [data , setData]=useState("Fahad")
  return (
    <div>
        <div className='text-center text-[50px] font-bold'>
            <div>{data}</div>
            <button onClick={()=>setData("Usama", "Umar")} className='border'>Update Value</button>
        </div>
    </div>
  )
}

export default UseState;