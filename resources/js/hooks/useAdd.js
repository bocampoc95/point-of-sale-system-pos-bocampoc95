import { useState } from 'react';

export const useAdd = (initialState=0)=>{
    const [quantities, setQuantities] = useState(initialState);
  const handleAddQty = (productId, stock, qty=0) => {
    if (qty !=0){
    console.log(qty)
    console.log("Dif")

      setQuantities(prevQuantities => ({
        ...prevQuantities,
        [productId]: Math.min((prevQuantities[productId] || qty) + 1, stock)
      })
    );
    }
    else{
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: Math.min((prevQuantities[productId] || 0) + 1, stock)
    })
  );
}
  };

  const handleRemoveQty = (productId, qty = 0 ) => {
    if (qty !=0){
      setQuantities(prevQuantities => ({
        ...prevQuantities,
        [productId]: Math.max((prevQuantities[productId] || qty) - 1, 0),
      }
    ));
    }
    else{
   
    
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0),
    }
  ));
}
  };

  const resetQuantities = ()=>(setQuantities(0))
      return [quantities, handleAddQty, handleRemoveQty,resetQuantities]
}


