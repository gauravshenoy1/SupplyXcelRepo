import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import Main from "./MainHome/Main";
import { user } from "../Store/user/userAction";
import { PostLogData } from "../Utils/Crud";

const mapStateToProps =(state)=>({
  id:state.user.id
})
const mapDispatchToProps=(dispatch)=>{
   return{ 
  user:(data)=>{dispatch(user(data))}
}
}
 class EntryPoint extends Component {
  state = {
    id:"",
    username: "",
    password: "",
    auth: false,
    LogError: false,
    DetailErr: {
      login: false,
      pass: false,
    },
  };
  handleauth = (e) => {
    const{user}=this.props
    const { username, password } = this.state;
    if (username.length < 1) {
      this.setState((prev) => ({
        DetailErr: {
          login: true,
          pass: prev.DetailErr.pass,
        },
      }));
      e.preventDefault();
     
    } else if (password === "") {
      this.setState((prev) => ({
        DetailErr: {
          login: false,  
          pass: true,
        },
      }));
      e.preventDefault();
    } else {
      if (username !== "" && password !== "") {
        this.setState({
          DetailErr: {
            login: false,
            pass: false,
          },
        });
        fetch("http://localhost:4001/profile")
          .then((res) => res.json())
          .then((res) =>
            res.find((item) => {
              if (item.user === username) {
                if (item.password === password) {
                  user(item)
                  PostLogData("USER_LOGGED IN - "+`${item.user}`)
                  this.setState({
                    auth: true,
                    id:item.id,
                  });
                  return true;
                }
              }
              this.setState({
                auth: false,
                LogError: true,
              });
              setTimeout(() => {
                this.setState({
                  LogError: false,
                });
              }, 2000);
              return false;
            })
          );
      }
      e.preventDefault();
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleLogout = () => {
    this.setState({
      auth: false,
    });
  };
  handle = {
    handleauth: this.handleauth.bind(this),
    handleChange: this.handleChange.bind(this),
    handleLogout: this.handleLogout.bind(this),
  };
  render() {
    return (
      <>
        {this.state.auth ? (
          <Main {...this.handle} {...this.state}/>
        ) : (
          <Login {...this.state} {...this.handle} />
        )}
      </>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(EntryPoint)