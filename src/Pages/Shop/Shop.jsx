import PageHeading from '../../components/SharedComponent/PageHeading';
import './shop.css'
import banner from '../../assets/image/collection-banner.webp'
import ActionBar from '../../components/ShopComponent/ActionBar';
import { useState } from 'react';
import { RxCrossCircled } from 'react-icons/rx';
import Aside from '../../components/ShopComponent/Aside';

const path = ['/', '/shop', '/shop']
const pathName = ['Home', 'Shop', 'Shop']

const Shop = () => {
    const [layOutView, setView] = useState('grid') // grid & line
    const [sortValue, setSortValue] = useState('')
    const [openDrawer, setDrawer] = useState(false)


    return (
        <div className='bg-white  '>
            <div>
                <PageHeading path={path} pathName={pathName}></PageHeading>
            </div>
            <div className="max-w">
                <div className='grid gap-2 grid-cols-12 w-full p-3 relative  '>
                    <div className=' lg:col-span-3 md:col-span-3 md:flex lg:flex hidden p-4 bb '>

                    </div>
                    {/* aside   Start */}
                    <aside className={` absolute ${openDrawer ? 'w-6/12' : ' w-0'} transition-all duration-500 top-0 left-0  bg-white min-h-screen overflow-y-scroll pb-5 `}>
                        <button onClick={() => setDrawer(false)} className=' absolute top-2 right-3 text-2xl font-bold text-black  '><RxCrossCircled /></button>
                        <div className=" absolute top-10 left-0 w-full bg-green-600">
                        <Aside></Aside>


                        </div>
                    </aside>
                    {/* aside   End */}
                    <div className='lg:col-span-9 md:col-span-9 col-span-12 w-full bb p-5 '>
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


                        <div>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Shop;