import { useState } from "react";
import { WireframeInputBiodata } from "@/app/components/WireframeInputBiodata";
import { WireframeHalamanUjian } from "@/app/components/WireframeHalamanUjian";
import { WireframeSelesai } from "@/app/components/WireframeSelesai";

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    "biodata" | "ujian" | "selesai"
  >("biodata");

  return (
    <div className="min-h-screen">
      {/* Navigation for Demo */}
      <div className="fixed top-4 right-4 z-50 bg-black text-white p-4 border-2 border-white">
        <div className="text-xs font-semibold mb-2">WIREFRAME DEMO</div>
        <div className="text-xs space-y-1">
          <button
            onClick={() => setCurrentPage("biodata")}
            className={`block w-full text-left px-2 py-1 ${
              currentPage === "biodata" ? "bg-white text-black" : ""
            }`}
          >
            1. Input Biodata
          </button>
          <button
            onClick={() => setCurrentPage("ujian")}
            className={`block w-full text-left px-2 py-1 ${
              currentPage === "ujian" ? "bg-white text-black" : ""
            }`}
          >
            2. Halaman Ujian
          </button>
          <button
            onClick={() => setCurrentPage("selesai")}
            className={`block w-full text-left px-2 py-1 ${
              currentPage === "selesai" ? "bg-white text-black" : ""
            }`}
          >
            3. Selesai
          </button>
        </div>
      </div>

      {/* Main Content */}
      {currentPage === "biodata" && (
        <WireframeInputBiodata onNext={() => setCurrentPage("ujian")} />
      )}

      {currentPage === "ujian" && (
        <WireframeHalamanUjian onFinish={() => setCurrentPage("selesai")} />
      )}

      {currentPage === "selesai" && (
        <WireframeSelesai onExit={() => setCurrentPage("biodata")} />
      )}
    </div>
  );
}
