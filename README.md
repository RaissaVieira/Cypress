# Cypress

## Repositório oficial

[Link](https://github.com/cypress-io/cypress)

## Mind map
  
[Link](https://whimsical.com/cypress-essencial-XpeRr4NebcFJkC2Lpwm4W4)

## Estudos

#### Awesome Cypress

[Link](https://github.com/brunopulis/awesome-cypress)

## Configurando o ambiente
**1.** Instalar Node.js

**2.** Instalar Cypress: 
    
    npm install -D cypress

**3.** Iniciar o Cypress: 

    npx cypress open

## Geração de relatórios

* **Cypress-multi-reporters** - permite que seja configurado mais de um relatório para ser usado no projeto.
* **Mocha** - lib para execução dos testes
* **Mochawesome** - lib responsável por gerar os arquivos .json usados no report html
* **Mochawesome-merge** - merge dos arquivos .json gerados pelo mochawesome
* **Mochawesome-report-generator** - gera o relatório em html usando os arquivos gerados (json)