import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Slider from "./components/Home/Slider/Slider"
import About from "./components/Header/About";
import Courses from "./components/Header/Courses";
import Team from "./components/Header/Team";
import Contact from "./components/Header/Contact";
import Footer from "./components/Footer/Footer";
import Counter from "./components/Home/Counter/Counter";
import Tabs from './components/Home/Tabs/Tabs';

import DataScience from './components/Courses/DataScience';
import AIntelligence from './components/Courses/AIntelligence';
import DataAnalytics from './components/Courses/DataAnalytics';
import AppDevelopment from './components/Courses/AppDevelopment';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={
        <>
        <Header />
        <Slider/>
        <About/>
        <Counter/>
        <Tabs/>
         </> } />
        <Route path="/about" element={
            <>
            <Header />
            <About />
            <Footer /> </> } /> 
        <Route path="/courses" element={
            <>
            <Header />
            <Courses />
             </> } />
        <Route path="/team" element={
            <>
            <Header />
            <Team />
             </> } />
        <Route path="/contact" element={
            <>
            <Header />
            <Contact />
             </> } />
        <Route path="/datascience" element={
            <>
            <Header />
            <DataScience />
             </> } />
        <Route path="/aintelligence" element={
            <>
            <Header />
            <AIntelligence />
             </> } />
        <Route path="/dataanalytics" element={
            <>
            <Header />
            <DataAnalytics />
             </> } />
        <Route path="/appdevelopment" element={
            <>
            <Header />
            <AppDevelopment />
             </> } />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;

