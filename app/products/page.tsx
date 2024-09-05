import { PRODUCT_URL } from '@/constants'
import React from 'react'
import ProductCard from '../components/ProductCard';

const Product = async () => {

    const data = await fetch(PRODUCT_URL)
                .then((res) => res.json());
                
          console.log(data)
          console.log(typeof data)

            

  return (
    <div className='grid grid-cols-4 gap-4'>
      { data && data.products && data.products.map((product:any) => {
        return (
          <ProductCard 
          key={product.stock}
          image={product.thumbnail} 
          title={product.title} 
          description={product.description}/>
                );
        })
      }
      
    </div>
  )
}

export default Product
