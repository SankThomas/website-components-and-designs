import React from "react"
import { FaCart } from "react-icons/fa"
import { v4 as uuidv4 } from "uuid"

export const links = [
  {
    id: uuidv4(),
    title: "New",
  },
  {
    id: uuidv4(),
    title: "Gift Guide",
  },
  {
    id: uuidv4(),
    title: "Promo",
  },
  {
    id: uuidv4(),
    title: "Trends",
  },
  {
    id: uuidv4(),
    title: "Social",
  },
]

export const actions = [
  {
    id: uuidv4(),
    title: "Log In",
  },
  {
    id: uuidv4(),
    title: "Sign Up",
  },
  {
    id: uuidv4(),
    title: <FaCart />,
  },
]
