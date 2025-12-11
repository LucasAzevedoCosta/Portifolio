# Portfólio Pessoal 🚀

## Descrição Detalhada ✨

Este é o meu portfólio pessoal, desenvolvido para apresentar meus projetos, habilidades e experiência profissional de forma moderna e interativa. O objetivo principal é servir como um cartão de visitas digital, destacando minhas competências em desenvolvimento web e as tecnologias que domino.

O projeto é uma **Single Page Application (SPA)** construída com tecnologias de ponta, garantindo uma experiência de usuário fluida e um design responsivo que se adapta a qualquer dispositivo.

## Tecnologias Utilizadas 🛠️

O portfólio foi construído com um stack moderno e eficiente:

| Categoria | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Framework/Biblioteca** | **React** | Biblioteca JavaScript para a construção da interface de usuário. |
| **Build Tool** | **Vite** | Ferramenta de construção rápida para desenvolvimento frontend. |
| **Linguagem** | **JavaScript** | Utilizando a linguagem para garantir um código flexível e de fácil manutenção. |
| **Estilização** | **Tailwind CSS** | Framework CSS utilitário para estilização rápida e responsiva. |
| **Ícones** | **Lucide React** & **React Icons** | Coleções de ícones para aprimorar a interface. |

## Estrutura do Projeto 📂

A estrutura do projeto segue o padrão de aplicações React/Vite, focando na modularidade e na organização dos componentes:

```
Portifolio-main/
├── public/                 # Arquivos estáticos (favicon, etc.)
├── src/
│   ├── app.jsx             # Componente principal da aplicação
│   ├── components/         # Componentes reutilizáveis (Hero, About, Portfolio, etc.)
│   │   ├── hero/
│   │   ├── about/
│   │   ├── portfolio/
│   │   └── ...
│   ├── context/            # Contextos React para gerenciamento de estado (ex: tema)
│   ├── hooks/              # Hooks personalizados
│   ├── utils/              # Funções utilitárias e listas de dados (projetos, habilidades, etc.)
│   └── main.jsx            # Ponto de entrada da aplicação
├── package.json            # Dependências e scripts do projeto
├── tailwind.config.js      # Configuração do Tailwind CSS
└── vite.config.ts          # Configuração do Vite
```

## Como Rodar o Projeto Localmente 💻

Siga os passos abaixo para configurar e executar o portfólio em sua máquina local.

### Pré-requisitos ✅

Certifique-se de ter as seguintes ferramentas instaladas:

*   **Node.js** (versão 18 ou superior)
*   **npm** ou **Yarn** (gerenciador de pacotes)
*   **Git** (para clonar o repositório)

### Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd Portifolio-main
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou yarn install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou yarn dev
    ```

4.  **Acesse a aplicação:**
    O portfólio estará acessível em `http://localhost:5173/` (ou na porta indicada pelo Vite).

## Como Fazer o Deploy na Vercel (Recomendado) 🌐

A Vercel é a plataforma ideal para hospedar aplicações frontend como esta, oferecendo deploy contínuo e alta performance.

### 1. Pré-requisitos

*   Ter uma conta na [Vercel](https://vercel.com/).
*   Ter o código do seu portfólio em um repositório no **GitHub**, **GitLab** ou **Bitbucket**.

### 2. Importar o Projeto

1.  Acesse o seu [Dashboard da Vercel](https://vercel.com/dashboard).
2.  Clique em **"Add New..."** e depois em **"Project"**.
3.  Selecione o repositório do seu portfólio na lista. Se for a primeira vez, você precisará conectar sua conta do Git (GitHub, por exemplo).

### 3. Configuração do Deploy

A Vercel é inteligente e geralmente detecta automaticamente as configurações para projetos Vite/React. No entanto, você pode verificar as seguintes configurações na tela de importação:

| Configuração | Valor Padrão (Vite) | Observação |
| :--- | :--- | :--- |
| **Root Directory** | `.` (Raiz do projeto) | Se o seu código estiver em uma subpasta, ajuste aqui. |
| **Build Command** | `npm run build` | O script de build definido no `package.json`. |
| **Output Directory** | `dist` | O diretório onde o Vite coloca os arquivos de produção. |

### 4. Deploy

1.  Clique em **"Deploy"**.
2.  A Vercel irá clonar o repositório, executar o comando de build e, em seguida, servir os arquivos estáticos.
3.  Após o deploy ser concluído, você receberá um link público para o seu portfólio.

**Deploy Contínuo:** A partir de agora, qualquer `push` para o branch principal (geralmente `main` ou `master`) do seu repositório irá automaticamente acionar um novo deploy na Vercel, mantendo seu portfólio sempre atualizado!

## Licença 📄

Este projeto está licenciado sob a licença MIT. Para mais detalhes, consulte o arquivo `LICENSE` na raiz do repositório.
