import { useParams } from 'react-router-dom'
import { data } from "../dummy/products"

const Details = () => {

  const { id } = useParams();
  console.log(id);

  const product = data.products.find(item => item.id === parseInt(id));

  return (
    <div className='space-y-2'>
      <img src={product.images[1]} alt="" />
      <h1 className='text-2xl font-bold'>{product.title}</h1>
      <p>{product.brand}</p>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <p>Stock: {product.stock}</p>
    </div>
  )
}

export default Details
