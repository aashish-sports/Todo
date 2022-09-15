import axios from "axios";

const GETURL = `http://localhost:8080/getTodo`;

const ADDURL = `http://localhost:8080/setTodo`;
const DONEURL = `http://localhost:8080/completeTodo`;
const UPDATEURL = `http://localhost:8080/updateTodo`;
const DELETEURL = `http://localhost:8080/deleteTodo`;
const DELETEALLURL = `http://localhost:8080/deleteA`;

const deleteAllTodo = async () => {
  try {
    //  const response =await fetch(`${GETURL}`
    const response = await axios.delete(`${DELETEALLURL}`);

    // console.log("respone done todorefer", response);

    // const data=await response.json();
    if (response.status >= 400) {
      throw new Error();
    }
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const deleteTodo = async (id) => {
  try {
    // console.log("api", id);
    //  const response =await fetch(`${GETURL}`
    const response = await axios.delete(`${DELETEURL}`, {headers:{},data:{id}});
    // const response = await axios.post(`${DONEURL}`, { id });

    // console.log("respone done todorefer", response);

    // const data=await response.json();
    if (response.status >= 400) {
      throw new Error();
    }
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const updateTodo = async (id,title,desc) => {
  try {
    // console.log("api", id);
    //  const response =await fetch(`${GETURL}`
    const response = await axios.post(`${UPDATEURL}`, { id,title,desc });

    // console.log("respone done todorefer", response);

    // const data=await response.json();
    if (response.status >= 400) {
      throw new Error();
    }
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const fetchTodos = async () => {
  try {
    //  const response =await fetch(`${GETURL}`)
    const response = await axios.get(`${GETURL}`);

    //  console.log(response)

    // const data=await response.json();
    if (response.status >= 400) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const addTodo = async (title, desc) => {
  try {
    //  const response =await fetch(`${GETURL}`)
    let status = false;
    const response = await axios.post(`${ADDURL}`, { title, desc, status });

    //  console.log(response)

    // const data=await response.json();
    if (response.status >= 400) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const doneTodo = async (id) => {
  try {
    // console.log("api", id);
    //  const response =await fetch(`${GETURL}`
    const response = await axios.post(`${DONEURL}`, { id });

    // console.log("respone done todorefer", response);

    // const data=await response.json();
    if (response.status >= 400) {
      throw new Error();
   }

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export { fetchTodos, addTodo, doneTodo, updateTodo, deleteTodo, deleteAllTodo };
