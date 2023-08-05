import { toast } from "react-toastify";
import { animate } from "../Components/Toast/Toast";

const Api = "http://localhost:4001/Profile/";

async function getData() {
  let res = await fetch(Api);
  let data = await res.json();

  return await data;
}

const PostTodo = (id, input) => {
  fetch(`${Api}${id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(input),
  }).then((res) => {
    if (!res.status === 201) return toast.error("Error", animate);
    return toast.success("Succesfully Saved", animate);
  });
};
export { getData, PostTodo };
