/*global google*/
import React, { useRef, useCallback, useState, useEffect } from 'react';
import './Map.scss';
import { Multiselect } from 'multiselect-react-dropdown';
import mapStyles from './mapStyles';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from '@react-google-maps/api';

import Search from './Search/Search';
import LocateButton from './LocateButton/LocateButton';
import List from '../List/List';

let service;
const libraries = ['places'];
const mapContainerStyle = {
    height: '80vh',
};
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
};
const center = {
    lat: 50.850346,
    lng: 4.351721,
};

const Map = () => {
    const [isList, setIsList] = useState(false);
    const [restaurantInfo, setRestaurantInfo] = useState();
    const [restaurants, setRestaurants] = useState();
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    const [cousinesArray] = useState([
        { key: 'Italian', cat: 'Group 1' },
        { key: 'Japanese', cat: 'Group 1' },
        { key: 'Lebanese', cat: 'Group 1' },
    ]);
    const [selectedCousines] = useState([
        { key: 'Italian', cat: 'Group 1' },
        { key: 'Japanese', cat: 'Group 1' },
        { key: 'Lebanese', cat: 'Group 1' },
    ]);
    const [cousines, setCousines] = useState(
        '(Italian) OR (Japanese) OR (Lebanese)'
    );

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
        updateRestaurants(center.lat, center.lng);
    }, []);

    useEffect(() => {
        if (mapRef.current !== undefined) {
            const map = mapRef.current;
            updateRestaurants(map.center.lat(), map.center.lng());
        }
    }, [cousines]);

    const panTo = ({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(16);
        updateRestaurants(lat, lng);
    };

    const getDescForRestaurant = (restaurant) => {
        service.getDetails(
            { placeId: restaurant.place_id },
            (restaurant, status) => {
                if (status !== google.maps.places.PlacesServiceStatus.OK)
                    return;
                console.log(restaurant)
                setRestaurantInfo(restaurant);
            }
        );
    };

    const updateRestaurants = (lat, lng) => {
        let request = {
            location: { lat, lng },
            radius: '1000',
            types: ['restaurant'],
            keyword: cousines,
        };

        service = new google.maps.places.PlacesService(mapRef.current);

        const callback = (results, status, pagination) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                console.log(cousines);
                setRestaurants(results);
                console.log(results);
            }
        };

        service.nearbySearch(request, callback);
    };

    const handleChange = (e) => {
        let cousinesFilter = '';
        if (e.length > 1) {
            cousinesFilter = e.map((s) => `(${s.key})`).join(' OR ');
        } else if (e.length === 1) {
            cousinesFilter = e[0].key;
        } else {
            cousinesFilter = '';
        }
        console.log(cousinesFilter);
        setCousines(cousinesFilter);
    };

    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading Maps';

    return (
        <div className='container componentWrapper'>
            <div className='header'>
                <button
                    className='switchButton'
                    onClick={() => {
                        setIsList(!isList);
                    }}
                >
                    <i
                        className='fas fa-exchange-alt'
                        style={{ margin: '5px' }}
                    ></i>
                    {isList ? 'Map' : 'List'}
                </button>
                <Multiselect
                    options={cousinesArray}
                    displayValue='key'
                    selectedValues={selectedCousines}
                    onSelect={handleChange}
                    onRemove={handleChange}
                />
            </div>
            {isList ? (
                <List
                    restaurants={restaurants}
                    getMoreData={getDescForRestaurant}
                    restaurantInfo={restaurantInfo}
                />
            ) : (
                <div className='dataContainer'>
                    <LocateButton panTo={panTo} className='locateButton' />
                    <Search panTo={panTo} />
                    <GoogleMap
                        id='map'
                        options={options}
                        mapContainerStyle={mapContainerStyle}
                        zoom={14}
                        center={center}
                        onLoad={onMapLoad}
                    >
                        {restaurants &&
                            restaurants.map((restaurant, index) => {
                                return (
                                    <Marker
                                        key={index}
                                        position={{
                                            lat: restaurant.geometry.location.lat(),
                                            lng: restaurant.geometry.location.lng(),
                                        }}
                                        onClick={() => {
                                            service.getDetails(
                                                {
                                                    placeId:
                                                        restaurant.place_id,
                                                },
                                                (restaurant, status) => {
                                                    if (
                                                        status !==
                                                        google.maps.places
                                                            .PlacesServiceStatus
                                                            .OK
                                                    )
                                                        return;
                                                    setSelectedRestaurant(
                                                        restaurant
                                                    );
                                                }
                                            );
                                        }}
                                        icon={{
                                            url: '/map-point.svg',
                                            scaledSize: new window.google.maps.Size(
                                                35,
                                                35
                                            ),
                                        }}
                                    />
                                );
                            })}

                        {selectedRestaurant && (
                            <InfoWindow
                                position={{
                                    lat: selectedRestaurant.geometry.location.lat(),
                                    lng: selectedRestaurant.geometry.location.lng(),
                                }}
                                onCloseClick={() => {
                                    setSelectedRestaurant(null);
                                }}
                            >
                                <div>
                                    <h2>{selectedRestaurant.name}</h2>
                                    <p>
                                        <b>Phone number: </b>
                                        {
                                            selectedRestaurant.international_phone_number
                                        }
                                    </p>
                                    {selectedRestaurant.website && (
                                        <p>
                                            <b>Website: </b>
                                            <a
                                                href={
                                                    selectedRestaurant.website
                                                }
                                            >
                                                {selectedRestaurant.website}
                                            </a>
                                        </p>
                                    )}
                                </div>
                            </InfoWindow>
                        )}
                    </GoogleMap>
                </div>
            )}
        </div>
    );
};

export default Map;
