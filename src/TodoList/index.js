import React from 'react';
import './TodoList.css'

function TodoList(props) {
  const renderFunc = props.children || props.render
  return (
    <section className="TodoList-container">

      {/* filters */}
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {/* Lista vacia - !loading !buscando */}
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
      {/* !! - convercion to boolean. Tenemos todos y search !match   */}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

      {props.searchedTodos.map(renderFunc)}
      {/* Render normal */}
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };
