import { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { Input } from "@/app/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import { Clock, Save, User } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

// Setup PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface ExamPageProps {
  studentInfo: {
    nama: string;
    nim: string;
    kelas: string;
    kodeSesi: string;
  };
}

// Mock data untuk soal
const mockQuestions = [
  {
    id: 1,
    type: "multiple-choice",
    question: "Apa kepanjangan dari HTML?",
    options: [
      "A. Hyper Text Markup Language",
      "B. High Tech Modern Language",
      "C. Home Tool Markup Language",
      "D. Hyperlinks and Text Markup Language",
      "E. None of the above",
      "F. All of the above",
    ],
  },
  {
    id: 2,
    type: "short-answer",
    question: "Sebutkan 3 tag HTML yang paling sering digunakan",
  },
  {
    id: 3,
    type: "essay",
    question: "Jelaskan perbedaan antara CSS Flexbox dan CSS Grid",
  },
];

export function ExamPage({ studentInfo }: ExamPageProps) {
  const [timeRemaining, setTimeRemaining] = useState(7200); // 2 jam dalam detik
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSave();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSave = () => {
    console.log("Jawaban disimpan:", answers);
    alert("Jawaban berhasil disimpan!");
  };

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <User className="h-5 w-5 text-gray-600" />
              <div>
                <p className="font-medium">{studentInfo.nama}</p>
                <p className="text-sm text-gray-500">
                  {studentInfo.nim} - {studentInfo.kelas}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span
                  className={`font-mono ${
                    timeRemaining < 600 ? "text-red-600" : "text-gray-900"
                  }`}
                >
                  {formatTime(timeRemaining)}
                </span>
              </div>
              <Button onClick={handleSave} className="gap-2">
                <Save className="h-4 w-4" />
                Simpan Jawaban
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Two Columns */}
      <div className="container mx-auto p-4">
        <div className="grid lg:grid-cols-2 gap-4 h-[calc(100vh-120px)]">
          {/* Left Column - PDF Viewer */}
          <Card className="p-4 overflow-hidden flex flex-col">
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Soal Ujian</h3>
              <p className="text-sm text-gray-500">
                Halaman {pageNumber} dari {numPages || "--"}
              </p>
            </div>
            <ScrollArea className="flex-1">
              <div className="flex justify-center bg-gray-100 p-4 rounded-lg">
                {/* PDF Mock - Gunakan Document component dari react-pdf untuk PDF asli */}
                <div className="bg-white shadow-lg p-8 w-full max-w-2xl min-h-[600px]">
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-bold">UJIAN TENGAH SEMESTER</h2>
                    <p className="text-sm text-gray-600 mt-2">
                      Mata Kuliah: Pemrograman Web
                    </p>
                    <p className="text-sm text-gray-600">Sesi: {studentInfo.kodeSesi}</p>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <p className="font-semibold mb-2">1. Pilihan Ganda</p>
                      <p className="text-sm">Apa kepanjangan dari HTML?</p>
                      <div className="mt-2 text-sm space-y-1">
                        <p>A. Hyper Text Markup Language</p>
                        <p>B. High Tech Modern Language</p>
                        <p>C. Home Tool Markup Language</p>
                        <p>D. Hyperlinks and Text Markup Language</p>
                        <p>E. None of the above</p>
                        <p>F. All of the above</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">2. Isian Singkat</p>
                      <p className="text-sm">
                        Sebutkan 3 tag HTML yang paling sering digunakan
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">3. Essay</p>
                      <p className="text-sm">
                        Jelaskan perbedaan antara CSS Flexbox dan CSS Grid
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </Card>

          {/* Right Column - Answer Sheet */}
          <Card className="p-4 overflow-hidden flex flex-col">
            <div className="mb-4">
              <h3 className="font-semibold">Lembar Jawaban</h3>
              <p className="text-sm text-gray-500">
                Isi jawaban Anda dengan lengkap
              </p>
            </div>
            <ScrollArea className="flex-1">
              <div className="space-y-6 pr-4">
                {/* Soal 1 - Pilihan Ganda */}
                <div className="border rounded-lg p-4 bg-white">
                  <Label className="font-semibold mb-3 block">
                    Soal 1 - Pilihan Ganda
                  </Label>
                  <RadioGroup
                    value={answers[1] || ""}
                    onValueChange={(value) => handleAnswerChange(1, value)}
                  >
                    <div className="space-y-2">
                      {["A", "B", "C", "D", "E", "F"].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={`q1-${option}`} />
                          <Label
                            htmlFor={`q1-${option}`}
                            className="cursor-pointer"
                          >
                            {option}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Soal 2 - Isian Singkat */}
                <div className="border rounded-lg p-4 bg-white">
                  <Label htmlFor="q2" className="font-semibold mb-3 block">
                    Soal 2 - Isian Singkat
                  </Label>
                  <Input
                    id="q2"
                    placeholder="Ketik jawaban Anda di sini..."
                    value={answers[2] || ""}
                    onChange={(e) => handleAnswerChange(2, e.target.value)}
                  />
                </div>

                {/* Soal 3 - Essay */}
                <div className="border rounded-lg p-4 bg-white">
                  <Label htmlFor="q3" className="font-semibold mb-3 block">
                    Soal 3 - Essay
                  </Label>
                  <Textarea
                    id="q3"
                    placeholder="Ketik jawaban essay Anda di sini..."
                    value={answers[3] || ""}
                    onChange={(e) => handleAnswerChange(3, e.target.value)}
                    rows={8}
                    className="resize-none"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    {(answers[3] || "").length} karakter
                  </p>
                </div>
              </div>
            </ScrollArea>
          </Card>
        </div>
      </div>
    </div>
  );
}
