import { RouterProvider } from "react-router-dom";
import { router } from './Struktura';   // kichik harf — export const router

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;