import React from 'react';

export default function Header() {
  return (
    <div>
        <div>
            <h2>Israel Guru</h2>
        </div>
        
        <div className="dropdown">
            
            <button class="btn btn-secondary dropdown-toggle" type="button" 
            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                
                <image src="#"/>

            </button>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Sign in</a></li>
                <li><a class="dropdown-item" href="#">Sign up</a></li>
                <li><a class="dropdown-item" href="#">Contacts</a></li>
            </ul>
        </div>
    
    </div>
  )
}
