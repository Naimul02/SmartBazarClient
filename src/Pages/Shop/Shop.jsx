import PageHeading from '../../components/SharedComponent/PageHeading';
import './shop.css'
import banner from '../../assets/image/collection-banner.webp'
import ActionBar from '../../components/ShopComponent/ActionBar';
import { useState } from 'react';
import { RxCrossCircled } from 'react-icons/rx';
import Aside from '../../components/ShopComponent/Aside';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../CustomHocks/useAxiosPublic';
import ProductCard from '../../components/ShopComponent/ProductCard';
import PaginationButton from '../../components/SharedComponent/PaginationButton';
import { Helmet } from 'react-helmet';

const path = ['/', '/shop']
const pathName = ['Home', 'Shop',]

const Shop = () => {
    const [layOutView, setView] = useState('grid') // grid & line



    const [sortBy, setSortBy] = useState('name')
    const [sortOrder, setSortOrder] = useState('asc')
    const [maxPrice, setMaxPrice] = useState(1000)
    const [minPrice, setMinPrice] = useState(0)
    const [selectedLocation, setLocation] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentPage, setPage] = useState(1)

    const [openDrawer, setDrawer] = useState(false)

    const axiosPublic = useAxiosPublic()
    const itemPerPage = 9;

    console.log(selectedLocation, selectedCategory);




    // const FilterData = {
    //     location: [
    //         { name: 'সিলেট', TotalData: 10 },
    //         { name: 'রাজশাহী', TotalData: 5 },
    //     ],
    //     category: [
    //         { name: 'ফল', totalProduct: 20 },
    //         { name: 'মশলা', totalProduct: 10 },

    //     ],
    //     newProduct:20
    // }

    const { data, isLoading, error } = useQuery({
        queryKey: ['ProductData', currentPage, itemPerPage, sortOrder, sortBy, minPrice, maxPrice, selectedCategory, selectedLocation],
        queryFn: async () => {
            const res = await axiosPublic.get(`/products?page=${currentPage}&limit=${itemPerPage}&sortBy=${sortBy}&sortOrder=${sortOrder}&minPrice=${minPrice}&maxPrice=${maxPrice}&location=${selectedLocation}&category=${selectedCategory}`);
            return res.data;
        }
    });

    console.log(data?.pagination?.totalPages);


    if (error) return <div>Error</div>
    return (
        //   <div></div>
        <div className='bg-white  '>
            <Helmet>
                <title>Shop|| SmartBazar </title>
            </Helmet>

            <div>
                <PageHeading path={path} pathName={pathName}></PageHeading>
            </div>
            <div className="max-w">
                <div className='grid gap-2 grid-cols-12 w-full p-1 relative '>

                    <aside className=' lg:col-span-3 md:col-span-3 md:flex lg:flex hidden p-3 '>
                        <Aside
                            setMaxPrice={setMaxPrice}
                            setMinPrice={setMinPrice}
                            selectedLocation={selectedLocation}
                            setLocation={setLocation}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        ></Aside>
                    </aside>

                    {/* aside   Start for mobile screen */}

                    <aside className={` absolute  ${openDrawer ? 'w-6/12 left-0' : ' w-0 -left-full'} transition-all duration-500 top-0   bg-white h-full overflow-y-scroll pb-5 z-40 p-3`}>
                        <button onClick={() => setDrawer(false)} className=' absolute top-2 right-3 text-2xl font-bold text-black  '><RxCrossCircled /></button>
                        <div className=" absolute top-10 left-0 w-full p-2 ">
                            <Aside
                                setMaxPrice={setMaxPrice}
                                setMinPrice={setMinPrice}
                                selectedLocation={selectedLocation}
                                setLocation={setLocation}
                                selectedCategory={selectedCategory}
                                setSelectedCategory={setSelectedCategory}
                            ></Aside>
                        </div>
                    </aside>

                    {/* aside   End */}

                    {
                        isLoading ? <div> Loading </div>

                            : <div className='lg:col-span-9 md:col-span-9 col-span-12 w-full lg:p-5 md:p-3 p-1 '>
                                <div>
                                    <h1 className="text-xl font-semibold text-black mb-2">New product (22) </h1>
                                    <img className=' w-full ' src={banner} alt=" collection banner " />
                                </div>

                                <ActionBar
                                    layOutView={layOutView}
                                    setView={setView}

                                    setDrawer={setDrawer}
                                    openDrawer={openDrawer}


                                    sortBy={sortBy}
                                    setSortBy={setSortBy}

                                    sortOrder={sortOrder}
                                    setSortOrder={setSortOrder}
                                ></ActionBar>


                                <div className={` grid  ${layOutView === 'grid' ? 'lg:grid-cols-3 md:grid-cols-2 grid-cols-1' : ' grid-cols-1'} gap-4`}>
                                    {
                                        data?.data?.map((item, index) => <div key={index}>
                                            <ProductCard data={item} layOutView={layOutView} ></ProductCard>
                                        </div>)
                                    }

                                </div>

                                <PaginationButton
                                    currentPage={data?.pagination?.currentPage}
                                    setPage={setPage}
                                    totalPages={data?.pagination?.totalPages}  ></PaginationButton>

                            </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default Shop;