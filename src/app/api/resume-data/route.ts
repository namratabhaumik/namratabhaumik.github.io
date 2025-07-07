export const runtime = "nodejs";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import pdfParse from "pdf-parse";

const RESUME_FILES = [
  "public/resume/SWE_Resume.pdf",
  "public/resume/Descriptive_SWE_Resume.pdf",
];

// Helper to extract a section by header from text
function extractSection(text: string, header: string, nextHeader?: string) {
  const start = text.indexOf(header);
  if (start === -1) return null;
  let end = text.length;
  if (nextHeader) {
    const next = text.indexOf(nextHeader, start + header.length);
    if (next !== -1) end = next;
  }
  return text.substring(start + header.length, end).trim();
}

// Try to extract sections robustly
function extractSections(text: string) {
  // Normalize line endings
  text = text.replace(/\r\n/g, "\n");
  // Try to find headers
  const headers = [
    "Work Experience",
    "Professional Experience",
    "Experience",
    "Education",
    "Academic Background",
  ];
  // Find all header positions
  const foundHeaders = headers
    .map((h) => ({ h, i: text.indexOf(h) }))
    .filter((x) => x.i !== -1)
    .sort((a, b) => a.i - b.i);
  // Extract sections
  let work = null,
    education = null;
  for (let i = 0; i < foundHeaders.length; i++) {
    const { h, i: idx } = foundHeaders[i];
    const next = foundHeaders[i + 1]?.i;
    const section = text.substring(idx + h.length, next || text.length).trim();
    if (/work|professional|experience/i.test(h) && !work) work = section;
    if (/education|academic/i.test(h) && !education) education = section;
  }
  return { work, education };
}

export async function GET(req: NextRequest) {
  const results: any = {};
  for (const file of RESUME_FILES) {
    try {
      const absPath = path.resolve(process.cwd(), file);
      const data = fs.readFileSync(absPath);
      const pdf = await pdfParse(data);
      const sections = extractSections(pdf.text);
      results[path.basename(file)] = sections;
    } catch (e) {
      results[path.basename(file)] = { error: "Failed to parse" };
    }
  }
  return NextResponse.json(results);
} 