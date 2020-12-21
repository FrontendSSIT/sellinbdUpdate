import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';

export const PostEdit = () => {
    const { register, handleSubmit, errors } = useForm();
    const {postId}=useParams();
    const history=useHistory()
    localStorage.setItem('postId',postId)
    const id= localStorage.getItem('postId')
    const onSubmit = data => {
        console.log(data)
        const formData = new FormData()
        formData.append('post_id',id)
        console.log(id)
        formData.append('productdescription',data.productdescription)
        formData.append('productprice',data.productprice)
        fetch('https://sellinbd.com/api330088/registration/editproduct.php', {
          method: 'POST',
          body: formData
        })
        .then(response =>response.json())
        .then(result => {
            console.log(result)
            history.replace('/user')

        })



    } 
    const [Delete,setDelete]=useState()
    const usernumber=localStorage.getItem('userNumber')
    const handleDelete=()=>{
        const formData = new FormData()
        formData.append('post_id',id)
        formData.append('usernumber',usernumber)
        fetch('http://sellinbd.com/api330088/product/deletePosting.php',{
            method: 'POST',
        body: formData 
        })
        .then(res=>res.json())
        .then(result=>{
                if(result[0]){
                    setDelete(result[0])
                }
        })
    }
    const [productDetail,setProductDetail] =useState([])
    console.log(productDetail)
  
    useEffect(()=>{
        const formData = new FormData()
        formData.append('post_id',id)
        fetch('https://sellinbd.com/api330088/product/readProductbyId.php',{
        method: 'POST',
        body: formData
        })
        .then(res=>res.json())
        .then(result=>{
                if(result[0]){
                    setProductDetail(result[0])
                }
        })

    },[id])

    return (
       <section className="postForm">
       <Container>
       <Row className="justify-content-center">
       <Col lg={6}>
       <h2>Edit Your Post</h2>
       <form onSubmit={handleSubmit(onSubmit)}>
       <div> <textarea type="text" placeholder="product description" name="productdescription" ref={register({required: true})}  defaultValue={productDetail.productdescription}/></div>
       <div> <input type="text" placeholder="productpric" name="productprice" ref={register({required: true})}   defaultValue={productDetail.productprice}/></div>
         <Row>
         <Col lg={4}> <input type="submit"  value="Edit"/>  </Col>
         <Col lg={4}><input type="submit" value="Delete" onClick={handleDelete}/></Col>
         <Col lg={4}><input type="submit" value="Promote" /></Col>
         </Row>
        </form>
       </Col>
       </Row>
       </Container>
       </section>
    )
}

