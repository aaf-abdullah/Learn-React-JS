
import React from 'react';


// function Card(){
//     retrun (

// //         <div className="card bg-base-100 image-full w-96 shadow-sm">
// //   <figure>
// //     <img
// //       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
// //       alt="Shoes" />
// //   </figure>
// //   <div className="card-body">
// //     <h2 className="card-title">Card Title</h2>
// //     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
// //     <div className="card-actions justify-end">
// //       <button className="btn btn-primary">Buy Now</button>
// //     </div>
// //   </div>
// // </div>

// // src/components/Card.jsx



//     )
// }


function Card(props) {
console.log('props', props)

  return (
    <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md max-w-sm mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-2">My First Card</h2>
      <p>This is a test card using Tailwind CSS. It should render now!</p>
    </div>
  );
}




export default Card;
