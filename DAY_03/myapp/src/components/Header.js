import Logo from './Logo'
import '../CSS/style.css'
function Header(){

    //2nd option
    //define the style as a variable
    const bgstyle={
        backgroundColor:'#3396d3',
        height:'30px',
        padding: '100px',
        fontFamily: 'TimesNewRoman',
        fontSize: '20px'
        

    }
    return(
      //First Option - you can define th style in inline style 
      // <div style={{backgroundColor:'#3396d3', height:'50px'}}>
       <div style={bgstyle}>
        <h1 className="header"> <center>Welcome To the Front-end World!</center> </h1>
        <h2 className="header"> <center>Trying own the react</center></h2>
        <Logo />
        
       </div>

    )
}

export default Header