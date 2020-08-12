import React from 'react'
import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from './../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            { loading && 'Cargando...'}

            <div className="card-grid">
                {
                    images.map(image => {
                        return <GifGridItem key={image.id} {...image} />
                    }

                    )
                }
            </div>
        </>
    )
}

GifGrid.protoTypes = {
    category: PropTypes.string.isRequired
}

