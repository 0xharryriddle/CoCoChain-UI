import QRCode from "react-native-qrcode-svg";

export const generateQRCode = (qrData: string) => {
  return (
    <QRCode
      value={qrData}
      size={200}
    />
  );
};
