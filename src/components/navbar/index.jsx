import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'gatsby';

import navLogo from '../../images/navlogo.png';

const navigation = [
  { name: 'PROJECTS', href: '/projects', current: false },
  { name: 'BLOG', href: '/blog', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const NavBar = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black font-RobotoMono hover:scale-105 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex max-w-auto max-h-12">
                  <Link to="/">
                    <img
                      className="object-scale-down h-12 w-16 hover:scale-110"
                      src={navLogo}
                      alt="Workflow"
                    />
                  </Link>
                </div>
                <div className='sm:flex-auto w-128'></div>
                <div className="hidden sm:block">
                  <div className="flex p-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'text-black'
                            : 'text-black hover:scale-110',
                          'font-RobotoMono tracking-wider text-xs font-medium px-4 focus:outline-none'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden focus:outline-none bg-black/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'text-black'
                      : 'text-white hover:bg-black/[0.06] hover:text-white',
                    'block px-3 py-2 rounded-md text-xs tracking-wider font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
