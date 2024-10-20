import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Classificacao } from "./pages/Classificacao/Classificacao";

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Classificacao/>}/>
      </Route>
    </Routes>
  )
}