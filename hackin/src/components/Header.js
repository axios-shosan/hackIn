import '../assets/Header.css'
const Header = ({color, changeColor}) => {


  return (
    <div className='Header'>
        <img className='logo' src={require('../assets/images/CSE.png')}></img>
        <div className='HeaderBtns'>
            <button>Home</button>
            <button>About</button>
            <button>Parteners</button>
            <button>Log In</button>
        </div>
    </div>
  )
}

export default Header