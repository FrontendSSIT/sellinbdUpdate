
import React, { useContext ,useState} from 'react'
import { useForm } from 'react-hook-form';
import { Col, Container, Row } from 'react-bootstrap'
import { NavBarSub } from '../../../Home/NavBars/NavBars';
import selectIcon from '../../../../images/selectIcon.png'
import { userContext } from '../../../../App';
import ImageUploading from "react-images-uploading";
import './PostForm.scss'
import { Close, CloudUpload } from '@material-ui/icons';

export const PostForm = () => {
    const postcat=localStorage.getItem('postcat')
    const { register, handleSubmit, errors } = useForm();
    const [loginUser,setLoginUser,userName,setUserName]=useContext(userContext);
    const [images, setImages] = useState([]);
    const maxNumber = 69;
    const uploadImage= (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList);
        setImages(imageList);
    };
     let imagesLength = images.length

    const onSubmit = data => {
        console.log(data)
        const formData = new FormData()
        formData.append('username', "shakil")
        formData.append('usernumber1', "+801637623345")
        formData.append('productname',data.productname)
        formData.append('model',data.model)
        formData.append('productprice',data.productprice)
        formData.append('priceStatus',data.priceStatus)
        formData.append('productStatus',data.productStatus)
        formData.append('file1',images[0]?.file)
        formData.append('file2',images[1]?.file)
        formData.append('file3',images[2]?.file)
        formData.append('file4',images[3]?.file)
        formData.append('file5',images[4]?.file) 
        fetch('https://sellinbd.com/api330088/registration/test2.php', {
          method: 'POST',
          body: formData
        })
        .then(result => {
            console.log(result)
        })
      
    };
 
   
    return (
        <section className="postForm">
        <Container fluid>
        <NavBarSub/>
        <Row className="justify-content-center">
        <Col lg={6}>  
        <div className="postLogo"><img src={selectIcon} alt="" /> Ad Post</div>
    <form onSubmit={handleSubmit(onSubmit)}>
     <div> <input type="text" placeholder="Title" name="productname" ref={register({required: true, maxLength: 80})} /></div>
     <div> <input type="text" placeholder="Model" name="model" ref={register({required: true, maxLength: 100})} /></div>
      <div><input type="text" placeholder="Price (BDT)" name="productprice" ref={register({required: true, })} /></div>
    
     <div> 
     <select name="division" ref={register({ required: true })}>
     <option >Location</option>
     <option >Mymensingh Division</option>
     <option >Rangpur  Division</option>
     <option >Khulna Division</option>
     <option >Dhaka Division</option>
     <option >Barishal Division</option>
     <option >Rajshahi Division</option>
     <option >Sylhet Sylhet</option>
     <option >Chattogram Division</option>
 
   </select>
</div>
     <div className="radioBox">
     <div >
    
     <input name="priceStatus" type="radio" value="Fixed Price"  ref={register({ required: true })}/>
     <label>Fixed Price</label>
   
     <input name="priceStatus" type="radio" value="Negotiable" ref={register({ required: true })}/>
     <label>Negotiable</label>
     </div>
    {
        postcat=="Pets"|| postcat=="Farm Animal" || postcat=="Pet & Animal Accessories"||postcat=="Pet & Animal Foods" || postcat=="Other Pet & Animals" ||postcat=="Crops, Seeds & Plants" ||postcat=="Agricultural Tools & Machinery"
        ||postcat=="Others" || postcat=="Others Agricultural Items" || postcat=="Grocery" ||postcat=="Fruits & Vegetables" || postcat=="Meat & Seafood" ||postcat=="Baby Products"||postcat=="Health & Care"|| postcat=="Household"
        ||postcat=="Ready Food"|| postcat=="Kitchen" || postcat=="General" || postcat=="Homeio Medicine" || postcat=="Herbal Medicine"||postcat=="Tution" || postcat=="Courses & Coaching"|| postcat=="Ready Food Supplies"
        || postcat=="Visa, Travel & Ticketing Sertvice"|| postcat=="Business & Technical"||postcat=="Events & Hospitality" || postcat=="Car, Bus and Truck Rent" || postcat=="Interior Design"|| postcat=="House Service"
        || postcat=="Mobile Phone Servicing" || postcat=="Laptops &U Desktops Servicing" || postcat=="Vehicles Servicing"
        ?null: <div>
   
        <input name="productStatus" type="radio"  ref={register({ required: true })}/>
        <label>New</label>
       
         <input name="productStatus" type="radio"  ref={register({ required: true })}/>
         <label>Used</label>
         </div>
    }
     </div>
     <div>  <textarea type="text" placeholder="Description" name="description" ref={register({required: true, minLength: 6, maxLength: 12})} /></div>

    <div className="text-center btn-frm" >  <input type="submit" value="Post A Ad"/></div>
    <p>User Name: {userName?.message}</p> 
    <p>User Number: {loginUser?.usernumber} </p>
    </form>
      <div>
      <ImageUploading
     multiple
     value={images}
     onChange={uploadImage}
     maxNumber={5}
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
             <div className={images[0]?"upload__image":"upload__image-wrapper"}>
                 <button className="uploadbtn"
                     style={isDragging ? { color: "red" } : null}
                     onClick={ onImageUpload}
                     {...dragProps}
                 >
                 <CloudUpload/> Upload Your Image
 </button>
 &nbsp;
               {
                images[0]?<button onClick={onImageRemove} className="closebtn"><Close/> </button>:null
               }
                 {imageList.map((image, index) => (
                     <div key={index} className="image-item">
                         <img src={image.data_url} alt="" width="100" />
                        
                     </div>
                 ))}
             </div>
         )}
 </ImageUploading>
      </div>
        </Col>
        </Row>
        </Container>
      
        </section>
    )
}
