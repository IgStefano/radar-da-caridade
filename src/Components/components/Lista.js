import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Lista(props) {
  return <div className="border border-success">{props.ações}</div>;
}
