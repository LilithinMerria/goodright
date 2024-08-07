import { legalTechDataDeutsch } from "@/app/lib/legal-tech";

export default function LegalTech() {
  if (!legalTechDataDeutsch) console.log("No DATA");

  return (
    <div className="grid md:grid-cols-2 gap-14 mt-40">
      {legalTechDataDeutsch.map((it) => (
        <div key={it.id} className="card">
          <h2 className="uppercase font-bold mb-4">{it.title}</h2>
          <p>{it.content}</p>
        </div>
      ))}
    </div>
  );
}
