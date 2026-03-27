import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  ExternalHyperlink,
  TabStopPosition,
  TabStopType,
} from "docx";
import { saveAs } from "file-saver";
import { personalInfo } from "../data/personalInfo";
import { workExperience } from "../data/workExperience";
import { education } from "../data/education";
import { documents } from "../data/documents";
import { technicalSkills } from "../data/technicalSkills";
import { softSkills } from "../data/softSkills";
import { certifications } from "../data/certifications";

const FONT = "Calibri";
const PRIMARY_COLOR = "1a3c6e";

function sectionHeading(title: string): Paragraph {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 300, after: 100 },
    border: {
      bottom: {
        color: PRIMARY_COLOR,
        space: 4,
        style: BorderStyle.SINGLE,
        size: 8,
      },
    },
    children: [
      new TextRun({
        text: title.toUpperCase(),
        font: FONT,
        size: 24,
        bold: true,
        color: PRIMARY_COLOR,
      }),
    ],
  });
}

function entryTitle(title: string, subtitle: string): Paragraph {
  return new Paragraph({
    spacing: { before: 160, after: 40 },
    tabStops: [
      {
        type: TabStopType.RIGHT,
        position: TabStopPosition.MAX,
      },
    ],
    children: [
      new TextRun({
        text: title,
        font: FONT,
        size: 22,
        bold: true,
      }),
      new TextRun({
        text: `\t${subtitle}`,
        font: FONT,
        size: 22,
        italics: true,
        color: "555555",
      }),
    ],
  });
}

function descriptionParagraph(text: string): Paragraph {
  return new Paragraph({
    spacing: { after: 60 },
    children: [
      new TextRun({
        text,
        font: FONT,
        size: 20,
      }),
    ],
  });
}

function bulletItem(text: string): Paragraph {
  return new Paragraph({
    spacing: { after: 40 },
    bullet: { level: 0 },
    children: [
      new TextRun({
        text,
        font: FONT,
        size: 20,
      }),
    ],
  });
}

function linkParagraph(text: string, href: string): Paragraph {
  return new Paragraph({
    spacing: { after: 40 },
    bullet: { level: 0 },
    children: [
      new ExternalHyperlink({
        children: [
          new TextRun({
            text,
            font: FONT,
            size: 20,
            color: "2563eb",
            underline: {},
          }),
        ],
        link: href,
      }),
    ],
  });
}

export async function generateAndDownloadDocx() {
  const sections: Paragraph[] = [];

  // Header
  sections.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 40 },
      children: [
        new TextRun({
          text: personalInfo.name,
          font: FONT,
          size: 36,
          bold: true,
          color: PRIMARY_COLOR,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
      children: [
        new TextRun({
          text: personalInfo.title,
          font: FONT,
          size: 24,
          color: "555555",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
      children: personalInfo.contacts.flatMap((contact, i) => {
        const runs: TextRun[] = [];
        if (i > 0) {
          runs.push(
            new TextRun({
              text: "  |  ",
              font: FONT,
              size: 18,
              color: "999999",
            })
          );
        }
        runs.push(
          new TextRun({
            text: contact.value,
            font: FONT,
            size: 18,
          })
        );
        return runs;
      }),
    })
  );

  // Work Experience
  sections.push(sectionHeading("Work Experience"));
  for (const exp of workExperience) {
    sections.push(entryTitle(exp.title, exp.company));
    sections.push(descriptionParagraph(exp.description));
    for (const link of exp.links) {
      sections.push(linkParagraph(link.text, link.href));
    }
  }

  // Education
  sections.push(sectionHeading("Education"));
  for (const edu of education) {
    sections.push(entryTitle(edu.title, edu.institution));
    sections.push(descriptionParagraph(edu.description));
    for (const link of edu.links) {
      sections.push(linkParagraph(link.text, link.href));
    }
  }

  // Documents & Publications
  sections.push(sectionHeading("Documents & Publications"));
  for (const doc of documents) {
    sections.push(linkParagraph(doc.text, doc.href));
  }

  // Technical Skills
  sections.push(sectionHeading("Technical Skills"));
  for (const category of technicalSkills) {
    sections.push(
      new Paragraph({
        spacing: { before: 100, after: 40 },
        children: [
          new TextRun({
            text: `${category.title}: `,
            font: FONT,
            size: 20,
            bold: true,
          }),
          new TextRun({
            text: category.skills.join(", "),
            font: FONT,
            size: 20,
          }),
        ],
      })
    );
  }

  // Soft Skills
  sections.push(sectionHeading("Soft Skills"));
  for (const category of softSkills) {
    sections.push(
      new Paragraph({
        spacing: { before: 100, after: 20 },
        children: [
          new TextRun({
            text: category.title,
            font: FONT,
            size: 20,
            bold: true,
          }),
        ],
      })
    );
    for (const skill of category.skills) {
      sections.push(bulletItem(skill));
    }
  }

  // Certifications
  sections.push(sectionHeading("Certifications & Achievements"));
  for (const cert of certifications) {
    sections.push(linkParagraph(cert.text, cert.href));
  }

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 720,
              right: 720,
              bottom: 720,
              left: 720,
            },
          },
        },
        children: sections,
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, "Marrocco_Simone_CV.docx");
}
