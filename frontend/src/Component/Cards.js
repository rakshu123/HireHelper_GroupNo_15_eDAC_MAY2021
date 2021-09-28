import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>CHECKOUT OUR SERVICES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Driver.jpg'
              text='Our drivers across the city would love to chauffeur you from wherever you are. So, let our drivers deal with the traffic, the signals or traffic rules, while you enjoy your ride.

              '
             // label=''
              path='/about'
            />
            <CardItem
              src='images/maid.jpg'
              text='Choose qualified maids to help you in your house chores'
             // label='Luxury'
              path='/about'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/mover.jpg'
              text='Let us take the stress out of your move. Movers who care'
            //  label='Mystery'
              path='/about'
            />
            <CardItem
              src='images/maid2.jpg'
              text='Do you want your home or office to be neat and clean?'
            //  label='Adventure'
              path='/about'
            />
            <CardItem
              src='images/Driver2.jpg'
              text='A designated driver helps you party another day.
              '
           //  label='Adrenaline'
              path='/about'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
