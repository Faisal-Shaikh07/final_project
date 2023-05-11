import React from 'react'
import Products from './Products';

const Home = () => {
    return (
        <div className='Hero'>
            <div class="card text-bg-dark text-white border-0">
                <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="card-img" alt="background" height="600px" />
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <div className='container'>
                        <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p class="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}


export default Home;