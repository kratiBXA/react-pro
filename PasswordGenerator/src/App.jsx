import { useState , useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [Numbers, setNumbers] = useState(false)
  const [Symbols, setSymbols] = useState(false)
  const [Password , setPassword] =useState(" ")
  //useRef Hook
  // const passwordRef =useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(Numbers) str +="0123456789"
    if(Symbols) str +="!@#$%^&*()_+"
    for(let i=0; i<length; i++){
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }
    setPassword(pass)
  } , [length , Numbers, Symbols , setPassword])

  const copyPasswordToClipboard =useCallback(() => {
     if (Password.trim() === "") return alert("No password to copy!")
    navigator.clipboard.writeText(Password)
      .then(() => alert("Password copied to clipboard!"))
      .catch(() => alert("Failed to copy!"))
  }, [Password])

   useEffect(() => {
     PasswordGenerator()
   }, [length, Numbers, Symbols, PasswordGenerator])
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gradient-to-br from-orange-400 to-red-500 text-black'>
        <h1 className='text-center text-2xl font-bold my-3'>PasswordGenerator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-6 text-black bg-gray-400'>
        <input
          type='text'
          value={Password}
          className='border border-gray-300 rounded-md p-2 ml-2 w-full py-1 px-3'
          placeholder="Password"
          readOnly
          // ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-r-md'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label className='mb-2'>Length :{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            checked={Numbers}
            onChange={(e) => setNumbers((prev) => !prev)}
            className='mr-1'
          />
          <label className='mb-2'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            checked={Symbols}
            onChange={(e) => setSymbols((prev) => !prev)}
            className='mr-1'
          />
          <label className='mb-2'>Symbols</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
