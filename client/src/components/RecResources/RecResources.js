import React from 'react'

const RecResources = () => {
    const resourcesList = [
        {
          name: 'Definitions',
          subject: 'Immunohematology',
          type: 'PDF',
          uploaded: '3h ago',
          uploadedDateTime: '2023-01-23T13:23Z',
        },
        {
          name: 'Chapter 1 class notes',
          subject: 'Immunology',
          type: 'presentation',
          uploaded: '3h ago',
          uploadedDateTime: '2023-01-23T13:23Z',
        },
        {
          name: 'Vincent notes',
          subject: 'Microbiology',
          type: 'PDF',
          uploaded: '5d ago',
          uploadedDateTime: '2023-01-23T13:23Z',
        },
        {
          name: 'Homework',
          subject: 'Hematology',
          type: 'PDF',
          uploaded: '3h ago',
          uploadedDateTime: '2023-01-23T13:23Z',
        },
        {
          name: 'Workwork',
          subject: 'Urinalysis',
          type: 'PDF',
          uploaded: '3h ago',
          uploadedDateTime: '2023-01-23T13:23Z',
        },
        {
          name: 'Formulas Sheet',
          subject: 'Chemistry',
          type: 'PDF',
          uploaded: null,
          uploadedDateTime: '2023-01-23T13:23Z',
        },
      ]


  return (
    <>
    <ul type="list" className="divide-y divide-gray-100 p-6 lg:px-40">
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
            {resources.uploaded && (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Uploaded <time dateTime={resources.uploadedDateTime}>{resources.uploaded}</time>
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
