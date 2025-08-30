import Section from "@/components/Section";
import InfoCard from "@/components/InfoCard";

export default function ProblemasPage() {
  return (
    <main className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-semibold">Problemas & Soluções (secreto)</h1>

      <Section title="Extração de dados de PDF jurídico — texto irregular">
        <InfoCard
          title="Problema"
          bullets={[
            "PDFs com layout variável impediam extração confiável por regex simples.",
            "Campos-chave (data, número do processo) vinham em posições diferentes.",
          ]}
        />
        <InfoCard
          title="Ação"
          bullets={[
            "Normalização com pdf2image + OCR em blocos; pós-processamento em pandas.",
            "Regex tolerante + dicionário de sinônimos; logs para casos ambíguos.",
          ]}
          badges={["Python", "pandas", "regex", "pdf2image", "Tesseract"]}
        />
        <InfoCard
          title="Resultado"
          bullets={[
            "Precisão ~95% nos campos alvo; redução de ~60% no tempo de análise.",
            "Planilha final pronta para auditoria e integração com SQL/Excel.",
          ]}
        />
      </Section>


      {/* Adicione mais blocos neste padrão para outros cases */}
    </main>
  );
}
