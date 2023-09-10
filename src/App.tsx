import React, { useState, useEffect } from 'react';
import './App.css'
import './responsive.css'

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const App: React.FC = () => {
  
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [colorTheme, setColorTheme] = useState('theme-light');
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState('password');

  useEffect(() => {
    // Check for selected theme /// Local storage value.
    const currentThemeColor = localStorage.getItem('theme-color');
    // if value found, set the new theme.
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
  }, []);

  const handleLogin = () => {
    // Write login logic here.
    console.log('Login button clicked');
  };

  // Change themes.
  const handleThemeSelectorClick = (theme: string) => {    
    setColorTheme(theme);
    localStorage.setItem('theme-color', theme);
  };

  // Close DropDown menu. /// If open.
  const colapseDropdown = () => {
    if (dropdownIsOpen) {
      setDropdownIsOpen(!dropdownIsOpen);
    }
  }

  // Toggle password visibility.
  const handleShowPassword = () => {
    console.log("Toggle show password");
    if (passwordInputType === 'password') {
      setPasswordInputType('text');
    } else {
      setPasswordInputType('password');
    }
  }

  return (
    <>
    <div 
      className={`appContainer ${colorTheme}`}
      onClick={() => colapseDropdown()}>

    <div className="dropdown">
      <div className="selector btnThemeSelector" onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>
        Change Theme
          {/* Display up/down arrow as per dropdown menu */}
          <FontAwesomeIcon
            icon={faArrowDown}
            id='icon-down'
            className={`theme-icon ${dropdownIsOpen ? 'active' : ''}`} 
          />
          <FontAwesomeIcon
            icon={faArrowUp}
            id='icon-up'
            className={`theme-icon ${dropdownIsOpen ? '' : 'active'}`}
          />
        
        {/* Show theme menu options */}
        {dropdownIsOpen && (
          <div className="theme-menu">
            <div
              id='theme-light'
              className={`theme-item ${colorTheme === 'theme-light' ? 'active' : ''}`}
              onClick={() => handleThemeSelectorClick('theme-light')} >
              <div className='color-box color-light'></div>
              light
            </div>

            <div
              id='theme-blue'
              className={`theme-item ${colorTheme === 'theme-blue' ? 'active' : ''}`}
              onClick={() => handleThemeSelectorClick('theme-blue')} >
              <div className='color-box color-blue'></div>
              Blue
            </div>

            <div
              id='theme-green'
              className={`theme-item ${colorTheme === 'theme-green' ? 'active' : ''}`}
              onClick={() => handleThemeSelectorClick('theme-green')}>
              <div className='color-box color-green'></div>
              Green
            </div>

            <div
              id='theme-grey'
              className={`theme-item ${colorTheme === 'theme-grey' ? 'active' : ''}`}
              onClick={() => handleThemeSelectorClick('theme-grey')}>
              <div className='color-box color-grey'></div>
              Grey
            </div>

            <div
              id='theme-yellow'
              className={`theme-item ${colorTheme === 'theme-yellow' ? 'active' : ''}`}
              onClick={() => handleThemeSelectorClick('theme-yellow')}>
              <div className='color-box color-yellow'></div>
              yellow
            </div>

            <div
              id='theme-dark'
              className={`theme-item ${colorTheme === 'theme-dark' ? 'active' : ''}`}
              onClick={() => handleThemeSelectorClick('theme-dark')}>
              <div className='color-box color-dark'></div>
              Dark
            </div>

          </div>
          )}
        </div>
    </div>

      <form className="form-container">
        <h1 className='headingLogin'>Welcome Back</h1>
        <input 
          className='inputEmail textInput'
          type="email"
          placeholder="Email"
          value={userEmail}
          id='email'
          onChange={(e) => setUserEmail(e.target.value)}
          />
        <div className='passwordContainer'>
          <input
            className='inputPassword textInput'
            type={passwordInputType}
            placeholder="Password"
            value={userPassword}
            id='password'
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <div className='iconContainer'>
            <FontAwesomeIcon
              icon={faEye}
              id='icon-eye-open'
              className={`eye-icon ${passwordInputType === 'text' ? 'active' : ''}`}
              onClick={() => handleShowPassword()}
            />
            <FontAwesomeIcon
              icon={faEyeSlash}
              id='icon-eye-closed'
              className={`eye-icon ${passwordInputType === 'password' ? 'active' : ''}`}
              onClick={() => handleShowPassword()}
            />
          </div>
        </div>
        <input
          className='btnSubmit'
          type="submit"
          value="Login"
          onClick={handleLogin}
        />
      </form>
    
    </div>
    </>
  );
};

export default App;
