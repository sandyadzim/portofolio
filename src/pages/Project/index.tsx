import React from 'react'

import codeIcon from '../../assets/img/icons/code.svg'
import linkIcon from '../../assets/img/icons/link.svg'

function Project() {
  const listProject = [
    {
      title: 'Mitra Gramedia',
      description:
        'Application for Gramedian partners who want to buy products in large quantities such as dropship and B2B and B2C.',
      stack: ['NuxtJS', 'Bootstrap', 'SCSS'],
      link: null,
    },
    {
      title: 'Dashboard Reporting',
      description:
        'Application for reporting and monitoring of the Multiseller Gramedia.',
      stack: ['VueJS', 'Typescript', 'Tailwind', 'SCSS'],
      link: null,
    },
    {
      title: 'Revamp Gramedia.com',
      description: 'Revamp the Gramedia.com website to new feature and design.',
      stack: ['NuxtJS', 'Typescript', 'Tailwind', 'SCSS'],
      link: null,
    },
    {
      title: 'Gramedia.com',
      description:
        'Gramedia.com is the largest online bookstore in Indonesia who sells books, magazines, and other products.',
      stack: ['AngularJS', 'Typescript', 'LESS'],
      link: 'https://www.gramedia.com/',
    },
    {
      title: 'ePerpus',
      description:
        'ePerpus is a digital library service with a B2B concept where this application can simplify the management of your digital library.',
      stack: ['AngularJS', 'Typescript', 'LESS', 'Bootstrap'],
      link: 'https://eperpus.com/home/',
    },
    {
      title: 'ePerpus Portal Sales',
      description:
        'Application for ePerpus digital library sales team created to manage all ePerpus clients.',
      stack: ['NuxtJS', 'Vuetify', 'SCSS'],
      link: null,
    },
    {
      title: 'Gramedia Academy and LMS',
      description:
        'A training platform to promote people development by holding trainings and events based on books published by Gramedia Publishers.',
      stack: ['PHP', 'CI', 'CSS'],
      link: 'https://www.gramediaacademy.com/',
    },
    {
      title: 'New Landing Superhand',
      description:
        'Applications that provide a variety of Islamic material and there are Superdai features that make it easy for you to make an appointment with the Ustadz of your choice anytime and anywhere.',
      stack: ['NuxtJS', 'Bootstrap', 'SCSS'],
      link: null,
    },
    {
      title: 'Landing WarisOnline',
      description:
        'The first smart application in Indonesia that can calculate, create, and update inheritance letters completely and reliably following Islamic law.',
      stack: ['NuxtJS', 'Bootstrap', 'SCSS'],
      link: null,
    },
    {
      title: 'Landing Lintasmaya',
      description: 'Landing page of Lintasmaya Multi Media company',
      stack: ['WordPress'],
      link: 'https://lintasmaya.com/',
    },
    {
      title: 'Tepian Teknologi',
      description:
        'Web application to display product catalogs at Lintasmaya Multi Media',
      stack: ['NuxtJS', 'Bootstrap', 'SCSS'],
      link: null,
    },
    {
      title: 'Edutore by Gramedia',
      description:
        'Edutore is an online education platform developed by Gramedia. The presence of Edutore makes learning easier, more complete and fun.',
      stack: ['NuxtJS', 'Bootstrap', 'CSS'],
      link: null,
    },
  ]

  return (
    <div className="flex items-center justify-center flex-col fade-in mb-10">
      <h2 className="font-bold text-green-dark-pastel text-2xl md:text-4xl text-center my-6">
        Projects i've worked on
      </h2>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {listProject.map((item, index) => (
          <div key={index} className="shadow-base rounded-xl p-4">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <img src={codeIcon} alt="code" />
                  {item.link !== null && (
                    <a href={item.link} target="_blank">
                      <img src={linkIcon} alt="link" />
                    </a>
                  )}
                </div>
                <h4 className="font-bold text-navy-pastel mb-2">
                  {item.title}
                </h4>
                <p className="text-xs font-bold text-navy-pastel">
                  {item.description}
                </p>
              </div>
              <div className="flex items-center mt-4 space-x-2 flex-wrap">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-beige-pastel rounded-md py-1 px-2 mt-2 text-white text-xs font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
