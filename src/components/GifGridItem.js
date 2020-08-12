import React from 'react'

export const GifGridItem = ({ url, title }) => {

    return (
            <div className="card">
                <img alt={title} src={url} />
                <p>{title}</p>
            </div>
    )
}