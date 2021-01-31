import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

const ToDo = ({text, onDelBtnClick, id}) => {

  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={onDelBtnClick}>DEL</button>
      </Link>
    </li>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return { 
    onDelBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
  }
}

export default connect(null, mapDispatchToProps)(ToDo);