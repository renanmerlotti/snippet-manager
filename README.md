<div align="center">
  <h1>Code Snippet Manager</h1>

  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=java,spring,mysql,react,tailwind,maven" />
  </a>

  <p align="center">
    <b>Repositório pessoal de trechos de código</b>
</div>

<video src="https://github.com/user-attachments/assets/21a64db5-4212-4b8f-9453-bf0a485df02e" width="100%" controls></video>

## Sobre o projeto

O Code Snippet Manager é uma plataforma para desenvolvedores centralizarem blocos de código reutilizáveis. O projeto demonstra a integração entre um front-end dinâmico e um back-end escalável, utilizando autenticação baseada em tokens e princípios de segurança da informação.

### Diferenciais Técnicos
* **Autenticação JWT:** Implementação de segurança com Spring Security e JSON Web Tokens (JWT), garantindo que as rotas da API sejam protegidas.
* **Axios Interceptors:** Gerenciamento de tokens no front-end para injeção automática do cabeçalho Authorization em todas as requisições HTTP.
* **Segurança de Dados:** Validação no back-end para garantir que operações de leitura, edição e exclusão sejam restritas exclusivamente ao proprietário do registro.
* **Arquitetura de Componentes:** Interface construída com React e Tailwind CSS, focada em modularidade e responsividade.

## Funcionalidades
* **Gerenciamento de Snippets:** CRUD completo de trechos de código.
* **Autenticação de Usuários:** Sistema de registro de conta e login com persistência de sessão via token.
* **Dashboard Pessoal:** Recuperação dinâmica de dados vinculados especificamente ao perfil do usuário autenticado.
* **Modais Inteligentes:** Utilização de estados complexos para alternar entre funções de criação e edição no mesmo componente de formulário.

## Como rodar o projeto

### Pré-requisitos
* Java 17 ou superior
* Maven
* Node.js (v18+)
* MySQL Server com um banco de dados chamado `snippet_db`

### Instalação e Execução

**1. Clonar o repositório:**
```bash
git clone https://github.com/seu-usuario/snippet-manager.git
cd snippet-manager
```

**2. Configuração do Back-end (Spring Boot):**
O projeto utiliza variáveis de ambiente para proteger dados sensíveis. Você precisa configurar as seguintes variáveis na sua IDE ou sistema:

* `DB_PASSWORD`: Senha do seu banco de dados MySQL.
* `JWT_SECRET`: Uma chave aleatória segura para assinatura dos tokens.
* `JWT_EXPIRATION`: Tempo de expiração do token (ex: 86400000 para 24h).

**Como configurar:**
* **IntelliJ:** `Run` > `Edit Configurations` > `Environment Variables`.
* **VS Code:** No arquivo `.vscode/launch.json`, adicione `"env": { "DB_PASSWORD": "...", "JWT_SECRET": "...", "JWT_EXPIRATION": "86400000" }`.

Não se esqueça também de configurar a URL do seu banco de dados no parâmetro `spring.datasource.url` e o username no parâmetro `spring.datasource.username`

Após configurar, execute:
```bash
cd backend
mvn spring-boot:run
```
A API estará disponível em: `http://localhost:8080`

**3. Configuração do Front-end (React):**
Em um novo terminal:
```bash
cd frontend
npm install
npm run dev
```
A interface estará disponível em: `http://localhost:5173`

## Contato

Renan Merlotti - [https://www.linkedin.com/in/renan-merlotti/](https://www.linkedin.com/in/renan-merlotti/) - renanmerlotti@gmail.com