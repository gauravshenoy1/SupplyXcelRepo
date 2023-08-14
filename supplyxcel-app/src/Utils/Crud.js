import { toast } from "react-toastify";
import { animate } from "../Components/Toast/Toast";

const Api = "http://localhost:4001/Profile/";
const LogApi = "http://localhost:4001/Logs/";
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

const PostLogData = (logData) => {
  let timeStamp = new Date().toISOString()
  let log = timeStamp+' - '+logData;
  const data = {log}
  fetch(`${LogApi}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.status === 201) return console.log('Log error observed');
    return null;
  });
};
export { getData, PostTodo, PostLogData };

