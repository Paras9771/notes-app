import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')
  const [notes, setnotes] = useState([])

  const formhandler = (elem) => {
    elem.preventDefault()

    const copytask = [...notes]
    copytask.push({ title, details })
    setnotes(copytask)

    settitle('')
    setdetails('')
  }

  return (
    <div className="min-h-screen flex flex-col items-center gap-10 bg-gradient-to-br from-gray-100 to-gray-200 py-10">

      <form
        className="flex flex-col items-center gap-6 text-2xl w-full max-w-xl p-8  bg-white rounded-3xl shadow-xl"
        onSubmit={(elem) => {
          formhandler(elem)
        }}
      >

        <input
          type="text"
          placeholder="Enter your Heading"
          className="bg-amber-100 border-2 border-amber-300 rounded-2xl 
                     w-full h-16 px-6 text-lg outline-none focus:ring-2 focus:ring-amber-400 transition"
          value={title}
          onChange={(elem) => {
            settitle(elem.target.value)
          }}
        />

        <textarea
          placeholder="Enter your details"
          className="bg-amber-50 border-2 border-amber-300 rounded-2xl 
          w-full h-36 px-6 py-4 text-lg resize-none outline-none focus:ring-2 focus:ring-amber-400 transition"
          value={details}
          onChange={(elem) => {
            setdetails(elem.target.value)
          }}
        ></textarea>

        <button
          type="submit"
          className="bg-gray-900 text-white px-8 py-3 rounded-2xl 
          cursor-pointer hover:bg-gray-800 transition font-medium"
        >
          Add Note
        </button>

      </form>

      <div className="lg:w-3/4 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Your Notes
        </h1>

        <div className="flex flex-wrap gap-6 justify-center">
          {notes.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="w-72 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900
                p-5 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <h1 className="text-lg font-semibold mb-2 text-amber-300 break-words">
                  {elem.title}
                </h1>

                <hr className="border-gray-700 mb-3" />

                <p className="text-sm text-green-400 leading-relaxed break-words">
                  {elem.details}
                </p>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default App
