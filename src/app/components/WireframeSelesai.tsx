export function WireframeSelesai({ onExit }: { onExit: () => void }) {
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header */}
      <div className="border-b-2 border-black pb-4 mb-8">
        <div className="text-2xl font-bold">UJIAN ONLINE</div>
      </div>

      {/* Main Content - Centered */}
      <div className="max-w-3xl mx-auto">
        {/* Confirmation Message */}
        <div className="border-4 border-black p-12 text-center mb-8">
          <div className="text-3xl font-bold mb-4">UJIAN SELESAI</div>
          <div className="text-xl mb-6">
            Jawaban Anda telah berhasil dikirim
          </div>
          <div className="border-2 border-gray-400 bg-gray-100 p-4 inline-block">
            <div className="text-6xl">✓</div>
          </div>
        </div>

        {/* Information Summary */}
        <div className="border-2 border-black p-8 mb-8">
          <div className="text-xl font-bold mb-6 pb-4 border-b-2 border-gray-400">
            RINGKASAN INFORMASI
          </div>

          <div className="space-y-4">
            {/* Nama */}
            <div className="flex">
              <div className="w-48 font-semibold">Nama:</div>
              <div className="flex-1 border-2 border-gray-400 px-4 py-2 bg-gray-50">
                [nama mahasiswa]
              </div>
            </div>

            {/* NIM */}
            <div className="flex">
              <div className="w-48 font-semibold">NIM:</div>
              <div className="flex-1 border-2 border-gray-400 px-4 py-2 bg-gray-50">
                [1234567890]
              </div>
            </div>

            {/* Kelas */}
            <div className="flex">
              <div className="w-48 font-semibold">Kelas:</div>
              <div className="flex-1 border-2 border-gray-400 px-4 py-2 bg-gray-50">
                [Kelas B]
              </div>
            </div>

            {/* Kode Sesi */}
            <div className="flex">
              <div className="w-48 font-semibold">Kode Sesi:</div>
              <div className="flex-1 border-2 border-gray-400 px-4 py-2 bg-gray-50">
                [UTS-2024-A]
              </div>
            </div>

            {/* Waktu Mulai */}
            <div className="flex">
              <div className="w-48 font-semibold">Waktu Mulai:</div>
              <div className="flex-1 border-2 border-gray-400 px-4 py-2 bg-gray-50">
                [17 Januari 2026, 09:00:00]
              </div>
            </div>

            {/* Waktu Selesai */}
            <div className="flex">
              <div className="w-48 font-semibold">Waktu Selesai:</div>
              <div className="flex-1 border-2 border-gray-400 px-4 py-2 bg-gray-50">
                [17 Januari 2026, 10:45:23]
              </div>
            </div>

            {/* Durasi */}
            <div className="flex">
              <div className="w-48 font-semibold">Durasi Pengerjaan:</div>
              <div className="flex-1 border-2 border-gray-400 px-4 py-2 bg-gray-50">
                [1 jam 45 menit 23 detik]
              </div>
            </div>

            {/* Jumlah Soal Terjawab */}
            <div className="flex">
              <div className="w-48 font-semibold">Soal Terjawab:</div>
              <div className="flex-1 border-2 border-gray-400 px-4 py-2 bg-gray-50">
                [55 dari 55 soal]
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information Box */}
        <div className="border-2 border-gray-400 bg-gray-100 p-6 mb-8">
          <div className="font-semibold mb-2">CATATAN PENTING:</div>
          <div className="text-sm space-y-1">
            <p>• Hasil ujian akan diumumkan oleh dosen</p>
            <p>• Simpan tangkapan layar halaman ini sebagai bukti</p>
            <p>• Jika ada pertanyaan, hubungi dosen pengampu atau admin LMS</p>
          </div>
        </div>

        {/* Exit Button */}
        <div className="text-center">
          <button
            onClick={onExit}
            className="border-2 border-black bg-black text-white px-24 py-4 font-semibold text-lg hover:bg-gray-800"
          >
            KELUAR
          </button>
        </div>
      </div>
    </div>
  );
}
