import React, { useEffect, useState } from 'react';
import style from './wordro.css'

const messages = [
  'a Brighter Future',
  'Improved Well-Being.',
  'a Better Life.',
  'Optimal Senior Care.',
];

const Wordrotation = () => {


  return (
    <h2>
    Unlock the Power of<br></br> Gerontechnology for
    <div class="mask">
      <span class="show">a Brighter Future</span>
      <span>Improved Well-Being.</span>
      <span>a Better Life.</span>
      <span>Optimal Senior Care.</span>
    </div>
  </h2>
  );
};

export default Wordrotation;
// const Wordrotation = () => {
//   const [show, setShow] = useState(0);
//   const items = [
//     'a Brighter Future',
//     'Improved Well-Being.',
//     'a Better Life.',
//     'Optimal Senior Care.'
//   ];
  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShow((show + 1) % items.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [show]);
  
//   return (
//     <h2>
//       Unlock the Power of Gerontechnology for
//       <div className="mask">
//         {items.map((item, index) => (
//           <span data-show={show === index} key={item}>
//             {item}
//           </span>
//         ))}
//       </div>
//     </h2>
//   );
// };


// export default Wordrotation;