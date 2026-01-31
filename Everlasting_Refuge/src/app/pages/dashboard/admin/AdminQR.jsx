import { useState } from "react";
import { motion } from "framer-motion";
import { QrCode, Clock, Printer } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";

import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

export default function AdminQR() {
  const [qrData, setQrData] = useState(null);

  // Generate QR (mock — backend later)
  const generateQR = () => {
    setQrData({
      token: `ATTENDANCE-${Date.now()}`,
      expiresAt: "10:30 AM",
    });
  };

  const clearQR = () => {
    setQrData(null);
  };

  const printQR = () => {
    window.print();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <QrCode className="w-6 h-6" />
        Attendance QR
      </h1>

      {!qrData ? (
        <Button onClick={generateQR}>Generate Attendance QR</Button>
      ) : (
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle className="text-center">
              Scan to Mark Attendance
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col items-center gap-4">
            <QRCodeCanvas value={qrData.token} size={200} />

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              Expires at {qrData.expiresAt}
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={printQR}>
                <Printer className="w-4 h-4 mr-2" />
                Print
              </Button>

              <Button variant="destructive" onClick={clearQR}>
                End Session
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
}
