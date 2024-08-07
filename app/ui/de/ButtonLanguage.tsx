import Link from "next/link";

export default function ButtonLanguage() {
  return (
    <div className="flex justify-end bg-blue-500 text-white">
      <Link
        href="/en"
        className="w-14 border border-white-300 rounded text-center mt-8 mr-8"
      >
        EN
      </Link>
    </div>
  );
}
