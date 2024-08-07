import React, { useState } from 'react'

import expIcon from '../../assets/img/experience.png'
import './index.scss'

function Experience() {
  const [active, setActive] = useState('memberid')
  const listExp = [
    {
      title: 'Member.id',
      slug: 'memberid',
      job: 'Front End Developer',
      location: 'PT. Nawasena Cipta Raya',
      start: 'July 2022',
      end: 'Present',
      jobdesk: [
        'Developed and maintained multiple websites and web applications.',
        'Collaborated with UI/UX and Backend teams to develop new features.',
        'Utilized Vue JS to create user interfaces with dynamic functionality.',
        'Worked with senior developers to troubleshoot and debug code issues.',
      ],
    },
    {
      title: 'Gramedia',
      slug: 'gramedia',
      job: 'Front End Developer',
      location: 'PT. Gramedia Asri Media',
      start: 'January 2021',
      end: 'July 2022',
      jobdesk: [
        'Create new web applications for Gramedia such as Mitra Gramedia, New Dashboard, etc.',
        'Maintain, develop, and improve existing web applications in Gramedia.',
        'Collaborate with UI/UX and Backend teams to develop new features.',
      ],
    },
    {
      title: 'Superhand',
      slug: 'superhand',
      job: 'Front End Developer (Part Time)',
      location: 'PT. Teknologi Sejuta Tangan (Superhand)',
      start: 'January 2021',
      end: 'June 2021',
      jobdesk: [
        'Create and develop new landing page for Superhand and WasiatOnline.',
        'Collaborate with UI/UX and Backend teams to develop new landing page.',
        'API integration for some page in landing page Superhand and WasiatOnline.',
      ],
    },
    {
      title: 'Lintasmaya',
      slug: 'lintasmaya',
      job: 'Front End Developer',
      location: 'PT. Lintasmaya Multi Media',
      start: 'October 2020',
      end: 'December 2020',
      jobdesk: [
        'Create and develop new landing page for Lintasmaya with WordPress.',
        'Create and develop new project for Catalog of Lintasmaya',
        'Support team for deployment the projects',
      ],
    },
    {
      title: 'Edutore',
      slug: 'edutore',
      job: 'Front End Developer',
      location: 'PT. Gramedia Asri Media',
      start: 'December 2019',
      end: 'July 2020',
      jobdesk: [
        'Create new web applications for Edutore.',
        'Maintain, develop, and improve existing web applications in Edutore.',
        'Collaborate with UI/UX and Backend teams to update and develop new features in Edutore.',
      ],
    },
  ]

  const FilterActive = () => {
    const list = listExp.filter((item) => item.slug === active)
    const tabActive = list[0]
    const { location, job, start, end, jobdesk } = tabActive
    return (
      <div className="fade-in">
        <h3 className="font-bold text-2xl text-navy-pastel mb-1">{job}</h3>
        <h4 className="font-semibold text-green-pastel mb-1">{location}</h4>
        <span className="text-sm text-navy-pastel italic">
          {start} - {end}
        </span>

        <div className="mt-3">
          <ul className="list-disc list-inside">
            {jobdesk.map((item, indexJob) => (
              <li key={indexJob} className="text-navy-pastel">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center md:space-x-5 h-[80vh] flex-col md:flex-row fade-in">
      <div className="hidden lg:flex justify-center md:w-1/2">
        <img src={expIcon} alt="experience" />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="font-bold text-green-dark-pastel text-3xl md:text-5xl text-center">
          Experience
        </h2>
        <div className="flex items-center space-x-0 md:space-x-10 mt-6 md:mt-12 flex-col md:flex-row">
          <div className="tabs">
            {listExp.map((item, index) => (
              <div
                key={index}
                className={`tab-item ${
                  active === item.slug ? 'tab-active' : ''
                }`}
                onClick={() => setActive(item.slug)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="tabs-sm">
            {listExp.map((item, index) => (
              <div
                key={index}
                className={`tab-item ${
                  active === item.slug ? 'tab-active' : ''
                }`}
                onClick={() => setActive(item.slug)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <FilterActive />
        </div>
      </div>
    </div>
  )
}

export default Experience
