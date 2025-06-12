# SoftwareHouseMCZ

## 📋 Descrição do Projeto

SoftwareHouseMCZ é um website moderno e responsivo desenvolvido para uma empresa de desenvolvimento de software personalizado. O site apresenta os serviços da empresa, incluindo desenvolvimento web, sistemas corporativos e consultoria tecnológica, com foco em soluções sob medida para impulsionar negócios digitais.

### Características Principais

- **Design Responsivo**: Interface adaptável para todos os dispositivos (desktop, tablet, mobile)
- **Navegação Intuitiva**: Menu de navegação limpo com transições suaves
- **Interatividade**: Formulários funcionais, modais e efeitos hover
- **Performance Otimizada**: Carregamento rápido com animações fluidas
- **Acessibilidade**: Interface acessível seguindo boas práticas de UX/UI

### Páginas

1. **Home**: Página principal com hero section, apresentação dos serviços e call-to-action
2. **Serviços**: Catálogo completo dos serviços oferecidos com processo de trabalho detalhado
3. **Contato**: Formulário de contato funcional com modal de confirmação

## 🚀 Tecnologias Utilizadas

### Frontend

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool rápido e moderno
- **React Router DOM** - Roteamento para aplicações React

### Estilização e UI

- **Tailwind CSS** - Framework CSS utility-first
- **Shadcn/UI** - Biblioteca de componentes baseada no Radix UI
- **Lucide React** - Ícones SVG otimizados
- **Class Variance Authority** - Gerenciamento de variantes de classes CSS

### Gerenciamento de Estado e Dados

- **TanStack React Query** - Cache e sincronização de dados
- **React Hook Form** - Gerenciamento de formulários performático
- **Zod** - Validação de esquemas TypeScript

### Backend e Banco de Dados

- **Supabase** - Backend-as-a-Service com PostgreSQL
- **Supabase Client** - SDK para integração com o Supabase

### Funcionalidades Adicionais

- **Recharts** - Biblioteca para gráficos e visualização de dados
- **Sonner** - Sistema de notificações toast
- **Date-fns** - Manipulação de datas
- **Embla Carousel** - Componente de carrossel

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

2. Navegue até o diretório do projeto:

```bash
cd softwarehousemcz
```

3. Instale as dependências:

```bash
npm install
```

4. Configure as variáveis de ambiente para o Supabase (se necessário):

```bash
cp .env.example .env.local
```

5. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:8080`

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter ESLint

## 🎨 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base do Shadcn/UI
│   ├── Hero.tsx        # Seção hero da página inicial
│   ├── Navigation.tsx  # Componente de navegação
│   └── ServiceCard.tsx # Card de serviços
├── pages/              # Páginas da aplicação
│   ├── Home.tsx        # Página inicial
│   ├── Servicos.tsx    # Página de serviços
│   └── Contato.tsx     # Página de contato
├── hooks/              # Hooks customizados
├── lib/                # Utilitários e configurações
└── integrations/       # Integrações (Supabase)
```

## 📄 Licença

Este projeto foi desenvolvido para demonstração de capacidades técnicas em desenvolvimento web moderno.

---

Desenvolvido com ❤️ pela equipe SoftwareHouseMCZ

Autores: Higor Matheus e Matheus Ticiano

Link do Figma:
