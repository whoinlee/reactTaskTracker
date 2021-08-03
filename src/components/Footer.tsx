import { Link } from 'react-router-dom';
//-- Styles
import { Wrapper } from './Footer.styles';


const Footer = () => {
  return (
    <Wrapper>
      <p>Copyright &copy; 2021</p>
      <Link to='/about'>About</Link>
    </Wrapper>
  )
}

export default Footer
