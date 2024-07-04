// import React from 'react'
// import Empty from '../../components/empty/Empty'
// import { useSelector } from 'react-redux'
// import '../wishlist/wishlist.css'
// import Products from '../../components/products/Products'
// import Navbar from '../../components/navbar/Navbar'
// import Header from '../../components/header/Header'
// import Footer from '../../components/footer/Footer'

// const Wishlist = () => {
//   let wishlist = useSelector(state => state.wishlist.value)
//   console.log(wishlist);

//   return (
//     <>
//     <div className="container">
//       <Navbar/>
//       <Header/>
//       <h1 className='wishlist-h1'>Wishlist</h1>
//       {
//         wishlist.length
//         ?
//         <Products title="Sevimlilar" data={wishlist}/>
//         :
//         <Empty className='empty' text="We didn't find what you were looking for :("/>
//       }
//     </div>
//       <Footer/>
//     </>
//   )
// }

// export default Wishlist
