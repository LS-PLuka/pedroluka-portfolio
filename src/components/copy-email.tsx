"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [message, setMessage] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setMessage("E-mail copiado.");
    } catch {
      setMessage("Não foi possível copiar. Selecione o endereço ao lado.");
    }
  }

  return (
    <div className="copy-email">
      <button type="button" onClick={copyEmail}>
        Copiar e-mail
      </button>
      <span aria-live="polite">{message}</span>
    </div>
  );
}
