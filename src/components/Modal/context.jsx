import { createContext, useContext } from 'react'

const ModalContext = createContext()
const ModalContextProvider = ModalContext.Provider

const useModalContext = () => {
  return useContext(ModalContext)
}
export { ModalContextProvider, useModalContext }
