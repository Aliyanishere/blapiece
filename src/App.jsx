import './App.css';

import logo from './images/logo.png'
import homebg from './images/img_1.png'
import button from './images/button.png'
import secondimg from './images/img_2.png'
import card1 from './images/1.png'
import card2 from './images/2.png'
import card3 from './images/3.png'
import card4 from './images/4.png'
import card5 from './images/5.png'
import card6 from './images/6.png'
import card7 from './images/7.png'
import card8 from './images/8.png'
import card9 from './images/9.png'
import card10 from './images/10.png'
import card11 from './images/11.png'
import card12 from './images/12.png'
import card13 from './images/13.png'
import card14 from './images/14.png'
import card15 from './images/15.png'
import card16 from './images/16.png'
import card17 from './images/17.png'
import card18 from './images/18.png'
import card19 from './images/19.png'
import card20 from './images/20.png'
import card21 from './images/21.png'
import card22 from './images/22.png'
import card23 from './images/23.png'
import card24 from './images/24.png'
import card25 from './images/25.png'
import card26 from './images/26.png'
import card27 from './images/27.png'
import card28 from './images/28.png'
import card29 from './images/2921.png'
import card30 from './images/30.png'
import card31 from './images/31.png'
import card32 from './images/32.png'
import card33 from './images/33.png'
import card34 from './images/34.png'
import card35 from './images/35.png'
import card36 from './images/36.png'
import card37 from './images/37.png'
import card38 from './images/38.png'
import card39 from './images/39.png'
import card40 from './images/40.png'
import card41 from './images/41.png'
import card42 from './images/42.png'
import card43 from './images/43.png'
import card44 from './images/44.png'



import roadmapcard1 from './images/roadmapcard_1.png'
import roadmapcard2 from './images/roadmapcard_2.png'
import cardmobile1 from './images/cardmobile1.png'
import cardmobile2 from './images/cardmobile2.png'


import bars from './images/bars.png'
import button2 from './images/button2.png';
import sit from './images/sit.png';
import side from './images/side.png';
import robot from './images/robot.png';
import dollar from './images/dollar.png';
import nft from './images/nft.png';
import noor from './images/noor.png';
import tom from './images/tom.png';
import zack from './images/zack.png';
import clip from './images/clip.png';
import team1 from './images/team1.png';
import team2 from './images/team2.png';
import team3 from './images/team3.png';
import buybg from './images/buy-bg.png';
import video1 from './images/home.mp4';
import roadjugar from './images/road-jugar.png';
import roadjugarsm from './images/road-jugar-sm.png';
import opensea from './images/opensea.png';


function App() {


  return (
    <div className="App">

      <section className='home_bg'>
        <header className='header-wrapper'>
          <nav class="navbar navbar-expand-lg ">
            <div class="container">
              <a class="navbar-brand" href="#"><img className='w-75' src={logo} alt="" /></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"> <img src={bars} alt="" /></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#about">ABOUT US</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#collection">COLLECTIONS</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#token">TOKENOMICS</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#roadmap">ROADMAP</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#buy">BUY</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#team">TEAM</a>
                  </li>

                </ul>
                <form class="d-flex mx-0  p-2">
                  <button class="btn " type="submit"> <i className='fab fa-twitter '></i> </button>
                  <button class="btn " type="submit"> <i class="fab fa-discord"></i> </button>
                  <button class="btn " type="submit"> <i class="text-black fab fa-instagram"></i> </button>
                  <button class="btn " type="submit"> <i class="text-black fab fa-telegram"></i> </button>
                </form>
              </div>
            </div>
          </nav>

        </header>

        <div className="container px-0 my-5">
          <div className="row mx-0 justify-content-center ">
            <div className="col-lg-7 px-0">
              <div className="container my-lg-5 my-0">
                <h1 className='text-white fw-bold col-lg-8 col-12'>What is Blapiece NFTs</h1>
                <p className='text-white my-4 col-lg-10 col-12'>futuristic first of it's kind NFT that combines all forms of art and fashion. Blapiece is the first fashion band to use digital robots as model to show case their collection incorporation 3D art and futuristic designs. And in case you haven't guessed it yet  Blapiece NFTs are the 3D pictures of robot.</p>
                <a href="">   <img className='w-30 button_1' src={button} alt="" /></a>
                {/* <button  className='btn btn-danger' > <a className='text-white'  href="">Get Started</a></button> */}
              </div>

            </div>
            <div className="col-lg-5">
              <div className="img_home w-75">
                <video src={video1} className='img_home' playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='Aboutus_section my-5' id='about'>
        <div className="container  ">
          <div className="row mx-0 ">
            <div className="col-md-12 mt-5">
              <h2 className='text-white text-center ws-about-us'>ABOUT US</h2>
              {/* <h1 className='text-center heading_bg '>ABOUT US</h1> */}

            </div>
          </div>
        </div>

        <div className="container  my-5" >
          <div className="row mx-0  frame-on-mobile ">

            <div className="col-lg-8 mx-0 pe-0 border_1  ">
              <img className='img-fluid second_img' src={secondimg} alt="" />
            </div>
            <div className="col-lg-4 border_1">
              <div className="container mx-0  my-5 text-white">
                <h2 className='fw-bold text_about text-white fs-4 '>Who's The robot?</h2>
                <div className='my-4 text_about'>
                  <p>The robot goes by the name Derek.
                    <br /><br />
                    Derek is a Digital robot that exists in the digital world.
                    <br /><br />
                    You could find him on Instagram ( @d22.ai ) https://www.instagram.com/d22.ai/
                    rocking his favorite Blapiece drips and you can find him on the  Metavrse hanging around Blapiece museum .
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

      </section>

      <section className='collecton_section my-5' id='collection'>
        <div className="container text-white text-center my-5" >
          <h3 className='text-center text-white ws-collection'>COLLECTIONS</h3>
          <div className="row mx-0">

          </div>
          <div className="row mx-0 d-lg-flex d-none my-5 text-white text-center" >
            <div className="col-lg-4  ">
              <div className="container exclude_img my-3">
                <img className='img-fluid clippy ' src={card1} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className='mb-4'>BLA JESUS DRIP</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-3">
                <img className='img-fluid   ' src={card2} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA PEACE HOODIE</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-3">
                <img className='img-fluid   ' src={card3} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className='mb-4'>BLM DRIP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid   ' src={card4} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className='mb-4'>BLA IZI DRIP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4">
                <img className='img-fluid   ' src={card5} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA PIECE TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid   ' src={card6} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLAPIECE LOCKDOWN</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid   ' src={card7} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid   ' src={card8} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid   ' src={card9} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid   ' src={card10} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid   ' src={card11} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid   ' src={card12} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid   ' src={card13} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid   ' src={card14} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid   ' src={card15} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid   ' src={card16} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid   ' src={card17} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid   ' src={card18} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid   ' src={card19} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid   ' src={card20} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid   ' src={card21} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid   ' src={card22} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid   ' src={card23} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid   ' src={card24} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid   ' src={card25} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid   ' src={card26} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid   ' src={card27} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid' src={card29} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid' src={card30} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid' src={card31} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid' src={card32} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>

            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid' src={card33} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>    
            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid' src={card34} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>    
            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid' src={card35} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>    
            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid' src={card36} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>    
            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid' src={card37} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>    
            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid' src={card38} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>    
            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid' src={card39} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>    
            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid' src={card40} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>    
            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid' src={card41} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>    
            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid' src={card42} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>    
            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid' src={card43} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>    
            </div>
            <div className="col-lg-4  ">
              <div className="container exclude_img my-4 ">
                <img className='img-fluid' src={card44} alt="" />
                <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                  <h6 className=' mb-4'>BLA MARIA TOP</h6>

                </div>
              </div>    
            </div>
          </div>


          <div className="row mx-0 d-lg-none d-flex my-5 text-white text-center" >
            <div className="col-lg-4 col-12 px-0  ">
              <div className="container exclude_img my-3">
                <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="true" >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img className='img-fluid   ' src={card1} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>1/43</h6>
                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid   ' src={card2} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA PEACE HOODIE</h6>
                      </div>
                      <h6>2/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid   ' src={card3} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLM DRIP</h6>
                      </div>
                      <h6>3/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid   ' src={card4} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLM Hoddie</h6>
                      </div>
                      <h6>4/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid   ' src={card5} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>5/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid   ' src={card6} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>6/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid   ' src={card7} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>7/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid   ' src={card8} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>8/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid   ' src={card9} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>9/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid   ' src={card10} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>10/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid   ' src={card11} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>11/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid   ' src={card12} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>12/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid   ' src={card13} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>13/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid   ' src={card14} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>14/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid   ' src={card15} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>15/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid   ' src={card16} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>16/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid   ' src={card17} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>17/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid   ' src={card18} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>18/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid   ' src={card19} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>19/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid   ' src={card20} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>20/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid   ' src={card21} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>21/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid   ' src={card22} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>22/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid   ' src={card23} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>23/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid   ' src={card24} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>24/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid   ' src={card25} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>25/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid   ' src={card26} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>26/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid' src={card43} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>27/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid' src={card29} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>28/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid' src={card30} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>29/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid' src={card31} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>30/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid' src={card32} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>31/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid' src={card33} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>32/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid' src={card34} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>33/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid' src={card35} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>34/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid' src={card36} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>35/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid' src={card37} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>36/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid' src={card38} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>37/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid' src={card39} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>38/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid' src={card40} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>39/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid' src={card41} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>40/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid' src={card42} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>41/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid' src={card43} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>42/43</h6>

                    </div>
                    <div class="carousel-item">
                      <img className='img-fluid' src={card44} alt="" />
                      <div className=" d-flex align-itmes-center justify-content-center text_align  ">
                        <h6 className='mb-4'>BLA JESUS DRIP</h6>
                      </div>
                      <h6>43/43</h6>

                    </div>

                    
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>

              </div>
            </div>
            {/* <div className="col-12 text-center fs-7 text-primary">
              1 of 7
            </div> */}
          </div>
        </div>

      </section>




      {/* Tokenomics */}
      <div className="pre_token my-5 " id='token'>
        <div className='tokenomics'></div>
        <div className="container  py-5  p-0 ">
          <div className="row mx-0 p-3 align-items-center">
            <div className="sm_token p-0  m-0 col-12 ps-lg-5 ps-md-3 col-md-6 col-lg-6 m-0" style={{ zIndex: "2" }}>
              <p className='token_head text-start'>Blapiece Token</p>
              <p className='text-start token_para'>Blapiece token is launching it's own token . Blapiece is one of the first fashion brands to launch it’s own token . Blapiece token. To be released on December. 22nd 2022.
                <br />The white paper to be released on May 22nd 2022. Find out more on our Telegram and Discord group.
              </p>
              <a href="" className='mt-3'><img src={button2} alt="" width="130px" /></a>
            </div>
            <div className="col-lg-6">
              <div className="img_home w-75">
                <video src={video1} className='img_home' playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* roadmap */}

      {/* <div className='roadmap' id='roadmap'> */}




      <section className='ak_bg_roadmap'>
        <div id='roadmap' className="container px-4 mb-5" style={{ minHeight: "100vh" }}>
          <div className="card w-100 card-bg py-5 pb-0 d-flex flex-column align-items-center">
            <span className="fs-2 fw-600" style={{ color: "white" }}>Roadmap</span>
            <div className="row mx-0 mt-5 justify-content-center w-100">
              <div className="col-lg-7 col-12 d-flex align-items-center mt-5">
                <div className="diomand">
                  <div>
                    <span>01</span>
                  </div>
                </div>
                <div className="d-flex flex-column ps-5">
                  <span className=" fw-500 text-start" style={{ color: "rgb(255,79,99)" }}>Collaborations</span>
                  <p className="fs-8 fw-200 pt-2 text-start" style={{ color: "white" }}>Blapiece is working with talented artis community to implement their unique art into blapiece 3D and fashion designs. And to create unique NFT pieces that involved artists wither they were painter, 3D artists and fashion designers.  Stay tuned for more collaboration announcements in the discord.</p>
                </div>
              </div>
              <div className="col-lg-7 col-12 d-flex align-items-center mt-5">
                <div className="diomand">
                  <div>
                    <span>02</span>
                  </div>
                </div>
                <div className="d-flex flex-column ps-5">
                  <span className=" fw-500 text-start" style={{ color: "rgb(255,79,99)" }}>Metaverse</span>
                  <p className="fs-8 fw-200 pt-2 text-start" style={{ color: "white" }}>Blapiece is bringing it’s unique designs and concept to Decentraland and SandBox.  Blapiece museum on the metaverse will present different Blapiece NFTs and will host art exhibition and live stream from blapiece fashion shows through switch. On the top of that Blapiece is hosting NFT auctions and a lot more.</p>
                </div>
              </div>
              <div className="col-lg-7 col-12 d-flex align-items-center mt-5">
                <div className="diomand">
                  <div>
                    <span>03</span>
                  </div>
                </div>
                <div className="d-flex flex-column ps-5">
                  <span className=" fw-500 text-start" style={{ color: "rgb(255,79,99)" }}>Gaming</span>
                  <p className="fs-8 fw-200 pt-2 text-start" style={{ color: "white" }}>Blapiece have partnerer with GTA RP to be featured on their game and to bringing Derek  to their game as one of the characters along with blapiece laoud colours and unique designs.
                    We at blapiece are collaboration with more video games to bring more awareness and brand exposure. We’ll announce more gaming collaborations on our discord group.
                  </p>
                </div>
              </div>
              <div className="col-lg-7 col-12 d-flex align-items-center mt-5">
                <div className="diomand">
                  <div>
                    <span>04</span>
                  </div>
                </div>
                <div className="d-flex flex-column ps-5">
                  <span className=" fw-500 text-start" style={{ color: "rgb(255,79,99)" }}>Music</span>
                  <p className="fs-8 fw-200 pt-2 text-start" style={{ color: "white" }}>Blapiece creating a new wave of art in  music by working with different artists and music producers.  Type of music going to be used on our promo videos, fashion shows, during art exhibition on our meta and real universe.</p>
                </div>
              </div>
              {/* <div className="col-lg-7 col-12 d-flex align-items-center mt-5">
              <div className="diomand">
                <div>
                  <span>05</span>
                </div>
              </div>
              <div className="d-flex flex-column ps-5">
                <span className=" fw-500 text-start" style={{ color: "rgb(255,79,99)" }}>Activate Marketing Vault</span>
                <p className="fs-8 fw-200 pt-2 text-start" style={{ color: "white" }}>The marketing vault will receive 11.11% of the MGE funds and 20% of all
                  collected trade fees. After initial volitility settles and the APY gets down to a reasonable level we will
                  begin our post launch marketing efforts.</p>
              </div>
            </div>
            <div className="col-lg-7 col-12 d-flex align-items-center mt-5">
              <div className="diomand">
                <div>
                  <span>06</span>
                </div>
              </div>
              <div className="d-flex flex-column ps-5">
                <span className=" fw-500 text-start" style={{ color: "rgb(255,79,99)" }}>Activate New Buy-Back Vault</span>
                <p className="fs-8 fw-200 pt-2 text-start" style={{ color: "white" }}>Our newest vault, still in development, will have an auto-buy-back feature with
                  customizable paramiters. We will be working closely with our community to choose the vaults buy-back
                  strategies.</p>
              </div>
            </div> */}
            </div>
            <div className="row mx-0 justify-content-center w-100 mt-4 ">
            </div>
          </div>
        </div>
      </section>







      {/* <div className='m-2 d-flex align-items-center flex-column bg-transparent'>
          <p className='mb-0 head fs-1 text-white mt-5'>Roadmap</p> */}
      {/* <div className="  roadmap_mobile w-100 p-0">
            <div className="row mx-0 border_mobile  mt-5 future" style={{ backgroundColor: "transparent" }}>

              <div className="col-lg-6 border-end col-12 d-flex align-items-start flex-column" style={{ backgroundColor: "transparent" }}>
                <div className='roadmap_card2'>
                  <p className='mb-0 text-start w-50 text-white text_road'>1 - provides tools that make it easy to build and grow a token.</p>
                </div>
              </div>
              <div className="col-lg-6 col-12" style={{ backgroundColor: "transparent" }}>

              </div>
            </div>

            <div className="row mx-0 border_mobile mt-0 future" style={{ backgroundColor: "transparent" }}>
              <div className="col-lg-6 border-end col-12" style={{ backgroundColor: "transparent" }}>
              </div>
              <div className="col-lg-6 col-12 d-flex align-items-end flex-column" style={{ backgroundColor: "transparent" }}>
                <div className="roadmap_card">
                  <p className='mb-0 text-end w-50 text-white text_road1'>2- enables decentral (free-market) banking.</p>

                </div>
              </div>

            </div>

            <div className="row mx-0 border_mobile  future" style={{ backgroundColor: "transparent" }}>

              <div className="col-lg-6 border-end col-12 d-flex align-items-start flex-column" style={{ backgroundColor: "transparent" }}>
                <div className="roadmap_card2">
                  <p className='mb-0 text-start w-50 text-white text_road'>3 - It is fundamentally designed to catalyze the token economy.</p>
                </div>

              </div>
              <div className="col-lg-6 col-12" style={{ backgroundColor: "transparent" }}>
              </div>
            </div>

            <div className="row mx-0 mt-0 border_mobile future" style={{ backgroundColor: "transparent" }}>
              <div className="col-lg-6 border-end col-12" style={{ backgroundColor: "transparent" }}>
              </div>
              <div className="col-lg-6 col-12 d-flex align-items-end flex-column" style={{ backgroundColor: "transparent" }}>
                <div className="roadmap_card">
                  <p className='mb-0 text-end w-50 text-white text_road1 text_road4_mobile'>4 - widespread adoption of tokens for use (not just investment) throughout the global economy.</p>

                </div>

              </div>

            </div>

          </div> */}
      {/* <img src={roadjugar} className="w-75 mt-5 d-lg-block d-none" alt="" /> */}
      {/* <img src={roadjugarsm} className="w-100 mt-5 d-lg-none d-block" alt="" /> */}
      {/* </div>
      </div> */}

      {/* how to buy */}
      <div className=" buy" id='buy'>
        <div className="container">
          <div className="row mx-0 px-lg-0 px-2">

            <div className="ins_buy col-12 col-lg-7 col-md-7">
              <p className='buy_head pt-lg-5'>HOW TO BUY</p>
              <p className='text-start token_para' style={{ wordBreak: "break-all" }}>Download Trust Wallet or <span style={{ color: "rgb(255,79,99)" }}>Metamask Wallet</span></p>
              <p className='token_para text-start'>
                Fill up your Wallet with <span style={{ color: "rgb(255,79,99)" }}>BNB</span>
              </p>
              <p className='token_para text-start'>
                <span style={{ color: "rgb(255,79,99)" }}>Connect</span> your Wallet to PancakeSwap
              </p>
              <p className='token_para text-start'>
                Add the POLYX contract address
              </p>
              <p className='token_para text-start'>
                0x6b226e4f3ef5708d496cd1b9e582ea090f3fff70
              </p>
              <p className='token_para text-start'>
                Set Slippage to contract address <span style={{ color: "rgb(255,79,99)" }}>15-20%</span>
              </p>
              <a href="" className='for_hid'><img className='mt-3' src={button2} alt="" width="130px" /></a>
            </div>
            <div className="col-12 col-lg-5 col-md-5 for_hid">
              <img src={side} alt="" className='sit_bg' />
            </div>
          </div>
        </div>
      </div>

      {/* marketing approach */}
      <div className="container approach">
        <p className='approach_head'>Marketing Approach</p>
        <p className='text-start content'>1-influncer marketing. We see influencers marketing as the main way to target clients and to bring enough awareness to the brand.
          <br />
          <br />
          2- press releases: we aim to launch press release across ove\r 200 different media platforms that we going to push through influencers to bring more awareness
          <br />
          <br />
          3- using digital robot is on of the marketing strategy that we using as that it was never done by any other brands
          <br />
          <br />
          4- telegram channels
          <br />
          <br />
          5- social media marketing (facebook-twitter-Instagram-Pinterest and tik tok)
          <br />
          <br />
          6- night clubs and concerts venues as blapiece using a dancing digital robot wearing blapiece clothes that can be showing in these venues.
          <br />
          <br />
          7- blapiece launching its own music that goes with the dancing robot that will be used as a promo for the brand.
          <br />
          <br />
          8- hiring brand ambassadors.
          <br />
          <br />
          9- participating in fashion weeks across the globe.
          <br />
          <br />
          10- sponsoring big events.

        </p>
      </div>

      {/* concept */}
      <div className='container comcept'>
        <p className='concept_head'>Market Place</p>
        <p className='concept_para'>Blapioece launching serial number of NFTs in Different Market places.  Each.  Blapiece NFT represent a physical fashion design that will be sold only on <a href="https://www.blapiece.ai/" style={{ color: "white", fontStyle: "italic" }}>https://www.blapiece.ai/</a>.  the drop of the NFT will be limited and exclusive. some will be sold At an auction on. Blapiece museum on the metaverse and some will be sold on one of the NFT market places. A release of each NFT on certain market place will be only announced throughout our official Twitter, Instagram and discord group because a single NFT could. Be sold. Only once. For example if BLA MARIA NFT was sold on opensea Marketplace  it. Will not be sold on solana Marketplace.</p>
        <div className='row mx-0 align-items-center mt-3'>
          <div className='mt-5 col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center text-center' style={{ height: "470px" }}>
            <img className='mt-5' src={robot} alt="" width="170px" height="170px" />
            <p className='mt-3' style={{ color: "rgb(255,79,99)" }}>Blapiece robots models</p>
            <p className='mt-3' style={{ color: "white" }}>blapiece using robots models to showcase it's collection. blapiece airms to showcase art in different ways and by using robot it mixes fashion with digital art in a creative ways.</p>
          </div>
          <div className='mt-5 col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center text-center' style={{ height: "470px" }}>
            <img className='mt-5' src={dollar} alt="" width="170px" height="170px" />
            <p className='mt-3' style={{ color: "rgb(255,79,99)" }}>blapiece Token</p>
            <p className='mt-3' style={{ color: "white" }}>Blapiece is one of the first fashion brands to have it's own Token . Blapiece is launching 1,000,000 Blapiece  tokens and they can used to purchase blapiece products either they were physical products or NFT's</p>
          </div>
          <div className='mt-5 col-lg-4 col-md-4 col-12 d-flex flex-column align-items-center text-center' style={{ height: "470px" }}>
            <img className='mt-5' src={nft} alt="" width="170px" height="170px" />
            <p className='mt-3' style={{ color: "rgb(255,79,99)" }}>BLAPIECE NFT's</p>
            <p className='mt-3' style={{ color: "white" }}>Blapiece is set to be one of the first fashion brands to have it's NFT collection. the NFT collection will be dropped alongside with that fashion collection.</p>
          </div>
        </div>
      </div>

      {/* team */}
      <div className="container team" id='team'>
        <p className='text-center pb-lg-5 pt-lg-5' style={{ color: "white", fontWeight: "bold", fontSize: "27px" }}>OUR TEAM</p>
        <div className='tem_img mt-5' >

          <div className='mem1 mt-lg-5 mb-5'>
            <div className='tem_div '>
              <img className='noor' className='pe-lg-5' src={team1} alt="" />
            </div>
            <div className='mem_intro'>
              <p className='tem_name text-start fs-1 mb-4' style={{ color: "#FF4F63" }}>Bisso Noor
                <br /> <span className='text-white fs-6'>CEO and Founder</span></p>
              <p className='text-white text-start pe-4'>Bachelor  in electrical engineering,  have been working on fashion industry for the past 10 years, has experience on building starups and branding specialises on project Development. and investment consulting.</p>
            </div>
          </div>

          <div className='mem1 mt-5 mb-5'>
            <div className=' order-lg-1 order-2 mem_intro2'>
              <p className='tem_name text-start fs-1 mb-4' style={{ color: "#FF4F63" }}>Tom Saban
                <br /> <span className='text-white fs-6'>Investor and Consultant</span></p>
              <p className='text-white text-start pe-4'>Tom Saban been in crypto since 2016, created a lot of key contacts and done a good number of key investments. His strength are network building, relationships, building communities, finding innovative ideas and bringing investors</p>
            </div>
            <div className=' order-lg-2 order-1 tem_div '>
              <img className='noor' className="ps-lg-5" src={team2} alt="" />
            </div>
          </div>

          <div className='mem1 mt-5 mb-5'>
            <div className='tem_div '>
              <img className='noor' className='pe-lg-5' src={team3} alt="" />
            </div>
            <div className='mem_intro'>
              <p className='tem_name text-start fs-1 mb-4' style={{ color: "#FF4F63" }}>Zack benson
                <br /> <span className='text-white fs-6'>PR and Marketing</span></p>
              <p className='text-white text-start pe-4'>Founder at Assistagram | Instagram Marketing Agency | Keynote Speaker | Featured on Forbes, Inc., Entrepreneur</p>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className='footer'>
        <p>2021 POLYX.ALL RIGHTS RESERVED</p>
      </div>
    </div >
  );
}

export default App;
