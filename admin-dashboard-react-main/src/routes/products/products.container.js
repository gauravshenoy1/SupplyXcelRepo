import React, { Component } from "react";
import ProductComp from "./products.component";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: [],
      currentPage: 1,
      postPerPage: 8,
      loading: true,
      id: "",
      title: "",
      price: "",
      stock: "",
      brand: "",
      category: "",
      Adddata: false,
      handleToast: false,
      editData: false,
    };
    this.getData.bind(this);
    this.handleClick.bind(this);
  }

  shouldComponentUpdate() {
    return true;
  }

  // setting States

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {});
  };

  // toggling add button state

  handleAddButton = (e) => {
    e.preventDefault();
    this.setState((prevstate) => ({
      Adddata: !prevstate.Adddata,
    }));
  };

  // handling  pagination page numbers

  handleClick = (pageNumber) => {
    const dat = pageNumber.target.id;
    this.setState({ currentPage: JSON.parse(dat) });
  };

  // handle exit
  handleExit = (e) => {
    e.preventDefault();
    this.setState((prevstate) => ({
      editData: !prevstate.editData,
    }));
  };
  // handle Edit

  handleEdit = (id) => {
    const data = this.state.userdata;
    data.filter((item) => {
      if (item.id === id) {
        this.setState((prevstate) => ({
          editData: !prevstate.editData,
          id: item.id,
          title: item.title,
          price: item.price,
          stock: item.stock,
          brand: item.brand,
          category: item.category,
        }));
        return true;
      }
      return false;
    });
  };

  //Handling form Submit

  handleSubmit = (e) => {
    const title = this.state.title;
    const price = this.state.price;
    const stock = this.state.stock;
    const brand = this.state.brand;
    const category = this.state.category;
    if (
      title === "" ||
      price === "" ||
      stock === "" ||
      brand === "" ||
      category === ""
    ) {
      if (this.state.Adddata === true) {
        alert("Enter All the Details");
      }
    } else {
      this.addData();
      this.setState({
        handleToast: true,
      });
      setTimeout(() => {
        this.setState({
          handleToast: false,
        });
      }, 6000);
    }
    e.preventDefault();
  };

  // handle update data
  handleUpdate = (e) => {
    console.log(e);
    const id = this.state.id;
    const Title = this.state.title;
    const Price = this.state.price;
    const stock = this.state.stock;
    const brand = this.state.brand;
    const category = this.state.category;
    if (
      Title === "" ||
      Price === "" ||
      stock === "" ||
      brand === "" ||
      category === ""
    ) {
      if (this.state.editData === true) {
        alert("Details cannot be empty");
      }
    } else {
      this.UpdateData(id);
      this.setState({
        handleToast: true,
      });
      setTimeout(() => {
        this.setState({
          handleToast: false,
        });
      }, 5000);
    }
    e.preventDefault();
  };

  //  Deleting entry from db
  handleDelete = (id) => {
    fetch("http://localhost:4001/products/" + id, {
      method: "delete",
    })
      .then((res) => {
        console.log(res);
        this.getData();
      })
      .catch((e) => {
        console.log(e.msg);
      });

  };

  // Binding Functionalities

  handle = {
    handleClick: this.handleClick.bind(this),
    handleEdit: this.handleEdit.bind(this),
    handleChange: this.handleChange.bind(this),
    handleSubmit: this.handleSubmit.bind(this),
    handleAddButton: this.handleAddButton.bind(this),
    handleExit: this.handleExit.bind(this),
    handleUpdate: this.handleUpdate.bind(this),
    handleDelete:this.handleDelete.bind(this),
  };

  // fetching Data from Json

  getData() {
    fetch("http://localhost:4001/products")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ userdata: data, loading: false });
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  // Inserting new data into db

  addData() {
    const data = {
     title : this.state.title,
     price : this.state.price,
     stock : this.state.stock,
     brand : this.state.brand,
     category : this.state.category,
    };
    fetch("http://localhost:4001/products", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 201) {
          this.setState({
            title: "",
            price: "",
            stock: "",
            brand: "",
            category: "",
            Adddata: false,
          });
        }
        this.getData();
      })
      .catch((e) => {
        console.log(e.msg);
      });
  }

  // Update user data

  UpdateData(id) {
    const data = {
        title : this.state.title,
        price : this.state.price,
        stock : this.state.stock,
        brand : this.state.brand,
        category : this.state.category,
       };
    fetch("http://localhost:4001/products/" + id, {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(res.status === 200);
          this.setState({
            title: "",
            price: "",
            stock: "",
            brand: "",
            category: "",
            editData: false,
            Adddata: false,
          });
        }
        this.getData();
      })
      .catch((e) => {
        console.log(e.msg);
      });
  }


  // mounting the data when before rendering into page

  componentDidMount() {
    this.getData();
  }

  // rendering Customer components

  render() {
    return (
      <>
        <ProductComp {...this.state} {...this.handle} />
      </>
    );
  }
}
