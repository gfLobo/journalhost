import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Home",
    posts: "Posts",
    tags: "Tags",
    about: "Sobre",
    archives: "Arquivos",
    search: "Pesquisar",
  },
  post: {
    publishedAt: "Publicado em",
    updatedAt: "Atualizado em",
    sharePostIntro: "Compartilhar este post:",
    sharePostOn: "Compartilhar este post no {{platform}}",
    sharePostViaEmail: "Compartilhar este post via email",
    tagLabel: "Tags",
    backToTop: "Voltar ao topo",
    goBack: "Voltar",
    editPage: "Editar página",
    previousPost: "Posterior",
    nextPost: "Próximo Post",
  },
  pagination: {
    prev: "Prev",
    next: "Next",
    page: "Page",
  },
  home: {
    socialLinks: "Links Sociais",
    featured: "Destacado",
    recentPosts: "Posts Recentes",
    allPosts: "Todos os Posts",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "Todos os direitos reservados.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "Todos os artigos com a tag",

    tagsTitle: "Tags",
    tagsDesc: "Todas as tags usadas nos posts.",

    postsTitle: "Posts",
    postsDesc: "Todos os artigos que publiquei.",

    archivesTitle: "Arquivos",
    archivesDesc: "Todos os artigos que arquivei.",

    searchTitle: "Pesquisar",
    searchDesc: "Pesquisar qualquer artigo ...",
  },
  a11y: {
    skipToContent: "Pular para o conteúdo",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    toggleTheme: "Alternar tema",
    searchPlaceholder: "Pesquisar posts...",
    noResults: "Nenhum resultado encontrado",
    goToPreviousPage: "Ir para a página anterior",
    goToNextPage: "Ir para a próxima página",
  },
  notFound: {
    title: "404 Not Found",
    message: "Página Não Encontrada",
    goHome: "Voltar para a página inicial",
  },
} satisfies UIStrings;
