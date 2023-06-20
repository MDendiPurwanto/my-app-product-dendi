import banner from '/image.png'
import React from 'react'
import Content from './components/content'


const judul = [
  {
    title: 'OPREKAN ID'
  }
]
const navMenu = [
  
  "Home", "Contact", "Profile"
  
]

const element = [
  {
    subtitle: 'Dapatkan Produk Terbaik Kamu Disini !',
    desc: 'Dapatkan diskon luar biasa hingga 20% untuk produk pilihan kami. Tingkatkan gaya hidupmu dengankoleksi terbaru dan hemat lebih banyak! Segera kunjungi toko kami sebelum minggu ini berakhir. Jangan lewatkan kesempatan emas ini untuk berbelanja cerdas!'
  }
]



function App() {
 
  return (
   <>

  {judul.map((judul) => (
   <div className='md:flex h-50 bg-sky-900 py-8 px-32 justify-between'>
    <h1 className="text-xl font-bold text-white  cursor-pointer">{judul.title}</h1>
    <ul className="md:flex space-x-6">
        {[
          ['Home', '/home'],
          ['Contact', '/contact'],
          ['Profile', '/profile'],
        ].map(([title, url]) => (
          <a href={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
        ))}
           
        </ul>
    </div> 
   ))}
   
     
   {element.map((element) => (
   <div className="md:flex h-96 bg-sky-900 py-8 px-32">
        <div className="md:flex w-full h-full flex-col space-y-7">
            <p className="text-5xl text-white">{element.subtitle}</p>
            <p className="text-sm text-justify text-white text-ellipsis">{element.desc}</p>
        </div>
        <div className="w-full h-full justify-center hidden lg:flex">
            <img className="h-100" src={banner} alt="img"/>
        </div>
    </div>
   
    ))}

     <Content />

    
  </>
  )
}

export default App
