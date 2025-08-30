// src/lib/projects.config.ts

/**
 * Tipos de "como" o projeto é exibido:
 * - iframe: app hospedado fora (ex.: Hugging Face Spaces / Render)
 * - lite:   página local (ex.: Gradio Lite) embutida via iframe
 * - internal: futuro app React interno
 */
export type ProjectKind = "iframe" | "lite" | "internal";

/** Estrutura de um projeto no portfólio */
export interface Project {
  slug: string;      // usado em IDs/links (sem espaços/acentos)
  title: string;     // título do cartão
  short: string;     // descrição curta
  tags: string[];    // chips com tecnologias
  thumb: string;     // caminho da capa (ex.: /thumbs/extrator.png)
  kind: ProjectKind; // forma de exibição
  url?: string;      // link externo (para iframe)
  entry?: string;    // arquivo local (para lite/internal no futuro)
}
 
/**
 * Registro único. Para adicionar um projeto novo:
 * - coloque a imagem em /public/thumbs
 * - acrescente um objeto aqui
 * - pronto: aparece na grade automaticamente
 */
export const projects: Project[] = [
  {
    slug: "media-downloader",
    title: "Media Downloader",
    short: "Baixa áudio/vídeo (YouTube, TikTok, Instagram) e Spotify*; ZIP final, resumo e falhas.",
    tags: ["Python", "Gradio", "yt-dlp", "FFmpeg"],
    thumb: "/thumbs/media_downloader.jpg",    // coloque a imagem em public/thumbs/
    kind: "iframe",
    url: "https://huggingface.co/spaces/WallaceBrasil/media-downloader?__theme=dark",
  },
  {
    slug: "extrator-pdf-web",
    title: "Extrator de Imagens de PDF",
    short: "Converte PDFs (ou ZIP) em imagens por página. Galeria + ZIP.",
    tags: ["Python", "Gradio", "pdf2image", "Poppler"],
    thumb: "/thumbs/extrator_pdf_web.jpg",
    kind: "iframe",
    url: "https://huggingface.co/spaces/WallaceBrasil/extrator-pdf-web?__theme=dark",
  },
  {
    slug: "renomeador-extensoes",
    title: "Renomeador por Assinatura (Magic Number)",
    short: "Detecta extensão real por bytes de arquivo; gera XLSX e CSV opcional.",
    tags: ["Python", "Gradio", "OpenPyXL"],
    thumb: "/thumbs/magic-number.jpg",
    kind: "iframe",
    url: "https://huggingface.co/spaces/WallaceBrasil/renomeador-extensoes?__theme=dark"
  },
  {
    slug: "verificador-hashes",
    title: "Verificador de Hashes",
    short: "SHA256, SHA512 e MD5 em XLSX único. Lê também arquivos dentro de ZIP.",
    tags: ["Python", "Gradio", "OpenPyXL", "Hashes"],
    thumb: "/thumbs/verificador_hashes.jpg",
    kind: "iframe",
    url: "https://huggingface.co/spaces/WallaceBrasil/verificador-hashes?__theme=dark"
  }
];
