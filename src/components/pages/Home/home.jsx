// import React from 'react'
// import Footer from '../../Footer/footer'
// import './home.css'
// import '../../../index.css'
// import Navbar from "../../Navbar/Navbar";
// function Home() {
//     return (
//         <div>
//             <Navbar/>
//             <div className='main'>
//                 <div className="left-row">
//                     <div className="m-img"></div>

//                     <h3 className='s1-des'>Gamified<br />Learning Courses</h3>

//                     <p>An intersting play for a better tommorrow</p>

//                     <div className='button-container'>
//                         <button>Know More</button>
//                     </div>
//                 </div>
//                 <div className="right-row">
//                     <h4>Our Courses</h4>
//                     <div className="col">
//                         <div className='sub-img-1'></div>

//                         <div className="sub-container">
//                             <h3 className='main-cont'>react js</h3>
//                             <p className='des'>Introduction to React JS, a library for building UI components</p>
//                             <p className='des2'>85 people joined</p>
//                         </div>
//                     </div>

//                     <div className="col">
//                         <div className='sub-img-2'></div>

//                         <div className="sub-container">
//                             <h3 className='main-cont'>python & django</h3>
//                             <p className='des'>Learn the basics of python & Django, its popular websit development framework</p>
//                             <p className='des2'>85 people joined</p>
//                         </div>
//                     </div>

//                     <div className="col">
//                         <div className='sub-img-3'></div>

//                         <div className="sub-container">
//                             <h3 className='main-cont'>react js</h3>
//                             <p className='des'>Develop bac-end of website using NODE.JS & its library EXPRESS.JS</p>
//                             <p className='des2'>85 people joined</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer/>
//         </div>
//     )
// }

// export default Home


import React from 'react'
import './home.css'
import Footer from '../../Footer/footer'
import Navbar from '../../Navbar/Navbar'
function Home() {
    return (
        
        <div className='container-fluid'>
            <Navbar/>
            <div class="container main d-flex flex-column">
                <div class="d-flex justify-content-between align-items-center">
                    <div style={{ height: "60vh" }} class="d-flex flex-column justify-content-between col-md-6">
                        <h1 className='Heading1'><span>NO</span>TIME</h1>
                        <div class="Heading2">Gamified<br />Learning courses</div>
                        <div class="para">An Interseting Play for a better tommorow</div>
                        <button className='button-container'>Know More</button>
                    </div>
                    <img style={{ "width": "30rem" }} src="3d_character.png" class="img-fluid col-md-6" alt="..." />

                </div>

                <div class="d-flex justify-content-between align-items-start align-items- mT-10">
                    <div style={{ height: "60vh", "width": "40vw" }}>
                        <p class="des">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum inventore perspiciatis vero, recusandae magni reprehenderit accusantium obcaecati? Veritatis aperiam ullam, et voluptates iure iusto, corporis recusandae, delectus ipsam soluta facere.
                            Illo obcaecati quidem non natus accusantium excepturi aliquam ipsam autem asperiores iusto dolorum, facere magnam, alias, corporis temporibus. Adipisci laudantium recusandae fuga esse molestiae perferendis nesciunt, suscipit nulla inventore facilis?</p>
                    </div>

                    <h1 style={{ "font-size": "5rem" }} class='Heading1'>WHY<br /><span>NO</span>TIME?</h1>
                </div>

                <div class="container-fluid d-flex flex-column ">
                    <div style={{ "font-size": "5rem" }} class="Heading2 mx-auto mb-5">we provide</div>

                    <div class="row d-flex flex-row justify-content-between align-items-center mt-5 mb-5">
                        <div class="col-sm-4 card-main">
                            <img class="sub_img" src="react.png" alt="" />
                            <div class="mx-auto" style={{ "width": "16rem" }}><h2 className='card_title'>jobs</h2></div>

                        </div>

                        <div class="col-sm-4 card-main">
                            <img class="sub_img" src="setting.png" alt="" />
                            <div style={{ "width": "10rem" }}><h2 className='card_title'>internship</h2></div>


                        </div>

                        <div class="col-sm-4 card-main">
                            <img class="sub_img" src="box.png" alt="" />
                            <div class="mx-auto" style={{ "width": "16rem" }}><h2 className='card_title'>jobs</h2></div>
                        </div>
                    </div>
                </div>

                <div class="d-flex flex-row justify-content-between me-5 align-items-center mb-5">
                    <div>
                        <img src="Standingboy.png" style={{ "width": "16rem" }}  class=" img-fluid" />
                    </div>
                    <div style={{ height: "60vh", "width": "40vw" }}>
                        <p class="des mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum inventore perspiciatis vero, recusandae magni reprehenderit accusantium obcaecati? Veritatis aperiam ullam, et voluptates iure iusto, corporis recusandae, delectus ipsam soluta facere.
                            Illo obcaecati quidem non natus accusantium excepturi aliquam ipsam autem asperiores iusto dolorum, facere magnam, alias, corporis temporibus. Adipisci laudantium recusandae fuga esse molestiae perferendis nesciunt, suscipit nulla inventore facilis?</p>
                        <button className='button-container'>EXPLORE</button>
                    </div>


                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Home