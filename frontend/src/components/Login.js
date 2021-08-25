import React ,{Component} from 'react'
import './assetsLog/login/style/style.css'
import './assetsLog/login/img/carth.jpg'
import { Redirect } from "react-router-dom";

class Login extends Component{

  constructor(){
    super();
    this.state={
      email:null,
      password:null,
      login:false,
      store:null,
      redirection: false 
    }
  }
  
  login (e){
    e.preventDefault()
    console.log("login here...")
    fetch('http://localhost:5000/api/auth/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
    },
      body:JSON.stringify(this.state)
    }).then((response)=>{
      console.log("ayoubbbbbbbbbbbb")
      console.log(this.state)
      response.json().then((result)=>{
        console.warn("result",result);
        localStorage.setItem('login',JSON.stringify({
          login:true,
          token:result.token,
          userId : result.userId
        }))

        this.setState({login:true ,redirection:true })
            })
    })
  }
 render()

 {
   console.log('dfhdfhdfhhf',this.state.redirection)
  if (this.state.redirection) {
    return <Redirect to='/' />
  }
   return(
    // data-background="/assets/img/organisation/carth.jpg"
    <div className="body">
    <div className="loginbox">
  <img src='assets/img/logo/logoo.png' className="woman" alt="" />
  <b><h1 className="white">Connexion Pour Les Administrateurs</h1></b>
  <form onSubmit={(e)=>{this.login(e)}}>
    {/* <p className="white">Email</p> */}
    <span className="row">
    <i className="fas fa-user"/>
    <input type="text" name placeholder="Enter Email" onChange={(event)=>{this.setState({email:event.target.value})}}  />
    </span>
    <span className="row">
    <i className="fas fa-lock"></i>
    <input type="password" name placeholder="Enter Mot de passe" onChange={(event)=>{this.setState({password:event.target.value})}}/>
    </span>
    <input type="submit" name defaultValue="login" value="Connexion"/>
    <b><a href="#">lost your password?</a></b> <br />
  </form>
</div>
</div>
   );
 }
  
}


export default Login;
