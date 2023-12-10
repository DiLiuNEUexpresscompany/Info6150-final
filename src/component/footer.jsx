import FaceBook from '../icon/fb.png'
import Discord from '../icon/discord.png'
import X from '../icon/x.png'
import Youtuber from '../icon/ytb.png'
import GitHub from '../icon/github.png'
import '../css/footer.css'
import '../css/main.css'
const footerNavigation = {
    main: [
      { name: 'Homepage', href: 'index' },
      { name: 'Blog', href: 'https://www.legalnomads.com/' },
      { name: 'Registration', href: 'registration' },
      { name: 'About', href: 'company' },
      { name: 'Hotel and Transportation', href: 'https://booking.com/' },
      { name: 'Policy', href: '#' },
    ],
    social: [
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/',
        icon: (props) => (
        <img className="iconLength" src={FaceBook} alt="Buffer Company Facebook"/>
        ),
      },
      {
        name: 'Discord',
        href: 'https://discord.com/',
        icon: (props) => (
            <img className="iconLength" src={Discord} alt="Buffer Company Discord"/>
        ),
      },
      {
        name: 'X',
        href: 'https://twitter.com/',
        icon: (props) => (
            <img className="iconLength" src={X} alt="Buffer Company X"/>
        ),
      },
      {
        name: 'GitHub',
        href: 'https://www.github.com/',
        icon: (props) => (
            <img className="iconLength" src={GitHub} alt="Buffer Company Github"/>
        ),
      },
      {
        name: 'YouTube',
        href: 'https://www.youtube.com/',
        icon: (props) => (
            <img className="iconLength" src={Youtuber} alt="Buffer Company Youtuber"/>
        ),
      },
    ],
  }
  
  export default function Footer() {
    return (
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-12 lg:px-8">
          <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
            {footerNavigation.main.map((item) => (
              <div key={item.name} className="pb-6">
                <a href={item.href} className="text-lg leading-6 text-black-600 hover:text-black-900 paragraph">
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <div className="mt-10 flex justify-center space-x-10">
            {footerNavigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-10 text-center text-xs leading-5 text-gray-500">
            &copy; 2023 Buffer Company, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }
  