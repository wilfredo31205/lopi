import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/desktop/logo.svg'
import FotoGafas from '../public/desktop/image-interactive.jpg'

import LogoFB from '../public/icon-facebook.svg'

import LogoTwitter from '../public/icon-twitter.svg'


import LogoPinteres from '../public/icon-pinterest.svg'


import LogoInstagram from '../public/icon-instagram.svg'



const Inicio = () => {

  

  return ( 

    <>


    <header className="hero">

    <div className="contenedor">

      <div className="logo">

        {/*Logo aqui..*/}

        <Image src={logo} className="logo"  /> 


        </div>


        <nav className="menu">

         <ul>
         <Link href="">About</Link>
          <Link href="">Services</Link>
          <Link href="">Projects</Link>
          <Link href="">Contact</Link>
         </ul>




        </nav>


        </div>



      <div className="header-contenido">

        <div className="contenedor2">


        <h1 className="immersive">IMMERSIVE EXPERIENCES THAT DELIVER</h1>

        </div>


           </div>


      </header>


   <div className="contenedor">


      <main className="section">

        <div className="fotoSection">

     
      <Image src={FotoGafas} className="logo"  /> 

          </div>


        <div className="textoGafa">

          <h1>THE LEADER IN INTERACTIVE VR</h1>

             <p className="">

             Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.




             </p>



            </div>




         </main>
  


     </div>
     <h1 className="creations">OUR CREATIONS</h1>

     
     

 <article className="Galerias">


  <div className="contenedor">
    <div className="foto1">



     </div> 



 <div className="foto2">


    

    </div> 


<div className="foto3">


    

  </div> 

<div className="foto4">


    
  </div> 
  </div>

        </article>





  <article className="article2">

    
  <div className="contenedor">

   <div className="foto5">


    
      </div> 


      <div className="foto6">


    
</div> 

<div className="foto7">


    
</div> 


<div className="foto8">


    
</div> 

</div>

        </article>
 


      <footer className="footerclases">

         

        <div className="classFooter">

        <div className="logofooter">


            <Image src={logo} className="logo"  />


          </div>


              <div className="LogoSociales">
            
   
              <Image src={LogoFB} className="logo"  />

              <Image src={LogoTwitter} className="logo"  />

              <Image src={LogoPinteres} className="logo"  />

              <Image src={LogoInstagram} className="logo"  />

              
                </div>

            


        <ul>
         <Link href="">About</Link>
          <Link href="">Services</Link>
          <Link href="">Projects</Link>
          <Link href="">Contact</Link>
         </ul>


         <div className="subtitulo">

<p>@Loopstudios. All rights reserved</p>

</div>


            </div>


       


        
        </footer>

 


     {/* <div className="foto1">


    

        </div> */}

      
        
      
   

      </>



   );
}
 
export default Inicio;