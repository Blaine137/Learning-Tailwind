import logo from './logo.svg';
import blaine from './blaine.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div class="flex-shrink-0">
          <img class="h-12 w-12" src={logo} alt="ChitChat Logo"/>
        </div>
        <div>
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-gray-500">You have a new message!</p>
        </div>
      </div>

      <div class="py-8 my-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={blaine} alt="Woman's Face"/>
        <div class="text-center space-y-2 sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">
              Blaine Young
            </p>
            <p class="text-gray-500 font-medium">
              Software Engineer
            </p>
          </div>
          <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
        </div>
      </div>

      <img class="w-16 mx-auto md:w-32 lg:w-64" src={logo}/>
    </div>
  );
}

export default App;
