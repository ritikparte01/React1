import React , {useEffect} from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';








    const Navbar = () => {

        function animation(){
          var tabsNewAnim = $('#navbarSupportedContent');
          var activeItemNewAnim = tabsNewAnim.find('.active');
          var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
          var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
          var itemPosNewAnimTop = activeItemNewAnim.position();
          var itemPosNewAnimLeft = activeItemNewAnim.position();
          $(".hori-selector").css({
            "top":itemPosNewAnimTop.top + "px", 
            "left":itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
          });
          $("#navbarSupportedContent").on("click","li",function(e){
            $('#navbarSupportedContent ul li').removeClass("active");
            $(this).addClass('active');
            var activeWidthNewAnimHeight = $(this).innerHeight();
            var activeWidthNewAnimWidth = $(this).innerWidth();
            var itemPosNewAnimTop = $(this).position();
            var itemPosNewAnimLeft = $(this).position();
            $(".hori-selector").css({
              "top":itemPosNewAnimTop.top + "px", 
              "left":itemPosNewAnimLeft.left + "px",
              "height": activeWidthNewAnimHeight + "px",
              "width": activeWidthNewAnimWidth + "px"
            });
          });
        }
      
        useEffect(() => {
          
          animation();
          $(window).on('resize', function(){
            setTimeout(function(){ animation(); }, 500);
          });
          
        }, []);











    
    return (
        <nav className='navbar navbar-expand-lg navbar-mainbg'>
            <NavLink className="navbar-brand navbar-logo" to="/" exact>
                RITIK
            </NavLink>



            <button className='navbar-toggler' type='button' data-toggle="collapse"
            data-target="#navbarSupportedContent" 
            aria-controls='navbarSupportedContent' aria-expanded="false"
            aria-label='Toggle navigation'>
                <i className='fas fa-bars text-white'></i>
            </button>

            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className="navbar-nav ml-auto">

                    <div className='hori-selector'>
                        <div className='left'></div>
                        <div className='right'></div>
                    </div>
                        <li className='nav-tem active'>
                            <NavLink className='nav-link' to="/home">
                            <i class="uil uil-estate"></i>
                                Home
                            </NavLink>
                        </li>

                        <li className='nav-tem'>
                            <NavLink className='nav-link' to="/about" exact>
                            <i class="uil uil-user-square"></i>
                                About
                            </NavLink>
                        </li>

                        <li className='nav-tem'>
                            <NavLink className='nav-link' to="/service" exact>
                            <i class="uil uil-bag-alt"></i>
                                Service
                            </NavLink>
                        </li>

                        <li className='nav-tem'>
                            <NavLink className='nav-link' to="/contact" exact>
                            <i class="uil uil-phone-volume"></i>
                                Contact
                            </NavLink>
                        </li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
