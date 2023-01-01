
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';
import './App.css';

function App() {
  return (
    <div className=" mx-auto w-10/12">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
