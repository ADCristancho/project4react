import axios from "axios";
import { useState } from "react";

const useFetch = (baseUrl) => {
  const [infoApi, setInfoApi] = useState([]);

  // READ
  const getApi = (path) => {
    const url = `${baseUrl}${path}`;
    axios.get(url)
      .then((res) => setInfoApi(res.data))
      .catch((err) => console.log(err));
  };

  // CREATE
  const postApi = (path, data) => {
    const url = `${baseUrl}${path}/`;
    axios.post(url, data)
      .then(() => {
        getApi(path);
      })
      .catch((err) => console.log(err));
  };

  // DELETE
  const deleteApi = (path, id) => {
    const url = `${baseUrl}${path}/${id}/`;
    axios.delete(url)
      .then(() => {
        getApi(path);
      })
      .catch((err) => console.log(err));
  };

  // UPDATE


  const updateApi = async (path, id, data) => {
    const url = `${baseUrl}${path}/${id}/`;
    try {
      await axios.put(url, data);
      getApi(path);
    } catch (err) {
      console.log(err);
    }
  };
  

  return [infoApi, getApi, postApi, deleteApi, updateApi];
};

export default useFetch;
