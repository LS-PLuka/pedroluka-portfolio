import type { Metadata } from "next";

import { CaseStudyPage } from "@/components/case-study-page";
import { antifraudSystem, idealAdmission } from "@/content/projects";

export const metadata: Metadata = {
  title: "Ideal Admissão",
  description:
    "Estudo de caso sobre a digitalização do processo admissional da Ideal Grupo, do preenchimento à assinatura do kit.",
};

export default function IdealAdmissionPage() {
  return <CaseStudyPage project={idealAdmission} otherProject={antifraudSystem} />;
}
