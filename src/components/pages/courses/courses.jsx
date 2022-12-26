import React from 'react'
import './courses.css'
import Footer from '../../Footer/footer'
import Navbar from '../../Navbar/Navbar'

function Course() {
    return (
        <div className="container-fluid">
            <Navbar />
            <h2 className='s1-des mx-3'>our courses</h2>

            <div className="container-fluid my-5 ">
                <div className="row mb-3">
                    <div className="col-md-6 mb-3">
                        <div className="card colum">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src='react-img.png' className='img-fluid sub-img-1' alt='react' />
                                </div>
                                <div className="col-md-8">
                                    <h3 className='card-title main-cont'>React js</h3>
                                    <p className='des'>Introduction to React JS, a library for building UI components</p>
                                    <p className='des2'>85 people joined</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <div className="card colum">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src='react-img.png' className='img-fluid sub-img-1' alt='react' />
                                </div>
                                <div className="col-md-8">
                                    <h3 className='card-title main-cont'>React js</h3>
                                    <p className='des'>Introduction to React JS, a library for building UI components</p>
                                    <p className='des2'>85 people joined</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row mb-3">
                    <div className="col-md-6 mb-3">
                        <div className="card colum">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src='pythin-image.png' className='img-fluid sub-img-1' alt='react' />
                                </div>
                                <div className="col-md-8">
                                    <h3 className='card-title main-cont'>phython $ django</h3>
                                    <p className='des'>Learn the basics of Python & Django, its popular website development framework</p>
                                    <p className='des2'>85 people joined</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <div className="card colum">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src='pythin-image.png' className='img-fluid sub-img-1' alt='react' />
                                </div>
                                <div className="col-md-8">
                                    <h3 className='card-title main-cont'>Python & django</h3>
                                    <p className='des'>Learn the basics of Python & Django, its popular website development framework</p>
                                    <p className='des2'>85 people joined</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row mb-3">
                    <div className="col-md-6 mb-3">
                        <div className="card colum">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src='html-img.png' className='img-fluid sub-img-1' alt='react' />
                                </div>
                                <div className="col-md-8">
                                    <h3 className='card-title main-cont'>css</h3>
                                    <p className='des'>Develop back-end of website using NODE.JS & its library EXPRESS.JS</p>
                                    <p className='des2'>85 people joined</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <div className="card colum">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src='html-img.png' className='img-fluid sub-img-1' alt='react' />
                                </div>
                                <div className="col-md-8">
                                    <h3 className='card-title main-cont'>css</h3>
                                    <p className='des'>Develop back-end of website using NODE.JS & its library EXPRESS.JS</p>
                                    <p className='des2'>85 people joined</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>  

            </div>
            <Footer />
        </div>
    )
}

export default Course