interface DownloadProgressProps {
  label: string;
  progress: number;
  onClose: () => void;
}

export const DownloadProgress = ({
  label,
  progress,
  onClose,
}: DownloadProgressProps) => {
  return (
    <div className="fixed bottom-6 inset-x-0 flex justify-center px-4 z-50">
      <div className="w-full max-w-xl rounded-2xl border border-cyan-500 bg-white/90 dark:bg-gray-900/90 shadow-lg backdrop-blur">
        <div className="flex flex-col gap-3 p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Đang chuẩn bị: {label}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Vui lòng giữ tab này mở cho tới khi trình duyệt bắt đầu tải
                xuống.
              </p>
            </div>
            <button
              className="text-xs font-medium text-cyan-700 hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-100"
              onClick={onClose}
            >
              Đã tải xong
            </button>
          </div>
          <div className="h-2 rounded-full bg-cyan-100 dark:bg-gray-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 transition-all duration-150 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

