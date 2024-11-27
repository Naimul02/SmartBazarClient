import PageHeading from '../../components/SharedComponent/PageHeading';
import './shop.css'
import banner from '../../assets/image/collection-banner.webp'
import ActionBar from '../../components/ShopComponent/ActionBar';
import { useState } from 'react';
import { RxCrossCircled } from 'react-icons/rx';
import Aside from '../../components/ShopComponent/Aside';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../CustomHocks/useAxiosPublick';
import ProductCard from '../../components/ShopComponent/ProductCard';
import PaginationButton from '../../components/SharedComponent/PaginationButton';

const path = ['/', '/shop', '/shop']
const pathName = ['Home', 'Shop', 'Shop']

const Shop = () => {
    const [layOutView, setView] = useState('grid') // grid & line
    const [sortValue, setSortValue] = useState('')
    const [maxPrice , setMaxPrice]= useState(1000)
    const [minPrice , setMinPrice]= useState(0)
    const [openDrawer, setDrawer] = useState(false)
    const [currentPage, setPage] = useState(1)
    const axiosPublic = useAxiosPublic()



    const totalPages = 5

    const { data } = useQuery({
        queryKey: ['ProductData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`./productBangla.json`);
            return res.data;
        }
    });

console.log(maxPrice, minPrice);

    return (
        <div className='bg-white  '>
            <div>
                <PageHeading path={path} pathName={pathName}></PageHeading>
            </div>
            <div className="max-w">
                <div className='grid gap-2 grid-cols-12 w-full p-3 relative '>

                    <aside className=' lg:col-span-3 md:col-span-3 md:flex lg:flex hidden p-4 bb '>
                        <Aside
                         setMaxPrice={setMaxPrice}
                         setMinPrice={setMinPrice}
                         ></Aside>
                    </aside>

                    {/* aside   Start */}

                    <aside className={` absolute ${openDrawer ? 'w-6/12' : ' w-0'} transition-all duration-500 top-0 left-0  bg-white min-h-screen overflow-y-scroll pb-5 `}>
                        <button onClick={() => setDrawer(false)} className=' absolute top-2 right-3 text-2xl font-bold text-black  '><RxCrossCircled /></button>
                        <div className=" absolute top-10 left-0 w-full ">
                            <Aside></Aside>
                        </div>
                    </aside>

                    {/* aside   End */}
                    <div className='lg:col-span-9 md:col-span-9 col-span-12 w-full p-5 '>
                        <div>
                            <h1 className="text-xl font-semibold text-black mb-2">New product (22) </h1>
                            <img className=' w-full ' src={banner} alt=" collection banner " />
                        </div>

                        <ActionBar
                            layOutView={layOutView}
                            setView={setView}
                            setSortValue={setSortValue}
                            sortValue={sortValue}
                            setDrawer={setDrawer}
                            openDrawer={openDrawer}
                        ></ActionBar>


                        <div className={` grid  ${layOutView==='grid'?'grid-cols-3':' grid-cols-1'} gap-4`}>
                            {
                                data?.map((item, index) => <div key={index}>
                                    <ProductCard data={item} layOutView={layOutView} ></ProductCard>
                                </div>)
                            }

                        </div>

                        <PaginationButton currentPage={currentPage} setPage={setPage} totalPages={totalPages}  ></PaginationButton>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Shop;