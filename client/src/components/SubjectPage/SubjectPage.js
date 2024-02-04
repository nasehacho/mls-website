import {React, useState} from 'react'
import resourcesList from '../mockDataBySub.json'
import { useParams } from 'react-router-dom';

const SubjectPage = () => {
  const { subject } = useParams();

  console.log("subject: ", subject);
  
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //     const getAPI = () => {
  //         const API = `......./${subject}`;

  //         fetch(API)
  //             .then((response) => {
  //                 return response.json();
  //             })
  //             .then((data) => {
  //                 setData(data);
  //             });
  //     };
  //     getAPI();
  // }, [subject]);


  return (
    <ul role="list" className="divide-y divide-gray-100  p-6 lg:px-40">
        {resourcesList.map((resources) => (
          <li key={resources.subject} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{resources.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{resources.subject}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{resources.type}</p>
              {resources.updated && (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Updated <time dateTime={resources.uploadedDateTime}>{resources.updated}</time>
                </p>
              ) }
            </div>
          </li>
        ))}
    </ul>    
  )
}

export default SubjectPage
