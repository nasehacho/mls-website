import {React, useState} from 'react'
import resourcesList from '../mockData.json'

const RecResources = () => {
    const [query, setQuery] = useState("");

    const allResources = () => {
        console.log("hererere")
        return (
            <>
            
            </>
        )
    }

  return (
    <>
    <ul type="list" className="divide-y divide-gray-100 p-6 lg:px-40">
    
    <div>
        <input 
        placeholder="Search for a resource" 
        value={query}
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        onChange={(event) => setQuery(event.target.value)}
          />
      </div>
      {
        resourcesList.length && resourcesList.filter((resources) => {
            if (query == "") {
                return resourcesList;
            }
            else if (query != "" && resources.name.toLowerCase().includes(query.toLowerCase())) {
                    //returns filtered array
                    return resources;
                }
            }).map((resource) => (
                <li key={resource.subject} className="flex justify-between gap-x-6 py-5">
                      <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">{resource.name}</p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">{resource.subject}</p>
                        </div>
                      </div>
                      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">{resource.type}</p>
                        {resource.uploaded && (
                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            Uploaded <time dateTime={resource.uploadedDateTime}>{resource.uploaded}</time>
                          </p>
                        ) }
                      </div>
                    </li>
            ))}

  
    </ul>
    </>
  )
}

export default RecResources
