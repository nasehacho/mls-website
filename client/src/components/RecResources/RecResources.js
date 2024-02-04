import {React, useState, useEffect} from 'react'
// import resourcesList from '../mockData.json'

const RecResources = () => {
    const [query, setQuery] = useState("");
    const [resourcesList, setResourcesList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const getAPI = () => {
          const API = "http://localhost:3500/get-files";

          fetch(API)
              .then((response) => {
                  return response.json();
              })
              .then((fetchedDocs) => {
                setResourcesList(fetchedDocs);
              });
      };
      getAPI();
  }, []);

  // console.log(resourcesList.length);
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
        resourcesList.data && resourcesList.data.filter((resources) => {
            if (query == "") {
                return resourcesList;
            }
            else if (query != "" && resources.FileName.toLowerCase().includes(query.toLowerCase())) {
                    //returns filtered array
                    return resources;
                }
            }).map((resource) => (
                <li key={resource.Subject} className="flex justify-between gap-x-6 py-5">
                      <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">{resource.FileName}</p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">{resource.Subject}</p>
                        </div>
                      </div>
                      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">Uploaded by {resource.uploadedby}</p>
                        {resource.uploaded && (
                          <p className="mt-1 text-xs leading-5 text-gray-500">
                            Uploaded <time dateTime={resource.uploadedDateTime}>{resource.uploadedby}</time>
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
