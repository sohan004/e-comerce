import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import img from '../../assets/carusalIMG/productIMg2.jpg'
import img2 from '../../assets/carusalIMG/product.png'


const CategorisPage = () => {
    // const quary = new URLSearchParams(useLocation().search)
    // console.log(quary.get('email'));
    return (
        <div className='max-w-6xl mx-auto flex items-start'>
            <div className='h-[100vh] overflow-y-auto pt-3 border bg-slate-200  lg:w-56'>
                <div className='py-2 px-2 lg:px-3 border-b border-stone-300 mb-4'>
                    <img className='lg:w-14 w-10 h-10 lg:h-14  mx-auto' src={img} alt="" />
                    <p className='text-center text-[10px] mt-1 lg:text-base font-medium'>All Categories</p>
                </div>
                <div className='py-2 px-2 lg:px-3 border-b border-stone-300 mb-4'>
                    <img className='lg:w-14 w-10 h-10 lg:h-14  mx-auto' src={img} alt="" />
                    <p className='text-center text-[10px] mt-1 lg:text-base font-medium'>Categories</p>
                </div>
                <div className='py-2 px-2 lg:px-3 border-b border-stone-300 mb-4'>
                    <img className='lg:w-14 w-10 h-10 lg:h-14  mx-auto' src={img} alt="" />
                    <p className='text-center text-[10px] mt-1 lg:text-base font-medium'>Categories</p>
                </div>
                <div className='py-2 px-2 lg:px-3 border-b border-stone-300 mb-4'>
                    <img className='lg:w-14 w-10 h-10 lg:h-14  mx-auto' src={img} alt="" />
                    <p className='text-center text-[10px] mt-1 lg:text-base font-medium'>Categories</p>
                </div>
                <div className='py-2 px-2 lg:px-3 border-b border-stone-300 mb-4'>
                    <img className='lg:w-14 w-10 h-10 lg:h-14  mx-auto' src={img} alt="" />
                    <p className='text-center text-[10px] mt-1 lg:text-base font-medium'>Categories</p>
                </div>
            </div>

            <div className='flex-grow h-[100vh] overflow-y-auto'>
                <div className='w-full grid grid-cols-2 gap-[2px]  md:grid-cols-3 lg:grid-cols-4'>
                    <div className='px-1 py-4 lg:p-3 bg-white duration-300 hover:scale-105 hover:shadow-lg'>
                        <img className='lg:w-24 w-16 h-16 lg:h-24  mx-auto' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpXlBbrnemR6Kbq4Fk5Hj6LeoCYLIXpuIlA&usqp=CAU'} alt="" />
                        <p className='text-center text-xs mt-1 lg:text-base font-medium'>men pent</p>
                    </div>
                    <div className='px-1 py-4 lg:p-3 bg-white duration-300 hover:scale-105 hover:shadow-lg'>
                        <img className='lg:w-24 w-16 h-16 lg:h-24  mx-auto' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpXlBbrnemR6Kbq4Fk5Hj6LeoCYLIXpuIlA&usqp=CAU'} alt="" />
                        <p className='text-center text-xs mt-1 lg:text-base font-medium'>men pent</p>
                    </div>
                    <div className='px-1 py-4 lg:p-3 bg-white duration-300 hover:scale-105 hover:shadow-lg'>
                        <img className='lg:w-24 w-16 h-16 lg:h-24  mx-auto' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpXlBbrnemR6Kbq4Fk5Hj6LeoCYLIXpuIlA&usqp=CAU'} alt="" />
                        <p className='text-center text-xs mt-1 lg:text-base font-medium'>men pent</p>
                    </div>
                    <div className='px-1 py-4 lg:p-3 bg-white duration-300 hover:scale-105 hover:shadow-lg'>
                        <img className='lg:w-24 w-16 h-16 lg:h-24  mx-auto' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpXlBbrnemR6Kbq4Fk5Hj6LeoCYLIXpuIlA&usqp=CAU'} alt="" />
                        <p className='text-center text-xs mt-1 lg:text-base font-medium'>men pent</p>
                    </div>
                    <div className='px-1 py-4 lg:p-3 bg-white duration-300 hover:scale-105 hover:shadow-lg'>
                        <img className='lg:w-24 w-16 h-16 lg:h-24  mx-auto' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpXlBbrnemR6Kbq4Fk5Hj6LeoCYLIXpuIlA&usqp=CAU'} alt="" />
                        <p className='text-center text-xs mt-1 lg:text-base font-medium'>men pent</p>
                    </div>
                    <div className='px-1 py-4 lg:p-3 bg-white duration-300 hover:scale-105 hover:shadow-lg'>
                        <img className='lg:w-24 w-16 h-16 lg:h-24  mx-auto' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpXlBbrnemR6Kbq4Fk5Hj6LeoCYLIXpuIlA&usqp=CAU'} alt="" />
                        <p className='text-center text-xs mt-1 lg:text-base font-medium'>men pent</p>
                    </div>
                    <div className='px-1 py-4 lg:p-3 bg-white duration-300 hover:scale-105 hover:shadow-lg'>
                        <img className='lg:w-24 w-16 h-16 lg:h-24  mx-auto' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpXlBbrnemR6Kbq4Fk5Hj6LeoCYLIXpuIlA&usqp=CAU'} alt="" />
                        <p className='text-center text-xs mt-1 lg:text-base font-medium'>men pent</p>
                    </div>
                    <div className='px-1 py-4 lg:p-3 bg-white duration-300 hover:scale-105 hover:shadow-lg'>
                        <img className='lg:w-24 w-16 h-16 lg:h-24  mx-auto' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpXlBbrnemR6Kbq4Fk5Hj6LeoCYLIXpuIlA&usqp=CAU'} alt="" />
                        <p className='text-center text-xs mt-1 lg:text-base font-medium'>men pent</p>
                    </div>
                    <div className='px-1 py-4 lg:p-3 bg-white duration-300 hover:scale-105 hover:shadow-lg'>
                        <img className='lg:w-24 w-16 h-16 lg:h-24  mx-auto' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpXlBbrnemR6Kbq4Fk5Hj6LeoCYLIXpuIlA&usqp=CAU'} alt="" />
                        <p className='text-center text-xs mt-1 lg:text-base font-medium'>men pent</p>
                    </div>
                    <div className='px-1 py-4 lg:p-3 bg-white duration-300 hover:scale-105 hover:shadow-lg'>
                        <img className='lg:w-24 w-16 h-16 lg:h-24  mx-auto' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpXlBbrnemR6Kbq4Fk5Hj6LeoCYLIXpuIlA&usqp=CAU'} alt="" />
                        <p className='text-center text-xs mt-1 lg:text-base font-medium'>men pent</p>
                    </div>
                    <div className='px-1 py-4 lg:p-3 bg-white duration-300 hover:scale-105 hover:shadow-lg'>
                        <img className='lg:w-24 w-16 h-16 lg:h-24  mx-auto' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpXlBbrnemR6Kbq4Fk5Hj6LeoCYLIXpuIlA&usqp=CAU'} alt="" />
                        <p className='text-center text-xs mt-1 lg:text-base font-medium'>men pent</p>
                    </div>
                    <div className='px-1 py-4 lg:p-3 bg-white duration-300 hover:scale-105 hover:shadow-lg'>
                        <img className='lg:w-24 w-16 h-16 lg:h-24  mx-auto' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpXlBbrnemR6Kbq4Fk5Hj6LeoCYLIXpuIlA&usqp=CAU'} alt="" />
                        <p className='text-center text-xs mt-1 lg:text-base font-medium'>men pent</p>
                    </div>
                    <div className='px-1 py-4 lg:p-3 bg-white duration-300 hover:scale-105 hover:shadow-lg'>
                        <img className='lg:w-24 w-16 h-16 lg:h-24  mx-auto' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpXlBbrnemR6Kbq4Fk5Hj6LeoCYLIXpuIlA&usqp=CAU'} alt="" />
                        <p className='text-center text-xs mt-1 lg:text-base font-medium'>men pent</p>
                    </div>
                    <div className='px-1 py-4 lg:p-3 bg-white duration-300 hover:scale-105 hover:shadow-lg'>
                        <img className='lg:w-24 w-16 h-16 lg:h-24  mx-auto' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpXlBbrnemR6Kbq4Fk5Hj6LeoCYLIXpuIlA&usqp=CAU'} alt="" />
                        <p className='text-center text-xs mt-1 lg:text-base font-medium'>men pent</p>
                    </div>
                    <div className='px-1 py-4 lg:p-3 bg-white duration-300 hover:scale-105 hover:shadow-lg'>
                        <img className='lg:w-24 w-16 h-16 lg:h-24  mx-auto' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpXlBbrnemR6Kbq4Fk5Hj6LeoCYLIXpuIlA&usqp=CAU'} alt="" />
                        <p className='text-center text-xs mt-1 lg:text-base font-medium'>men pent</p>
                    </div>
                    <div className='px-1 py-4 lg:p-3 bg-white duration-300 hover:scale-105 hover:shadow-lg'>
                        <img className='lg:w-24 w-16 h-16 lg:h-24  mx-auto' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpXlBbrnemR6Kbq4Fk5Hj6LeoCYLIXpuIlA&usqp=CAU'} alt="" />
                        <p className='text-center text-xs mt-1 lg:text-base font-medium'>men pent</p>
                    </div>
                </div>
            </div>





            {/* Open the modal using ID.showModal() method */}
            {/* <button className="btn" onClick={() => window.spin.showModal()}>open modal</button> */}
           



        </div>
    );
};

export default CategorisPage;