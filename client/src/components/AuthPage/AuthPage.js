import axios from 'axios'; 

const AuthPage = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios
          .post("http://localhost:3001/authenticate", { username: value })
          .then((r) => props.onAuth({ ...r.data, secret: value }))
          .catch((e) => console.log("Auth Error", e));
      };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
  
          <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight p-9">Welcome 👋</h2>
  
          <div className="p-9">
            <input
          type="text"
          name="username"
          id="username"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Enter your username"
        />
            






            <button className="p-9" type="submit">
              Enter the chat ---&gt;
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;