// src/lib/experience.data.ts
// Experiências profissionais (bullets curtos e objetivos)

export interface ExperienceItem {
  company: string;
  role: string;
  start: string;
  end?: string;
  location?: string;
  bullets: string[];
  link?: string;
  tech?: string[];
  logo?: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "iChase Forensics",
    role: "Estagiário em Análise de Dados Forenses",
    start: "jun/2025",
    end: "Atual",
    location: "Curitiba, PR",
    link: "https://ichase.com.br/",
    logo: "/icons/ichase-forensics.jpg",
     bullets: [
      "Automatizei a extração de dados a partir de PDFs/HTML e arquivos brutos, usando parsing (regex/pandas) e padronizando a saída para planilhas.",
      "Implementei pipeline de OCR (pdf2image → Tesseract/EasyOCR) com pré-processamento, elevando a qualidade do texto e reduzindo retrabalho.",
      "Validei integridade de evidências com hashes (SHA-256, SHA-512 e MD5) e conferência cruzada com relatórios, fortalecendo a cadeia de custódia.",
      "Gerei relatórios e logs auditáveis por caso (timestamps, etapas, erros e métricas), garantindo rastreabilidade jurídica.",
      "Empacotei utilitários internos como executáveis (.exe via PyInstaller), reduzindo a dependência de ambiente e facilitando o uso por analistas/advogados.",
      "Resultado: reduzi o tempo de análise e produção de relatórios em mais de 60% nos fluxos atendidos."
    ],
    tech: [
      "Python","pandas","regex",
      "Tesseract","EasyOCR","pdf2image/Poppler",
      "CSV/Excel","Logs",
      "SHA-256","SHA-512","MD5","NAS","RAID"
    ],
  },
  {
    company: "Bombons do Wallace Brasil",
    role: "Cozinheiro / Microempreendedor",
    start: "mar/2025",
    end: "Atual",
    location: "Curitiba, PR · Presencial",
    bullets: [
      "Produção de bombons e gestão de qualidade com padronização de receitas e processos.",
      "Aquisição de ingredientes, controle de estoque e precificação básica.",
      "Gestão do negócio: atendimento, recebimentos (Pix), organização de pedidos e entregas.",
      "Divulgação e relacionamento com clientes via Instagram.",
    ],
    tech: ["Planilhas", "Instagram", "WhatsApp", "Pix"],
    link: "https://www.instagram.com/bombons.do.wallace__brasil/",
    logo: "/icons/bombons.jpg",
  },
  {
    company: "Brasfilho Papelaria",
    role: "Técnico de Informática / Produção Gráfica",
    start: "abr/2021",
    end: "Atual",
    location: "Curitiba, PR · Presencial",
    bullets: [
      "Montagem e manutenção de computadores; instalação de sistemas e drivers.",
      "Configuração de impressoras (USB/rede) e softwares de uso cotidiano.",
      "Suporte técnico básico a rede e estações.",
      "Corte e aplicação de adesivos; vetorização e ajustes em CorelDRAW.",
    ],
    tech: ["Windows", "Impressoras", "Redes (básico)", "CorelDRAW"],
    link: "https://www.instagram.com/explore/locations/1737529556518161/brasfilho-papelaria/",
    logo: "/icons/brasfilho.jpg",
  },
  {
    company: "DBM Contact Center",
    role: "Menor Aprendiz · Atendimento ao Cliente",
    start: "mai/2019",
    end: "mar/2021",
    location: "Curitiba, PR · Presencial",
    bullets: [
      "Atendimento ao cliente com emissão e envio de boletos via WhatsApp e e-mail.",
      "Organização de fila de atendimentos e registro de interações no sistema.",
      "Destaque por produtividade: envio simultâneo de 4 boletos; realocado para estação com múltiplos monitores para ampliar a capacidade.",
    ],
    tech: ["WhatsApp", "E-mail", "Planilhas", "CRM interno"],
    link: "https://www.dbm.com.br/",
    logo: "/icons/dbm.jpg",
  },
];
