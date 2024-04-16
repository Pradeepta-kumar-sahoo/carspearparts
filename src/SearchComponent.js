import React from 'react'
import Productdetail from './Navbar/Frontvideo/Couraisol/SearchCatagory/Product/Productdetail'


const SearchComponent = () => {
  return (
    <div>
      

        {
          Productdetail.map((prod,index)=>{
            return(
              <>
              <div key={index}>
                <h1>{prod.name}</h1>
                <p>{prod.price}</p>
              </div>
              </>
            )
          })
        }
      
      
  
        
    </div>
  )
}

export default SearchComponent

// import React from 'react';
// import { useParams } from 'react-router-dom'; // Import useParams hook
// import Productdetail from './Navbar/Frontvideo/Couraisol/SearchCatagory/Product/Productdetail';

// const SearchComponent = () => {
//   // Extracting the id parameter from the URL using useParams hook
//   const { id } = useParams();
//   const productId = parseInt(id);
  
//   // Finding the product with the matching id from the dummy data
//   const product = Productdetail.find(prod => prod.id === productId);

//   // Rendering the product details if product is found
//   return product ? (
//     <div>
//       <h1>{product.name}</h1>
//       <p>{product.price}</p>
//       {/* Render other details */}
//     </div>
//   ) : (
//     <div>
//       <h1>Product Not Found</h1>
//     </div>
//   );
// };

// export default SearchComponent;
