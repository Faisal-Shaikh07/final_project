import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                            Shoppers Stop is home to a multitude of leading international and national brands for apparels, fragrances, accessories, cosmetics, footwear, home décor and furnishings catering to the needs of the entire family. We aspire to provide our customers a memorable international shopping experience. We are one of the largest chain of department stores across India.

                            Our Vision Is,
                            “To be an inspirational and trusted brand, transforming customers' lives through fashion and delightful shopping experience every time”
                            We have a team of professional associates who strive endlessly to provide the best shopping experience to each of our customers. We have adopted a new philosophy of "Start Something New" to give retail a new dimension and innovation is our key driver to attain excellence in customer service.
                        </p>
                        <Link to="/contact" className="btn btn-outline-primary px-3">Contact Us</Link>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-21300.jpg?w=740&t=st=1683711011~exp=1683711611~hmac=f54ea5a6831464d1e30f89b6ef7d36a47c75239a2393cacce09cb831390a9dad" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About