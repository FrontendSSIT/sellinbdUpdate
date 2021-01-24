
import React, { useContext ,useState} from 'react'
import { useForm } from 'react-hook-form';
import { Col, Container, Row } from 'react-bootstrap'
import { NavBarSub } from '../../../Home/NavBars/NavBars';
import selectIcon from '../../../../images/selectIcon.png'
import { userContext } from '../../../../App';
import ImageUploading from "react-images-uploading";
import './PostForm.scss'
import { Close, CloudUpload } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

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
const history =useHistory()
const number =localStorage.getItem('userNumber')
const name = localStorage.getItem('userName')
const items= localStorage.getItem('postcat')
    const onSubmit = data => {
        console.log(data.division)
        const formData = new FormData()
        formData.append('username', name)
        formData.append('usernumber1',number)
        formData.append('productname',data.productname)
        formData.append('model',data.model)
        formData.append('item',items)
        formData.append('category',data.category)
        formData.append('district',data.district)
        formData.append('place',data.place)
        formData.append('registrationyear',data.registrationyear)
        formData.append('enginecapacity',data.enginecapacity)
        formData.append('fueltype',data.fueltype)
        formData.append('gear',data.gear)
        formData.append('bodytype',data.bodytype)
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
            history.replace("/user")

        })
      
    };

    const [division,setDivision]=useState({})

    const handleChange=(e)=>{
      const newDivision={...division}
      newDivision[e.target.name]=e.target.value;
      setDivision(newDivision)
    }
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
     <select name="division" ref={register({ required: true })} onChange={handleChange}>
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
   {/* district*/}
  {
      division.division==="Mymensingh Division"?
      <select name="district" ref={register({ required: true })} onChange={handleChange}>
      <option >District</option>
      <option >Mymensingh</option>
      <option >Jamalpur</option>
      <option >Sherpur</option>
      <option >Netrokona</option>
    </select>:null
}
{/*Place*/}
{
    division.district==="Mymensingh"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Ganginar Par</option>
    <option >Chorpara</option>
    <option >Town Hall</option>
    <option >Valuka</option>
    <option>Muktagacha</option>
    <option>Kewatkhali</option>
    <option>Ishwarganj</option>
    <option>Phulpur</option>
    <option>Cantonment</option>
    <option>Naumahal</option>
    <option>Kistopur</option>
  </select>:null
}
{
    division.district==="Jamalpur"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Baksiganj</option>
    <option >Dewangonj</option>
    <option >Islampur</option>
    <option >Jamalpur Sadar</option>
    <option>Madarganj</option>
    <option>Melandaha</option>
    <option>Sarishabari</option>
  </select>:null
}
{
    division.district==="Sherpur"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Jhenaigati</option>
    <option >Nokla</option>
    <option >Nalitabari</option>
    <option >Sherpur Sadar</option>
    <option>Sreebordi</option>
  </select>:null
}
{
    division.district==="Netrokona"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Atpara</option>
    <option >Barhatta</option>
    <option >Durgapur</option>
    <option >Kalmakanda</option>
    <option>Kendua</option>
    <option>Khaliajuri </option>
    <option>Madan</option>
    <option>Mohonganj</option>
    <option>Netrokona Sadar</option>
    <option>Purbadhala</option>
  </select>:null
}
  {
    division.division==="Rangpur Division"?
    <select name="district" ref={register({ required: true })} onChange={handleChange}>
    <option >District</option>
    <option >Rangpur</option>
    <option >Dinajpur</option>
    <option >Kurigram</option>
    <option >Nilphamari</option>
    <option >Lalmonirhat</option>
    <option >Gaibandha</option>
    <option >Thakurgaon</option>
    <option >Panchagarh</option>
  </select>:null
}
{
    division.district==="Rangpur"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Jahaj Company More</option>
    <option >Dhap</option>
    <option >Shapla Chottor</option>
    <option >Lalbag Mor</option>
    <option>Pourbazar</option>
    <option>Shatmatha Chottor </option>
    <option>Kachari Bazar</option>
    <option>Modern More</option>
    <option>Bodorgonj</option>
    <option>Shathibari</option>
    <option>Mahigonj</option>
    <option>Mithapukur</option>
    <option>Paglapir</option>
    <option>Tajhat</option>
    <option>Shatrasta Mor</option>
    <option>College Para</option>
    <option>Vinno Jogot</option>
    <option>Alamdanga</option>
  </select>:null
}
{
    division.district==="Dinajpur"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Biral</option>
    <option >Birampur</option>
    <option >Birganj</option>
    <option >Bochaganj</option>
    <option>Chirirbandar</option>
    <option>Dinajpur Sadar</option>
    <option>Fulbari</option>
    <option>Ghoraghat</option>
    <option>Hakimpur</option>
    <option>Kaharol</option>
    <option>Khansama</option>
    <option>Nawabganj</option>
    <option>Parbatipur</option>
  </select>:null
}
{
    division.district==="Kurigram"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option>Bhurungamari</option>
    <option>Chat Rajibpur</option>
    <option>Chilmari</option>
    <option>Kurigram Sadar</option>
    <option>Nageshwari</option>
    <option>Phulbari</option>
    <option>Rajarhat</option>
    <option>Raomari</option>
    <option>Ulipur</option>  
  </select>:null
}
{
    division.district==="Nilphamari"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Dimla</option>
    <option >Domar</option>
    <option >Jaldhaka</option>
    <option >Kishorganj</option>
    <option>Nilphamari Sadar</option>
    <option>Syedpur</option>
  </select>:null
}
{
    division.district==="Lalmonirhat"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Aditmari</option>
    <option >Hatibandha</option>
    <option >Kaliganj</option>
    <option >Lalmonirhat Sadar</option>
    <option>Patgram</option>
  </select>:null
}
{
    division.district==="Gaibandha"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Gaibandha Sadar</option>
    <option >Gobindaganj</option>
    <option >Palashbari</option>
    <option >Phulchari</option>
    <option>Sadullapur</option>
    <option>Saghata </option>
    <option>Sundarganj</option>
  </select>:null
}
{
    division.district==="Thakurgaon"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Baliadangi</option>
    <option >Haripur</option>
    <option >Pirganj</option>
    <option >Ranisankail</option>
    <option> Thakurgaon Sadar</option>
   
  </select>:null
}
{
    division.district==="Panchagarh"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Atwari</option>
    <option >Boda</option>
    <option >Debiganj</option>
    <option >Panchagarh Sadar</option>
    <option>Tetulia</option>
  </select>:null
}

{
    division.division==="Khulna Division"?
    <select name="district" ref={register({ required: true })} onChange={handleChange}>
    <option >District</option>
    <option >Khulna</option>
    <option >Jessore</option>
    <option >Kushtia</option>
    <option >Jhenaidha</option>
    <option >Satkhira</option>
    <option >Bagerhat</option>
    <option >Chuadanga</option>
    <option >Magura</option>
    <option >Narail</option>
    <option >Meherpur</option>
  </select>:null
}
{
    division.district==="Khulna"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Khulna Sadar</option>
    <option >sonadanga</option>
    <option >Boyra Bazar</option>
    <option >Daulatpur</option>
    <option>Khalishpur</option>
    <option>Rupsa</option>
    <option>Gollamari</option>
    <option>Phultala</option>
    <option> Dumuria</option>
    <option>Rayermohol</option>
    <option>Nirala</option>
    <option>Dighalia</option>
    <option>Dacope</option>
    <option>Paikgachha</option>
    <option>Lobon Chora</option>
    <option>Batighata</option>
    <option>Terokhada</option>
    <option>Dakbangla</option>
    <option>Keshabpur</option>
    <option>Koyla Ghat</option>
    <option>Tootpara, Pabla</option>
    <option>Koyra</option>
  </select>:null
}
{
    division.district==="Jessore"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Jessore Sadar</option>
    <option >Jhikargachha</option>
    <option >Manirampur</option>
    <option >Bagherpara</option>
    <option>Abhaynagar</option>
    <option>Keshabpur</option>
    <option>Sharsha</option>
    <option>Chaugachha</option>
  </select>:null
}
{
    division.district==="Kushtia"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Bheramara</option>
    <option >Daulatpur</option>
    <option >Khoksa</option>
    <option >Kumarkhali</option>
    <option>Kushtia Sadar</option>
    <option>Mirpur</option>
  </select>:null
}
{
    division.district==="Jhenaidha"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Jhenaidha sadar</option>
    <option >Shailkupa</option>
    <option >Harinakunda</option>
    <option >Maheshpur</option>
    <option>Kotchandpur</option>
    <option>Kaliganj</option>
  </select>:null
}
{
    division.district==="Satkhira"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Satkhira Sadar</option>
    <option >Shyamnagar</option>
    <option >Assasuni</option>
    <option >Kalaroa</option>
    <option>Tala</option>
  </select>:null
}
{
    division.district==="Bagerhat"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Bagerhat Sadar</option>
    <option >Chitalmari</option>
    <option >Fakirhat</option>
    <option >Kachua</option>
    <option>Mollarhat</option>
    <option>Mongla</option>
    <option>Morrelganj</option>
    <option>Rampal</option>
    <option>Sarankhola</option>
  </select>:null
}
{
    division.district==="Chuadanga"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Chuadanga Sadar</option>
    <option >Alamdanga</option>
    <option >Damurhuda</option>
    <option >Jibonnagar</option>
  </select>:null
}
{
    division.district==="Magura"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Magura Sadar</option>
    <option >Shalikha</option>
    <option >Sreepur</option>
    <option >Mohammadpur</option>
  </select>:null
}
{
    division.district==="Narail"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Narail Sadar</option>
    <option >Lohagara</option>
    <option >Kalia</option>
  </select>:null
}
{
    division.district==="Meherpur"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Meherpur Sadar</option>
    <option >Muzib Nagar</option>
    <option >Gangni</option>

  </select>:null
}

{
    division.division==="Dhaka Division"?
    <select name="district" ref={register({ required: true })} onChange={handleChange}>
    <option >District</option>
    <option >Dhaka</option>
    <option >Naryanganj</option>
    <option >Gazipur</option>
    <option >Tangail</option>
    <option >Narasingdi</option>
    <option >Faridpur</option>
    <option >Kishorganj</option>
    <option >Gopalganj</option>
    <option >Manikganj</option>
    <option >Madaripur</option>
    <option >Munshiganj</option>
    <option >Rajbari</option>
    <option >Shariatpur</option>
  </select>:null
}
{
    division.district==="Dhaka"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Mirpur</option>
    <option >Uttara</option>
    <option >Dhanmondi</option>
    <option>Gulshan</option>
    <option>Mohammadpur</option>
    <option>Basundhara</option>
    <option>Jatrabari</option>
    <option>Savar</option>
    <option>Badda</option>
    <option>Farmgate</option>
    <option>Baridhara</option>
    <option>Rampura</option>
    <option>Motijheel</option>
    <option>Elephant </option>
    <option>Road</option>
    <option>Khilgaon</option>
    <option>Mogbazar</option>
    <option>Malibagh</option>
    <option>Keraniganj</option>
    <option>Banani</option>
    <option>Ramna</option>
    <option>Tejgaon</option>
    <option>Purbachal</option>
    <option>Paltan</option>
    <option>Basabo</option>
    <option>Mohakhali</option>
    <option>Cantonment</option>
    <option>Lalbag</option>
    <option>Demra</option>
  <option>Khilkhet</option>
  <option>bangshal</option>
  <option>Sutrapur</option>
  <option>Kamrangichar</option>
  <option>wari</option>
  <option>Hazaribagh</option>
  <option>Chaukbazar</option>
  <option>New Market</option>
  <option>Kafrul</option>
  <option>Dhamrai</option>
  <option>Kotwali</option>
  <option>Dohar</option>
  <option>Nawabganj</option>
  <option>Ashulia</option>
  </select>:null
}
{
    division.district==="Naryanganj"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Araihazaar</option>
    <option >Sonargaon</option>
    <option >Bandar</option>
    <option>Naryanganj Sadar</option>
    <option>Rupganj</option>

  </select>:null
}
{
    division.district==="Gazipur"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Gazipur Sadar</option>
    <option >Kaliakair</option>
    <option >Kaliganj</option>
    <option>Kapasia</option>
    <option>Sreepur</option>
    <option>Tongi</option>

  </select>:null
}
{
    division.district==="Tangail"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Tangail Sadar</option>
    <option >Sakhipur</option>
    <option >Basail</option>
    <option>Madhupur</option>
    <option>Ghatail</option>
    <option>Kalihati</option>
    <option>Nagarpur</option>
    <option>Mirzapur</option>
    <option>Gopalpur</option>
    <option>Delduar</option>
    <option>Bhuapur</option>
    <option>Dhanbari</option>
  </select>:null
}
{
    division.district==="Narasingdi"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Belabo</option>
    <option >Monohardi</option>
    <option > Narasingdi Sadar</option>
    <option>Palash</option>
    <option>Raipur</option>
    <option>Shibpur</option>

  </select>:null
}
{
    division.district==="Faridpur"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Alfadanga</option>
    <option >Bhanga</option>
    <option >Boalmari</option>
    <option>Charbhadrasan</option>
    <option>Faridpur Sadar</option>
    <option>Madhukhali</option>
    <option>Nagarkanda</option>
    <option>Sadarpur</option>
    <option>Saltha</option>
  </select>:null
}
{
    division.district==="Kishorganj"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Austagram</option>
    <option >Bajitpur</option>
    <option >Bahirab</option>
    <option>Hossainpur</option>
    <option>Itna</option>
    <option>Karimganj</option>
    <option>Katiadi</option>
    <option>Kishorganj Sadar </option>
    <option>Kuliarchar</option>
    <option>Mithmain</option>
    <option>Nikli</option>
    <option>Pakundia</option>
    <option>Tarail</option>
  </select>:null
}
{
    division.district==="Gopalganj"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Gopalganj Sadar</option>
    <option >Kashiani</option>
    <option >Kotalipara</option>
    <option>Muksudpur</option>
    <option>Tungipara</option>

  </select>:null
}
{
    division.district==="Manikganj"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Manikganj Sadar</option>
    <option >Ghior</option>
    <option >Harirampur</option>
    <option>Daulatpur</option>
    <option>Saturia</option>
    <option>Shivalaya</option>
    <option>Singair</option>

  </select>:null
}
{
    division.district==="Madaripur"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Kalkini</option>
    <option >Madaripur Sadar</option>
    <option >Rajoir</option>
    <option>Shibchar</option>
  </select>:null
}
{
    division.district==="Munshiganj"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Gazaria</option>
    <option >Louhajang</option>
    <option >Munshiganj Sadar</option>
    <option>Sirajdikhan</option>
    <option>Sreenagar</option>
    <option>Tongibari</option>

  </select>:null
}
{
    division.district==="Rajbari"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Baliakandi</option>
    <option >Goalanda</option>
    <option >Pangsha</option>
    <option>Kalukhali</option>
    <option>Rajbari Sadar</option>

  </select>:null
}
{
    division.district==="Shariatpur"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Bhedarganj</option>
    <option >Damudya</option>
    <option >Gosairhat</option>
    <option>Naria</option>
    <option>Shariatpur Sadar</option>
    <option>Zajira</option>

  </select>:null
}

{
    division.division==="Barishal Division"?
    <select name="district" ref={register({ required: true })} onChange={handleChange}>
    <option >District</option>
    <option >Barishal</option>
    <option >Bhola</option>
    <option >Jhalokati</option>
    <option >Pirojpur</option>
    <option >Barguna</option>
  </select>:null
}

{
    division.district==="Barishal"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Sadar Road</option>
    <option >Nattullabad</option>
    <option >Rupatali</option>
    <option>Natun Bazar</option>
    <option>Nobogram Road</option>
    <option>Gournadi</option>
    <option>Amtala</option>
    <option>Banglabazar</option>
    <option>Nazirmoholla</option>
    <option>Kashipur Bazar</option>
    <option>Launch Ghat</option>
    <option>Bakerganj</option>
    <option>City gate Barishal</option>
    <option> Chawk bazar, Beltola Feri Ghat</option>
    <option>Chand Mari</option>
    <option>Mehendiganj</option>
    <option>Kalizira</option>
    <option> Purn bazar</option>
    <option>Uttar Alekanda</option>

  </select>:null
}
{
    division.district==="Patuakhali Sadar"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Bauphal</option>
    <option >Dashmina</option>
    <option >Dumki</option>
    <option>Galachipa</option>
    <option>Kalapara</option>
    <option>Mirzaganj</option>
    <option>Patuakhali Sadar</option>
    <option>Rangabali</option>

  </select>:null
}
{
    division.district==="Bhola"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Bhola sadar</option>
    <option >Borhanuddin</option>
    <option >Char Fesson</option>
    <option>Doulatkhan</option>
    <option>Lalmohan</option>
    <option>Monpura</option>
    <option>Tazumuddin</option>
    <option>Jhalakati Sadar</option>
    <option>Kathalia</option>
    <option>Nalchity</option>
  <option>Rajapur</option>
  </select>:null
}
{
    division.district==="Pirojpur"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Bhandaria</option>
    <option >Indurkani</option>
    <option >Kawkhali</option>
    <option>Mathbaria</option>
    <option>Nazirpur</option>
    <option>Nesarabad</option>
    <option>Pirojpur</option>
  </select>:null
}
{
    division.district==="Barguna"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Amtali</option>
    <option >Bamna</option>
    <option >Barguna Sadar</option>
    <option>Betagi</option>
    <option>Parthoghata</option>
    <option>Nesarabad</option>
    <option>Taltali</option>

  </select>:null
}

{
    division.division==="Rajshahi Division"?
    <select name="district" ref={register({ required: true })} onChange={handleChange}>
    <option >District</option>
    <option >Rajshahi</option>
    <option >Bogura</option>
    <option >Pabna</option>
    <option >Natore</option>
    <option >Sirajganj</option>
    <option >Naogaon</option>
    <option >Chapainawabganj</option>
    <option >Joypurhat</option>
  </select>:null
}
{
    division.district==="Rajshahi"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >New Market</option>
    <option >Motihar</option>
    <option >Shiroil</option>
    <option>Uposahar</option>
    <option>Laksimipur</option>
    <option>Kazla</option>
    <option>Rajpara</option>
    <option>Padma Residential Area</option>
    <option>Chhota Banagram</option>
    <option>Rayermohol</option>
    <option>Boalia</option>
    <option>Hatemkha</option>
    <option>Baharampur</option>
    <option>Rani Nagar</option>
    <option>Bagmara</option>
    <option>Ramchandrapur</option>
    <option>Godagari</option>
    <option>Hossainiganj</option>
    <option>Hossainiganj</option>
    <option>Kazihata</option>
    <option>Bosepara</option>

  </select>:null
}
{
    division.district==="Barguna"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Amtali</option>
    <option >Bamna</option>
    <option >Barguna Sadar</option>
    <option>Betagi</option>
    <option>Parthoghata</option>
    <option>Nesarabad</option>
    <option>Taltali</option>

  </select>:null
}
{
    division.district==="Barguna"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Amtali</option>
    <option >Bamna</option>
    <option >Barguna Sadar</option>
    <option>Betagi</option>
    <option>Parthoghata</option>
    <option>Nesarabad</option>
    <option>Taltali</option>

  </select>:null
}
{
    division.district==="Barguna"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Amtali</option>
    <option >Bamna</option>
    <option >Barguna Sadar</option>
    <option>Betagi</option>
    <option>Parthoghata</option>
    <option>Nesarabad</option>
    <option>Taltali</option>

  </select>:null
}
{
    division.district==="Barguna"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Amtali</option>
    <option >Bamna</option>
    <option >Barguna Sadar</option>
    <option>Betagi</option>
    <option>Parthoghata</option>
    <option>Nesarabad</option>
    <option>Taltali</option>

  </select>:null
}
{
    division.district==="Barguna"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Amtali</option>
    <option >Bamna</option>
    <option >Barguna Sadar</option>
    <option>Betagi</option>
    <option>Parthoghata</option>
    <option>Nesarabad</option>
    <option>Taltali</option>

  </select>:null
}
{
    division.district==="Barguna"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Amtali</option>
    <option >Bamna</option>
    <option >Barguna Sadar</option>
    <option>Betagi</option>
    <option>Parthoghata</option>
    <option>Nesarabad</option>
    <option>Taltali</option>

  </select>:null
}
{
    division.district==="Barguna"?
    <select name="place" ref={register({ required: true })} onChange={handleChange}>
    <option >Place</option>
    <option >Amtali</option>
    <option >Bamna</option>
    <option >Barguna Sadar</option>
    <option>Betagi</option>
    <option>Parthoghata</option>
    <option>Nesarabad</option>
    <option>Taltali</option>

  </select>:null
}


{
    division.division==="Sylhet Sylhet"?
    <select name="district" ref={register({ required: true })} onChange={handleChange}>
    <option >District</option>
    <option >Sylhet</option>
    <option >Maulvi Bazar</option>
    <option >Habiganj</option>
    <option >Sunamganj</option>
  </select>:null
}
{
    division.division==="Chattogram Division"?
    <select name="district" ref={register({ required: true })} onChange={handleChange}>
    <option >District</option>
    <option >Chattogram</option>
    <option >Cumilla</option>
    <option >Brahmanbaria</option>
    <option >Feni</option>
    <option >Noakhali</option>
    <option >Chandpur</option>
    <option >Cox’s Bazar</option>
    <option >Lakshmipur</option>
    <option >Bandarban</option>
    <option >Khagrachari</option>
    <option >Rangamati   </option>
  </select>:null
}
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
    <p>User Name: {name}</p> 
    <p>User Number: {number} </p>
    </form>
      <div>
      <ImageUploading
     multiple
     value={images}
     onChange={uploadImage}
     maxNumber={6}
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
