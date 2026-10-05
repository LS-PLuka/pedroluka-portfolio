import type { Metadata } from "next";

import { CaseStudyPage } from "@/components/case-study-page";
import { antifraudSystem, idealAdmission } from "@/content/projects";

export const metadata: Metadata = {
  title: "Antifraud System",
  description:
    "Estudo de caso sobre contratos de eventos, análise determinística e idempotência em três microsserviços Java.",
};

export default function AntifraudSystemPage() {
  return <CaseStudyPage project={antifraudSystem} otherProject={idealAdmission} />;
}
