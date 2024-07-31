import React from 'react';
import Offers from './Offer'; 

export default function OffersList({ offers }) {
    return (
        <div className="grid grid-cols-4 gap-10">
            {offers.map(offer => (
                <Offers key={offer.id} product={offer} />
            ))}
        </div>
    );
}
