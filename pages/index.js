import Head from 'next/head'
import {useState} from 'react'
import fetch from 'node-fetch'
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
<meta name="google-site-verification" content="We8K8T-425qt2XvSNSocsbnBOqDQLQdElUv8vw8WFQE" />

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"/>


<link rel="icon" type="image/png" href="images/icons/favicon.ico"/>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"/>

	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css"/>

	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css"/>

	<link rel="stylesheet" type="text/css" href="css/util.css"/>
	<link rel="stylesheet" type="text/css" href="css/main.css"></link>
<link rel="shortcut icon" href="favicon.png" />
<script
  src="https://code.jquery.com/jquery-3.5.1.min.js"
  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
  crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
   </Head>
   <body>
   <div className="simpleslide100">
	
		<div className="simpleslide100-item bg-img1" style={{backgroundImage: "url('image1.png')"}}></div>
	</div>

	<div className="size1 overlay1">
		{/* <!--  --> */}
    <nav className="mb-1 navbar navbar-expand-lg navbar-dark secondary-color lighten-1">
      <a className="navbar-brand" href="blog.99smartphones.in"><img style={{width:"80px"}} src="android-chrome-192x192.png" alt="LOGO"/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-5" aria-controls="navbarSupportedContent-5" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent-5">
        <ul className="navbar-nav navbar-right mr-auto">
          <li className="nav-item active">
            <a className="nav-link waves-effect waves-light" href="#">Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link waves-effect waves-light" href="https://blog.99smartphones.in">Blogs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link waves-effect waves-light" href="https://blog.99smartphones.in">News</a>
          </li>
      
        </ul>
     
      </div>
    </nav>
		{/* <!--  --> */}
    <div style={{height:"110px"}}></div>
		<div className="flex-sb flex-row-rev where3-parent p-l-58 p-r-46 respon2">
			{/* <!--  --> */}
			<div className="where3 wsize2 respon1">
				<h3 className="l1-txt2 p-b-30 respon6 respon7">
					Coming Soon
				</h3>

				<p className="m2-txt1 respon6">
					Follow us for update now!
				</p>

				<form className="contact100-form validate-form p-t-55 w-full">
					<div className="wrap-input100 validate-input m-lr-auto-lg" data-validate = "Email is required: ex@abc.xyz">
						<input className="s2-txt1 placeholder0 input100 trans-04" aria-label="Email" type="text" onChange={(e) => {setstate({email: e.target.value})}} name="email" placeholder="Email Address"/>

						<button aria-label="Email Button" type="button" onClick={() => {onEmail(state.email)}} className="flex-c-m ab-t-r size4 s1-txt1 hov1 trans-04">
							<i className="fa fa-paper-plane fs-15 cl0"></i>
						</button>
					</div>		
				</form>		
			</div>
  
			{/* <!--  --> */}
			{/* <div className="flex-w flex-col cd100 p-t-34 respon3">
				<div className="flex-col wsize1 m-b-40 respon4">
					<span className="l1-txt1 p-b-30 days">35</span>
					<span className="s1-txt1">Days</span>
				</div>

				<div className="flex-col wsize1 m-b-40 respon4">
					<span className="l1-txt1 p-b-30 hours">17</span>
					<span className="s1-txt1">Hours</span>
				</div>

				<div className="flex-col wsize1 m-b-40 respon4">
					<span className="l1-txt1 p-b-30 minutes">50</span>
					<span className="s1-txt1">Minutes</span>
				</div>

				<div className="flex-col wsize1 m-b-40 respon4">
					<span className="l1-txt1 p-b-30 seconds">39</span>
					<span className="s1-txt1">Seconds</span>
				</div>
			</div> */}
{/* 
			<!--  --> */}
  
			<div className="flex-w flex-col cd100 p-t-34 respon3">
				<a href="https://www.facebook.com/99smartphones.in" aria-label="facebook_link" className="size3 flex-c-m how-social trans-04 m-r-3 m-l-3 m-b-5">
					<i className="fa fa-facebook-official"></i>
				</a>

				<a  href="https://www.instagram.com/99s_martphones/?hl=en" aria-label="insta_link" className="size3 flex-c-m how-social trans-04 m-r-3 m-l-3 m-b-5">
					<i className="fa fa-instagram"></i>
				</a>

				<a href="#" aria-label="youtube_link"  className="size3 flex-c-m how-social trans-04 m-r-3 m-l-3 m-b-5">
					<i className="fa fa-youtube"></i>
				</a>
			</div>

		</div>
    </div>

    </body>
    </html>
  )
}
