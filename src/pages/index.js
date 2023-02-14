import { lazy } from "react";

export const Home = lazy(() => import('../pages/Home'))
export const About = lazy(() => import('../pages/About'))
export const Pricing = lazy(() => import('../pages/Pricing'))
export const Contact = lazy(() => import('../pages/Contact'))
export const Signup = lazy(() => import('../pages/Signup'))