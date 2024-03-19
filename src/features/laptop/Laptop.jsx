import { data } from '../../dummy/products'
import { useNavigate } from "react-router"


const Laptop = () => {

  const nav = useNavigate();

  const laptop = data.products.filter(item => item.category === 'laptops')
  return (
    <div>
      <h1 className='text-3xl font-bold py-8'>Discover more. <span className='text-gray-400'>Good things are waiting for you</span></h1>
      <div className='lg:grid lg:grid-cols-4 gap-8'>
        {
          laptop.map((item) => (
            <div className="space-y-4" key={item.id}>
              <img src={item.thumbnail} alt="" className='h-[200px] w-full ' />
              <div className="space-y-2">
                <h2 className='font-bold text-xl'>{item.title}</h2>
                <p className='font-normal'>{item.description}</p>
                <div className="flex justify-between bottom-0">
                  <span className='border-[2px] border-green-400 rounded-lg p-1 font-bold'>${item.price}</span>
                  <span>{item.rating}</span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Laptop
