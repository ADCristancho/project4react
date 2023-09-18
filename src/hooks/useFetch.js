import axios from "axios";
import { useState } from "react";

const useFetch = (baseUrl) => {
  const [infoApi, setInfoApi] = useState([]);

  // READ
  const getApi = (path) => {
    const url = `${baseUrl}${path}`;
    axios.get(url)
      .then(res => setInfoApi(res.data))
      .catch((err) => console.log(err));
  };

  // CREATE
  const postApi = (path, data) => {
    const url = `${baseUrl}${path}/`;
    axios.post(url, data)
      .then(res => {
        console.log(res.data)
        setInfoApi([...infoApi, res.data])
      })
      .catch((err) => console.log(err));
  };

  // DELETE
  const deleteApi = (path, id) => {
    const url = `${baseUrl}${path}/${id}/`;
    axios.delete(url)
      .then(res => {
        console.log(res.data)
        setInfoApi(infoApi.filter(e => e.id !== id))
      })  
      .catch(err => console.log(err));
  }

  // UPDATE

  const updateApi = (path, id, data) => {
    const url = `${baseUrl}${path}/${id}/`;
    return axios.put(url, data)
      .then((response) => {
        // Hacer lo que necesitas con la respuesta si es necesario
        return response.data; // Devuelve los datos actualizados si es necesario
      })
      .catch((error) => {
        console.error(error);
        throw error; // Lanza el error nuevamente para manejarlo en el componente
      });
  };
  
  

  return [infoApi, getApi, postApi, deleteApi, updateApi];
};

export default useFetch;
