import React, { useCallback, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { URL_CONSTANTS } from "../../constants/url.constants";
import { history } from "../../helpers/history";
import { register } from "../../stores/authentication/actions";
import createNotification from "../../utils/notification";
import Loading from "../../components/Loading";
import { COLOR } from "../../constants/style.constants";



const initialValues = {
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  };

export default function RegisterPage() {
    
}