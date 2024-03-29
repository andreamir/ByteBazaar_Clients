import Cart from '../Cart/Cart.jsx'
import LoginModal from '../../components/LoginModal/LoginModal';
import RegisterModal from '../../components/RegisterModal/RegisterModal';
import RecoveryModal from '../../components/RecoveryModal/RecoveryModal';
import useToggle from '../../hooks/use-toggle.hook';
import styles from './NavBar.module.css';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Navbar(props) {
    const [showLoginModal, toggleShowLoginModal] = useToggle(false);
    const [showRegisterModal, toggleRegisterModal] = useToggle(false);
    const [showRecoveryModal, toggleRecoveryModal] = useToggle(false);
    const [isLogged, setIsLogged] = useState(false)
    const navigate = useNavigate()
    const {elements, title, logo} = props;

    useEffect(() => {
      if (localStorage.token) {
        setIsLogged(true);
      }
    }, [localStorage.token])

    return (
		<>
			<nav key='navBar' className={`navbar navbar-expand-lg fixed-top  ${styles.backGroundNav}`}>
        {/* <a className={`textColor ${styles.textColor}`} onClick={ navigate('/')}>{title.name}</a> */}
				<a className={`textColor ${styles.textColor}`} href={title.path}>{title.name}</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
				</button>
				<div className="offcanvas offcanvas-start bg-danger" tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
					<div className='container-fluid'>
						<div className={styles['offcanvas-body']} id="navbarNavDropdown">
							<ul className={styles.textColorNavLink}>
								{elements.map(tab => 
                
									<li key={tab.title} className="nav-item">
										{/* <a className="nav-link" aria-current="page" href={tab.path}>{`${tab.title}`}</a> */}
										<div className="nav-link pointer" role="button" aria-current="page" onClick={() => navigate(tab.path)}>{`${tab.title}`}</div>
                    {/* {console.log(tab)} */}
									</li>
								)}         
							</ul>
						</div>
					</div>
				</div>
        <a className={styles.loginRegister} href={ isLogged ? '/account' : undefined } onClick={isLogged ? undefined : toggleShowLoginModal }>
        <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          

        </a>

        {showLoginModal && (
        <LoginModal
          handleDismiss={toggleShowLoginModal}
          toggleRegisterModal={toggleRegisterModal}
          toggleRecoveryModal={toggleRecoveryModal}
        />
        )}

        {showRegisterModal && (
        <RegisterModal
          handleDismiss={toggleRegisterModal}
          toggleShowLoginModal={toggleShowLoginModal}
        />
        )}

        {showRecoveryModal && (
        <RecoveryModal 
          handleDismiss={toggleRecoveryModal}
          toggleLoginModal={toggleShowLoginModal}
          toggleRegisterModal={toggleRegisterModal}
        />
        )}
				<Cart/> 
			</nav>
      <div className={styles.whiteSpaceDiv}/>
		</>
  )
}

export default Navbar