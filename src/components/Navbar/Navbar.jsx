import React, { useState } from "react";
import './Navbar.css';


const Navbar = () => {

    return (

        <nav class="navbar navbar-expand-lg navbar-light text-white mt-2">
            <div class="container-fluid d-flex flex-row me-7">

                <a class="navbar-brand text-white"  href="#"><img src="no_time_logo_6 3.png" style={{ "width": "5.2rem" }}></img></a>
                

                <div class="form-outline ">
                    <input type="search" id="form1" class="form-control forms rounded-pill ml-4" placeholder="Search.." />
                    
                </div>


                <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" ></span>
                </button>
                <div class="collapse navbar-collapse text-white" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 ms-auto align-items-center mb-lg-0 text-white ">

                        <li class="nav-item ">
                            <a class="nav-link w-100 me-5 active text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link w-100 me-5 text-white" href="#">Why NoTime?</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link w-100 me-5 text-white" href="#">Contact Us</a>
                        </li>

                        <li class="nav-item ">
                            <a class="nav-link w-100 me-5 text-white" href="#" tabindex="-1" aria-disabled="true">Go to Console</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link w-100 me-5 text-white" href="#" tabindex="-1" aria-disabled="true"><img src="notifier.png" style={{ "width": "1.2rem" }}></img></a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link w-100 me-5 text-white" href="#" tabindex="-1" aria-disabled="true"><button class="button button5"></button></a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    )
}
export default Navbar