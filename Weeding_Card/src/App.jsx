import ph1 from "./assets/ph1.jpg";
import ph2 from "./assets/ph2.jpg";

import ph5 from "./assets/ph5.jpg";
import ph6 from "./assets/ph6.jpg";

import ph7 from "./assets/ph7.jpg";

import ph9 from "./assets/ph9.jpg";
import ph10 from "./assets/ph10.jpg";
import ph11 from "./assets/ph11.jpg";

function App() {
  return (
    <div className="flex flex-col gap-5 ">
      <div
        className="h-screen bg-cover bg-center sm:bg-none m-2 rounded-sm"
        style={{ backgroundImage: `url(${ph1})` }}
      >
        <h1>Dipika & Subrata</h1>
        <h1>3rd march</h1>
      </div>
      <div
        className="h-screen bg-cover bg-center sm:bg-none m-2 rounded-sm"
        style={{ backgroundImage: `url(${ph2})` }}
      ></div>
      
      <div
        className="h-screen bg-cover bg-center sm:bg-none m-2 rounded-sm"
        style={{ backgroundImage: `url(${ph5})` }}
      ></div>
      <div
        className="h-screen bg-cover bg-center sm:bg-none m-2 rounded-sm"
        style={{ backgroundImage: `url(${ph6})` }}
      ></div>
      <div
        className="h-screen bg-cover bg-center sm:bg-none m-2 rounded-sm"
        style={{ backgroundImage: `url(${ph7})` }}
      ></div>
      
      <div
        className="h-screen bg-cover bg-center sm:bg-none m-2 rounded-sm"
        style={{ backgroundImage: `url(${ph9})` }}
      ></div>
      <div
        className="h-screen bg-cover bg-center sm:bg-none m-2 rounded-sm"
        style={{ backgroundImage: `url(${ph10})` }}
      ></div>
      <div
        className="h-screen bg-cover bg-center sm:bg-none m-2 rounded-sm"
        style={{ backgroundImage: `url(${ph11})` }}
      ></div>
    </div>
  );
}

export default App;
