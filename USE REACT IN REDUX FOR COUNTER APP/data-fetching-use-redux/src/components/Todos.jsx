import React, { useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'

import { getAllTodos } from "../services/actions/todosActions";

const Todos = () => {
   const {todos,isLoading,error} = useSelector((state)=>state)
   const dispatch = useDispatch()
   useEffect(()=>{
    dispatch(getAllTodos())
   },[])
  return (
   
    <div>
      <h2>Todos APP</h2>
      {isLoading && <h3>Loading....</h3>}
      {error && <h3>{error.message}</h3>}
      <section>
        {todos.map((todo) => {
          return (
            <article key={todo}>
              <h4>{todo.id}</h4>
              <h4>{todo.title}</h4>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Todos;
