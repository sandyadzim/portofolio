import React from 'react'

import avatar from '../../assets/img/avatar.png'

interface ISocial {
  img: string
  href: string
  slug: string
}
interface IHome {
  social: Array<ISocial>
}

function Home({ social }: IHome) {
  return (
    <div className="flex items-center justify-center flex-col h-[80vh] fade-in">
      <div>
        <img src={avatar} alt="avatar" className="w-36 md:w-full" />
      </div>

      <div className="mt-10 text-center">
        <h1 className="font-bold text-navy-pastel text-3xl md:text-5xl">
          Hello, I’m <br className="block md:hidden" />
          <span className="text-green-dark-pastel">Sandy Rahmansyah.</span>
        </h1>

        <h2 className="font-semibold text-navy-pastel text-2xl md:text-4xl mt-2 md:mt-3">
          Front End Developer
        </h2>
      </div>

      <div className="flex mt-9 md:space-x-6 space-x-2">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sandy.adzim@gmail.com"
          target="_blank"
          className="bg-beige-pastel text-center font-bold text-white text-xl md:text-2xl w-44 shadow-base py-2 rounded-xl"
        >
          Email
        </a>
        <a
          href="https://drive.google.com/file/d/1Hmmu1m6XvKj4UwyVojGGs2rv6at7e0bl/view?usp=sharing"
          target="_blank"
          className="bg-navy-pastel text-center font-bold text-white text-xl md:text-2xl w-44 shadow-base py-2 rounded-xl"
        >
          Resume
        </a>
      </div>

      <div className="md:hidden flex space-x-4 mt-5">
        {social.map((item, index) => (
          <div key={index} className="rounded-xl shadow-base p-3">
            <a href={item.href} target={'_blank'}>
              <img src={item.img} alt={item.slug} />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
