import React, { useEffect, useState } from "react";
import Note from "./Note";
import CreateArea from "./Todo";
import "./Todo.scss";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { animate } from "../../Components/Toast/Toast";
import { PostLogData, getData } from "../../Utils/Crud";

const Api = "http://localhost:4001/Profile/";

// patch ,Put url http://localhost:4001/Profile/2

const mapStateToProps = (state) => {
  const {
    user: { data },
  } = state;
  return {
    user: data,
  };
};

function Todo(props) {
  const [items, setItem] = useState([]);
  const {
    user: { user, password, id, Todo },
  } = props;

  useEffect(() => {
    if (items[0] === undefined) return data();
    postData();
  }, [items]);

  const add = (note) => {
    setItem((previtem) => {
      return [...previtem, note];
    });
    toast.success("Successfully Saved", animate);
  };
  function postData() {
    if (items.length >= 0) {
      var jsonData = {
        user: user,
        password: password,
        Todo: items,
      };
      fetch(`${Api}${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(jsonData),
      }).then((res) => {
        if (!res.status === 201) return toast.error("Error", animate);
       return PostLogData(`${user} "Created a TODO"`)
      });
    } else {
      return toast.error("Error", animate);
    }
  }

  function dele(id) {
    setItem((prevVal) => {
      return prevVal.filter((items, index) => {
        return index !== id;
      });
    });
    postData();
    
    toast.error("Successfully Deleted");
    return PostLogData(`${user} "Deleted a TODO"`)
  }

  const data = () => {
    getData().then((res) =>
      res.find((item) => {
        console.log(item, id);
        if (item.id === id) {
          if (item.Todo[0] === undefined)
            return setItem([
              {
                title: "Add Title",
                content: "Add Content",
              },
            ]);
          return setItem(item.Todo);
        }
        return null;
      })
    );
  };
  return (
    <>
      <CreateArea add={add} />
      {items &&
        items?.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              ondelete={dele}
            />
          );
        })}
    </>
  );
}

export default connect(mapStateToProps, null)(Todo);
