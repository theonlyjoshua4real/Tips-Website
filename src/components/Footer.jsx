import React from 'react'
import logolight from '../assets/logo-light.png'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/svg'

const Footer = () => {
  return (
    <footer className="padding-2 bg-black">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={logolight} alt="footer-logo" className="h-16" />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white sm:max-w-sm">Join a community that values strategy, research, and responsible betting. With expert insights and a passion for sports, we’re here to help you turn the odds in your favor.</p>
          <div className="flex items-center gap-5 mt-8">
          {socialMedia.map((icon)=>(
              <div key={icon.src} className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section)=>(
            <div key={section}>
              <h4 className="text-customYellow font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
              <ul>
                {section.links.map((link)=>(
                  <li key={link.name} className="text-white-400 mt-3 text-base font-montserrat leading-normal hover:text-slate-gray cursor-pointer">
                    <a href={link.link} className="text-white hover:text-customYellow">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          
          ))}
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center text-white">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img src={copyrightSign} alt="copyright sign" width={20} height={20} className="rounded-full m-0" />
            <p>Copyright. All rights reserved</p>
          </div>
          <a href="" className="text-white hover:text-customYellow font-montserrat cursor-pointer">Terms & Conditions</a>
          {/* <p className="font-montserrat cursor-pointer">Terms & Conditions</p> */}
      </div>
    </footer>
  )
}

export default Footer