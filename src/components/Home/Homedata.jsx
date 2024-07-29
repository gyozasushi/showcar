import video1 from '../../assets/videobg/porsche.mp4';
import gambar1 from '../../assets/car/porsche.png';
import video2 from '../../assets/videobg/mercedesgt63.mp4';
import gambar2 from '../../assets/car/mercedesgt63.png';
import video3 from '../../assets/videobg/bmwm4.mp4';
import gambar3 from '../../assets/car/bmwm4gtr.png';
import video4 from '../../assets/videobg/nissangtr.mp4';
import gambar4 from '../../assets/car/nissangtr.png';
import logoporsche from "../../assets/logo/logoporsche.png";
import logomercedes from "../../assets/logo/mercedeslogo.png";
import logom4 from "../../assets/logo/m4logo.png";
import logogtr from "../../assets/logo/gtr.png";
import jerman from "../../assets/flag/german.png";
import jepang from "../../assets/flag/jepang.png";

const videodata = () =>{
    return[
        {
            id:1,   
            title:"Porsche 911 GTR",
            description:"The Porsche 911 GT3 (often mistakenly referred to as the GTR) is a high-end sports car designed to deliver an exceptional driving experience both on the road and on the racetrack. Combining advanced technology with a rich racing heritage, the GT3 offers high performance with precise handling, making it the top choice for sports car enthusiasts. The Porsche 911 GT3 is equipped with a 4.0-liter naturally aspirated flat-six (boxer engine) that produces a maximum power output of 502 hp at 8,400 rpm and a torque of 346 lb-ft at 6,250 rpm.",
            video:video1,
            gambar:gambar1,
            speed:"198 Mph",
            logo:logoporsche,
            mesin:"V8",
            bendera: jerman,
            price:"$220.000"
        },
        
        {
            id:2,
            title:"Mercedes AMG GT63",
            description:"The Mercedes-AMG GT63 is a luxury sports car that seamlessly blends speed and comfort. Equipped with a powerful biturbo V8 engine, the GT63 delivers exceptional acceleration and top-notch performance. Its aerodynamic exterior design features sharp lines and an aggressive profile, exuding a sense of power and elegance. The interior is adorned with high-quality materials and advanced technology, providing a luxurious and satisfying driving experience. Additionally, the GT63 boasts cutting-edge safety features and customizable options, making it a versatile choice for discerning drivers who seek both thrill and refinement in their vehicle.",
            video:video2,
            gambar:gambar2,
            speed:"196 Mph",
            logo:logomercedes,
             mesin:"V8",
             bendera:jerman,
             price:"$209.417"
        },
        {
            id:3,
            title:"BMW M4",
            description:"The 2024 BMW M4 is a high-performance sports car that combines incredible power with advanced technology and an aggressive design. Powered by a 3.0-liter BMW M TwinPower Turbo inline 6-cylinder engine, the M4 2024 produces a maximum output of 473 hp in the standard version and 503 hp in the Competition version. With a maximum torque of 406 lb-ft (standard) and 479 lb-ft (Competition), acceleration from 0-60 mph is achieved in approximately 4.1 seconds for the standard version and 3.8 seconds for the Competition version.",
            video:video3,
            gambar:gambar3,
            speed:"155 Mph",
            logo:logom4,
             mesin:"V6",
             bendera:jerman,
             price:"$166.256"
        },
        {
            id:4,
            title:"Nissan GT-R Nismo",
            description:"The Nissan GT-R Nismo is the epitome of speed and extraordinary technology, designed to deliver the most thrilling driving experience both on the racetrack and on the road. Powered by a specially developed 3.8-liter twin-turbo V6 engine from Nissan's motorsport division, the GT-R Nismo produces around 600 horsepower. This powerful engine, combined with a precision-controlled 6-speed dual-clutch transmission and an all-wheel-drive (AWD) system, provides stunning acceleration, reaching 0-60 mph in approximately 2.5 seconds.",
            video:video4,
            gambar:gambar4,
            speed: "205 Mph",
            logo:logogtr,
            mesin:"V8",
            bendera:jepang,
            price:"$210.740"
        },
        
    ];
};


export default videodata;