import React, { useState } from "react";

export default function CommentMenu({ onEdit, onDelete, loading }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (<>
  {loading ?
             <div className="flex items-center justify-center">
                <svg className="animate-spin size-4 text-red-500" viewBox="0 0 24 24" >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
              </div> 
              :
              <div className="relative">
                  <button onClick={() => setMenuOpen(!menuOpen)} className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" > <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="size-4 cursor-pointer" > <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" /> </svg> </button>

                  {menuOpen && (
                    <div className="absolute right-4  z-10  bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md shadow-cyan-100 w-28 sm:w-24">
                      <button
                        onClick={() => {
                          onEdit();
                          setMenuOpen(false);
                        }}
                        className="w-full text-left px-3 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => {
                          onDelete();
                          setMenuOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700`}
                      >
                          Delete
                  
                      </button>
                    </div>
                  )}
             </div>
  }
  </>
    
    
  );
}
