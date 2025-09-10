import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "./navbar";

export default function Home() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [year, setYear] = useState("");
  const [mileage, setMileage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const bikeRes = await fetch("/api/predict-bike");
    const bikeData = await bikeRes.json();

    const priceRes = await fetch("/api/predict-price");
    const priceData = await priceRes.json();

    router.push({
      pathname: "/results",
      query: {
        bike: bikeData.prediction,
        price: priceData.prediction,
      },
    });
  };

  return (
    <Layout className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <Link href="/results">results</Link>
        <h1 className="text-2xl font-bold mb-4">Motorcycle Predictor</h1>
        <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white p-6 rounded-lg shadow-md"
      >
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <input
          type="number"
          placeholder="Mileage"
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Predict
        </button>
      </form>
    </Layout>
  );
}
