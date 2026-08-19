import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useState } from 'react' // Conceito de estado do React [5]

function DropdownExample() {
  return (
    /* O container principal do Menu */
    <Menu as="div" className="relative inline-block text-left">
      <div>
        {/* Botão que ativa o dropdown, estilizado com Tailwind [6, 7] */}
        <MenuButton className="inline-flex w-full justify-center rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700 transition duration-300">
          Opções
        </MenuButton>
      </div>

      {/* Itens do Menu com classes de posicionamento e sombra [8, 9] */}
      <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <MenuItem>
            {({ active }) => (
              <a
                href="#edit"
                className={`${
                  active ? 'bg-slate-100 text-slate-900' : 'text-slate-700'
                } block px-4 py-2 text-sm transition-colors`}
              >
                Editar Perfil
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <a
                href="#settings"
                className={`${
                  active ? 'bg-slate-100 text-slate-900' : 'text-slate-700'
                } block px-4 py-2 text-sm transition-colors`}
              >
                Configurações
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <button
                className={`${
                  active ? 'bg-rose-100 text-rose-900' : 'text-rose-700'
                } block w-full text-left px-4 py-2 text-sm transition-colors`}
              >
                Sair
              </button>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}