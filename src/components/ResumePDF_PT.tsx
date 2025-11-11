import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    paddingTop: 28,
    paddingBottom: 28,
    paddingHorizontal: 32,
    fontSize: 10,
    color: "#111827",
  },
  header: { marginBottom: 8 },
  name: { fontSize: 18, fontWeight: 700 },
  title: { fontSize: 11, marginTop: 2 },
  section: { marginTop: 10 },
  sectionTitle: { fontSize: 11, fontWeight: 700, marginBottom: 4, borderBottomWidth: 1, borderBottomColor: "#e5e7eb", paddingBottom: 2 },
  bullet: { flexDirection: "row", marginBottom: 2 },
  bulletDot: { width: 8 },
  bulletText: { flex: 1 },
  small: { color: "#374151" },
  tagRow: { flexDirection: "row", flexWrap: "wrap", gap: 4, marginTop: 4 },
  tag: { borderWidth: 1, borderColor: "#d1d5db", paddingHorizontal: 4, paddingVertical: 2, borderRadius: 3, marginRight: 4, marginBottom: 4 },
  contact: { marginTop: 4 },
  contactLine: { marginTop: 2 },
  link: { color: "#1d4ed8", textDecoration: "none" },
});

export const ResumePDF_PT: React.FC<{ updated?: string }> = ({ updated = "Nov 2025" }) => (
  <Document title="Felipe Silveira - Currículo" author="Felipe Silveira" subject="Currículo Desenvolvedor Full-Stack" language="pt-BR">
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>Felipe Silveira</Text>
        <Text style={styles.title}>Desenvolvedor Full-Stack • Cientista de Dados</Text>
        <View style={styles.contact}>
          <Text style={[styles.small, styles.contactLine]}>Email: <Link src="mailto:felipeslvr@icloud.com" style={styles.link}>felipeslvr@icloud.com</Link></Text>
          <Text style={[styles.small, styles.contactLine]}>GitHub: <Link src="https://github.com/FelipeSlvr" style={styles.link}>github.com/FelipeSlvr</Link></Text>
          <Text style={[styles.small, styles.contactLine]}>LinkedIn: <Link src="https://br.linkedin.com/in/felipe-silveira-b9526b1b9" style={styles.link}>linkedin.com/in/felipe-silveira-b9526b1b9</Link></Text>
          <Text style={[styles.small, styles.contactLine]}>Portfolio: <Link src="https://felipeslvr.github.io/Curriculum/" style={styles.link}>felipeslvr.github.io/Curriculum</Link></Text>
        </View>
      </View>

      {/* Resumo */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resumo</Text>
        <Text>
          Desenvolvedor Full-Stack com mais de 3 anos de experiência entregando aplicações confiáveis em React + TypeScript e funcionalidades orientadas por dados. Atuo de ponta a ponta: integração de APIs, UI limpa, código sustentável e foco em impacto.
        </Text>
      </View>

      {/* Habilidades */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades</Text>
        <View style={styles.tagRow}>
          {["React","TypeScript","Node.js","Express","SQL","Power BI","Git","APIs REST","UI/UX","Agile"].map(t => (
            <Text key={t} style={styles.tag}>{t}</Text>
          ))}
        </View>
      </View>

      {/* Experiência */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiência</Text>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 8 }}>
            <Text>Desenvolvedor de Software — Estaq</Text>
            <Text style={styles.small}>2021 – Presente</Text>
          </View>
          <View style={{ marginTop: 4 }}>
            {[
              'Modernizei módulos legados do ERP com React + TypeScript, melhorando clareza e reduzindo fricção de navegação.',
              'Integrei APIs internas para permitir entrada e atualização direta de dados de produção.',
              'Diagnostiquei e corrigi problemas de backend que afetavam integridade e disponibilidade dos dados.',
              'Colaborei com gestores para refinar fluxos de UI/UX e otimizar processos.',
            ].map((b, i) => (
              <View key={i} style={styles.bullet}>
                <Text style={styles.bulletDot}>•</Text>
                <Text style={styles.bulletText}>{b}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Educação */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Educação</Text>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 8 }}>
            <Text>Tecnólogo em Gestão de TI  — UNINTER</Text>
            <Text style={styles.small}>2020 – 2022 · Concluído</Text>
          </View>
          <Text>Ênfase em governança de TI, fundamentos de desenvolvimento e operações de sistemas.</Text>
        </View>
        <View style={{ marginTop: 6 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 8 }}>
            <Text>Pós-graduação em Data Science — Universidade La Salle</Text>
            <Text style={styles.small}>Início 2026/1</Text>
          </View>
          <Text>Planejado: estatística, machine learning, engenharia de dados e visualização.</Text>
        </View>
      </View>

      <View style={{ marginTop: 10 }}>
        <Text style={styles.small}>Atualizado: {updated}</Text>
      </View>
    </Page>
  </Document>
);

export default ResumePDF_PT;
