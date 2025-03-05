import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Parable, PracticalPoint, RelatedParable } from '@/types/Parable'

const PARABLES_PATH = path.join(process.cwd(), 'content/parables')

function extractSectionContent(content: string, sectionTitle: string): string {
  const regex = new RegExp(`## ${sectionTitle}\\s+([^#]+)`, 'i')
  const match = content.match(regex)
  return match ? match[1].trim() : ''
}

function extractPracticalApplications(content: string): PracticalPoint[] {
  const section = extractSectionContent(content, 'Practical Applications')
  const points: PracticalPoint[] = []
  
  const regex = /\*\*\d+\.\s+([^*]+)\*\*\n((?:-[^*]+)+)/g
  let match

  while ((match = regex.exec(section)) !== null) {
    const title = match[1].trim()
    const pointsText = match[2]
    const subPoints = pointsText
      .split('-')
      .map(point => point.trim())
      .filter(point => point.length > 0)

    points.push({
      title,
      points: subPoints
    })
  }

  return points
}

function extractKeyTakeaways(content: string): string[] {
  const section = extractSectionContent(content, 'Key Takeaways')
  return section
    .split('-')
    .map(point => point.trim())
    .filter(point => point.length > 0)
}

function extractRelatedParables(content: string): RelatedParable[] {
  const section = extractSectionContent(content, 'Related Parables')
  if (!section) return []
  
  return section
    .split('\n')
    .filter(line => line.trim().startsWith('-'))
    .map(line => {
      const parts = line
        .replace('-', '')
        .trim()
        .match(/^(.*?)\((.*?)\)\s*-\s*Theme of (.*)$/)

      if (!parts) return null

      const [_, title, reference, theme] = parts
      // ID is always lowercase, hyphenated, no "the"
      const id = title
        .trim()
        .toLowerCase()
        .replace(/^(the\s+)?(parable\s+of\s+)?/, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
      
      // Title should always start with "The" unless it already does
      const displayTitle = title.trim().startsWith('The ') ? 
        title.trim() : 
        `The ${title.trim()}`

      return {
        id,
        title: displayTitle,
        reference: reference.trim(),
        theme: theme.trim()
      }
    })
    .filter(Boolean) as RelatedParable[]
}

export function getAllParables(): Parable[] {
  const testaments = ['old-testament', 'new-testament']
  const parables: Parable[] = []

  testaments.forEach(testament => {
    const testamentPath = path.join(PARABLES_PATH, testament)
    if (!fs.existsSync(testamentPath)) return

    const files = fs.readdirSync(testamentPath)
    files.forEach(filename => {
      if (!filename.endsWith('.mdx')) return

      const filePath = path.join(testamentPath, filename)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)

      // Ensure id exists by using filename if not provided in frontmatter
      const id = data.id || filename.replace('.mdx', '')
      
      // Ensure categories is always an array
      const categories = Array.isArray(data.categories) ? data.categories : []

      // Ensure bibleReference is properly structured
      const bibleReference = {
        book: data.bibleReference?.book || '',
        chapter: data.bibleReference?.chapter || '',
        verse: data.bibleReference?.verse || ''
      }

      parables.push({
        ...data,
        id, // Use our guaranteed id
        categories,
        bibleReference,
        biblicalText: extractSectionContent(content, 'Biblical Text'),
        context: extractSectionContent(content, 'Context'),
        theologicalInterpretation: extractSectionContent(content, 'Theological Interpretation'),
        practicalApplications: extractPracticalApplications(content),
        keyTakeaways: extractKeyTakeaways(content),
        relatedParables: extractRelatedParables(content),
        testament: testament.replace('-testament', '') as 'old' | 'new'
      } as Parable)
    })
  })

  return parables
}

export function getParableById(id: string): Parable | null {
  const parables = getAllParables()
  return parables.find(parable => parable.id === id) || null
}

export function getAllCategories(): string[] {
  const parables = getAllParables()
  return Array.from(
    new Set(
      parables
        .flatMap(p => Array.isArray(p.categories) ? p.categories : [])
        .filter(Boolean)
    )
  ).sort()
}

export function getParablesByCategory(category: string): Parable[] {
  const parables = getAllParables()
  return parables.filter(p => Array.isArray(p.categories) && p.categories.includes(category))
} 