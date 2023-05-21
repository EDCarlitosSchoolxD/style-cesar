import React, { useState } from 'react'
import './Navegacion.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsFillCartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { ListBox } from '../ListBox/ListBox'
export const Navegacion = () => {
    const [isOpen,setIsOpen] = useState(false);



    function toggleMenu(){
        setIsOpen(!isOpen);
    }

    return(
        <nav className='navegacion'>


            <div className='navegacion-bar'>
                <button onClick={toggleMenu} className='bar-menu'>
                    <GiHamburgerMenu />
                </button>

                <Link to="/" className='bar-logo'>STYLE</Link>

                <div className='bar-car'>
                    <BsFillCartFill />
                </div>
            </div>
            
            {
                isOpen?
                (<div className='navegacion-openMenu'>
                    <ul>
                        <li className='navegacion-open-link'><Link to="/">Inicio</Link></li>
                        <li className='navegacion-open-link'>
                            <ListBox className="navegacion-open-listbox" name='Hombre'>
                                <li onClick={toggleMenu} className='listbox-element' ><Link  />Camisa</li>    
                                <li onClick={toggleMenu} className='listbox-element' ><Link  />Pantalon</li>    
                                <li onClick={toggleMenu} className='listbox-element' ><Link  />Hoodies</li>    
                                <li onClick={toggleMenu} className='listbox-element' ><Link  />Zapatos</li>    
                                  
                            </ListBox>
                        </li>
                        <li className='navegacion-open-link'>
                            <ListBox className="navegacion-open-listbox" name='Mujer' >
                                <li onClick={toggleMenu} className='listbox-element' ><Link to="/blusas" >Blusas</Link></li>    
                                <li onClick={toggleMenu} className='listbox-element' ><Link to="/jeans" >Jeans</Link></li>    
                                <li onClick={toggleMenu} className='listbox-element' ><Link to="/vestidos"  >Vestidos</Link></li>    
                                <li onClick={toggleMenu} className='listbox-element' ><Link  to="/accesirios" >Accesorios</Link></li>  
                            </ListBox>
                            </li>
                        <li className='navegacion-open-link'><Link to="/"/>Contacto</li>
                    </ul>
                </div>)
                :""
            }



        </nav>
    )

}
