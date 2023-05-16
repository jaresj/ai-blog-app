import React from 'react'


const Footer = () => {
  return (
    <footer className='bg-wh-900 text-wh-50 py-10 px-10'>
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className='font-bold'>BLOG OF THE FUTURE</h4>
          <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias numquam expedita placeat debitis repellendus, rem suscipit delectus error molestias harum in. Vel quisquam nostrum, pariatur incidunt delectus tenetur commodi corrupti.</p>
          <p>© Blog of the Future All Rights Reserved.</p>
        </div>
        {/* SECOND COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className='font-bold'>LINKS</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Some random link again</p>
          <p>Ullamcorper vivamus</p>
        </div>
        {/* THIRD COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className='font-bold'>Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat</p>
          <p>(555)555-5555</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer