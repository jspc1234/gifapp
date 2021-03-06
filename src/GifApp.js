import React, { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

export const GifApp = () => {

    //const categories = ['Dragon Ball', 'Chavo del 8', 'Samurai X'];
    const [categories, setCategories] = useState(['Dragon Ball'])

    return (
        <>
            <h2>GifApp</h2>
            <hr />
            <AddCategory setCategories={setCategories} categories={categories}/>
                {
                    categories.map((category) => (
                       <GifGrid 
                       key={category}
                       category={category} />
                    ))
                }    
        </>
    )
}