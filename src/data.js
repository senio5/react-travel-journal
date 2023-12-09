import Mountfuji from "./images/Mount-Fuji.jpg";
import Ponce from "./images/Puerto-Rico.webp";
import Sahara from "./images/Sahara-Desert.jpg"
import Machu from "./images/Machu-Piccu.jpg";
import Taj from "./images/Taj-Mahal.jpg"
export default[
    {
        id: 1,
        title: "Mount Fuji",
        location: "Japan",
        googleMapUrl: "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170636,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu",
        startDate:" 16 Jan, 2022",
        endDate: "24 Jan, 2022",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters. Mount Fuji is the single most popular toutist site in Japan, for both Japanese and foreign tourists",
        image: <img src={Mountfuji} alt="" />,
        imageUrl: "https://en.wikipedia.org/wiki/Mount_Fuji#/media/File:Views_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg"
    },
    {
        id: 2,
        title: "Ponce",
        location: "Puerto Rico",
        googleMapUrl: "https://www.google.com/maps/place/Ponce,+Puerto+Rico/@17.9702559,-66.676355,12z/data=!3m1!4b1!4m6!3m5!1s0x8c1cd5813b1ddf7f:0x274b92c47106eee2!8m2!3d18.0110768!4d-66.6140616!16zL20vMGxnMHI?entry=ttu",
        startDate: "14 Aug, 2021",
        endDate: "21 Aug, 2021",
        description: "Ponce is known for it's beaches and warm tropical weather. It's enriched culture and food options are vast.",
        image: <img src={Ponce} alt="" />,
        imageUrl: "https://en.wikipedia.org/wiki/Ponce,_Puerto_Rico#/media/File:La_Guancha.jpg"
    },
    {
        id: 3,
        title: "Sahara Desert",
        location: "North Africa",
        googleMapUrl: "https://www.google.com/maps/place/Sahara+Desert/@16.6979286,-20.8235556,4z/data=!3m1!4b1!4m6!3m5!1s0x13883b64fb267151:0xd6406bdc582d7390!8m2!3d23.4162027!4d25.66283!16zL20vMDF3MXZ0?entry=ttu",
        startDate: "07 Nov, 2022",
        endDate: "12 Nov, 2022",
        description: "The Sahara Desert is a desert spanning North Africa. It has an area of 9,200,000 square kilometers, it is the largest hot desert in the world and the third largest desert overall, smaller only than the deserts of Antartica and the northern Arctic",
        image: <img src={Sahara} alt="" />,
        imageUrl: "https://en.wikipedia.org/wiki/Sahara#/media/File:Sahara_satellite_hires.jpg"
    },
    {
        id: 4,
        title: "Machu Picchu",
        location: "Peru",
        googleMapUrl: "https://www.google.com/maps/place/Machu+Picchu/@-13.2263256,-72.4998964,17z/data=!3m1!4b1!4m6!3m5!1s0x916d9a5f89555555:0x3a10370ea4a01a27!8m2!3d-13.2263308!4d-72.4973215!16zL20vMGtyZnk?entry=ttu",
        startDate: "12 Apr,2023",
        endDate: "19 Apr,2023",
        description: "Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River Valley. Built in the 15th century and later abandoned, its renowned for its sophisticated dr-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomica.",
        image: <img src={Machu} alt="" />,
        imageUrl: "https://en.wikipedia.org/wiki/Machu_Picchu#/media/File:Machu_Picchu,_Peru.jpg"
    },
    {
        id: 5,
        title: "India Taj Mahal",
        location: "Agra, Uttar Pradesh",
        googleMapUrl: "https://www.google.com/maps/place/Taj+Mahal/@27.1751495,78.0395673,17z/data=!3m1!4b1!4m6!3m5!1s0x39747121d702ff6d:0xdd2ae4803f767dde!8m2!3d27.1751448!4d78.0421422!16zL20vMGw4Y2I?entry=ttu",
        startDate: "02 Oct, 2020",
        endDate: "11 Oct, 2020",
        description: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.",
        image: <img src={Taj} alt="" />,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg"
    }
]