import { StyleSheet } from "@react-pdf/renderer";

export const colors = {
  foreground: "#09090b",
  muted: "#71717a",
  mutedLight: "#a1a1aa",
  border: "#e4e4e7",
  background: "#fafafa",
  white: "#ffffff",
};

export const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: colors.foreground,
    lineHeight: 1.5,
  },
  header: {
    alignItems: "center",
    marginBottom: 8,
  },
  name: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    marginBottom: 2,
  },
  title: {
    fontSize: 11,
    color: colors.muted,
  },
  contactRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginBottom: 20,
    flexWrap: "wrap",
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    fontSize: 9,
    color: colors.muted,
  },
  contactLink: {
    fontSize: 9,
    color: colors.muted,
    textDecoration: "none",
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    marginBottom: 6,
    paddingBottom: 3,
    borderBottom: `1px solid ${colors.border}`,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  aboutText: {
    fontSize: 10,
    color: colors.foreground,
    lineHeight: 1.6,
  },
  role: {
    marginBottom: 12,
  },
  roleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 2,
  },
  roleTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
  },
  roleDate: {
    fontSize: 9,
    color: colors.muted,
  },
  roleCompany: {
    fontSize: 10,
    color: colors.muted,
    marginBottom: 1,
  },
  roleDescription: {
    fontSize: 9,
    color: colors.muted,
    fontStyle: "italic",
    marginBottom: 4,
  },
  achievementGroup: {
    marginBottom: 4,
  },
  achievementLabel: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    marginBottom: 1,
  },
  achievementItem: {
    fontSize: 9.5,
    marginLeft: 12,
    marginBottom: 2,
    lineHeight: 1.4,
  },
  skillCategory: {
    marginBottom: 10,
  },
  skillCategoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 2,
  },
  skillCategoryName: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
  },
  skillCategoryExperience: {
    fontSize: 9,
    color: colors.muted,
  },
  skillCategoryDesc: {
    fontSize: 9,
    color: colors.muted,
    marginBottom: 4,
    fontStyle: "italic",
  },
  subSkillRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    marginBottom: 2,
  },
  subSkillLabel: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: colors.muted,
  },
  subSkillList: {
    fontSize: 9,
    color: colors.foreground,
  },
  educationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 2,
  },
  educationDegree: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
  },
  educationDate: {
    fontSize: 9,
    color: colors.muted,
  },
  educationInstitution: {
    fontSize: 10,
    color: colors.muted,
  },
  languageRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 3,
  },
  languageName: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
  },
  languageProficiency: {
    fontSize: 10,
    color: colors.muted,
  },
  interestsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  interestBadge: {
    fontSize: 9,
    backgroundColor: colors.background,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    color: colors.foreground,
    borderWidth: 0.5,
    borderColor: colors.border,
    borderStyle: "solid" as const,
  },
  footerContact: {
    marginTop: 16,
    paddingTop: 8,
    borderTop: `1px solid ${colors.border}`,
    alignItems: "center",
  },
});
