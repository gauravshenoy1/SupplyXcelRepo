import React, { Component } from "react";
import LoginComp from "./login.component";
import { toast } from "react-toastify";
import { animate } from "../Toast/Toast";
import { PostLogData } from "../../Utils/Crud";

export default class Login extends Component {
  state = {
    register: false,
    username: "",
    password: "",
    Todo: [],
    DetailErr: {
      login: false,
      pass: false,
    },
  };
  handleRegState = () => {
    this.setState((prev) => ({
      register: !prev.register,
    }));
  };
  handleReg = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleUserReg = (e) => {
    e.preventDefault();
    const { username, password, Todo } = this.state;
    if (!username)
      return toast.info("Enter User Name", {
        position: toast.POSITION.TOP_CENTER,
      });

    if (!password)
      return toast.info("Enter Password", {
        position: toast.POSITION.TOP_CENTER,
      });
    if ((username, password !== "" ?? null)) {
      fetch("http://localhost:4001/Profile")
        .then((res) => res.json())
        .then((res) => {
          const Data = {
            user: username,
            password: password,
            Todo: Todo,
          };
          const data = res.some((item) => item.user === username);
          if (data) {
            toast.error("User Exist", animate);
          } else {
            fetch("http://localhost:4001/Profile", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(Data),
            });
            PostLogData("USER_REGISTERED - "+`${username}`)
            this.setState({
              username: "",
              password: "",
              register: false,
            });
            toast.success("Registered Successfully", animate);
          }
          e.preventDefault();
        });
      e.preventDefault();
    }
    e.preventDefault();
  };
  handleContainerFunctions = {
    handleRegState: this.handleRegState.bind(this),
    handleReg: this.handleReg.bind(this),
    handleUserReg: this.handleUserReg.bind(this),
  };
  render() {
    return (
      <>
        <LoginComp
          {...this.state}
          {...this.props}
          {...this.handleContainerFunctions}
        />
      </>
    );
  }
}
