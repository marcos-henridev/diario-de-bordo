# Diário de Bordo

Aplicação web simples para registrar anotações do dia a dia (título, data, descrição e prioridade). Os dados ficam salvos no próprio navegador via `localStorage`.

## Funcionalidades

- Cadastrar uma anotação com título, data, descrição e prioridade (Tranquilo, Médio ou Urgente)
- Calendário em português para escolher a data ([flatpickr](https://flatpickr.js.org/))
- Listar as entradas recentes, com a mensagem "Nenhuma atividade encontrada" quando a lista está vazia
- Editar e excluir anotações
- Contador com o total de atividades
- Header com foto de perfil e nome do usuário
- Menu para trocar a foto de perfil entre os ícones disponíveis (Robozinho, Cacto, Cafezinho, Planeta e Sorvete); a escolha fica salva no navegador
- Saudação que muda conforme a hora: "Bom dia", "Boa tarde" (a partir das 12h) ou "Boa noite" (a partir das 18h)

## Como rodar

O projeto usa JavaScript com módulos (`type="module"`), então precisa ser aberto por um servidor local (abrir o `index.html` direto com duplo clique não funciona).

O servidor precisa ser iniciado na **raiz do projeto**, e não dentro de `src/`, porque a página usa imagens da pasta `public/`.

Opções:

- **VS Code:** abra a pasta do projeto, instale a extensão *Live Server*, clique com o botão direito em `src/index.html` e escolha "Open with Live Server".
- **Terminal:**
  ```bash
  npx serve .
  ```
  Depois acesse `http://localhost:3000/src/` (com a barra no final; sem ela o CSS e os scripts não carregam).

## Estrutura

```
public/
├── iconsPerfil/          # ícones para a foto de perfil
├── IconApp/icons/        # ícones do app (favicon, PWA)
├── seta.svg              # seta do menu do header
└── setablack.svg         # seta do submenu de ícones
src/
├── index.html            # página principal
├── style.css             # estilos
├── manifest.json         # manifest do app (nome, cores e ícones)
├── app.js                # registra o service worker
├── sw.js                 # service worker: guarda os arquivos em cache
└── utils/
    ├── script.js         # ponto de entrada: saudação, calendário, envio do formulário
    ├── const/index.js    # elementos do DOM, dados e funções de editar/remover do array
    ├── crud/index.js     # editar, salvar edição e excluir
    └── globals/index.js  # salvar no localStorage, renderizar a lista, contador, menu e foto de perfil
```

## Como funciona

1. Ao enviar o formulário, é criado um objeto com `id` (gerado por `Date.now()`), título, data, descrição e prioridade.
2. Esse objeto entra na lista e a lista é salva no `localStorage` na chave `atividade`.
3. A função `renderizar()` redesenha os cards na tela sempre que algo muda e mostra ou esconde a mensagem de lista vazia.
4. Ao clicar em **Editar**, os dados vão para o formulário; o próximo "salvar" atualiza a anotação em vez de criar uma nova.
5. Ao escolher um ícone no menu, ele vira a foto de perfil e o nome do arquivo é salvo no `localStorage` na chave `fotoPerfil`, sendo recarregado ao abrir a página.

### Chaves do `localStorage`

| Chave        | Conteúdo                                   |
| ------------ | ------------------------------------------ |
| `atividade`  | lista de anotações (JSON)                  |
| `fotoPerfil` | nome do arquivo do ícone de perfil         |
| `date`       | última data escolhida no calendário        |

## Instalação como app (PWA)

- O manifest está em `src/manifest.json`, ligado no `index.html` por `<link rel="manifest">`, com os ícones em `public/IconApp/icons/`.
- O `src/app.js` registra o service worker `src/sw.js`, que guarda a página, o CSS e o manifest em cache.
- O service worker só funciona em `localhost` ou HTTPS.

## Lint

```bash
npm install
npx eslint src
```
