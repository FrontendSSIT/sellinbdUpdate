// import { Container } from '@material-ui/core'
// import React, { useState } from 'react'
// import { Col, Row } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// // import fakeData from '../../../fakeData/fakeData';
// import { NavBars } from '../../../Home/NavBars/NavBars';
// import './SignleProduct.scss';
// import car from '../../../../images/icons/car.png'


// export const SignleCategorys = () => {
//     const signgleCategory=[...fakeData.slice(6,8)]
//     const [signleProduct,setSignleProduct]=useState(signgleCategory)
//     return (
//         <>
//         <NavBars/>
//         <section className="signle-category">
//             <Container >
//                 <Row className="justify-content-center">
//                 {
//             signleProduct.map(product=><SignleCategory signleProduct={product}/>)
//         }
//                 </Row>
//             </Container>
//         </section>
//         </>
//     )
// }

// export const SignleCategory = ({signleProduct}) => {
    
//     return (

//        <Col lg={5} xs={6} >
//         <Row>
//             <Col lg={{span:4,offset:2}}>
//             <Link to="/produtcDetails">
//         <div className="signle-category-items">
//             <img src={car} alt=""/>
//              <h3>{signleProduct.productName}</h3>
//              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ullam id repellendus, deserunt velit nobis dolore commodi voluptate omnis dignissimos.</p>
//         </div>
//         </Link>
//             </Col>
//         </Row>
//     </Col>
//     )
// }