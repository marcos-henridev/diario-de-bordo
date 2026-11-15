# Diário de Bordo

Aplicação web simples para registrar anotações do dia a dia (título, data, descrição e prioridade). Os dados ficam salvos no próprio navegador via `localStorage`.

## Funcionalidades

- Cadastrar uma anotação com título, data, descrição e prioridade (Tranquilo, Médio ou Urgente)
- Calendário em português para escolher a data ([flatpickr](https://flatpickr.js.org/))
- Listar as entradas recentes
- Editar e excluir anotações
- Contador com o total de atividades

## Como rodar

O projeto usa JavaScript com módulos (`type="module"`), então precisa ser aberto por um servidor local (abrir o `index.html` direto com duplo clique não funciona).

Opções:

- **VS Code:** instale a extensão *Live Server*, clique com o botão direito em `src/index.html` e escolha "Open with Live Server".
- **Terminal:**
  ```bash
  npx serve src
  ```
  Depois acesse o endereço que aparecer (ex: `http://localhost:3000`).

## Estrutura

```
src/
├── index.html            # página principal
├── style.css             # estilos
└── utils/
    ├── script.js         # ponto de entrada: calendário, envio do formulário
    ├── const/index.js    # elementos do DOM, dados e funções de editar/remover do array
    ├── crud/index.js     # editar, salvar edição e excluir
    └── globals/index.js  # salvar no localStorage, renderizar a lista e contador
```

## Como funciona

1. Ao enviar o formulário, é criado um objeto com `id` (gerado por `Date.now()`), título, data, descrição e prioridade.
2. Esse objeto entra na lista e a lista é salva no `localStorage` na chave `atividade`.
3. A função `renderizar()` redesenha os cards na tela sempre que algo muda.
4. Ao clicar em **Editar**, os dados vão para o formulário; o próximo "salvar" atualiza a anotação em vez de criar uma nova.

## Lint

```bash
npm install
npx eslint src
```
