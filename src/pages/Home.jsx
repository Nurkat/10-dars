import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductItem from '../components/ProductItem'
import { Empty, Input} from 'antd'
import Amazon from '../assets/images/amazon-logo.png'
import { LoadingOutlined } from '@ant-design/icons'
import useDebounce from '../hook/useDebaunce'


function Home() {
   const [products,setProducts] = useState([]) 
   const [isLoading,setIsLoading]= useState(true)
   const [searchValue,setSearchValue] =useState("")
function handleProductsSearch(e){
  setIsLoading(true)
  setSearchValue(e.target.value)
}
 const searchWaitingValue = useDebounce(searchValue,800)




useEffect(() =>{
axios.get(`https://api.escuelajs.co/api/v1/products/?title=${searchWaitingValue}&offset=0&limit=20`).then(res =>{
    setProducts(res.data);
    setIsLoading(false)
    
})
},[searchWaitingValue])


  return (
   <>
   <header className='w-full bg-slate-600 p-3'>
   <div className='mx-10  flex items-center justify-between'>
    <img className='rounded-full' src={Amazon} alt="Amazon-Logo" width={80} height={80} />
    <Input onChange={handleProductsSearch} name='searching' placeholder='Search Products' size='large' allowClear className='w-[300px] '/>
 
   </div>
   </header>
   <ul className='flex flex-wrap justify-between gap-4  p-10'>
    {isLoading 
    ? <li className='mx-auto mt-5'><LoadingOutlined className="text-blue-400" style={{fontSize:"60px"}}/></li>
    : products.length >0 ? products.map(item => <ProductItem key={item.id} item={item}/>) : <Empty className='block mx-auto'/>
    }
   </ul>
   
   </>
  )
}

export default Home