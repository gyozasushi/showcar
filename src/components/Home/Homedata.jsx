import video1 from '../../assets/porsche.mp4';
import gambar1 from '../../assets/porsche.png';
import video2 from '../../assets/mercedesgt63.mp4';
import gambar2 from '../../assets/mercedesgt63.png';
import video3 from '../../assets/bmwm4.mp4';
import gambar3 from '../../assets/bmwm4gtr.png';
import gambar4 from '../../assets/nissangtr.png';
import video4 from '../../assets/nissangtr.mp4';
import logoporsche from "../../assets/logoporsche.png";
import logomercedes from "../../assets/mercedeslogo.png";
import logom4 from "../../assets/m4logo.png";
import logogtr from "../../assets/gtr.png";
const videodata = () =>{
    return[
        {
            id:1,
            title:"Porsche 911 GTR",
            description:"Porsche 911 GT3 (sering kali disalah sebut sebagai GTR) adalah kendaraan sport kelas atas yang dirancang untuk memberikan pengalaman berkendara yang luar biasa baik di jalan raya maupun di lintasan balap. Menggabungkan teknologi canggih dengan warisan balap yang kaya, GT3 menawarkan performa tinggi dengan handling presisi yang menjadikannya pilihan utama bagi para penggemar mobil sport.Porsche 911 GT3 dilengkapi dengan mesin 4.0-liter naturally aspirated flat-six (boxer engine) yang menghasilkan tenaga maksimal sebesar 502 hp pada 8,400 rpm dan torsi sebesar 346 lb-ft pada 6,250 rpm.",
            video:video1,
            gambar:gambar1,
            speed:"198 Mph",
            logo:logoporsche
        },
        
        {
            id:2,
            title:"Mercedes AMG GT63",
            description:"Mercedes-AMG GT63 adalah mobil sport mewah yang menggabungkan kecepatan dan kenyamanan. Ditenagai oleh mesin V8 biturbo yang bertenaga, GT63 menawarkan akselerasi luar biasa dan performa tinggi. Desain eksteriornya yang aerodinamis menampilkan garis-garis tajam dan profil agresif, sementara interiornya dilengkapi dengan material berkualitas tinggi dan teknologi canggih, memastikan pengalaman berkendara yang mewah dan memuaskan.",
            video:video2,
            gambar:gambar2,
            speed:"196 Mph",
            logo:logomercedes
        },
        {
            id:3,
            title:"BMW M4",
            description:"BMW M4 2024 adalah mobil sport performa tinggi yang menggabungkan tenaga luar biasa dengan teknologi canggih dan desain agresif. Ditenagai oleh mesin 3.0-liter BMW M TwinPower Turbo inline 6-cylinder, M4 2024 mampu menghasilkan tenaga maksimal 473 hp pada versi standar dan 503 hp pada versi Competition. Dengan torsi maksimal 406 lb-ft (standar) dan 479 lb-ft (Competition), akselerasi dari 0-60 mph dicapai dalam sekitar 4.1 detik untuk versi standar dan 3.8 detik untuk versi Competition.",
            video:video3,
            gambar:gambar3,
            speed:"155 Mph",
            logo:logom4
        },
        {
            id:4,
            title:"Nissan GT-R Nismo",
            description:"Nissan GT-R Nismo adalah perwujudan dari kecepatan dan teknologi yang luar biasa, dirancang untuk menghadirkan pengalaman berkendara yang paling mendebarkan di lintasan balap maupun di jalan raya.Ditenagai oleh mesin twin-turbo V6 3.8 liter yang dikembangkan secara khusus oleh Nissan's motorsport division, GT-R Nismo menghasilkan sekitar 600 horsepower. Kombinasi dari mesin yang bertenaga ini, sistem transmisi dual-clutch 6-speed dengan kontrol yang presisi, dan sistem penggerak semua roda (AWD) menyediakan akselerasi yang menakjubkan, dengan mampu mencapai 0-60 mph dalam sekitar 2,5 detik.",
            video:video4,
            gambar:gambar4,
            speed: "205 Mph",
            logo:logogtr
        },
        
    ];
};


export default videodata;