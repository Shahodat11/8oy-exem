import React from 'react'
import '../admin/admin.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function Admin() {
  return (
    <>
    <div className='container'>
      <Navbar/>
      <Header/>
      <div className="admin">
        <h1 className='admin-h1'>Admin panel</h1>
        <p className='admin-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!</p>
        <p className='admin-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!</p>
        <p className='admin-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!</p>
        <button className='admin-button'>Log out</button>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Admin