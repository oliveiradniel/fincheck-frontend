# 💰 Fincheck Web

Fincheck é um aplicativo para monitorar suas finanças pessoais, permitindo gerenciar contas, transações e planejamento financeiro de forma fácil e eficiente.

Com ele, você pode:

- [x] Criar uma conta e ter um dashboard privado.
- [x] Gerenciamento de contas bancárias.
- [x] Registrar, listar e filtrar transações financeiras.

---

## 🚀 Tecnologias

- [Vite](https://vite.dev/) - Ferramenta de construção para a Web.
- [ReactJS](https://react.dev/) - Biblioteca para interfaces.
- [React Hook Form](https://react-hook-form.com/) - Biblioteca para formulários não controlados.
- [TanStack Query](https://tanstack.com/query/latest) - Gerenciamento de estado assíncrono poderoso, utilitários de estado do servidor e busca de dados.
- [React Day Picker](https://daypicker.dev/) - Componente React para criar seletores de data, calendários e entradas de data.
- [React Hot Toast](https://react-hot-toast.com/) - Para exibir componentes de notificação para o usuário.
- [React Number Format](https://s-yadav.github.io/react-number-format/) - Biblioteca de formatadores de entrada.
- [React Router DOM](https://reactrouter.com/) - Um roteador multi-estratégia focado em padrões.
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS voltado para utilidade.
- [Swiper](https://swiperjs.com/react) - Para uso de controladores deslizantes.
- [Zod](https://zod.dev/) - Validação de esquema.
- [Radix UI](https://www.radix-ui.com/) - Biblioteca de componentes de código aberto.

---

## 📦 Instalação

1. Clone o repositório e abra o projeto:

```bash
git clone https://github.com/oliveiradniel/fincheck-frontend.git
cd fincheck-frontend
```

2. Instale as dependências:

```bash
npm install
```

ou

```bash
yarn
```

3. Copie o arquivo de variáveis de ambiente:

```bash
cp .env.example .env
```

4. Inicie a aplicação:

```bash
npm run dev
```

ou

```bash
yarn dev
```

> Dica: adicione `.env` ao `.gitignore` para evitar versionamento de dados sensíveis.

---

## 📄 Variáveis de Ambiente

O projeto utiliza um arquivo ".env" com a seguinte variável:

| Nome           | Descrição                | Exemplo                 |
| -------------- | ------------------------ | ----------------------- |
| `VITE_API_URL` | URL de conexão com a API | `http://localhost:3001` |

⚠️ Essa variável é vital, pois sem ela as requisições não conseguirão se conectar à API corretamente.

---

## 🛜 Conexão com a API

Para conseguir utilizar a aplicação corretamente vá até o [repositório da API](https://github.com/oliveiradniel/fincheck-api) e siga os passos corretamente para colocá-la no ar e fazer as requisições.

---

## 🎨 Algumas telas da aplicação

### Login

![Tela de login](https://raw.githubusercontent.com/oliveiradniel/fincheck-frontend/refs/heads/main/_assets/Login.png)

### Dashboard

![Tela de dashboard](https://raw.githubusercontent.com/oliveiradniel/fincheck-frontend/refs/heads/main/_assets/Dashboard.png)

### Cadastrar Despesa

![Modal para cadastrar despesa](https://raw.githubusercontent.com/oliveiradniel/fincheck-frontend/refs/heads/main/_assets/Cadastrar%20Despesa.png)

### Editar Receita

![Modal para editar receita](https://raw.githubusercontent.com/oliveiradniel/fincheck-frontend/refs/heads/main/_assets/Editar%20Receita.png)

### Filtros

![Modal para filtrar transações](https://raw.githubusercontent.com/oliveiradniel/fincheck-frontend/refs/heads/main/_assets/Filtros.png)

---

## 🔗 Links

[![portfolio](https://img.shields.io/badge/meu_portfólio-00A6F4?style=for-the-badge&logo=reactquery&logoColor=white)](https://jovemprogramador.dev/)
