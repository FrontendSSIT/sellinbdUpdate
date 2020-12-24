import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavBarSub } from '../Home/NavBars/NavBars'
import './UserProfile.scss'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import { Close, CloudUpload } from '@material-ui/icons'
import ImageUploading from "react-images-uploading";



export const UserProfile = () => {
    const [userData,setUserData] =useState([])
    console.log(userData)
    const [userPost,setUserPost] =useState([])
    console.log(userPost)
    const usernumber =localStorage.getItem('userNumber')
    useEffect(()=>{
        const formData = new FormData()
        formData.append('usernumber',usernumber)
  fetch('https://sellinbd.com/api330088/user/readProfile.php',{
    method: 'POST',
    body: formData
  })
  .then(res=>res.json())
  .then(result=>{
          if(result[0]){
            setUserData(result[0])
          }
  })
  fetch('https://sellinbd.com/api330088/product/readOwnPosts.php',{
    method: 'POST',
    body: formData
  })
  .then(res=>{
    if(res.status===200){
        res.json()
        .then(result=>{
            if(result){
              setUserPost(result.records)
            }
    })
    }
})
},[])
  const number=localStorage.getItem('userNumber')
  const { register, handleSubmit, errors } = useForm();
  const [imagess, setImages] = useState([]);
  const maxNumber = 69;
  const uploadImage= (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList);
      setImages(imageList);
  };
 const handleProfilImg=()=>{
    const formData = new FormData()
    formData.append('usernumber',number)
    formData.append('images[]',imagess[0]?.file)
    fetch('https://sellinbd.com/api330088/user/updateProfilePicture.php',{
              method:'POST',
              body: formData
            })
         
      }
  // const[pic,setPic]=useState(null)
  // console.log(pic)
  // const onSubmit = async data => { 
  //   const file=data.file[0]
  //   const base64= await convertbase(file)
    
  //   }
  // //   const handlePic=()=>{
  //     const formData = new FormData()
  //     formData.append('usernumber1',usernumber)
  //     formData.append('profilepicture',pic)
  //       fetch('https://sellinbd.com/api330088/registration/updatepp.php',{
  //         method:'POST',
  //         body: formData
  //       })
  //       .then(response =>response.json())
  //       .then(resData=>{
  //         console.log(resData)
  //       })
        
  //   }

// const convertbase=(file)=>{
//   return  new Promise((resolve, reject) =>{
//  const fileReader = new FileReader()
//  fileReader.readAsDataURL(file)
//  fileReader.onload = () =>{
//    resolve(fileReader.result)
//  }
//  fileReader.onerror = (error) =>{
//   reject(error)
// }
//   });
 
  


    return (
       <section className="userSection" key={number.toString()}>
       <Container fuild>
       <NavBarSub/>
       <Row className="justify-content-center">
       <Col lg={8} xs={12}>
       <div className="profileBoder">
      <div className="userProfile">
      <Row>
      <Col lg={5} xs={4}>
      <div className="profilePicture"><img src={userData.profilepicture} alt=""/></div>
      </Col>
      <Col lg={7} xs={8}>
       <h2> WelCome TO {userData.username} </h2>
       <h2> {number} </h2>
      </Col>
      </Row>
      </div>
      </div>
     
     <Row className="justify-content-center">
     
     <Col lg={12}>
    <Row>
    
      <Col lg={6}> <ImageUploading
      multiple
      value={imagess}
      onChange={uploadImage}
      maxNumber={1}
      dataURLKey="data_url"
  >
      {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
 
          dragProps
      }) => (
              // write your building UI
              <div className={imagess[0]?"upload__image":"upload__image-wrapper"} >
                  <button className="uploadbtn" id="imgBtn"
                      style={isDragging ? { color: "red" } : null}
                      onClick={ onImageUpload}
                      {...dragProps}
                  >
                  <CloudUpload/> Upload Your Image
  </button>
  &nbsp;
                {
                 imagess[0]?<button onClick={onImageRemove} className="closebtn"><Close/> </button>:null
                }
                  {imageList.map((image, index) => (
                      <div key={index} className="image-item">
                          <img src={image.data_url} alt="" width="100" />
                         
                      </div>
                  ))}
              </div>
          )}
  </ImageUploading></Col>
  
     <Col lg={2} className='ConfirmBtn'> <form ><div className="text-center" ><button onClick={handleProfilImg}>confirm</button></div> </form></Col>
    
    
  </Row>
  </Col>
  </Row>
       </Col>
       </Row>
       <Row className="justify-content-center"> <Col lg={8} >
       <div className="fqaProfile">
       <h2>MY Ads</h2>
       </div>
       </Col></Row>
       {
         userPost.map(userPost=><UserPost userPost={userPost}/>)
       }
       </Container>
       </section>
    )
}


const UserPost=({userPost})=>{
  const postId=userPost.post_id
    const category=userPost.category
  return (
 
       <Row  className="justify-content-center" key={userPost.post_id}>
       
      
       <Col lg={8} xs={12}>
        <Link to={`/produtcDetails/${category}/${postId}`}>
        <div className="fqaProfile">
        <Row className="justify-content-center">
        <Col lg={4} xs={4}> <div className="userpostImg"><img src={userPost?.image1} alt=''/></div> </Col>
        <Col lg={8} xs={8}> 
        <div>      
        <h3>{userPost?.item}</h3> 
        <h3>BDT. {userPost?.productprice}</h3>
        <h3>{userPost?.place} {userPost?.district}</h3>
         </div>  
        </Col>
        </Row>
       
       </div>
        </Link>
       <div  className="text-center"> <Link style={{backgroundColor:' #3F9DFF',color:'#fff',padding:'5px 10px', borderRadius:
      '10px'}} to={`/PostEdit/${postId}`}>Click for Edit, Delete & Promote</Link>  </div>
       </Col>
      
       </Row>
  )
}