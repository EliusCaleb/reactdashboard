import React from 'react';
import Card from '../Card/Card';
import './Cards.css'
import { cardsData } from '../data/data'

const Cards = () => {
  return (
    <div className='cards'>
        {
            cardsData.map((card,id) =>{
              console.log(card)
                return (
                  <div className='parentContainer'>
                    <Card
                      title={card.title}
                      color={card.color}
                      barValue={card.barValue}
                      value={card.value}
                      png={card.png}
                      series={card.series}
                    />
                  </div>
                )
            })
        }
    </div>
  )
}

export default Cards

