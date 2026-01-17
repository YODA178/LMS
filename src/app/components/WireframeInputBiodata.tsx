export function WireframeInputBiodata({ onNext }: { onNext: () => void }) {
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header */}
      <div className="border-b-2 border-black pb-4 mb-8">
        <div className="text-2xl font-bold">UJIAN ONLINE</div>
      </div>

      {/* Main Content - Centered Form */}
      <div className="max-w-2xl mx-auto">
        {/* Instruction Text */}
        <div className="border-2 border-gray-400 p-4 mb-6 bg-gray-100">
          <p className="text-sm">
            [Teks Instruksi]
            <br />
            Silakan isi biodata dengan lengkap sebelum memulai ujian.
            <br />
            Pastikan semua data yang diisi sudah benar.
          </p>
        </div>

        {/* Form */}
        <div className="border-2 border-black p-8">
          <div className="text-xl font-bold mb-6">FORM BIODATA MAHASISWA</div>

          {/* Form Fields - Vertical Stack */}
          <div className="space-y-6">
            {/* Nama Lengkap */}
            <div>
              <div className="mb-2 font-semibold">Nama Lengkap *</div>
              <div className="border-2 border-gray-400 h-10 bg-gray-50"></div>
            </div>

            {/* NIM */}
            <div>
              <div className="mb-2 font-semibold">NIM *</div>
              <div className="border-2 border-gray-400 h-10 bg-gray-50"></div>
            </div>

            {/* Kelas */}
            <div>
              <div className="mb-2 font-semibold">Kelas *</div>
              <div className="border-2 border-gray-400 h-10 bg-gray-50"></div>
            </div>

            {/* Upload Foto */}
            <div>
              <div className="mb-2 font-semibold">Upload Foto (opsional)</div>
              <div className="border-2 border-gray-400 p-4 bg-gray-50">
                <div className="border-2 border-dashed border-gray-400 h-32 flex items-center justify-center">
                  <span className="text-gray-500">[Area Upload File]</span>
                </div>
              </div>
            </div>

            {/* Kode Sesi */}
            <div>
              <div className="mb-2 font-semibold">Kode Sesi *</div>
              <div className="border-2 border-gray-400 h-10 bg-gray-50"></div>
              <div className="text-xs text-gray-600 mt-2">
                * Kode sesi diperoleh dari dosen
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={onNext}
              className="flex-1 border-2 border-black bg-black text-white h-12 font-semibold hover:bg-gray-800"
            >
              LANJUT
            </button>
            <button className="flex-1 border-2 border-black bg-white text-black h-12 font-semibold hover:bg-gray-100">
              BATAL
            </button>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="max-w-2xl mx-auto mt-4 text-xs text-gray-500">
        * Wajib diisi
      </div>
    </div>
  );
}
