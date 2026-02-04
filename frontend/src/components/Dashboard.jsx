import React from 'react'
import Header from './Header'
import SnippetCard from './SnippetCard'

function Dashboard() {

  const snippets = [
    {
        id: 1,
        title: "Auth Service Implementation",
        description: "Lógica central de login e registro usando Axios para comunicação com o Spring Boot.",
        content: "import axios from 'axios';\n\nconst API_URL = 'http://localhost:8080/api/auth';\n\nexport const login = async (credentials) => {\n    const response = await axios.post(`${API_URL}/login`, credentials);\n    if (response.data.token) {\n        localStorage.setItem('token', response.data.token);\n    }\n    return response.data;\n};\n\nexport const register = (userData) => {\n    return axios.post(`${API_URL}/register`, userData);\n};",
        language: "JavaScript",
        userId: 101
    },
    {
        id: 2,
        title: "Spring Security Config",
        description: "Configuração básica de segurança para habilitar JWT e desabilitar CSRF em APIs stateless.",
        content: "@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        return http\n            .csrf(csrf -> csrf.disable())\n            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers(\"/api/auth/**\").permitAll()\n                .anyRequest().authenticated()\n            )\n            .build();\n    }\n}",
        language: "Java",
        userId: 101
    },
    {
        id: 3,
        title: "Snippet Entity Model",
        description: "Entidade JPA que representa a tabela de snippets no banco de dados MySQL.",
        content: "@Entity\n@Table(name = \"snippets\")\npublic class Snippet {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    private String title;\n    private String description;\n\n    @Column(columnDefinition = \"TEXT\")\n    private String content;\n\n    private String language;\n\n    @ManyToOne\n    @JoinColumn(name = \"user_id\")\n    private User user;\n}",
        language: "Java",
        userId: 101
    }
];

  return (
    <div className='min-h-screen bg-main-background'>
      <Header />

      <main className='container mx-auto px-4 py-5'>

        <div className='flex flex-row justify-between p-4'>
          <h2 className='font-bold text-common-text text-2xl'>Meus <span className='text-title-color'>Snippets</span></h2>
          <button className='p-2 border-2 border-title-color rounded-2xl text-common-text font-semibold'>Novo Snippet</button>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {snippets.map(snippet => (
              <SnippetCard key={snippet.id} snippet={snippet}/>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Dashboard