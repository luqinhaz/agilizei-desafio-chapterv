# Desafio Bootcamp Agilizei - Chapter V

## Execução


## Relatórios
![image](https://user-images.githubusercontent.com/22923012/146273649-628021b1-e3f1-4a87-8ea9-62def177769b.png)
https://luqinhaz.github.io/agilizei-desafio-chapterv/

### Features
- Execução dos testes de Login/Cadastro no ambiente: (https://demo.realworld.io/#/);
- Execução dos testes via API;
- Geração de relatórios com o Mochawesome.

![logoAgilizei](https://user-images.githubusercontent.com/22923012/145126460-c228a789-b72c-46fd-adb6-1d2feb45c55f.png)

# Instalação
Instalar o [Node.js](https://nodejs.org/en/download/ "Node.js")

Versões utilizadas:
- Node version: v14.16.0
- NPM version: v6.14.11

Clonar o projeto:
```sh
git clone https://github.com/luqinhaz/agilizei-desafio-chapterv.git
```

Navegar para a pasta do projeto e instalar as dependencias:
```
cd desafio-chapterv
npm install
```

Para executar os testes com o modo visual do Cypress:
```
  npm run cy:open
  E selecionar o caso de teste para execução
```

Para executar os testes em modo headless:
```
  npm run cy:run
```

Para gerar os relatórios:
```
  npm run report:merge
  npm run report:mocha
```

Para excluir os relatórios já gerados:
```
  npm run report:clean
```
