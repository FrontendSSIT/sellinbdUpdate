import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavBarSub } from '../Home/NavBars/NavBars'
import './UserProfile.scss'
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom'
import { Close, CloudUpload, HelpOutlineTwoTone, PowerSettingsNewOutlined, RateReviewOutlined,  ReportOffOutlined, Share, ShoppingCartOutlined ,ArrowRightAlt} from '@material-ui/icons'
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

 
 return (
       <section className="userSection" key={toString()}>
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
       <h2> Welcome to {userData.username} </h2>
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
  
    {imagess.length>0?<Col lg={2} className='ConfirmBtn'> <form ><div className="text-center" ><button onClick={handleProfilImg}>confirm</button></div> </form></Col>:null}
    
    
  </Row>
  </Col>
  </Row>
       </Col>
       </Row>
       <Row className={"justify-content-center"}>
       <Col lg={8}>
       <Faq/>
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
   

export const Faq=()=>{
  const history =useHistory()
 const handleLogout=()=>{
     localStorage.clear('userNumber')
   history.replace('/')
 }


const [fqa,setFqa]=useState(false)
const [sellFst,setSellFst]=useState(false)
 return(
  <section>
  <Container className="fqaProfile">
  <Row>
  <Col lg={12}> <h4 onClick={()=>setFqa(!fqa)}> <HelpOutlineTwoTone /> FAQ
  
  {fqa?<ul style={{height:"200px",overflow:"scroll"}}>
    <li style={{color:"#66B1FF",marginBottom:"5px"}}>Q: How do I create a new account?</li>
    <li style={{fontSize:"14px",marginBottom:"5px"}}>A: At first you click on “Login”. Then click on “Registration” and fill in the form and then click on
    “Registration”.</li>
    <li style={{color:"#66B1FF",marginBottom:"5px"}}>Q: How do I Login?</li>
    <li style={{fontSize:"14px",marginBottom:"5px"}}>A: At first you click on “Login”. Then input your “phone number” and “password”. After that click on
    “Login”.</li>
    <li style={{color:"#66B1FF",marginBottom:"5px"}}>Q: What info I need to provide for Registration?</li>
    <li style={{fontSize:"14px",marginBottom:"5px"}}>A: You just need to provide- “username”, “password” and “phone number” for registration.</li>
    <li style={{color:"#66B1FF",marginBottom:"5px"}}>Q: How do I post an ad?</li>
    <li style={{fontSize:"14px",marginBottom:"5px"}}>A: First of all, you need to login in your account. Then click on “Add Post”. Then follow the instructions.</li>
    <li style={{color:"#66B1FF",marginBottom:"5px"}}>Q: How do I edit my ad?
    </li>
    <li style={{fontSize:"14px",marginBottom:"5px"}}>A: Click on “Account”. Then click on “Click for Edit, Delete & Promote”. Select the “Edit” and edit your post.
    </li>
    <li style={{color:"#66B1FF",marginBottom:"5px"}}>Q: How do I promote my ad?
    </li>
    <li style={{fontSize:"14px",marginBottom:"5px"}}>A: Click on “Account”. Then click on “Click for Edit, Delete & Promote” and click on “Promote”. Then select your package and follow the payment instructions.</li>
    <li style={{color:"#66B1FF",marginBottom:"5px"}}>Q: How do I delete my ad?
    </li>
    <li style={{fontSize:"14px",marginBottom:"5px"}}>A: Click on “Account”. Then click on “Click for Edit, Delete & Promote”. Select “Delete”.</li>
    <li style={{color:"#66B1FF",marginBottom:"5px"}}>Q: Is there any limitation to post ad?
    </li>
    <li style={{fontSize:"14px",marginBottom:"5px"}}>A: No. There is no limitation to post ad.
    </li>
    <li style={{color:"#66B1FF",marginBottom:"5px"}}>Q: How long will the ad show in app/website?
    </li>
    <li style={{fontSize:"14px",marginBottom:"5px"}}>A: There is no time limitation for showing ads.</li>
    <li style={{color:"#66B1FF",marginBottom:"5px"}}>Q: How can I change my password?</li>
    <li style={{fontSize:"14px",marginBottom:"5px"}}>A: Just click on “Login” and then click on “Forget Password”. Follow the next instructions.</li>
    <li style={{color:"#66B1FF",marginBottom:"5px"}}>Q: What should I do if I forget my password?
    </li>
    <li style={{fontSize:"14px",marginBottom:"5px"}}>A: Just click on “Login” and then click on “Forget Password”. Follow the next instructions.
    </li>
    <li style={{color:"#66B1FF",marginBottom:"5px"}}>Q: What is slider ad?</li>
    <li style={{fontSize:"14px",marginBottom:"5px"}}>A: Slider ad is a slide based ad which is running over on top of the website.</li>
    <li style={{color:"#66B1FF",marginBottom:"5px"}}>Q: What is premium ad?</li>
    <li style={{fontSize:"14px",marginBottom:"5px"}}>A: Premium ad is a paid ad which can boost your sell.</li>

    </ul>:null}
  </h4>
  
  </Col>
  <Col lg={12}> <h4 onClick={()=>setSellFst(!sellFst)}><ShoppingCartOutlined/> How to sell fast
  {
    sellFst?<ul style={{height:"200px",overflow:"scroll",fontSize:"16px"}}>
    <li style={{color:"#66B1FF",marginBottom:"10px"}}><ArrowRightAlt/> Please use the “Promote” option to fast sell your product. Select the “Promote” option and then select “Slider Ad” or “Premium Ad”. In the slider ad your selling ad will be visible on top of the website</li>
    <li style={{color:"#66B1FF",marginBottom:"10px"}}><ArrowRightAlt/> Promote your ad! Promoted ads are viewed 10 times more often. A large number of interested buyers have a good chance of selling quickly at your desired price.</li>
    <li style={{color:"#66B1FF",marginBottom:"10px"}}><ArrowRightAlt/> Use good quality pictures. Take clear pictures - Take pictures from different perspectives in adequate light. Use original images.</li>
    <li style={{color:"#66B1FF",marginBottom:"10px"}}><ArrowRightAlt/> Describe everything clearly in your ad. Do not resort to lies when describing. Beautiful description means attracting more buyers! Provide keywords and information that attract buyers.
    </li>
    <li style={{color:"#66B1FF",marginBottom:"10px"}}><ArrowRightAlt/> Choose the right price. Choose prices based on how much buyers are willing to pay. Remember, the lower the price, the higher the demand. Browse more ads of the same type and select a reasonable price.</li>
    </ul>:null
  }
  
  </h4></Col>
  <Col lg={12}><a rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.xb.shameem.sellinbd&hl=en&gl=US" target="_blank"> <h4> <RateReviewOutlined/> Rate Us</h4></a></Col>
  <Col lg={12}> <h4><Share/> Share</h4></Col>
  <Col lg={12}> <a href="mailto:sellinbd@gmail.com" rel="noopener noreferrer" target="_blank"><h4> <ReportOffOutlined/> Report Problem/Contact With Developer</h4></a></Col>
  <Col lg={12} onClick={handleLogout}> <h4> <PowerSettingsNewOutlined/> Logout</h4></Col>
  </Row>
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
        <h3 style={{color:'#000'}}>{userPost?.item}</h3> 
        <h3 style={{color:'#000'}}>BDT. {userPost?.productprice}</h3>
        <h3 style={{color:'#000'}}>{userPost?.place} {userPost?.district}</h3>
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