export let hotels = [
  {
    id: 1,
    img: "she.jpeg",
    title: "Sheraton",
    location: "Muenchen",
    locationCoordlat: "48.135829",    /* 48.135829, 11.578536 */
    locationCoordlng: "11.578536",
    rating: 3,
    bookingDate: "9 Sep - 10 Sep",
    hoteldescription:
    "Sheraton Hotels and Resorts is an international hotel chain owned by Marriott International. Sheraton currently operates over 500 hotels globally, including locations in North America, Africa, Asia Pacific, Central and South America, Europe, the Middle East and the Caribbean.",
    locationImg : "mchen.png", 
    bestOffers: true,
    popularCities : true,

    rooms: [
        {
        roomimg: "#",
        category: true, //single = true, double = false 
        kids: false, // kids = true , false 
        price: "€2,350",
        disOffer: "€1,175",
        gym: true,
        priceOffer: false,  // offer 50% off the price
        tv: true,
        wifi: true,
        breakfast: true, // breakfast = true , false = all inclusive
        aircondition: false,
        toileteries: true,
        }
    ]
  },
  {
    id: 2,
    img: "he2.jpeg",
    title: "Hotel Oliver",
    location: "Berlin",
    locationCoordlat: "52.517986",/* 52.517986, 13.403474 */
    locationCoordlng: "13.403474",   
    rating: 4,
    bookingDate: "9 Sep - 10 Sep",
    hoteldescription:
    "Sheraton Hotels and Resorts is an international hotel chain owned by Marriott International. Sheraton currently operates over 500 hotels globally, including locations in North America, Africa, Asia Pacific, Central and South America, Europe, the Middle East and the Caribbean.",
    locationImg : "berlin.jpeg", 
    bestOffers: true,
    popularCities : true,

    rooms: [
        {
        roomimg: "#",
        category: false, //single = true, double = false 
        kids: false, // kids = true , false 
        price: "€1,900",
        disOffer: "€950",
        gym: false,
        priceOffer: false,
        tv: true,
        wifi: true,
        breakfast: true, // breakfast = true , false = all inclusive
        aircondition: true,
        toileteries: true,
        }
    ]
  },
  {
    id: 3,
    img: "gg.jpeg",
    title: "Royals",
    location: "Hamburg",
    locationCoordlat: "53.551363", /* 53.551363, 10.001956      */
    locationCoordlng: "10.001956",
    rating: 3,
    bookingDate: "9 Sep - 10 Sep",
    hoteldescription:
    "Sheraton Hotels and Resorts is an international hotel chain owned by Marriott International. Sheraton currently operates over 500 hotels globally, including locations in North America, Africa, Asia Pacific, Central and South America, Europe, the Middle East and the Caribbean.",
    locationImg : "hh.jpg", 
    bestOffers: true,
    popularCities : true,

    rooms: [
        {
        roomimg: "#",
        category: false, //single = true, double = false 
        kids: false, // kids = true , false 
        price: "€2,050",
        disOffer: "€1,025",
        gym: true,
        priceOffer: false,
        tv: true,
        wifi: true,
        breakfast: true, // breakfast = true , false = all inclusive
        aircondition: true,
        toileteries: true,
        }
    ]
  },
  {
    id: 4,
    img: "mas.jpeg",
    title: "Prempeh XI",
    location: "Duesseldorf",
    locationCoordlat: "55.556566", 
    locationCoordlng: "6.433354",
    rating: 4,
    bookingDate: "9 Sep - 10 Sep",
    hoteldescription:
    "Sheraton Hotels and Resorts is an international hotel chain owned by Marriott International. Sheraton currently operates over 500 hotels globally, including locations in North America, Africa, Asia Pacific, Central and South America, Europe, the Middle East and the Caribbean.",
    locationImg : "dus.png",
    bestOffers: true,
    popularCities : true,

    rooms: [
        {
        roomimg: "#",
        category: true, //single = true, double = false 
        kids: false, // kids = true , false 
        price: "€1,560",
        disOffer: "€780",
        gym: false,
        priceOffer: false,
        tv: true,
        wifi: true,
        breakfast: true, // breakfast = true , false = all inclusive
        aircondition: true,
        toileteries: true,
        }
    ]
  }
];