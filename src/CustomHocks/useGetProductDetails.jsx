import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useGetProductDetails = (id) => {
    const axiosPublic = useAxiosPublic();
    const Id = parseInt(id)

    const { data, isLoading, error } = useQuery({
        queryKey: ['ProductData', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/productBangla.json`);
            return res.data.find((item) => item?.id === Id); 
        },
        enabled: !!id,
    });

    return {
        product: data || {}, 
        isLoading,
        error,
    };
};

export default useGetProductDetails;
