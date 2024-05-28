import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { Button } from "primereact/button"
import Paths from "./routes/Paths";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./services/index.";

const App = () => {
  return ( 
    <>

      <QueryClientProvider client={queryClient}>
        <Paths />
      </QueryClientProvider>

    </>
   );
}
 
export default App;


// https://primereact.org/installation/
// https://primeflex.org/