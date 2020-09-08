


<h1 align="center"> 
  Adaworks server
</h1>
<p align="center">
  <a href="#principais-tecnologias">Tecnologias usadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Escopo-do-projeto">Escopo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#equipe">Equipe</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Executando-o-server">Executando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#endpoints">Endpoints</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Contribua">Contribua</a>
</p>

<br><br>
![Screenshot_1](https://user-images.githubusercontent.com/45580434/92307516-7c0e3100-ef6d-11ea-8ad2-d248ba28492e.png)

<br><br>
# [:pushpin: Deploy](https://adaworks.herokuapp.com)

<br>

## Principais tecnologias

1. NodeJS
2. Express
3. BcryptJS: Para encriptar os dados do usuário.
4. Jsonwebtoken: Para autenticação do usuário na aplicação.
5. Estilização Avançada com CSS
6. PostgreSQL: Banco de dados relacional para armazenamento dos dados da aplicação.
7. Sequelize: ORM Node.js baseado em promises para Postgres
8. Yup: Para verificação do body da requisição.

<br>

## Escopo do projeto


### PROBLEMÁTICA

> “O contexto de **desigualdade de gênero** ainda é enorme, apesar dos debates sobre o tema terem avançado muito. Entre 100 vagas no mercado de tecnologia, apenas 37 são ocupadas por mulheres, de acordo com o Cadastro Geral de Empregados e Desempregados (Caged). No mesmo setor, 46% delas dizem receber salários inferiores aos homens.
Apesar do estado premeditado de desigualdade imposto por nossa sociedade, temos atrelado à essa diferença, uma **alta taxa de desistência nos processos seletivos** por parte de mulheres. Esse cenário está diretamente relacionado ao alto nível de **ansiedade, insegurança, e sensação de falta de preparo**.
O **desafio da inclusão** é um obstáculo a ser vencido. Para isso, convidamos você a pensar em como conseguimos **usar a própria tecnologia** e criar formas de **atrair e auxiliar na integração de mulheres no mercado de tecnologia e diminuir as diferenças de gênero no setor**.”
>
> -- <cite>(VTEX, Mega Hack Women, 2020)</cite>

<br>

### PESQUISA DE MERCADO

<br>

**Dados de pesquisas realizadas por terceiros:**

Ao pesquisar a atual situação das mulheres no mercado de T.I. obtivemos as seguintes informações:
•	Apenas 15,53% dos matriculados em cursos de TI no Brasil são mulheres;
•	Abandono se dá por serem desacreditadas por parceiros de estudo e pela perspectiva de receberem 17,4% a menos que homens na mesma posição;
•	No Brasil, apenas 17% dos trabalhadores da área de TI são mulheres;
•	Perspectiva de criação de 350 mil novas vagas na área de TI entre 2020 e 2024; entretanto haverá, nesse mesmo período, apenas 230 mil
•	novos formandos capazes de atuar de forma eficiente na área; sendo 33% mulheres com perfil adequado para o trabalho;

<br>

**Pesquisa própria:**

Nós da Adaworks realizamos uma pesquisa com 93 mulheres brasileiras atuantes ou interessadas em ingressar no mercado de T.I. sobre o mercado de T.I., o ambiente de trabalho para mulheres que atuam nessa área e as dificuldades para quem trabalha ou deseja entrar no mercado de T.I.; tudo a partir da perspectiva feminina. As principais conclusões que tivemos a partir da pesquisa foram que, das 93 mulheres responderam nossa pesquisa demonstrando interesse na área de TI…
•	46,6% estão desempregadas;
•	65,9% sentem que não há oportunidade para iniciantes;
•	67% sentem que o ambiente de trabalho hostil e sem políticas anti-machistas;

<br>

**Avaliação dos concorrentes:**

Para averiguar e destacar o diferencial do nosso produto, analisamos nossos principais concorrentes (comunidades voltadas para mulheres da área de T.I. e sites de vagas ou com informações sobre as empresas). Avaliamos em termos de: proposta, público-alvo e serviços oferecidos nos âmbitos da comunicação, educação e empregabilidade. Partindo da ideia de que todo profissional precisa ser atraído para atuar em uma profissão e se informar sobre ela (comunicação), depois se profissionalizar (educação) para então procurar e passar para uma vaga em acordo com o seu perfil e assim atuar no mercado (empregabilidade).

Com base nas informações disponíveis nos respectivos sites, obtivemos as tabelas a seguir:

<br>

<table class="tg">
<thead>
  <tr>
    <th class="tg-c3ow"></th>
    <th class="tg-s8l9" colspan="2"><span style="font-weight:bold">O negócio</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-k8z9">Plataforma vs. Serviços</td>
    <td class="tg-k8z9">Proposta</td>
    <td class="tg-k8z9">Público</td>
  </tr>
  <tr>
    <td class="tg-7btt">ADAWORKS</td>
    <td class="tg-c3ow">Rede para comunicação, feedbacks e avaliação entre profissionais e empresas</td>
    <td class="tg-c3ow">Mulheres cis e trans atuantes ou interessadas em carreiras de T.I. + empresas que requerem profissionais de T.I.</td>
  </tr>
  <tr>
    <td class="tg-c3ow">WoMakersCode</td>
    <td class="tg-c3ow">Fortalecer o protagonismo feminino em T.I. por meio do desenvolvimento profissional e econômico</td>
    <td class="tg-c3ow">Profissionais femininas de T.I.</td>
  </tr>
  <tr>
    <td class="tg-c3ow">Cloud Girls</td>
    <td class="tg-c3ow">Distribuição de conhecimento por meio de eventos exclusivos para mulheres</td>
    <td class="tg-c3ow">Mulheres de T.I.</td>
  </tr>
  <tr>
    <td class="tg-c3ow">PyLadies</td>
    <td class="tg-c3ow">Grupo de mulheres desenvolvedoras Python</td>
    <td class="tg-c3ow">Programadoras Python</td>
  </tr>
  <tr>
    <td class="tg-c3ow">Devs JavaGirl</td>
    <td class="tg-c3ow">Aperfeiçoamento técnico em Java</td>
    <td class="tg-c3ow">Programadoras Java</td>
  </tr>
  <tr>
    <td class="tg-c3ow">Reprograma</td>
    <td class="tg-c3ow">Educação para mulheres em tecnologia</td>
    <td class="tg-c3ow">Mulheres cis e trans que não têm recursos e/ou oportunidades para aprender a programar.</td>
  </tr>
</tbody>
</table>

<br>

<table class="tg">
<thead>
  <tr>
    <th class="tg-c3ow"></th>
    <th class="tg-nicw" colspan="5">MERCADO / EMPREGABILIDADE</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-feq9">Plataforma vs. Serviços</td>
    <td class="tg-feq9">Mentoria</td>
    <td class="tg-feq9">Ponte entre profissionais e empresas</td>
    <td class="tg-feq9">Informações sobre o ambiente de trabalho das empresas</td>
    <td class="tg-feq9">Divulgação de vagas</td>
    <td class="tg-feq9">Gestão de processos seletivos</td>
  </tr>
  <tr>
    <td class="tg-x9uu">ADAWORKS</td>
    <td class="tg-9hqe">X</td>
    <td class="tg-9hqe">X</td>
    <td class="tg-9hqe">X</td>
    <td class="tg-9hqe">X</td>
    <td class="tg-9hqe">X</td>
  </tr>
  <tr>
    <td class="tg-m5nv">WoMakersCode</td>
    <td class="tg-a6fy"></td>
    <td class="tg-9hqe">X</td>
    <td class="tg-zcd2"></td>
    <td class="tg-zcd2"></td>
    <td class="tg-zcd2"></td>
  </tr>
  <tr>
    <td class="tg-m5nv">Cloud Girls</td>
    <td class="tg-9hqe">X</td>
    <td class="tg-9hqe">X</td>
    <td class="tg-a6fy"></td>
    <td class="tg-a6fy"></td>
    <td class="tg-zcd2"></td>
  </tr>
  <tr>
    <td class="tg-m5nv">PyLadies</td>
    <td class="tg-m5nv"></td>
    <td class="tg-m5nv"></td>
    <td class="tg-m5nv"></td>
    <td class="tg-m5nv"></td>
    <td class="tg-m5nv"></td>
  </tr>
  <tr>
    <td class="tg-m5nv">Devs JavaGirl</td>
    <td class="tg-m5nv">X</td>
    <td class="tg-m5nv"></td>
    <td class="tg-m5nv">X</td>
    <td class="tg-m5nv">X</td>
    <td class="tg-m5nv"></td>
  </tr>
  <tr>
    <td class="tg-m5nv">Reprograma</td>
    <td class="tg-m5nv"></td>
    <td class="tg-9hqe">X</td>
    <td class="tg-m5nv"></td>
    <td class="tg-m5nv"></td>
    <td class="tg-m5nv"></td>
  </tr>
</tbody>
</table>

<br>

Após a analise, concluímos que, a Adaworks é uma das raras plataformas que além de dar suporte ás profissionais de T.I., também auxilia as empresas a encontrar as profissionais adequadas ao perfil desejado. É uma das poucas que fornece um apoio consistente a mulheres que ainda não são da área de T.I., mas que desejam ingressar nessa área. E também, além de possui, de maneira diferenciada, todos serviços das demais empresas atuantes no mercado (comunidades para comunicação entre as mulheres, networking com profissionais consolidadas, meetups, materiais para capacitação a distância, eventos de capacitação presenciais, mentorias, e ponte entre profisisonais e empresas), tem o que é o seu maior diferencial: as avaliações das empresas e de seus ambientes de trabalho pelo ponto de vista feminino. Ao mesmo tempo que proporciona o ambiente adequado a divulgação de vagas e gerenciamento dos processos seletivos.

<br>

### SOLUÇÃO

A Adaworks é uma plataforma feita 100% por mulheres para as mulheres que atuam ou estão interessadas em ingressar na área de T.I.. Foi criada com o intuito de promover a inclusão, diversidade e empoderamento feminino na tecnologia, a partir da criação de um ambiente que fornece os conteúdos, informações e contatos necessários para que essas profissionais tenham a segurança, confiança e meios que precisam para se tornarem protagonistas de suas carreiras.

Além de dar suporte às profissionais de T.I. e oferecemos apoio consistente a mulheres que querem entrar no mercado, a Adaworks também auxilia as empresas a encontrar as profissionais com o perfil desejado ao proporcionamos um ambiente seguro de divulgação de vagas e gerenciamento dos processos seletivos. Entretanto, o nosso maior diferencial é apresentar avaliações de empresas e seus ambientes de trabalho sob o ponto de vista feminino, permitindo que as empresas deixem suas políticas expostas e, assim as mulheres, fiquem mais seguras do caminho que estão escolhendo para as suas carreiras.

<br>

## Equipe

### Designer

<div align="center">
Gabriella Feliciano
</div>

<br>

### Desenvolvedoras :octocat:

<div align="center">

| [<img src="https://media-exp1.licdn.com/dms/image/C4E03AQE_YHJuXQUr-A/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=vkC__X2c8hWE5IV0URkGtzJDX1R7HPqbuxrWbsNaPQc" width=115><br><sub>Júlia Stefanoni Mendes</sub>](https://www.linkedin.com/in/juliastefanonidev/)<br><sub>Backend</sub> |  [<img src="https://avatars1.githubusercontent.com/u/45580434?s=460&u=07188d0258859fc94b46983bcb85c09b4d7c5daf&v=4" width=115><br><sub>Rosana Carolino Rezende</sub>](https://www.linkedin.com/in/rosanarezende/)<br><sub>Frontend</sub> |
| :---: | :---: 

</div>

### Marketing

<div align="center">

[<img src="https://media-exp1.licdn.com/dms/image/C4D03AQEu4vtjOZTbBw/profile-displayphoto-shrink_400_400/0?e=1605139200&v=beta&t=lupiNlIDpADveCVZ7x-Mhz5Ech2VUlr7y73wZOG60-M" width=115><br><sub>Camille Thomaz Labanca</sub>](https://www.linkedin.com/in/camillelabanca/) |
| :---:
</div>

<br>

### Negócios

<div align="center">

[<img src="https://media-exp1.licdn.com/dms/image/C4E03AQGYFriN3AXljA/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=hZRKrlGSyUTi8vUQAmxcPD9cvAzG-BP6mgjwQvLjbxs" width=115><br><sub>Isabella Oliveira Ribeiro da Paz</sub>](https://www.linkedin.com/in/iorp/) |
| :---:
</div>

<br><br>

## Executando o server

1. No terminal, clone o projeto:
```
git clone https://github.com/juliastefanoni/adaworks-server.git
```

2. Entre na pasta do projeto:
```
cd adaworks-server
```

3. Instale as dependências:
```
npm install
```

4. Copie .env.example executando:

- Para mac/linux:
```
cp .env.example .env
```

- Para windows: 
```
copy .env.example .env
```

5. Abra o arquivo .env e preencha com suas variáveis de ambiente

6. Execute ```npx sequelize-cli db:migrate```para rodar as migrations

7. Execute ```npm start``` ou ```yarn start``` para rodar o servidor localmente.

O servidor estará disponível em http://localhost:process.env.PORT/

<br>

## ENDPOINTS 

<p align="center">

 [![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Adaworks&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fjuliastefanoni%2Fadaworks-server%2Fmaster%2FInsomnia.json)

</p>


1. Empresa
  - /factory
  - /factory?nickname=factoryName
  
2. User
  - /factory-register
  - /women-register
  - /profile
  
3. Login
  - /session
  
4. Vagas
  - /jobs

## Contribua

Contribuições com o projeto são muito apreciadas. Para isso:

- Faça um Fork do projeto

- Crie uma branch para sua feature
```
git checkout -b feature
```

- Adicione as mudanças
```
git add . 
```

- _Commit_ as mudanças 
```
git commit -m 'Adicionando a feature X'
```

- Faça o push da branch 
```
git push origin feature
```

- Abra um Pull Request

<br>

## Licença

The [MIT License]() (MIT)

Copyright :copyright: 2020 - AdaWorks

<br>
