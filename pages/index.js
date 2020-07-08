import Head from 'next/head'
import {useState} from 'react'
export default function Home() {

 const [state, setstate] = useState({email:''})
  const onEmail=(value) => {
 
     fetch('https://blog.99smartphones.in/api/common/add_subscriber', {
      method: 'post',
      body: JSON.stringify({email: value})
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      Swal.fire('Success', 'You Have Subscribed To Us', 'success');
    });
  }




  return (
    
    <html lang="en">
     <Head>


<meta charSet="utf-8"/>
<title>99smartphones.in</title>
<meta name="description" content="99smartphones comming soon page"/>
<meta name="author" content="99smartphones"/>


<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"/>


<link rel="stylesheet" href="css/default.css"/>
<link rel="stylesheet" href="css/layout.css"/>
<link rel="stylesheet" href="css/media-queries.css"/>    


<script src="js/modernizr.js"></script>

<link rel="shortcut icon" href="favicon.png" />
   </Head>
      <section id="intro">

   	
<div  id="main" className="row">


  <div className="twelve columns">
      
      <img src="android-chrome-192x192.png" alt='Image' />
    <h1>We are currently working on something awesome. Stay tuned!</h1>

    {/* <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

    <h5>Time Left Until Launching</h5>

    <div id="counter" class="cf">
      <span>134 <em>days</em></span> 
      <span>12 <em>hours</em></span>
     <span>50 <em>minutes</em></span>
      <span>33 <em>seconds</em></span> 
    </div>					 */}

  
      <div id="mc_embed_signup">
         <form noValidate>
               
            <input type="email" value={state.email} name="email" className="email" onChange={(e)=> { setstate({email:e.target.value})}} id="mce-EMAIL" placeholder="email address" required />

            <div style={{position: "absolute", left: "-5000px"}}><input type="text" name="b_cdb7b577e41181934ed6a6a44_e65110b38d"  /></div>
            
         <input type="submit" onClick={(e) =>{e.preventDefault(); onEmail(state.email)}} value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
            
         </form>
      </div>

      <ul className="social">
         <li><a href="https://www.facebook.com/99smartphones.in"><i className="fa fa-facebook"></i></a></li>
         {/* <li><a href="#"><i class="fa fa-twitter"></i></a></li>
         <li><a href="#"><i class="fa fa-google-plus"></i></a></li> */}
         {/* <li><a href="#"><i class="fa fa-linkedin"></i></a></li> */}
         <li><a href="https://www.instagram.com/99s_martphones/?hl=en"><i className="fa fa-instagram"></i></a></li>
         {/* <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
         <li><a href="#"><i class="fa fa-skype"></i></a></li> */}
       </ul>

    </div> 

 </div> 

</section> 
    </html>
  )
}
