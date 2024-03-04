import Cart from '../Cart/Cart.jsx'
import LoginModal from '../../components/LoginModal/LoginModal';
import RegisterModal from '../../components/RegisterModal/RegisterModal';
import RecoveryModal from '../../components/RecoveryModal/RecoveryModal';
import useToggle from '../../hooks/use-toggle.hook';
import './NavBar.css'
 

function Navbar(props) {
    const [showLoginModal, toggleShowLoginModal] = useToggle(false);
    const [showRegisterModal, toggleRegisterModal] = useToggle(false);
    const [showRecoveryModal, toggleRecoveryModal] = useToggle(false);
    const {elements, title, logo} = props; 
    console.log(elements);
    return (
		<>
			<nav key='navBar' className="navbar navbar-expand-lg fixed-top backGroundNav">
				<a className="navbar-brand" href="#">{title}</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
				</button>
				<div className="offcanvas offcanvas-start" tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
					<div className='container-fluid'>
						<div className="offcanvas-body" id="navbarNavDropdown">
							<ul className="navbar-nav">
								{elements.map(tab => 
                
									<li key={tab.title} className="nav-item">
										<a className="nav-link" aria-current="page" href={tab.path}>{`${tab.title}`}</a>
                    {console.log(tab)}
									</li>
								)}         
							</ul>
						</div>
					</div>
				</div>
        <div className='loginRegister' onClick={toggleShowLoginModal}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
          Login/Register
        </div>

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
		</>
  )
}

export default Navbar