import { useRouter } from "next/router";
import Link from "next/link";

export default function Results() {
  const router = useRouter();
  const { bike, price } = router.query;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
    <Link href="/">index</Link>

      <h1 className="text-2xl font-bold mb-6">Prediction Results</h1>
      <div className="bg-white shadow-md p-6 rounded-lg space-y-4 text-center">
        <p className="text-lg">
          🏍️ Predicted Bike: <strong>{bike}</strong>
        </p>
        <p className="text-lg">
          💲 Estimated Price: <strong>${price}</strong>
        </p>
      </div>
    </main>
  );
}
