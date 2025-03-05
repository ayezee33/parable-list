import { useState } from 'react'

interface ParableFiltersProps {
  testaments: string[]
  categories: string[]
  onFilterChange: (filters: { testament?: string; category?: string }) => void
  className?: string
}

export default function ParableFilters({ testaments, categories, onFilterChange, className = '' }: ParableFiltersProps) {
  const [testament, setTestament] = useState<string>('')
  const [category, setCategory] = useState<string>('')

  const handleTestamentChange = (value: string) => {
    setTestament(value)
    onFilterChange({ testament: value, category })
  }

  const handleCategoryChange = (value: string) => {
    setCategory(value)
    onFilterChange({ testament, category: value })
  }

  return (
    <div className={`flex flex-col md:flex-row gap-4 mb-8 ${className}`}>
      <select
        value={testament}
        onChange={(e) => handleTestamentChange(e.target.value)}
        className="p-2 border rounded-md dark:bg-gray-800"
      >
        <option value="">All Testaments</option>
        {testaments.map((t) => (
          <option key={t} value={t}>{t === 'old' ? 'Old Testament' : 'New Testament'}</option>
        ))}
      </select>

      <select
        value={category}
        onChange={(e) => handleCategoryChange(e.target.value)}
        className="p-2 border rounded-md dark:bg-gray-800"
      >
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  )
} 