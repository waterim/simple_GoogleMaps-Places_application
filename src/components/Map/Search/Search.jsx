import React from 'react';
import "./Search.scss"

import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from 'use-places-autocomplete';

import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';

const Search = ({ panTo }) => {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 50.850346, lng: () => 4.351721 },
            radius: 200 * 1000,
        },
    });

    return (
        <div className="search">
            <Combobox
                onSelect={async (address) => {
                    setValue(address, false);
                    clearSuggestions();
                    try {
                        const results = await getGeocode({ address });
                        const { lat, lng } = await getLatLng(results[0]);
                        panTo({ lat, lng });
                    } catch (err) {
                        console.log(err);
                    }
                }}
            >
                <ComboboxInput
                    title="searchInput"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    disabled={!ready}
                    placeholder='Enter an address'
                />
                <ComboboxPopover>
                    <ComboboxList>
                        {status === 'OK' &&
                            data.map(({ description }, index) => {
                                return (
                                    <ComboboxOption
                                        key={index}
                                        value={description}
                                    />
                                );
                            })}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    );
};

export default Search;
