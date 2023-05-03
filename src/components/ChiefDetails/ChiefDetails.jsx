import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';
import { AuthContext } from '../../provider/AuthProvider';

const ChiefDetails = () => {
    const [recipes, setRecipes] = useState([]);

    const chiefDetails = useLoaderData();

    const { name, picture, years_of_experience, number_of_recipes, like, id, description } = chiefDetails;


    useEffect(() => {
        fetch('http://localhost:5000/recipe')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div className='container'>
            

                <div>
                    <div className='mx-auto p-20 '>
                        <div className="card card-compact bg-base-100 shadow-xl pb-20">
                            <figure><img className='rounded-full border-4  border-orange-500' src={picture} /></figure>
                            <div className="card-body">
                                <div className='text-center'>
                                    <h1 className='text-5xl font-bold text-orange-500'>{name}</h1>
                                    <p className='px-20 py-5 text-xl'>{description} </p>
                                    <p className='text-2xl mb-2'>Years of Experience: <span className='text-orange-600 font-extrabold'> {years_of_experience}</span></p>
                                    <p className='text-2xl'>Like: <span className='text-blue-500'>{like} 👍</span></p>
                                    <p className='text-2xl mt-2'>Recipe: <span className='text-blue-500'>{number_of_recipes}</span></p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <h2 className='text-center text-4xl font-bold'>Most <span className='text-orange-700'>Popular</span> and <span className='text-orange-700'>Favourite</span> <span> Recipe </span> </h2>
                    <div className='grid md:grid-cols-3 gap-10 container py-10 px-20'>
                        {
                            recipes.map(recipe => <Recipes recipe={recipe}></Recipes>)
                        }
                    </div>
                </div>
        </div>
    );
};

export default ChiefDetails;