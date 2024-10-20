import { TabelaCampeonato } from "./components/TabelaCampeonato";



export function Classificacao(){

  return(
    <div className="mt-4">
      <div className="flex justify-center gap-4 w-full">
        <div className="flex flex-col w-3/4">
          <h1 className="font-bold text-lg">Tabela</h1>
          <TabelaCampeonato/>
        </div>
        <div >
          <h1 className="font-bold text-lg">Jogos</h1>
          <iframe
            src="https://api.api-futebol.com.br/v1/widgets/rodadas?client_id=YH47XCVNK39P" // URL do widget fornecida pela API
            width="100%" 
            style={{ height: '100%', minHeight: '700px', border: 'none' }}
            title="API Futebol"
          ></iframe>
        </div>
      </div>
    </div>
  )
}