import { useEffect, useRef } from 'react';

export function TabelaCampeonato(){
  const tabelaRef = useRef(null);

  useEffect(() => {
    const scriptUrl = 'https://cdn.api-futebol.com.br/widgets/v1/apifutebol-tabela.js';

    const injectScript = () => {
      const script = document.createElement('script');
      script.src = scriptUrl;
      script.async = true;

      script.onload = () => {
        console.log('Widget carregado');
        if (window.apifutebol) {
          window.apifutebol.init();
        }
      };

      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    };

    const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
    if (!existingScript) {
      injectScript();
    } else if (window.apifutebol) {
      window.apifutebol.init();
    }
  }, []);

  return (
    <div className='flex-1'>
      <div
        ref={tabelaRef}
        className="apifutebol-tabela h-full"
        data-client-id="MUAWXXC7NNXK"
      ></div>
    </div>
  );
};

