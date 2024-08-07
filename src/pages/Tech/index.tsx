import React from 'react'

import techIcon from '../../assets/img/tech.png'
import htmlIcon from '../../assets/img/icons/html.svg'
import cssIcon from '../../assets/img/icons/css.svg'
import jsIcon from '../../assets/img/icons/js.svg'
import boostrapIcon from '../../assets/img/icons/bootstrap.svg'
import nuxtIcon from '../../assets/img/icons/nuxt.svg'
import vueIcon from '../../assets/img/icons/vue.svg'
import reactIcon from '../../assets/img/icons/react.svg'
import angularIcon from '../../assets/img/icons/angular.svg'
import sassIcon from '../../assets/img/icons/sass.svg'
import tailwindIcon from '../../assets/img/icons/tailwind.svg'
import tsIcon from '../../assets/img/icons/ts.svg'

function Tech() {
  const listTech = [
    {
      name: 'html',
      image: htmlIcon,
    },
    {
      name: 'css',
      image: cssIcon,
    },
    {
      name: 'js',
      image: jsIcon,
      customClass: 'md:w-[75px] w-[60px]',
    },
    {
      name: 'bootstrap',
      image: boostrapIcon,
    },
    {
      name: 'angular',
      image: angularIcon,
    },
    {
      name: 'vue',
      image: vueIcon,
      isFav: true,
    },
    {
      name: 'nuxt',
      image: nuxtIcon,
      isFav: true,
    },
    {
      name: 'react',
      image: reactIcon,
    },
    {
      name: 'typescript',
      image: tsIcon,
    },
    {
      name: 'tailwind',
      image: tailwindIcon,
    },
    {
      name: 'sass',
      image: sassIcon,
    },
  ]

  return (
    <div className="flex items-center justify-center md:space-x-5 h-[80vh] flex-col md:flex-row fade-in">
      <div className="md:w-1/2 flex-1 flex justify-center flex-col">
        <h2 className="font-bold text-green-dark-pastel text-3xl md:text-5xl text-center mb-6">
          Technology
        </h2>

        <div className="flex-wrap flex justify-center">
          {listTech.map((item, index) => (
            <div key={index} className="flex w-1/3 md:w-1/4 p-3">
              <div
                className={`flex justify-center flex-1 rounded-xl shadow-base p-2 ${
                  item.isFav ? 'border-2 border-green-pastel' : ''
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className={
                    item.customClass
                      ? `${item.customClass}`
                      : 'w-24 h-auto object-contain'
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 lg:flex hidden justify-center">
        <img src={techIcon} alt="tech" />
      </div>
    </div>
  )
}

export default Tech
