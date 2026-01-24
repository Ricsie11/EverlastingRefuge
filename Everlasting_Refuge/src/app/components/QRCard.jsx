const QRCard = ({ imageUrl, expiresAt }) => (
  <div className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow">
    <img src={imageUrl} alt="QR Code" className="mx-auto w-40" />
    <p className="mt-2 text-sm text-center">
      Expires: {expiresAt}
    </p>
  </div>
);

export default QRCard;