import React, { useState } from 'react'

export const Search = ({ searchText }) => {
  const [text, setText] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  }

  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex border-grey-light border">
          <input onChange={e => setText(e.target.value)} className="w-full rounded ml-1" type="text" placeholder="Search..." />
          <button className="bg-grey-lightest border-grey border-l shadow hover:bg-grey-lightest">
            <span className="w-auto flex justify-end items-center text-grey p-2 hover:text-grey-darkest">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Search;