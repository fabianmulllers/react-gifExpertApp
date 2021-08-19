import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";



const GiftExpertApp = () => {


    const [categories, setcategories] = useState(['One punch']);

    // const handleAdd = () => {
    //     // setcategories( [ 'HunterXHunter', ...categories ] );
    //     // setcategories( cats => [ ...cats, 'HunterXhunter' ] );
    // }

    return  (

        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={ setcategories }/>
            <hr/>
            <ol>
                { 
                    categories.map( ( category )  =>(  
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>

    )

}

export default GiftExpertApp