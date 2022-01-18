import './index.css'
import './tailwind.css'
function App() {
  var person = {name:"yogesh",
            email: "yogesh123@gmail.com",
            imageUrl:"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          };
  return (
    <>
    <div className="App text-blue-400  text-5xl font-bold">
      tailwind css tutorialss
    </div>

    <ul role="list" className="p-6 divide-y divide-gray-200">
    <li className="flex py-4 first:pt-8 last:pb-0">
      <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="my_pic" />
      <div className="ml-3 overflow-hidden">
        <p className="text-sm font-medium text-gray-900">{person.name}</p>
        <p className="text-sm text-gray-500 truncate">{person.email}</p>
      </div>
    </li>
    <li className="flex py-4 first:pt-0 last:pb-0">
      <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="my_pic" />
      <div className="ml-3 overflow-hidden">
        <p className="text-sm font-medium text-gray-900">{person.name}</p>
        <p className="text-sm text-gray-500 truncate">{person.email}</p>
      </div>
    </li>
    <li className="flex py-4 first:pt-0 last:pb-0">
      <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="my_pic" />
      <div className="ml-3 overflow-hidden">
        <p className="text-sm font-medium text-gray-900">{person.name}</p>
        <p className="text-sm text-gray-500 truncate">{person.email}</p>
      </div>
    </li>
    <li className="flex py-4 first:pt-0 last:pb-0">
      <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="my_pic" />
      <div className="ml-3 overflow-hidden">
        <p className="text-sm font-medium text-gray-900">{person.name}</p>
        <p className="text-sm text-gray-500 truncate">{person.email}</p>
      </div>
    </li>
</ul>
<div>
<input className="border-black-300  focus-within:shadow-lg focus:outline-none focus-visible:ring required:border-red-500" type="text"/>
<h1>helo</h1>
<button  type="reset" className="border-sm border-solid border-black-500 border-black bg-indigo-300 rounded hover:focus:ring-1 focus:ring-red-500 active:bg-violet-500">More</button>
</div>
    </>
  );
}

export default App;
