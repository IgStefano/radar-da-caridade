import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Lista(props) {
  return <div>{props.ações}</div>;
}
