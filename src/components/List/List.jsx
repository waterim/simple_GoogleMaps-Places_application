import React from 'react';
import './List.scss';

const List = ({ restaurants, getMoreData, restaurantInfo }) => {
    return (
        <div title="list">
            {restaurants &&
                restaurants.map((restaurant, index) => {
                    return (
                        <div key={index} className='card'>
                            <div className='headerSection'>
                                <h2>{restaurant.name}</h2>
                                <button
                                    title="infoButton"
                                    className='infoButton'
                                    onClick={() => {
                                        getMoreData(restaurant);
                                    }}
                                >
                                    Info
                                </button>
                            </div>
                            {restaurantInfo &&
                                restaurantInfo.place_id ===
                                    restaurant.place_id && (
                                    <div title="AdditionalInfo">
                                        <p>
                                            <b>Phone number: </b>
                                            {
                                                restaurantInfo.international_phone_number
                                            }
                                        </p>
                                        {restaurantInfo.website && (
                                            <p>
                                                <a
                                                    href={
                                                        restaurantInfo.website
                                                    }
                                                >
                                                    <b>Website</b>
                                                </a>
                                            </p>
                                        )}
                                    </div>
                                )}
                        </div>
                    );
                })}
        </div>
    );
};

export default List;
