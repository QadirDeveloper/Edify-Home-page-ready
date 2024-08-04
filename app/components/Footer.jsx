import React from 'react'

function Footer() {
  return (
    <div class=' translate-y-3'>

        <div class='text-2xl rounded-2xl flex justify-between font-bold bg-blue-900 text-white mx-20 py-20'>
        <div><h1 class='px-16 '>Get in touch! Email updates?</h1></div>
        <div class='py-2 -translate-x-10'>
          <input type="your email"  lable='Your email'/>
          <button class=' bg-blue-600 text-white px-4 py-1 rounded-lg '>Send</button></div>
        </div>

        <div class='flex px-10 bg-slate-100 justify-between py-20'>
          <div class='ml-10 mr-40 col-span-2 grid-cols-1'>
            <img src="edify.WEBP" class='w-40' alt="not found edify" />
            <p class='w-64'>Let us help you yield your true academic potential for foreign education. To configure and discover an apt international enrolment strategy, get in touch!</p>
          </div>
          <div class=''>
            <h3 class='font-bold'>Links</h3>
            <a href="Blog">Blog</a><br />
            <a href="Team">Team</a><br />
            <a href="Career">Career</a><br />
            <a href="Course">Course</a><br />
            <a href="About Us">About Us</a>

          </div>
          <div>
            <h3 class='font-bold'>Explore</h3>
            <a href="">Services</a><br />
            <a href="">Apply Now</a><br />
            <a href="">Partner</a><br />
            <a href="">Contect Us</a><br />
            <a href="">News&Events</a>

          </div>
          <div>
            <h3 class='font-bold'>Information</h3>
            <div class='flex'>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg></div>
<div><a href="041 8501893">041 8501893</a></div></div>

<div class='flex'>
  <div>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg></div>
<div>
<a href="info@edify.pk">info@edify.pk</a></div>
</div>

<div class='flex'>
  <div>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg></div>
<div>
<a href="">Edify Building, 3rd Floor, Madina Town Faisalabad</a></div>
</div>
          </div>
        </div>

        <div class=' flex pb-10 px-20 space-x-6 bg-slate-100'>
          {/* facebook Icon start */}
          <div>
            <a href="https://www.facebook.com/EdifyGroupPakistan">
            <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 bg-white text-black rounded-full hover:text-blue-600"
      ><path
          d="M22.676 0H1.324A1.324 1.324 0 000 1.324v21.352C0 23.492.508 24 1.324 24H12.82V14.706h-3.15v-3.631h3.15V8.412c0-3.113 1.898-4.805 4.674-4.805 1.33 0 2.475.099 2.808.143v3.25h-1.926c-1.506 0-1.797.717-1.797 1.765v2.316h3.594l-.468 3.631h-3.126V24h6.12A1.324 1.324 0 0024 22.676V1.324A1.324 1.324 0 0022.676 0z"
        />
      </svg>
            </a>
          
          </div>
          {/* instagram icon start */}

          <div>
            <a href="https://www.instagram.com/edifygroupofficial/">
            <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 text-black hover:text-pink-600 rounded-full"
      >
        <path
          d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.266-.058 1.646-.069 4.85-.069m0-2.163C8.735 0 8.332.013 7.052.072 5.68.132 4.505.398 3.515 1.388 2.525 2.377 2.258 3.552 2.198 4.923c-.059 1.28-.072 1.683-.072 4.952s.013 3.672.072 4.952c.06 1.37.327 2.545 1.317 3.535.99.99 2.165 1.256 3.536 1.317 1.28.059 1.683.072 4.952.072s3.672-.013 4.952-.072c1.37-.06 2.545-.327 3.535-1.317.99-.99 1.256-2.165 1.317-3.536.059-1.28.072-1.683.072-4.952s-.013-3.672-.072-4.952c-.06-1.37-.327-2.545-1.317-3.535-.99-.99-2.165-1.256-3.536-1.317-1.28-.059-1.683-.072-4.952-.072z"
        />
        <path
          d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.115c-2.18 0-3.953-1.773-3.953-3.953S9.82 8.047 12 8.047s3.953 1.773 3.953 3.953-1.773 3.953-3.953 3.953z"
        />
        <circle cx="18.406" cy="5.594" r="1.44" />
      </svg>
            </a> 
           </div>
           {/* twiter icon is start */}
          <div>
            <a href="https://x.com/?mx=2">
            <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 text-blue-500"
      >
        <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.693 4.693 0 002.048-2.589 9.276 9.276 0 01-2.963 1.135 4.655 4.655 0 00-7.928 4.241A13.204 13.204 0 011.64 3.16a4.616 4.616 0 00-.63 2.34 4.65 4.65 0 002.07 3.87 4.63 4.63 0 01-2.112-.584v.06a4.655 4.655 0 003.733 4.564 4.706 4.706 0 01-2.104.08 4.66 4.66 0 004.347 3.236 9.332 9.332 0 01-5.788 1.996c-.375 0-.748-.022-1.118-.066a13.17 13.17 0 007.13 2.09c8.556 0 13.23-7.092 13.23-13.23 0-.201 0-.401-.014-.6a9.48 9.48 0 002.335-2.413z" />
      </svg>
            </a>
          </div>
          {/* youtube icon is start */}
          <div>
            <a href="https://www.youtube.com/c/EDIFYGROUP/featured">
             <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 text-red-600"
      >
        <path d="M23.498 6.186a2.85 2.85 0 00-2.007-2.016C19.724 3.667 12 3.667 12 3.667s-7.725 0-9.492.503A2.85 2.85 0 00.501 6.186C0 7.951 0 12 0 12s0 4.048.501 5.814a2.85 2.85 0 002.007 2.016c1.767.503 9.492.503 9.492.503s7.725 0 9.492-.503a2.85 2.85 0 002.007-2.016C24 16.048 24 12 24 12s0-4.048-.502-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z" />
      </svg>
            </a>
          </div>
          {/* linkdin icon is start */}
          <div>
            <a href="https://www.linkedin.com/company/edify-group-of-companies/">
            <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 text-blue-700"
      >
        <path d="M4.98 3.5C4.98 2.12 3.86 1 2.49 1S0 2.12 0 3.5 1.12 6 2.49 6 4.98 4.88 4.98 3.5zM.44 8.1h4.1v13.5H.44V8.1zM8.57 8.1h3.93v1.85h.06c.55-1.04 1.9-2.14 3.92-2.14 4.19 0 4.96 2.76 4.96 6.34v7.46h-4.1v-6.61c0-1.58-.03-3.61-2.2-3.61-2.2 0-2.54 1.72-2.54 3.5v6.71h-4.1V8.1z" />
      </svg>
            </a>
          </div>


        </div>
</div>

  )
}

export default Footer