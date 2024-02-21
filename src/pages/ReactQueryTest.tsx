import { DefaultAxios, TokenAxios } from "@/apis/CommonAxios";
import {
    useQueryClient,
    useQuery,
  } from "@tanstack/react-query"
import { useEffect } from "react";


export const ReactQuertTest = () => {

    const login = async() => {
        const res = await DefaultAxios.post("api/user/login", {
            email : "temp@gmail.com",
            password : "123456a!",
        });
        const token = res.data.result.data.accessToken;
        const mileage = res.data.result.data.mileage;
        document.cookie = `accessToken=${token}; path=/;`
        localStorage.setItem("mileage", mileage);
    }

    const getCategory = async() => {
        try{
            const res = await TokenAxios.get(`/api/category/1`);
            // console.log(res.data);
            return res.data.result.data;
        }catch(e){
            console.error(e);
            throw e;
        }
        
    }

    const queryClient = useQueryClient();

    // Queries
    const query = useQuery({
        queryKey: ['category'], 
        queryFn: getCategory,
    });



    useEffect(() => {
        login();
        getCategory();
    },[])

    // console.log(`queryData :  ${query.data}`);

    return (
        <>
        <button onClick={getCategory}>메인</button>
            {query.data?.map((category : any) => (
                <div key={category.categorySeq}>
                    {category.categorySeq}
                    {category.name}
                </div>
            ))}
            
        </>
    )
    
}