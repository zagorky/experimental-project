export const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="flex items-center gap-3">
          <div className="animate-spin rounded-full h-7 w-7 border-3 border-pink-600  border-r-emerald-600"></div>
          <span>Loading...</span>
        </div>
      </div>
    </div>
  );
};
