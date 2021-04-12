import { render, fireEvent, screen } from '@testing-library/react';
import List from './List';

const mockRestaurants = [
    {
        business_status: 'OPERATIONAL',
        geometry: {
            location: {
                lat: 50.8487352,
                lng: 4.3531698,
            },
            viewport: {
                south: 50.84758427010727,
                west: 4.351859420107278,
                north: 50.85028392989271,
                east: 4.354559079892722,
            },
        },
        icon:
            'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Le Prince Down Town',
        opening_hours: {
            open_now: true,
        },
        photos: [
            {
                height: 3218,
                html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/100461923015431362488">A Google User</a>',
                ],
                width: 5719,
            },
        ],
        place_id: 'ChIJxe_lmlTDw0cR5NiyFECAFrE',
        plus_code: {
            compound_code: 'R9X3+F7 Брюссель',
            global_code: '9F26R9X3+F7',
        },
        rating: 4.2,
        reference: 'ChIJxe_lmlTDw0cR5NiyFECAFrE',
        scope: 'GOOGLE',
        types: [
            'night_club',
            'bar',
            'restaurant',
            'food',
            'point_of_interest',
            'establishment',
        ],
        user_ratings_total: 267,
        vicinity: 'Rue Grétry 56, Bruxelles',
        html_attributions: [],
    },
    {
        business_status: 'OPERATIONAL',
        geometry: {
            location: {
                lat: 50.83995849999999,
                lng: 4.3494372,
            },
            viewport: {
                south: 50.83857922010728,
                west: 4.348162520107278,
                north: 50.84127887989272,
                east: 4.350862179892722,
            },
        },
        icon:
            'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'AL JANNAH',
        opening_hours: {
            open_now: true,
        },
        photos: [
            {
                height: 478,
                html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/102910473784214836235">Al Jannah</a>',
                ],
                width: 851,
            },
        ],
        place_id: 'ChIJCeBrC3vEw0cRE2ZBI-bgDns',
        plus_code: {
            compound_code: 'R8QX+XQ Брюссель',
            global_code: '9F26R8QX+XQ',
        },
        price_level: 1,
        rating: 4.3,
        reference: 'ChIJCeBrC3vEw0cRE2ZBI-bgDns',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 871,
        vicinity: 'Rue Blaes 59, Bruxelles',
        html_attributions: [],
    },
    {
        business_status: 'OPERATIONAL',
        geometry: {
            location: {
                lat: 50.8454799,
                lng: 4.353403900000001,
            },
            viewport: {
                south: 50.84388627010727,
                west: 4.352333470107277,
                north: 50.84658592989272,
                east: 4.355033129892721,
            },
        },
        icon:
            'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Gabbiani Reali',
        opening_hours: {
            open_now: true,
        },
        photos: [
            {
                height: 1960,
                html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/112104578974758029736">Boudewien Mulder</a>',
                ],
                width: 4032,
            },
        ],
        place_id: 'ChIJsQGxIX_Ew0cRLvvSYCNOkho',
        plus_code: {
            compound_code: 'R9W3+59 Брюссель',
            global_code: '9F26R9W3+59',
        },
        price_level: 2,
        rating: 3.8,
        reference: 'ChIJsQGxIX_Ew0cRLvvSYCNOkho',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 406,
        vicinity: 'Rue du Marché aux Fromages 35, Bruxelles',
        html_attributions: [],
    },
    {
        business_status: 'CLOSED_TEMPORARILY',
        geometry: {
            location: {
                lat: 50.8459337,
                lng: 4.3512795,
            },
            viewport: {
                south: 50.84466082010727,
                west: 4.350122670107279,
                north: 50.84736047989272,
                east: 4.352822329892723,
            },
        },
        icon:
            'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Bocconi',
        permanently_closed: true,
        photos: [
            {
                height: 800,
                html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/108788403488134693719">Ristorante Bocconi</a>',
                ],
                width: 800,
            },
        ],
        place_id: 'ChIJMRLWzXjEw0cR5oG0CriuhXE',
        plus_code: {
            compound_code: 'R9W2+9G Брюссель',
            global_code: '9F26R9W2+9G',
        },
        price_level: 3,
        rating: 4.2,
        reference: 'ChIJMRLWzXjEw0cR5oG0CriuhXE',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 305,
        vicinity: "Rue de l'Amigo 1, Bruxelles",
        html_attributions: [],
    },
    {
        business_status: 'OPERATIONAL',
        geometry: {
            location: {
                lat: 50.8454524,
                lng: 4.3482519,
            },
            viewport: {
                south: 50.84409517010728,
                west: 4.347259970107278,
                north: 50.84679482989272,
                east: 4.349959629892722,
            },
        },
        icon:
            'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'La Caneva',
        opening_hours: {
            open_now: true,
        },
        photos: [
            {
                height: 3120,
                html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/106359135861417849811">A Google User</a>',
                ],
                width: 4160,
            },
        ],
        place_id: 'ChIJx8AprXnEw0cRVU6BtOVF24o',
        plus_code: {
            compound_code: 'R8WX+58 Брюссель',
            global_code: '9F26R8WX+58',
        },
        price_level: 2,
        rating: 4.3,
        reference: 'ChIJx8AprXnEw0cRVU6BtOVF24o',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 205,
        vicinity: 'Rue des Grands Carmes Rue des Grands Carmes, Bruxelles',
        html_attributions: [],
    },
    {
        business_status: 'OPERATIONAL',
        geometry: {
            location: {
                lat: 50.84815529999999,
                lng: 4.3635727,
            },
            viewport: {
                south: 50.84676037010728,
                west: 4.362292770107278,
                north: 50.84946002989272,
                east: 4.364992429892722,
            },
        },
        icon:
            'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Les Saveurs de Beyrouth',
        opening_hours: {
            open_now: true,
        },
        photos: [
            {
                height: 680,
                html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/116284263998219602742">A Google User</a>',
                ],
                width: 1000,
            },
        ],
        place_id: 'ChIJiZChIOnDw0cRURg-OjLJT4g',
        plus_code: {
            compound_code: 'R9X7+7C Брюссель',
            global_code: '9F26R9X7+7C',
        },
        rating: 2.3,
        reference: 'ChIJiZChIOnDw0cRURg-OjLJT4g',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 6,
        vicinity: "Rue de l'Enseignement 20, Bruxelles",
        html_attributions: [],
    },
    {
        business_status: 'OPERATIONAL',
        geometry: {
            location: {
                lat: 50.8485763,
                lng: 4.352962199999999,
            },
            viewport: {
                south: 50.84743467010728,
                west: 4.351404220107279,
                north: 50.85013432989273,
                east: 4.354103879892723,
            },
        },
        icon:
            'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: "Sole d'Italia",
        opening_hours: {
            open_now: false,
        },
        photos: [
            {
                height: 750,
                html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/109466803433784356256">A Google User</a>',
                ],
                width: 1000,
            },
        ],
        place_id: 'ChIJkSB_r4DDw0cRVwz9_9xPT3M',
        plus_code: {
            compound_code: 'R9X3+C5 Брюссель',
            global_code: '9F26R9X3+C5',
        },
        price_level: 2,
        rating: 4.1,
        reference: 'ChIJkSB_r4DDw0cRVwz9_9xPT3M',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 525,
        vicinity: 'Rue Grétry 67, Bruxelles',
        html_attributions: [],
    },
    {
        business_status: 'OPERATIONAL',
        geometry: {
            location: {
                lat: 50.848832,
                lng: 4.350893,
            },
            viewport: {
                south: 50.84771447010727,
                west: 4.3488149,
                north: 50.85041412989271,
                east: 4.351585700000002,
            },
        },
        icon:
            'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Kabuki',
        opening_hours: {
            open_now: true,
        },
        photos: [
            {
                height: 3024,
                html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/104678226861466023281">A Google User</a>',
                ],
                width: 4032,
            },
        ],
        place_id: 'ChIJ11JoQofDw0cRLqk5lz1ebi4',
        plus_code: {
            compound_code: 'R9X2+G9 Брюссель',
            global_code: '9F26R9X2+G9',
        },
        price_level: 2,
        rating: 4,
        reference: 'ChIJ11JoQofDw0cRLqk5lz1ebi4',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 1807,
        vicinity: 'Rue du Marché aux Poulets 32, Bruxelles',
        html_attributions: [],
    },
    {
        business_status: 'OPERATIONAL',
        geometry: {
            location: {
                lat: 50.8464792,
                lng: 4.3467156,
            },
            viewport: {
                south: 50.84508852010728,
                west: 4.345332020107278,
                north: 50.84778817989272,
                east: 4.348031679892721,
            },
        },
        icon:
            'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Winehouse OSTERIA',
        opening_hours: {
            open_now: true,
        },
        photos: [
            {
                height: 1000,
                html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/114788277066088737642">A Google User</a>',
                ],
                width: 750,
            },
        ],
        place_id: 'ChIJxe5aO3jEw0cRvvmWoyI5ukI',
        plus_code: {
            compound_code: 'R8WW+HM Брюссель',
            global_code: '9F26R8WW+HM',
        },
        price_level: 2,
        rating: 4.4,
        reference: 'ChIJxe5aO3jEw0cRvvmWoyI5ukI',
        scope: 'GOOGLE',
        types: [
            'bar',
            'restaurant',
            'food',
            'point_of_interest',
            'establishment',
        ],
        user_ratings_total: 443,
        vicinity: 'Rue de la Grande Ile 42, Bruxelles',
        html_attributions: [],
    },
    {
        business_status: 'OPERATIONAL',
        geometry: {
            location: {
                lat: 50.8506861,
                lng: 4.3581527,
            },
            viewport: {
                south: 50.84937687010729,
                west: 4.356714470107279,
                north: 50.85207652989273,
                east: 4.359414129892722,
            },
        },
        icon:
            'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Sakagura',
        opening_hours: {
            open_now: true,
        },
        photos: [
            {
                height: 1210,
                html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/105630277211922697288">Bento &amp; Sake bar SAKAGURA</a>',
                ],
                width: 2448,
            },
        ],
        place_id: 'ChIJ1bxyzoHDw0cRCU-7Yv-RGHM',
        plus_code: {
            compound_code: 'V925+77 Брюссель',
            global_code: '9F26V925+77',
        },
        price_level: 1,
        rating: 4.5,
        reference: 'ChIJ1bxyzoHDw0cRCU-7Yv-RGHM',
        scope: 'GOOGLE',
        types: [
            'meal_takeaway',
            'restaurant',
            'food',
            'point_of_interest',
            'establishment',
        ],
        user_ratings_total: 204,
        vicinity: 'Rue du Marais 15, Bruxelles',
        html_attributions: [],
    },
    {
        business_status: 'OPERATIONAL',
        geometry: {
            location: {
                lat: 50.84514069999999,
                lng: 4.3531742,
            },
            viewport: {
                south: 50.84362817010728,
                west: 4.351698220107278,
                north: 50.84632782989272,
                east: 4.354397879892722,
            },
        },
        icon:
            'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Al Barmaki',
        opening_hours: {
            open_now: false,
        },
        photos: [
            {
                height: 2048,
                html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/105810640547183870444">A Google User</a>',
                ],
                width: 2048,
            },
        ],
        place_id: 'ChIJF5rD3n7Ew0cRkR5qc9qKWt8',
        plus_code: {
            compound_code: 'R9W3+37 Брюссель',
            global_code: '9F26R9W3+37',
        },
        price_level: 2,
        rating: 4.3,
        reference: 'ChIJF5rD3n7Ew0cRkR5qc9qKWt8',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 414,
        vicinity: 'Rue des Eperonniers 67, Bruxelles',
        html_attributions: [],
    },
    {
        business_status: 'OPERATIONAL',
        geometry: {
            location: {
                lat: 50.8483837,
                lng: 4.351297100000001,
            },
            viewport: {
                south: 50.84740577010728,
                west: 4.350375520107278,
                north: 50.85010542989272,
                east: 4.353075179892723,
            },
        },
        icon:
            'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Pizza Pronto',
        opening_hours: {
            open_now: false,
        },
        photos: [
            {
                height: 3024,
                html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/115102307186632409206">Torben Mauch</a>',
                ],
                width: 4032,
            },
        ],
        place_id: 'ChIJty91W4fDw0cR7Jf7EdK_Gh4',
        plus_code: {
            compound_code: 'R9X2+9G Брюссель',
            global_code: '9F26R9X2+9G',
        },
        price_level: 1,
        rating: 4.1,
        reference: 'ChIJty91W4fDw0cR7Jf7EdK_Gh4',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 876,
        vicinity: 'Rue du Marché aux Poulets 57, Bruxelles',
        html_attributions: [],
    },
    {
        business_status: 'OPERATIONAL',
        geometry: {
            location: {
                lat: 50.8522905,
                lng: 4.345874999999999,
            },
            viewport: {
                south: 50.85096077010729,
                west: 4.344610220107278,
                north: 50.85366042989273,
                east: 4.347309879892722,
            },
        },
        icon:
            'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'SIGNORA AVA',
        opening_hours: {
            open_now: true,
        },
        photos: [
            {
                height: 633,
                html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/112181940443825663531">SIGNORA AVA</a>',
                ],
                width: 1125,
            },
        ],
        place_id: 'ChIJQUvvvIjDw0cR_iq3dNpBpiw',
        plus_code: {
            compound_code: 'V82W+W9 Брюссель',
            global_code: '9F26V82W+W9',
        },
        price_level: 2,
        rating: 4.3,
        reference: 'ChIJQUvvvIjDw0cR_iq3dNpBpiw',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 146,
        vicinity: 'Rue de Flandre 92, Bruxelles',
        html_attributions: [],
    },
    {
        business_status: 'OPERATIONAL',
        geometry: {
            location: {
                lat: 50.8415585,
                lng: 4.353181,
            },
            viewport: {
                south: 50.84014967010728,
                west: 4.351826020107278,
                north: 50.84284932989272,
                east: 4.354525679892721,
            },
        },
        icon:
            'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Genco',
        opening_hours: {
            open_now: false,
        },
        photos: [
            {
                height: 3024,
                html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/116188086136571935446">didier abattucci</a>',
                ],
                width: 4032,
            },
        ],
        place_id: 'ChIJNePiPnzEw0cRD6H2UiUFQ5s',
        plus_code: {
            compound_code: 'R9R3+J7 Брюссель',
            global_code: '9F26R9R3+J7',
        },
        price_level: 2,
        rating: 4.5,
        reference: 'ChIJNePiPnzEw0cRD6H2UiUFQ5s',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 179,
        vicinity: 'Rue Joseph Stevens 28, Bruxelles',
        html_attributions: [],
    },
    {
        business_status: 'OPERATIONAL',
        geometry: {
            location: {
                lat: 50.84858269999999,
                lng: 4.3479241,
            },
            viewport: {
                south: 50.84736872010727,
                west: 4.346484920107278,
                north: 50.85006837989272,
                east: 4.349184579892722,
            },
        },
        icon:
            'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Spago',
        opening_hours: {
            open_now: true,
        },
        photos: [
            {
                height: 478,
                html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/114071663304532989694">A Google User</a>',
                ],
                width: 851,
            },
        ],
        place_id: 'ChIJP2dijYfDw0cRyuPMg1OUKgs',
        plus_code: {
            compound_code: 'R8XX+C5 Брюссель',
            global_code: '9F26R8XX+C5',
        },
        price_level: 2,
        rating: 4.2,
        reference: 'ChIJP2dijYfDw0cRyuPMg1OUKgs',
        scope: 'GOOGLE',
        types: [
            'bar',
            'restaurant',
            'food',
            'point_of_interest',
            'establishment',
        ],
        user_ratings_total: 1388,
        vicinity: 'Rue du Pont de la Carpe 13, Bruxelles',
        html_attributions: [],
    },
    {
        business_status: 'OPERATIONAL',
        geometry: {
            location: {
                lat: 50.84869,
                lng: 4.364485699999999,
            },
            viewport: {
                south: 50.84729097010727,
                west: 4.363206020107278,
                north: 50.84999062989272,
                east: 4.365905679892721,
            },
        },
        icon:
            'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Napoli Restaurant',
        opening_hours: {
            open_now: true,
        },
        photos: [
            {
                height: 740,
                html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/110594398908716054748">A Google User</a>',
                ],
                width: 1000,
            },
        ],
        place_id: 'ChIJZyhZDH7Dw0cREJU59ToHIhw',
        plus_code: {
            compound_code: 'R9X7+FQ Брюссель',
            global_code: '9F26R9X7+FQ',
        },
        price_level: 2,
        rating: 4.2,
        reference: 'ChIJZyhZDH7Dw0cREJU59ToHIhw',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 103,
        vicinity: "Rue de l'Enseignement 68, Bruxelles",
        html_attributions: [],
    },
    {
        business_status: 'OPERATIONAL',
        geometry: {
            location: {
                lat: 50.8490148,
                lng: 4.3540371,
            },
            viewport: {
                south: 50.84769322010728,
                west: 4.352712070107279,
                north: 50.85039287989272,
                east: 4.355411729892722,
            },
        },
        icon:
            'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Ricotta & Parmesan',
        opening_hours: {
            open_now: true,
        },
        photos: [
            {
                height: 666,
                html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/117125860992112536231">Ricotta &amp; Parmesan</a>',
                ],
                width: 1000,
            },
        ],
        place_id: 'ChIJwzs5voDDw0cReZZaTX69Ar8',
        plus_code: {
            compound_code: 'R9X3+JJ Брюссель',
            global_code: '9F26R9X3+JJ',
        },
        price_level: 2,
        rating: 4,
        reference: 'ChIJwzs5voDDw0cReZZaTX69Ar8',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 1943,
        vicinity: "Rue de l'Ecuyer 31, Bruxelles",
        html_attributions: [],
    },
    {
        business_status: 'OPERATIONAL',
        geometry: {
            location: {
                lat: 50.8486296,
                lng: 4.350302,
            },
            viewport: {
                south: 50.84764052010727,
                west: 4.348579820107278,
                north: 50.85034017989271,
                east: 4.351279479892722,
            },
        },
        icon:
            'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Anata',
        opening_hours: {
            open_now: false,
        },
        photos: [
            {
                height: 750,
                html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/105527009524589809274">A Google User</a>',
                ],
                width: 1000,
            },
        ],
        place_id: 'ChIJee95ZYfDw0cRP71k65AmEbo',
        plus_code: {
            compound_code: 'R9X2+F4 Брюссель',
            global_code: '9F26R9X2+F4',
        },
        price_level: 2,
        rating: 3.7,
        reference: 'ChIJee95ZYfDw0cRP71k65AmEbo',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 1171,
        vicinity: 'Boulevard Anspach 74, Bruxelles',
        html_attributions: [],
    },
    {
        business_status: 'OPERATIONAL',
        geometry: {
            location: {
                lat: 50.845,
                lng: 4.3594444,
            },
            viewport: {
                south: 50.84365267010728,
                west: 4.358168570107278,
                north: 50.84635232989272,
                east: 4.360868229892722,
            },
        },
        icon:
            'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'Saveurs Edomae',
        opening_hours: {
            open_now: true,
        },
        photos: [
            {
                height: 3024,
                html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/106274021961370968272">Dieter Vanmarcke</a>',
                ],
                width: 4032,
            },
        ],
        place_id: 'ChIJoWmwZU_Cw0cRlL8fUOT2JGY',
        plus_code: {
            compound_code: 'R9V5+XQ Брюссель',
            global_code: '9F26R9V5+XQ',
        },
        price_level: 2,
        rating: 3.9,
        reference: 'ChIJoWmwZU_Cw0cRlL8fUOT2JGY',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 86,
        vicinity: 'Rue Ravenstein 46, Bruxelles',
        html_attributions: [],
    },
    {
        business_status: 'OPERATIONAL',
        geometry: {
            location: {
                lat: 50.846914,
                lng: 4.3549871,
            },
            viewport: {
                south: 50.84572127010728,
                west: 4.353500470107278,
                north: 50.84842092989273,
                east: 4.356200129892722,
            },
        },
        icon:
            'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
        name: 'pasta divina',
        photos: [
            {
                height: 493,
                html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/109837055640268421662">A Google User</a>',
                ],
                width: 700,
            },
        ],
        place_id: 'ChIJBWfFdn_Ew0cR2PXjvXZBJo4',
        plus_code: {
            compound_code: 'R9W3+QX Брюссель',
            global_code: '9F26R9W3+QX',
        },
        price_level: 2,
        rating: 4.6,
        reference: 'ChIJBWfFdn_Ew0cR2PXjvXZBJo4',
        scope: 'GOOGLE',
        types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
        user_ratings_total: 1355,
        vicinity: 'Rue de la Montagne 16, Bruxelles',
        html_attributions: [],
    },
];

const mockRestaurantInfo = {
    address_components: [
        {
            long_name: '1',
            short_name: '1',
            types: ['street_number'],
        },
        {
            long_name: "Rue de l'Amigo",
            short_name: "Rue de l'Amigo",
            types: ['route'],
        },
        {
            long_name: 'Bruxelles',
            short_name: 'Bruxelles',
            types: ['locality', 'political'],
        },
        {
            long_name: 'Bruxelles',
            short_name: 'Bruxelles',
            types: ['administrative_area_level_1', 'political'],
        },
        {
            long_name: 'Бельгия',
            short_name: 'BE',
            types: ['country', 'political'],
        },
        {
            long_name: '1000',
            short_name: '1000',
            types: ['postal_code'],
        },
    ],
    adr_address:
        '<span class="street-address">Rue de l&#39;Amigo 1</span>, <span class="postal-code">1000</span> <span class="locality">Bruxelles</span>, <span class="country-name">Бельгия</span>',
    business_status: 'CLOSED_TEMPORARILY',
    formatted_address: "Rue de l'Amigo 1, 1000 Bruxelles, Бельгия",
    formatted_phone_number: '02 547 47 15',
    geometry: {
        location: {
            lat: 50.8459337,
            lng: 4.3512795,
        },
        viewport: {
            south: 50.8446616697085,
            west: 4.350123519708498,
            north: 50.84735963029149,
            east: 4.352821480291503,
        },
    },
    icon:
        'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
    international_phone_number: '+32 2 547 47 15',
    name: 'Bocconi',
    permanently_closed: true,
    photos: [
        {
            height: 800,
            html_attributions: [
                '<a href="https://maps.google.com/maps/contrib/108788403488134693719">Ristorante Bocconi</a>',
            ],
            width: 800,
        },
        {
            height: 800,
            html_attributions: [
                '<a href="https://maps.google.com/maps/contrib/108788403488134693719">Ristorante Bocconi</a>',
            ],
            width: 800,
        },
        {
            height: 533,
            html_attributions: [
                '<a href="https://maps.google.com/maps/contrib/108788403488134693719">Ristorante Bocconi</a>',
            ],
            width: 800,
        },
        {
            height: 4032,
            html_attributions: [
                '<a href="https://maps.google.com/maps/contrib/110269892832754900911">Adrien Noterdaem</a>',
            ],
            width: 3024,
        },
        {
            height: 3456,
            html_attributions: [
                '<a href="https://maps.google.com/maps/contrib/108185242570424338508">Christian Johannesen</a>',
            ],
            width: 4608,
        },
        {
            height: 1440,
            html_attributions: [
                '<a href="https://maps.google.com/maps/contrib/106612445909067198147">Suu Park</a>',
            ],
            width: 1920,
        },
        {
            height: 1440,
            html_attributions: [
                '<a href="https://maps.google.com/maps/contrib/106612445909067198147">Suu Park</a>',
            ],
            width: 1920,
        },
        {
            height: 3024,
            html_attributions: [
                '<a href="https://maps.google.com/maps/contrib/111864969490693058945">Olivier Mongénie</a>',
            ],
            width: 4032,
        },
        {
            height: 3456,
            html_attributions: [
                '<a href="https://maps.google.com/maps/contrib/106971136965134670660">Barbara Pieri</a>',
            ],
            width: 4608,
        },
        {
            height: 4032,
            html_attributions: [
                '<a href="https://maps.google.com/maps/contrib/113327665949419128748">Eda Özsoy Onaran</a>',
            ],
            width: 3024,
        },
    ],
    place_id: 'ChIJMRLWzXjEw0cR5oG0CriuhXE',
    plus_code: {
        compound_code: 'R9W2+9G Брюссель, Бельгия',
        global_code: '9F26R9W2+9G',
    },
    price_level: 3,
    rating: 4.2,
    reference: 'ChIJMRLWzXjEw0cR5oG0CriuhXE',
    reviews: [
        {
            author_name: 'Roman Iumaguzin',
            author_url:
                'https://www.google.com/maps/contrib/113796040511061054021/reviews',
            language: 'ru',
            profile_photo_url:
                'https://lh3.googleusercontent.com/-kzTiwInr4-w/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmXPiS8YqOBxrmRNMCcNrRksCcCOA/s128-c0x00000000-cc-rp-mo-ba5/photo.jpg',
            rating: 5,
            relative_time_description: 'год назад',
            text: 'Дорого и вкусно. Разок можно сходить.',
            time: 1568737539,
        },
        {
            author_name: 'Mr.amok2010 Blagovestnyy',
            author_url:
                'https://www.google.com/maps/contrib/100212820870849517527/reviews',
            language: 'ru',
            profile_photo_url:
                'https://lh4.googleusercontent.com/-ZlJSQGapLg0/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucl6eXNJmC8fiEC5Yn4rIxbs6b_S7w/s128-c0x00000000-cc-rp-mo-ba5/photo.jpg',
            rating: 4,
            relative_time_description: '3 года назад',
            text:
                'Очень медленное обслуживание. Огромные паузы между подачей блюд.Уснуть можно!',
            time: 1521913657,
        },
        {
            author_name: 'Sylvia Carpentier',
            author_url:
                'https://www.google.com/maps/contrib/111700103134097456472/reviews',
            language: 'ru-RU',
            profile_photo_url:
                'https://lh3.googleusercontent.com/a-/AOh14GiWRCSRW_LDFWftqVfg3E5vZcZ1E9MAgPsj9yjedQ=s128-c0x00000000-cc-rp-mo-ba3',
            rating: 2,
            relative_time_description: '6 месяцев назад',
            text:
                'К сожалению, у меня не было очень хорошего опыта в этом ресторане. Обслуживание очень хорошее, но еда мне не понравилась. Может, мне попалось меню, которое мне не подошло? В любом случае, к сожалению, больше не вернусь.',
            time: 1602540905,
        },
        {
            author_name: 'Suu Park',
            author_url:
                'https://www.google.com/maps/contrib/106612445909067198147/reviews',
            language: 'ru-RU',
            profile_photo_url:
                'https://lh3.googleusercontent.com/a-/AOh14GgryUyrtNIzQqTHxg4k1XVSsTvQ_DbLECBbuwt3i8I=s128-c0x00000000-cc-rp-mo-ba2',
            rating: 4,
            relative_time_description: '6 месяцев назад',
            text:
                'Еда была действительно отличной! Атомосфера и персонал тоже были хорошими, вегетарианского меню нет, но мясо можно достать из блюд.',
            time: 1602610248,
        },
        {
            author_name: 'Giuseppe Di Francisca',
            author_url:
                'https://www.google.com/maps/contrib/110578819410070237118/reviews',
            language: 'ru-RU',
            profile_photo_url:
                'https://lh3.googleusercontent.com/a-/AOh14GhUPCt5z8a8tAJ0jgLvTwyAX4me16qR9F4syfE39g=s128-c0x00000000-cc-rp-mo',
            rating: 5,
            relative_time_description: '6 месяцев назад',
            text:
                'Отличная итальянская кухня, приготовленная из качественных продуктов. Блюда изысканные и аутентичные. Радушный прием и внимательное обслуживание.\nОбязательно к итальянской кухне в Брюсселе!',
            time: 1600744727,
        },
    ],
    types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
    url: 'https://maps.google.com/?cid=8180136403665191398',
    user_ratings_total: 305,
    utc_offset: 120,
    vicinity: "Rue de l'Amigo 1, Bruxelles",
    website:
        'https://www.roccofortehotels.com/hotels-and-resorts/hotel-amigo/restaurant-and-bar/ristorante-bocconi/?utm_source=google&utm_medium=local&utm_campaign=ristorante_bocconi',
    html_attributions: [],
    utc_offset_minutes: 120,
};

const { queryByTitle, queryAllByTitle } = render(
    <List restaurants={mockRestaurants} restaurantInfo={mockRestaurantInfo} />
);
const list = queryByTitle('list');
const infoButton = queryAllByTitle('infoButton');
const AdditionalInfo = screen.findAllByTitle('AdditionalInfo');
// const infoButton = queryByTitle('infoButton');

it('list is rendering', () => {
    expect(list).toBeTruthy();
    expect(infoButton).toBeTruthy();
});

describe('Info button', () => {
    it('When info button was clicked then more info is displaying', () => {
        fireEvent.click(infoButton[0]);
        expect(AdditionalInfo).toBeTruthy();
    });
});
