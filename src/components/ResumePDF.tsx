import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

// Clean, ATS-friendly 1-page resume
const styles = StyleSheet.create({
  page: {
    paddingTop: 28,
    paddingBottom: 28,
    paddingHorizontal: 32,
    fontSize: 10,
    color: "#111827", // zinc-900
  },
  header: { marginBottom: 8 },
  name: { fontSize: 18, fontWeight: 700 },
  title: { fontSize: 11, marginTop: 2 },
  row: { flexDirection: "row", justifyContent: "space-between", gap: 8 },
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

type Props = {
  updated?: string;
};

export const ResumePDF: React.FC<Props> = ({ updated = "Nov 2025" }) => (
  <Document title="Felipe Silveira - Resume" author="Felipe Silveira" subject="Software Developer Resume" language="en">
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>Felipe Silveira</Text>
  <Text style={styles.title}>Full-Stack Developer • Data-driven Builder</Text>
        <View style={styles.contact}>
          <Text style={[styles.small, styles.contactLine]}>
            Email: <Link src="mailto:felipeslvr@icloud.com" style={styles.link}>felipeslvr@icloud.com</Link>
          </Text>
          <Text style={[styles.small, styles.contactLine]}>
            GitHub: <Link src="https://github.com/FelipeSlvr" style={styles.link}>github.com/FelipeSlvr</Link>
          </Text>
          <Text style={[styles.small, styles.contactLine]}>
            LinkedIn: <Link src="https://br.linkedin.com/in/felipe-silveira-b9526b1b9" style={styles.link}>br.linkedin.com/in/felipe-silveira-b9526b1b9</Link>
          </Text>
          <Text style={[styles.small, styles.contactLine]}>
            Portfolio: <Link src="https://felipeslvr.github.io/Curriculum/" style={styles.link}>felipeslvr.github.io/Curriculum</Link>
          </Text>
        </View>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Summary</Text>
        <Text>
          Full-stack developer with 3+ years of experience delivering reliable React + TypeScript applications and data-backed features.
          Comfortable owning problems end-to-end, integrating APIs, and shipping clean UI with measurable impact.
        </Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.tagRow}>
          {[
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "SQL",
            "Power BI",
            "Git",
            "REST APIs",
            "UI/UX",
            "Agile",
          ].map((t) => (
            <Text key={t} style={styles.tag}>{t}</Text>
          ))}
        </View>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        <View>
          <View style={styles.row}>
            <Text>Software Developer — Estaq</Text>
            <Text style={styles.small}>2021 – Present</Text>
          </View>
          <View style={{ marginTop: 4 }}>
            {[
              "Modernized legacy ERP modules with React + TypeScript to improve clarity and reduce navigation friction for end users.",
              "Integrated internal APIs to enable direct production data entry and updates with higher reliability.",
              "Diagnosed and resolved backend issues impacting data integrity and availability.",
              "Partnered with stakeholders to refine UI/UX and streamline workflows.",
            ].map((b, i) => (
              <View key={i} style={styles.bullet}>
                <Text style={styles.bulletDot}>•</Text>
                <Text style={styles.bulletText}>{b}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <View>
          <View style={styles.row}>
            <Text>Associate Degree in IT Management — UNINTER University</Text>
            <Text style={styles.small}>2020 – 2022 · Graduated</Text>
          </View>
          <Text>
            Focus on IT governance, systems, and applied software development foundations.
          </Text>
        </View>
        <View style={{ marginTop: 6 }}>
          <View style={styles.row}>
            <Text>Graduate Degree in Data Science — La Salle University</Text>
            <Text style={styles.small}>Starting 2026/1</Text>
          </View>
          <Text>
            Planned coursework: statistics, machine learning, data engineering, and visualization.
          </Text>
        </View>
      </View>

      {/* Footer */}
      <View style={{ marginTop: 10 }}>
        <Text style={styles.small}>Updated: {updated}</Text>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;