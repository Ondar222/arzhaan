import React, { useState } from "react";

const Header = () => {
    return (


        <div className="header">
            <div className="container">
                <div className="header__name">
                    <h1 className="header__website__name">Аржааны Тувы</h1>
                <div className="header__filter__open__close" onClick={() => setIsOpen(false)}>
          
                    <svg stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="header__filter__open__close"
                        height="40" width="40" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
                    </svg>
                </div>
    
                
                </div>
            </div>



        </div>
        )
  
}

export default Header