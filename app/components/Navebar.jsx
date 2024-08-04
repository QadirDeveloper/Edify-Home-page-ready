// import React from 'react'


// const Navbar = () => {
//     return (

//         <header>

//             <div className='flex justify-between bg-[#f7f8fd] items-center p-4'>
//                 <div >
//                     <img className='w-40' src="./images/logo.png" alt="" />
//                 </div>
//                 <div className='flex gap-3 text-sm font-semibold tracking-wide bg-slate-500 p-4 rounded-full'>
//                     <a href="" className=''>Home</a>
//                     <a href="">Contact</a>
//                     <a href="">Blog</a>
//                     <a href="">About</a>
//                     <a href="">Service</a>
//                 </div>
//                 <div className='p-3 rounded-full bg-blue-600 text-white '>
//                     <button>Apply Now </button>
//                 </div>
//             </div>

//             {/* ////-----------------------------------------------------/// */}




//             <div className='relative'>
//                 <div>
//                     <img
//                         className='w-full h-screen object-cover '
//                         src="https://img.freepik.com/free-photo/big-ben-westminster-bridge-sunset-london-uk_268835-1395.jpg?t=st=1721135574~exp=1721139174~hmac=d4c4d385f7ddf7aae6ca9ee6b47de00f91e57769642f1ff32599a23fb7d3898e&w=740" alt="" />
//                 </div>


//                 <div className='max-w-2xl px-4 text-[white]'>
//                     <div className='absolute -translate-y-[450px]'>
//                         <p className='font-medium  tracking-wider  '>Hello how are you</p>
//                         <h1 className='text-3xl  font-bold  '>Bright Future Here!</h1>
//                         <p className='tracking-widest'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo dolor aspernatur, numquam ipsam deleniti ea.</p>
//                     </div>
//                 </div>



//                 <div className='max-w-4xl bg-white text-black mx-auto grid grid-cols-3 -translate-y-[50px]'>
//                     <div>
//                         <h2>World best Place</h2>
//                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, nostrum.
//                         </p>

//                     </div>
//                     <div>
//                         {/* <span><Globe /></span> */}
//                         <h2>World best Place</h2>
//                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, nostrum.
//                         </p>

//                     </div>
//                     <div>
//                         {/* <span><Globe /></span> */}
//                         <h2>World best Place</h2>
//                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, nostrum.
//                         </p>

//                     </div>
//                 </div>


//                 {/* <div className='max-w-6xl mx-auto grid md:grid-cols-2 m'>

// <div className='md:translate-y-[100px]'>
//     <h1 className='text-3xl font-extrabold tracking-wide mb-2 mt-4 '>Study Abroad Consultants</h1>
//     <p className='tracking-wider text-sm'>Education is a driving force that focuses on developing reflective thinking and abilities so that the human race can discover how they wish to exist in today's competitive and ever-changing global economy. Amidst extraordinary uncertainty and dynamic world order, Edify, a leading Study Abroad Consultant, is dedicated to helping higher education leaders worldwide build resilience, seize growth opportunities, and discover new ways to enhance their skill sets. With a deep commitment to our clients' aspirations, we provide expert guidance on educational pathways, universities, scholarships, and the intricacies of the application process. We aim to enable students to access the best education tailored to their ambitions.</p>
// </div>

// <div>
//     <img
//     className='w-full'
//     src="https://edify.pk/_next/image?url=%2Fimage%2Fcertificate%2Fcertificate.png&w=640&q=75" alt="" />
// </div>


// </div> */}
//             </div>




//         </header>




//     )
// }

// export default Navbar
// ----------------------------------------------------------------------------------
import React from 'react'
import Link from 'next/link'
export default function Navebar() {
  return (
    <div class='flex justify-between bg-slate-100 rounded-3xl'>
        <div class='px-16'>
            <a href="./"> <img src="edify.webp " class='  ' alt="not found" /></a>
           
        </div>
        <div class='space-x-9 my-6 px-4 cursor-pointer'>
            <a href="./">Home</a>
            <a href="./Contect">Contect</a>
            <a href="./About">About</a>
            <a href="./Privicy">Privecy</a>
            <a href="./Services">Services</a>
       
           
         

        </div>
    </div>
  )
}
