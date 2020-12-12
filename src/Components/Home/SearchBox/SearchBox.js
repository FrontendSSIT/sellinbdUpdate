import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Loaders } from '../../Loader/Loaders'
import { AgriculturalTool } from '../../SearchProduct/Category/Agricultural/AgriculturalTools/AgriculturalTools'
import { NavBars } from '../NavBars/NavBars'

export const SearchBox = ({searchValue,success,handleSearchBox,handleSearchClick,setSearchValue}) => {
 
    return (
        <section  className="category">
           {
               searchValue.length>0? <Container >
               <NavBars handleSearchBox={handleSearchBox} handleSearchClick={handleSearchClick} setSearchValue={setSearchValue} />
                  {/* <div className="primimum"> <img src={primimum } alt=""/> </div> */}
               <Row className="justify-content-center">
             
               </Row>
               <Row className="justify-content-center" >
                   <Col lg={8} xs={12}>
                   <Row className="justify-content-center" >
                  
                   {
                       searchValue.map(product=><AgriculturalTool product={product} success={success}/>)
                   }
                   </Row>
                   </Col>
                     </Row>
               </Container>:<Loaders/>
           }
           
          
        </section>
    )
}
