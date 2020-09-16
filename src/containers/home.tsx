import React from 'react'
import Header from '../components/home/header';
import Banner from '../components/home/banner';
// import Slider from '../components/home/slider';
import Loiich from '../components/home/loiich';
import Tinhnang1 from '../components/home/tinhnang-one';
import Tinhnang2 from '../components/home/tinhnang-tow';
import Tinhnang3 from '../components/home/tinhnang-three';
import Tinhnang4 from '../components/home/tinhnang-four';
import Banggia from '../components/home/banggia';
import Footer from '../components/home/footer';
function Home() {
    return (
        <header>
            <Header/>
            <Banner/>
            <hr/>
            <Loiich/>
            <br/>
            <br/>
            <Tinhnang1/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Tinhnang2/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Tinhnang3/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Tinhnang4/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Banggia/>
            <br/>
            <br/>
            <br/>
            <hr/>
            <Footer/>
        </header>
    )
}

export default Home;
