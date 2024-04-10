import React, { useEffect, useState } from 'react'
import ProductsService from '../services/productsService';

function CategoryComponent() {

    const [category, setCategory] = useState([]);
    const [isActive, setIsActive] = useState(false);

   
    // 2. useEffect
    useEffect(() => {
        ProductsService.getAllCategory()
            .then(res => setCategory(res.data))
            .catch(err => console.log(err))
    }, [])

    function handleCategoryActive(){
        setIsActive(!isActive);
    }

  return (
    <div className='bg-[#f4f4f4] py-[20px]'>
        <div className="container mx-auto flex items-center gap-[20px] flex-col lg:flex-row h-full">
            <button 
            onClick={handleCategoryActive}
            className='bg-mainBlue text-whiteTextColor px-[12px] py-[6px] rounded-md cursor-pointer hover:bg-mainYellow transition-all duration-300'>
                {isActive ? 'Hide' : 'Show'} Category
            </button>
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[10px] place-items-center'>
                {isActive ? <>{category.map((cat,index) => {
                    return <li key={index} className='bg-mainBlue text-whiteTextColor px-[16px] py-[8px]  w-[250px] text-center rounded-lg cursor-pointer hover:bg-mainYellow transition-all'>{cat}</li>
                })}</> : null}
            </ul>
        </div>
    </div>
  )
}

export default CategoryComponent