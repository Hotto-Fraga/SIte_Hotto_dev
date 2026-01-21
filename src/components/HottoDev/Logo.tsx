export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg transform rotate-45">
          <span className="text-white font-bold text-xl transform -rotate-45">HD</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          Hotto Dev
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">Code that burns 🔥</span>
      </div>
    </div>
  )
}
