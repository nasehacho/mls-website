import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import axios from 'axios';

export default function Example() {
  const [id, setId] = useState("");
  const [FileName, setFileName] = useState("");
  const [Subject, setSubject] = useState("");
  const [Type, setType] = useState("");
  const [uploadedby, setuploadedby] = useState("");
  const [file, setFile] = useState("");
  
  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id",id);
    formData.append("FileName",FileName);
    formData.append("Subject",Subject);
    formData.append("Type",Type);
    formData.append("uploadedby",uploadedby);
    formData.append("file",file);
    console.log(id,FileName,Subject,Type,uploadedby,file)
    const result = await axios.post("http://localhost:3500/upload-files",formData,{
      headers: {"Content-Type":"multipart/form-data"},
    });
    console.log(result);

  }
  
  return (
    <form onSubmit={submitImage}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Upload Files</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>
          <div className="mt-6 space-y-6">
            <div className="col-span-full">
              <label htmlFor="Id" className="block text-sm font-medium leading-6 text-gray-900">
                ID
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="Id"
                  id="Id"
                  autoComplete="Id"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Unique Identifier"
                  required
                  onChange= {(e)=> setId(e.target.value)}
                />
              </div>
            </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="File Title" className="block text-sm font-medium leading-6 text-gray-900">
                File Title 
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="title"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Antibody Panel"
                    required
                    onChange={(e)=> setFileName(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Subject
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  required
                  onChange={(e)=> setSubject(e.target.value)}
                />
              </div>
            </div>



            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Upload resource document
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      required
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, PPX up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">File Type</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Please label what type of file is being uploaded.
          </p>

          <div className="mt-10 space-y-10">
          <fieldset>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="PDF-file"
                    name="file-type"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    onChange={(e)=> setType(e.target.value)}
                  />
                  <label htmlFor="PDF-file" className="block text-sm font-medium leading-6 text-gray-900">
                    PDF
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="word-file"
                    name="file-type"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    onChange={(e)=> setType(e.target.value)}
                  />
                  <label htmlFor="word-file" className="block text-sm font-medium leading-6 text-gray-900">
                    Word  
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="presentation"
                    name="file-type"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    onChange={(e)=> setType(e.target.value)}
                  />
                  <label htmlFor="presentation" className="block text-sm font-medium leading-6 text-gray-900">
                    Presentation
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="Uploaded" className="block text-sm font-medium leading-6 text-gray-900">
                Uploaded by
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                  <input
                    type="text"
                    name="uploaded by"
                    id="uploaded"
                    autoComplete="uploaded"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Antibody Panel"
                    required
                    onChange={(e)=> setuploadedby(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        

          <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
      </div>
    </form>
  )
}