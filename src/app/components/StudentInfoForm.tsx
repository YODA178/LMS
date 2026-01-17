import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Upload } from "lucide-react";

interface StudentInfo {
  nama: string;
  nim: string;
  kelas: string;
  foto: File | null;
  kodeSesi: string;
}

interface StudentInfoFormProps {
  onSubmit: (data: StudentInfo) => void;
}

export function StudentInfoForm({ onSubmit }: StudentInfoFormProps) {
  const [formData, setFormData] = useState<StudentInfo>({
    nama: "",
    nim: "",
    kelas: "",
    foto: null,
    kodeSesi: "",
  });

  const [previewUrl, setPreviewUrl] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, foto: file });
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Sistem Ujian Online</CardTitle>
          <CardDescription>
            Silakan isi biodata Anda sebelum memulai ujian
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nama">Nama Lengkap</Label>
              <Input
                id="nama"
                type="text"
                placeholder="Masukkan nama lengkap"
                value={formData.nama}
                onChange={(e) =>
                  setFormData({ ...formData, nama: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="nim">NIM</Label>
              <Input
                id="nim"
                type="text"
                placeholder="Masukkan NIM"
                value={formData.nim}
                onChange={(e) =>
                  setFormData({ ...formData, nim: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="kelas">Kelas</Label>
              <Input
                id="kelas"
                type="text"
                placeholder="Masukkan kelas"
                value={formData.kelas}
                onChange={(e) =>
                  setFormData({ ...formData, kelas: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="kodeSesi">Kode Sesi</Label>
              <Input
                id="kodeSesi"
                type="text"
                placeholder="Masukkan kode sesi ujian"
                value={formData.kodeSesi}
                onChange={(e) =>
                  setFormData({ ...formData, kodeSesi: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="foto">Foto</Label>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Input
                      id="foto"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="cursor-pointer"
                      required
                    />
                  </div>
                </div>
                {previewUrl && (
                  <div className="w-20 h-20 border rounded-lg overflow-hidden">
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-500">
                Upload foto terbaru Anda (JPG, PNG)
              </p>
            </div>

            <Button type="submit" className="w-full">
              Mulai Ujian
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
