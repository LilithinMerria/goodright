import { imprintDeutsch } from "@/app/lib/imprint";

export default function Imprint() {
  const imprint = imprintDeutsch[0];

  return (
    <div className="flex flex-col items-center align-center mt-30 text-center">
      <div>
        <h1 className="uppercase text-3xl font-bold mb-8">{imprint.title}</h1>
      </div>
      <p className="mb-4">{imprint.company}</p>

      <p className="mb-4">
        {imprint.address} <br />
        {imprint.phone} {imprint.fax} {imprint.email}
      </p>

      <p className="mb-4">{imprint.representative}</p>

      <p className="mb-4 w-3/4">{imprint.legalInfo}</p>

      <p>{imprint.generator}</p>
    </div>
  );
}
