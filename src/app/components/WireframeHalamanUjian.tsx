export function WireframeHalamanUjian({ onFinish }: { onFinish: () => void }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Header Bar */}
      <div className="border-b-2 border-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">UJIAN ONLINE</div>
          <div className="flex gap-8 items-center">
            <div className="border-2 border-black px-4 py-2">
              [Nama: nama mahasiswa]
              <br />
              [NIM: 1234567890] [Kelas: B]
            </div>
            <div className="border-2 border-black px-4 py-2 bg-gray-100">
              [TIMER: 01:59:45]
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Two Columns */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 gap-4 h-[calc(100vh-120px)]">
          {/* Left Column - PDF Viewer (Wider) */}
          <div className="border-2 border-black p-4">
            <div className="font-bold mb-4 pb-2 border-b-2 border-gray-400">
              SOAL UJIAN (PDF)
            </div>

            {/* PDF Preview Area */}
            <div className="border-2 border-gray-400 bg-gray-50 h-[calc(100%-60px)] overflow-y-auto p-4">
              {/* Mock PDF Content */}
              <div className="bg-white border-2 border-gray-300 p-6 mb-4">
                <div className="text-center mb-6 border-b-2 border-black pb-4">
                  <div className="font-bold text-lg">UJIAN TENGAH SEMESTER</div>
                  <div className="text-sm mt-2">[Mata Kuliah]</div>
                  <div className="text-sm">[Semester / Tahun]</div>
                </div>

                <div className="space-y-4">
                  <div className="border-2 border-gray-300 p-3">
                    <div className="font-semibold mb-2">
                      1. [Soal Pilihan Ganda]
                    </div>
                    <div className="text-sm space-y-1 ml-4">
                      <div>A. [Opsi A]</div>
                      <div>B. [Opsi B]</div>
                      <div>C. [Opsi C]</div>
                      <div>D. [Opsi D]</div>
                      <div>E. [Opsi E]</div>
                      <div>F. [Opsi F]</div>
                    </div>
                  </div>

                  <div className="border-2 border-gray-300 p-3">
                    <div className="font-semibold">2. [Soal Pilihan Ganda]</div>
                  </div>

                  <div className="text-gray-400 text-center py-8">
                    [... soal lainnya ...]
                  </div>

                  <div className="border-2 border-gray-300 p-3">
                    <div className="font-semibold">
                      41. [Soal Isian Singkat]
                    </div>
                  </div>

                  <div className="border-2 border-gray-300 p-3">
                    <div className="font-semibold">51. [Soal Essay]</div>
                  </div>
                </div>
              </div>

              <div className="text-xs text-center text-gray-500 mt-4">
                [Scroll untuk melihat soal lainnya]
              </div>
            </div>
          </div>

          {/* Right Column - Answer Sheet */}
          <div className="border-2 border-black p-4 overflow-hidden flex flex-col">
            <div className="font-bold mb-4 pb-2 border-b-2 border-gray-400">
              LEMBAR JAWABAN
            </div>

            <div className="overflow-y-auto flex-1 pr-2">
              {/* Section: Pilihan Ganda */}
              <div className="mb-6">
                <div className="bg-gray-200 border-2 border-black p-2 font-semibold mb-3">
                  BAGIAN A: PILIHAN GANDA (1-40)
                </div>

                <div className="space-y-3">
                  {/* Sample Question 1 */}
                  <div className="border-2 border-gray-400 p-3 bg-gray-50">
                    <div className="font-semibold mb-2">Soal 1</div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="border border-gray-400 p-2 text-center bg-white">
                        [ ] A
                      </div>
                      <div className="border border-gray-400 p-2 text-center bg-white">
                        [ ] B
                      </div>
                      <div className="border border-gray-400 p-2 text-center bg-white">
                        [ ] C
                      </div>
                      <div className="border border-gray-400 p-2 text-center bg-white">
                        [ ] D
                      </div>
                      <div className="border border-gray-400 p-2 text-center bg-white">
                        [ ] E
                      </div>
                      <div className="border border-gray-400 p-2 text-center bg-white">
                        [ ] F
                      </div>
                    </div>
                  </div>

                  {/* Sample Question 2 */}
                  <div className="border-2 border-gray-400 p-3 bg-gray-50">
                    <div className="font-semibold mb-2">Soal 2</div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="border border-gray-400 p-2 text-center bg-white">
                        [ ] A
                      </div>
                      <div className="border border-gray-400 p-2 text-center bg-white">
                        [ ] B
                      </div>
                      <div className="border border-gray-400 p-2 text-center bg-white">
                        [ ] C
                      </div>
                      <div className="border border-gray-400 p-2 text-center bg-white">
                        [ ] D
                      </div>
                      <div className="border border-gray-400 p-2 text-center bg-white">
                        [ ] E
                      </div>
                      <div className="border border-gray-400 p-2 text-center bg-white">
                        [ ] F
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-gray-400 py-2 text-sm">
                    [... soal 3-40 ...]
                  </div>
                </div>
              </div>

              {/* Section: Isian Singkat */}
              <div className="mb-6">
                <div className="bg-gray-200 border-2 border-black p-2 font-semibold mb-3">
                  BAGIAN B: ISIAN SINGKAT (41-50)
                </div>

                <div className="space-y-3">
                  <div className="border-2 border-gray-400 p-3 bg-gray-50">
                    <div className="font-semibold mb-2">Soal 41</div>
                    <div className="border-2 border-gray-400 h-10 bg-white"></div>
                  </div>

                  <div className="border-2 border-gray-400 p-3 bg-gray-50">
                    <div className="font-semibold mb-2">Soal 42</div>
                    <div className="border-2 border-gray-400 h-10 bg-white"></div>
                  </div>

                  <div className="text-center text-gray-400 py-2 text-sm">
                    [... soal 43-50 ...]
                  </div>
                </div>
              </div>

              {/* Section: Essay */}
              <div className="mb-6">
                <div className="bg-gray-200 border-2 border-black p-2 font-semibold mb-3">
                  BAGIAN C: ESSAY / DESKRIPSI (51-55)
                </div>

                <div className="space-y-3">
                  <div className="border-2 border-gray-400 p-3 bg-gray-50">
                    <div className="font-semibold mb-2">Soal 51</div>
                    <div className="border-2 border-gray-400 h-32 bg-white"></div>
                  </div>

                  <div className="border-2 border-gray-400 p-3 bg-gray-50">
                    <div className="font-semibold mb-2">Soal 52</div>
                    <div className="border-2 border-gray-400 h-32 bg-white"></div>
                  </div>

                  <div className="text-center text-gray-400 py-2 text-sm">
                    [... soal 53-55 ...]
                  </div>
                </div>
              </div>

              {/* Persetujuan */}
              <div className="border-2 border-black p-4 mb-4 bg-gray-100">
                <div className="flex items-start gap-2">
                  <div className="border-2 border-black w-5 h-5 flex-shrink-0 mt-1">
                    [ ]
                  </div>
                  <div className="text-sm">
                    Saya menyatakan bahwa jawaban yang saya berikan adalah hasil
                    pekerjaan saya sendiri tanpa bantuan orang lain.
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full border-2 border-black bg-white h-12 font-semibold hover:bg-gray-100">
                  SIMPAN JAWABAN
                </button>
                <button
                  onClick={onFinish}
                  className="w-full border-2 border-black bg-black text-white h-12 font-semibold hover:bg-gray-800"
                >
                  AKHIRI & KIRIM
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
