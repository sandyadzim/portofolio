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
  return (
    <div className="flex items-center justify-center md:space-x-5 h-[80vh] flex-col md:flex-row fade-in">
      <div className="md:w-1/2 flex-1 flex justify-center flex-col">
        <h2 className="font-bold text-green-dark-pastel text-3xl md:text-5xl text-center mb-6">
          Technology
        </h2>

        <div className="flex-wrap flex justify-center">
          <div className="flex w-1/3 md:w-1/4 p-3">
            <div className="flex justify-center flex-1 rounded-xl shadow-base p-2">
              <img src={htmlIcon} alt="html" />
            </div>
          </div>
          <div className="flex w-1/3 md:w-1/4 p-3">
            <div className="flex justify-center flex-1 rounded-xl shadow-base p-2">
              <img src={cssIcon} alt="css" />
            </div>
          </div>
          <div className="flex w-1/3 md:w-1/4 p-3">
            <div className="flex justify-center flex-1 rounded-xl shadow-base p-2">
              <img src={jsIcon} alt="js" className="md:w-[75px] w-[60px]" />
            </div>
          </div>
          <div className="flex w-1/3 md:w-1/4 p-3">
            <div className="flex justify-center flex-1 rounded-xl shadow-base p-2">
              <img src={boostrapIcon} alt="bootstrap" />
            </div>
          </div>
          <div className="flex w-1/3 md:w-1/4 p-3" title="Favorite">
            <div className="flex justify-center flex-1 rounded-xl shadow-base p-2 border border-green-pastel">
              <img src={nuxtIcon} alt="nuxt" />
            </div>
          </div>
          <div className="flex w-1/3 md:w-1/4 p-3" title="Favorite">
            <div className="flex justify-center flex-1 rounded-xl shadow-base p-2 border border-green-pastel">
              <img src={vueIcon} alt="vue" />
            </div>
          </div>
          <div className="flex w-1/3 md:w-1/4 p-3">
            <div className="flex justify-center flex-1 rounded-xl shadow-base p-2">
              <img src={reactIcon} alt="react" />
            </div>
          </div>
          <div className="flex w-1/3 md:w-1/4 p-3">
            <div className="flex justify-center flex-1 rounded-xl shadow-base p-2">
              <img src={angularIcon} alt="angular" />
            </div>
          </div>
          <div className="flex w-1/3 md:w-1/4 p-3">
            <div className="flex justify-center flex-1 rounded-xl shadow-base p-2">
              <img src={sassIcon} alt="sass" />
            </div>
          </div>
          <div className="flex w-1/3 md:w-1/4 p-3">
            <div className="flex justify-center flex-1 rounded-xl shadow-base p-2">
              <img src={tailwindIcon} alt="tailwind" />
            </div>
          </div>
          <div className="flex w-1/3 md:w-1/4 p-3">
            <div className="flex justify-center flex-1 rounded-xl shadow-base p-2">
              <img src={tsIcon} alt="ts" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 lg:flex hidden justify-center">
        <img src={techIcon} alt="tech" />
      </div>
    </div>
  )
}

export default Tech
