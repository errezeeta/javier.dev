import {
  Document,
  Page,
  View,
  Text,
  Link,
} from "@react-pdf/renderer";
import { styles, colors } from "./styles";
import { ROLES } from "@/lib/data/ALL_ROLES";
import { SKILLS } from "@/lib/data/ALL_SKILLS";
import { EDUCATION } from "@/lib/data/EDUCATION";
import { LANGUAGES } from "@/lib/data/LANGUAGES";
import { INTERESTS } from "@/lib/data/INTERESTS";
import { sinceToString } from "@/lib/sinceToString";
import { ISkill } from "@/lib/types/ISkill";

const EMAIL = "jramirezsamc@gmail.com";
const GITHUB = "https://github.com/errezeeta";
const LINKEDIN = "https://www.linkedin.com/in/javier-rz/";
const WEBSITE = "https://www.errezeeta.com/";

function SubSkillList({ skills }: { skills: ISkill[] }) {
  return (
    <View style={styles.subSkillRow}>
      {skills.map((skill, i) => (
        <Text key={i} style={styles.subSkillLabel}>
          {skill.name}
          {skill.subSkills && skill.subSkills.length > 0 && (
            <Text style={styles.subSkillList}>
              {" "}
              — {skill.subSkills.map((s) => s.name).join(", ")}
            </Text>
          )}
        </Text>
      ))}
    </View>
  );
}

export default function CVDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>Javier Ramirez</Text>
          <Text style={styles.title}>Full-Stack Software Engineer</Text>
        </View>

        {/* Contact */}
        <View style={styles.contactRow}>
          <Link href={`mailto:${EMAIL}`} style={styles.contactLink}>
            {EMAIL}
          </Link>
          <Link href={GITHUB} style={styles.contactLink}>
            {GITHUB.replace("https://", "")}
          </Link>
          <Link href={LINKEDIN} style={styles.contactLink}>
            {LINKEDIN.replace("https://www.", "")}
          </Link>
          <Link href={WEBSITE} style={styles.contactLink}>
            {WEBSITE.replace("https://", "")}
          </Link>
        </View>

        {/* About */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About me</Text>
          <Text style={styles.aboutText}>
            A results-oriented developer skilled in collaborative, full-stack
            environments. I support product development by contributing directly
            to design patterns and business logic decisions. I am proficient in
            DevOps practices, with hands-on experience implementing CI/CD
            pipelines for automated testing and successful deployments on AWS.
          </Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {ROLES.map((role, i) => (
            <View key={i} style={styles.role}>
              <View style={styles.roleHeader}>
                <Text style={styles.roleTitle}>{role.title}</Text>
                <Text style={styles.roleDate}>
                  {role.startDate} — {role.endDate}
                </Text>
              </View>
              <Text style={styles.roleCompany}>{role.company} · {role.location}</Text>
              {role.description ? (
                <Text style={styles.roleDescription}>{role.description}</Text>
              ) : null}
              {role.achievements.map((group, gi) => (
                <View key={gi} style={styles.achievementGroup}>
                  {group.map((item, ai) =>
                    ai === 0 ? (
                      <Text key={ai} style={styles.achievementLabel}>
                        {item}
                      </Text>
                    ) : (
                      <Text key={ai} style={styles.achievementItem}>
                        • {item}
                      </Text>
                    )
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          <View style={styles.role}>
            <Text style={styles.roleTitle}>AI Video Automation Pipeline</Text>
            <Text style={styles.roleCompany}>n8n · Gemini · YouTube API · Shotstack · SerpAPI</Text>
            <Text style={styles.achievementItem}>• Built an end-to-end automated pipeline that generates and publishes YouTube Shorts daily.</Text>
            <Text style={styles.achievementItem}>• Fetches trending topics via SerpAPI, uses Gemini to generate optimized scripts, synthesizes voice with Google TTS.</Text>
            <Text style={styles.achievementItem}>• Renders vertical video with Shotstack and publishes to YouTube — 6+ API integrations automating the full content lifecycle.</Text>
          </View>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          {SKILLS.map((category, i) => (
            <View key={i} style={styles.skillCategory}>
              <View style={styles.skillCategoryHeader}>
                <Text style={styles.skillCategoryName}>{category.name}</Text>
                {category.since && (
                  <Text style={styles.skillCategoryExperience}>
                    {sinceToString(category.since)}
                  </Text>
                )}
              </View>
              {category.description && (
                <Text style={styles.skillCategoryDesc}>
                  {category.description}
                </Text>
              )}
              {category.subSkills && (
                <SubSkillList skills={category.subSkills} />
              )}
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <View style={styles.educationRow}>
            <Text style={styles.educationDegree}>{EDUCATION.degree}</Text>
            <Text style={styles.educationDate}>
              {EDUCATION.since} — {EDUCATION.until}
            </Text>
          </View>
          <Text style={styles.educationInstitution}>
            {EDUCATION.institution}
          </Text>
          {EDUCATION.description && (
            <Text style={styles.aboutText}>{EDUCATION.description}</Text>
          )}
        </View>

        {/* Languages */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Languages</Text>
          {LANGUAGES.map((lang, i) => (
            <View key={i} style={styles.languageRow}>
              <Text style={styles.languageName}>{lang.name}</Text>
              <Text style={styles.languageProficiency}>{lang.proficiency}</Text>
            </View>
          ))}
        </View>

        {/* Interests */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interests</Text>
          <View style={styles.interestsContainer}>
            {INTERESTS.map((interest, i) => (
              <Text key={i} style={styles.interestBadge}>
                {interest}
              </Text>
            ))}
          </View>
        </View>

        {/* Footer Contact */}
        <View style={styles.footerContact}>
          <View style={styles.contactRow}>
            <Link href={`mailto:${EMAIL}`} style={styles.contactLink}>
              {EMAIL}
            </Link>
            <Link href={GITHUB} style={styles.contactLink}>
              {GITHUB.replace("https://", "")}
            </Link>
            <Link href={LINKEDIN} style={styles.contactLink}>
              {LINKEDIN.replace("https://www.", "")}
            </Link>
          </View>
        </View>
      </Page>
    </Document>
  );
}
