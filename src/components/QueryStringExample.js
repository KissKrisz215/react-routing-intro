import {useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';

export function QueryStringExample(){
    
    const [searchParams, setSearchParams] = useSearchParams();

    const place = searchParams.get("place");
    const desType = searchParams.get("desType");

    useEffect(() => {
        console.log(place, desType);
    })

    return(
     <div>
        <h1>Query String Example</h1>
     </div>
    );
}