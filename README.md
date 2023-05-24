# SureBet Web Scraping API

Este projeto é um web scraping que extrai informações da SureBet através de uma API utilizando as dependências Express e Playwright. Ele permite obter dados atualizados sobre surebets, que são oportunidades de apostas esportivas onde é possível obter lucro independentemente do resultado.

## Pré-requisitos

Certifique-se de ter os seguintes pré-requisitos instalados em seu ambiente de desenvolvimento:

- Node.js
- NPM (Node Package Manager)

## Instalação

Siga as instruções abaixo para configurar e executar o projeto:

1. Clone o repositório do projeto para o seu ambiente local:

```
git clone <URL_DO_REPOSITÓRIO>
```

2. Navegue até o diretório do projeto:

```
cd surebetFree
```

3. Instale as dependências do projeto utilizando o NPM:

```
npm install
```

## Execução

Após a instalação, você pode iniciar o servidor Express para fornecer a API do web scraping. Execute o seguinte comando:

```
npm start
```

O servidor será iniciado e estará ouvindo em http://localhost:3000.

## Utilização da API

A API possui uma rota para obtenção das informações da SureBet. Para acessá-la, faça uma requisição HTTP GET para:

```
http://localhost:3000/
```

A resposta será um JSON contendo as informações extraídas da SureBet.

## Contribuição

Se você deseja contribuir para este projeto, siga as etapas abaixo:

1. Faça um fork do repositório.
2. Crie um novo branch para sua contribuição:
```
git checkout -b minha-contribuicao
```
3. Faça as alterações desejadas e commit-as:
```
git commit -m "Minha contribuição"
```
4. Envie as alterações para o seu repositório fork:
```
git push origin minha-contribuicao
```
5. Abra um pull request no repositório original.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Em caso de dúvidas ou sugestões, sinta-se à vontade para entrar em contato:

Guilherme Faria De Souza
guilhermefariadesouza@gmail.com

Espero que este README seja útil e ajude a entender e utilizar este projeto de web scraping da SureBet.